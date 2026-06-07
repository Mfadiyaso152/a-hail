/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { EmergencyCode } from '../types';

export interface UseEmergencyAnnouncerReturn {
  playAnnouncement: (code: EmergencyCode) => void;
  stopAnnouncement: () => void;
  isPlaying: boolean;
  activeCodeId: string | null;
  languageMode: 'ar' | 'en' | 'bilingual';
  setLanguageMode: (mode: 'ar' | 'en' | 'bilingual') => void;
  voicesLoaded: boolean;
  testChime: () => void;
}

export function useEmergencyAnnouncer(): UseEmergencyAnnouncerReturn {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeCodeId, setActiveCodeId] = useState<string | null>(null);
  const [languageMode, setLanguageMode] = useState<'ar' | 'en' | 'bilingual'>('bilingual');
  const [voicesLoaded, setVoicesLoaded] = useState<boolean>(false);
  
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize and load available speech voices
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      voicesRef.current = allVoices;
      if (allVoices.length > 0) {
        setVoicesLoaded(true);
      }
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Synthesize a realistic hospital paging chime
  const playHospitalChime = (): Promise<void> => {
    return new Promise((resolve) => {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) {
          resolve();
          return;
        }

        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const now = ctx.currentTime;
        
        // Setup dual tone oscillators for the standard intercom chime
        // First tone: 880Hz (A5), Second tone: 1100Hz (C#6)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc1.type = 'sine';
        osc2.type = 'sine';

        // Schedule frequencies for a beautiful "ding-dong" chime
        osc1.frequency.setValueAtTime(880, now);
        osc1.frequency.setValueAtTime(0, now + 0.25); // stop osc 1

        osc2.frequency.setValueAtTime(0, now);
        osc2.frequency.setValueAtTime(1100, now + 0.23); // start osc 2

        // Volume envelope
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.18, now + 0.05); // volume ramp up
        gainNode.gain.setValueAtTime(0.18, now + 0.22);
        gainNode.gain.linearRampToValueAtTime(0.18, now + 0.28);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.7); // volume tail off

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        
        osc1.stop(now + 0.3);
        osc2.stop(now + 0.7);

        setTimeout(() => {
          ctx.close();
          resolve();
        }, 750);
      } catch (err) {
        console.warn('Web Audio fail, skipping chime:', err);
        resolve();
      }
    });
  };

  const testChime = () => {
    playHospitalChime();
  };

  const stopAnnouncement = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setActiveCodeId(null);
    activeUtteranceRef.current = null;
  };

  const playAnnouncement = async (code: EmergencyCode) => {
    // Stop any existing speech before playing new one
    stopAnnouncement();

    setActiveCodeId(code.id);
    setIsPlaying(true);

    // 1. Play the premium audio chime first
    await playHospitalChime();

    // Check if the synthesis was cancelled while chime was playing
    if (activeCodeId && activeCodeId !== code.id) return;

    if (typeof window === 'undefined' || !window.speechSynthesis) {
      // Audio fallback completed
      setIsPlaying(false);
      setActiveCodeId(null);
      return;
    }

    // 2. Build the verbal sequence - English ONLY containing only the code name
    const speechSequence: { text: string; lang: string }[] = [];

    const nameSpeakerEn = `${code.nameEn}`;
    speechSequence.push({ text: nameSpeakerEn, lang: 'en-US' });

    let sequenceIndex = 0;

    const speakItem = () => {
      if (sequenceIndex >= speechSequence.length) {
        setIsPlaying(false);
        setActiveCodeId(null);
        activeUtteranceRef.current = null;
        return;
      }

      const item = speechSequence[sequenceIndex];
      const utterance = new SpeechSynthesisUtterance(item.text);
      utterance.lang = item.lang;
      
      // Fine-tune intercom effect
      utterance.rate = item.lang.startsWith('ar') ? 0.82 : 0.85; // professional, slower dictation
      utterance.pitch = item.lang.startsWith('ar') ? 1.05 : 1.0; 

      // Attempt to pick a premium localized voice
      const matchedVoice = voicesRef.current.find(v => 
        v.lang.toLowerCase().includes(item.lang.toLowerCase()) && 
        (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Premium'))
      ) || voicesRef.current.find(v => v.lang.toLowerCase().includes(item.lang.toLowerCase()));

      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }

      utterance.onend = () => {
        sequenceIndex++;
        speakItem();
      };

      utterance.onerror = (err) => {
        console.error('Speech error:', err);
        sequenceIndex++;
        speakItem();
      };

      activeUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    };

    // Initiate chain of play
    speakItem();
  };

  return {
    playAnnouncement,
    stopAnnouncement,
    isPlaying,
    activeCodeId,
    languageMode,
    setLanguageMode,
    voicesLoaded,
    testChime
  };
}
