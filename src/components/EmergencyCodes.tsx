/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Volume2, 
  VolumeX, 
  Flame, 
  HeartPulse, 
  Baby, 
  AlertTriangle, 
  Radio, 
  Bomb, 
  UserX, 
  Sword, 
  Hammer, 
  BadgeCheck, 
  CloudLightning,
  X,
  PhoneCall,
  Activity,
  ShieldAlert,
  FlameKindling,
  Sparkles,
  Info
} from 'lucide-react';
import { emergencyCodes } from '../data';
import { EmergencyCode } from '../types';

interface EmergencyCodesProps {
  isRtl: boolean;
  activeCodeId: string | null;
  isPlaying: boolean;
  playAnnouncement: (code: EmergencyCode) => void;
  stopAnnouncement: () => void;
  languageMode: 'ar' | 'en' | 'bilingual';
  setLanguageMode: (mode: 'ar' | 'en' | 'bilingual') => void;
  voicesLoaded: boolean;
}

const getArabicColorName = (color: string) => {
  switch (color.toLowerCase()) {
    case 'blue': return 'أزرق';
    case 'red': return 'أحمر';
    case 'yellow': return 'أصفر';
    case 'pink': return 'وردي';
    case 'orange': return 'برتقالي';
    case 'gray': return 'رمادي';
    case 'white': return 'أبيض';
    case 'black': return 'أسود';
    case 'brown': return 'بني';
    case 'silver': return 'فضي';
    case 'all clear': return 'زوال الخطر';
    default: return color;
  }
};

export default function EmergencyCodes({
  isRtl,
  activeCodeId,
  isPlaying,
  playAnnouncement,
  stopAnnouncement,
  languageMode,
  setLanguageMode,
  voicesLoaded
}: EmergencyCodesProps) {
  const [selectedCode, setSelectedCode] = useState<EmergencyCode | null>(null);
  const [showAllCodes, setShowAllCodes] = useState(false);

  const getCodeIcon = (iconName: string, colorClass: string) => {
    const sizeClasses = "w-6 h-6 " + colorClass;
    switch (iconName) {
      case 'Flame':
        return <Flame className={sizeClasses} />;
      case 'HeartPulse':
        return <HeartPulse className={sizeClasses} />;
      case 'Baby':
        return <Baby className={sizeClasses} />;
      case 'AlertTriangle':
        return <AlertTriangle className={sizeClasses} />;
      case 'Radio':
        return <Radio className={sizeClasses} />;
      case 'Bomb':
        return <Bomb className={sizeClasses} />;
      case 'UserX':
        return <UserX className={sizeClasses} />;
      case 'Sword':
        return <Sword className={sizeClasses} />;
      case 'Hammer':
        return <Hammer className={sizeClasses} />;
      case 'BadgeCheck':
        return <BadgeCheck className={sizeClasses} />;
      case 'CloudLightning':
        return <CloudLightning className={sizeClasses} />;
      default:
        return <ShieldAlert className={sizeClasses} />;
    }
  };

  const handleClickCode = (code: EmergencyCode) => {
    // Open modal first
    setSelectedCode(code);
    
    // Play voice immediately saying the color of the code
    playAnnouncement(code);
  };

  const handleCloseModal = () => {
    setSelectedCode(null);
    stopAnnouncement();
  };

  return (
    <div className="space-y-8">
      {/* EXACT CLONE BOARD SHEET */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
        
        {/* Header container matching Slide 5 with Blue Wave design */}
        <div className="relative bg-linear-to-b from-sky-50 to-white pt-10 pb-6 px-6 border-b border-slate-100 overflow-hidden">
          {/* Wave decor absolute background */}
          <div className="absolute top-0 right-0 left-0 h-40 opacity-20 pointer-events-none select-none">
            <svg viewBox="0 0 1440 320" className="w-full h-full preserve-3d">
              <path fill="#0284c7" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,170.7C672,149,768,139,864,149.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            
            <div className="w-full max-w-xl bg-sky-600 text-white py-3 px-6 rounded-full shadow-lg border border-sky-500 flex flex-col items-center justify-center">
              <h2 className="text-xl md:text-2xl font-black tracking-wide font-sans leading-none text-white">
                {isRtl ? 'رموز الطوارئ' : 'Emergency Codes'}
              </h2>
              {!isRtl && (
                <span className="text-xs font-bold tracking-widest text-sky-100 uppercase font-sans mt-1 text-center">
                  DIAL CODES & EMERGENCY RESPONSE SYSTEM
                </span>
              )}
            </div>

            {/* Red action guideline text block */}
            <div className="font-sans font-black text-xs sm:text-sm text-red-600 tracking-wide text-center animate-pulse">
              {isRtl ? 'اضغط على الرمز للانتقال إلى صفحة الإجراءات التفصيلية' : 'Click on any code to view detailed action procedures'}
            </div>

          </div>
        </div>

        {/* 11 Emergency rows Table Layout - Organised perfectly for mobile and desktop */}
        <div className="p-3 md:p-6 bg-slate-50/50">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100 shadow-sm flex flex-col">
            {(showAllCodes ? emergencyCodes : emergencyCodes.slice(0, 2)).map((code) => {
              const isCodeActive = activeCodeId === code.id && isPlaying;
              
              return (
                <div
                  key={code.id}
                  id={`er-code-row-${code.id}`}
                  onClick={() => handleClickCode(code)}
                  className={`group cursor-pointer flex items-center justify-between hover:bg-slate-50/85 active:bg-slate-100 transition-all duration-200 py-4 px-3 sm:px-4 md:px-6 relative overflow-hidden ${
                    isRtl ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon & Unified Arabic/English Details */}
                  <div className={`flex items-center gap-3 sm:gap-4 shrink-0 select-none ${
                    isRtl ? 'flex-row-reverse text-right' : 'text-left'
                  }`}>
                    {/* Compact themed visual icon */}
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 shadow-3xs flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
                      {getCodeIcon(code.icon, code.textColor)}
                    </div>
                    
                    {/* Text container */}
                    <div className="flex flex-col justify-center">
                      <span className="font-sans font-black text-slate-900 group-hover:text-sky-600 transition-colors text-xs sm:text-sm md:text-base leading-snug underline decoration-sky-600/30 group-hover:decoration-sky-600 decoration-1 md:decoration-2 underline-offset-4">
                        {isRtl ? (code.id === 'all_clear' ? 'زوال الخطر' : code.nameAr) : code.nameEn}
                      </span>
                      {!isRtl && (
                        <span className="font-sans font-bold text-slate-500 text-[10px] md:text-xs">
                          {code.descriptionEn}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Empty divider spacer for clean separation */}
                  <div className="grow" />

                  {/* Right Column/Part: Color Block indicator + active audio waves */}
                  <div className={`flex items-center gap-1.5 sm:gap-3 shrink-0 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    {isCodeActive && (
                      <div className="flex items-center gap-0.5 h-6 shrink-0">
                        <span className="w-0.75 bg-emerald-600 rounded-full animate-bounce h-2" />
                        <span className="w-0.75 bg-emerald-600 rounded-full animate-bounce h-4.5 animation-delay-150" />
                        <span className="w-0.75 bg-emerald-600 rounded-full animate-bounce h-3" />
                      </div>
                    )}

                    <div 
                      className="w-7 h-7 sm:w-10 sm:h-8 rounded-lg shadow-2xs border border-slate-200/50 shrink-0"
                      style={{ 
                        backgroundColor: code.hexColor === '#1e293b' ? '#ffffff' : code.hexColor,
                        borderColor: code.hexColor === '#1e293b' ? '#cbd5e1' : 'transparent'
                      }}
                    />
                  </div>
                </div>
              );
            })}

            {/* View More / Show Less Toggle Button Block */}
            <button
               id="emergency-codes-expand-toggle"
               onClick={() => setShowAllCodes(!showAllCodes)}
               className="w-full py-3.5 px-4 bg-slate-50 hover:bg-slate-100 text-sky-600 hover:text-sky-700 font-sans font-black text-xs sm:text-sm text-center flex items-center justify-center gap-2 border-t border-slate-100 transition-colors cursor-pointer outline-none select-none"
            >
               <span>{showAllCodes ? (isRtl ? 'عرض أقل' : 'Show Less') : (isRtl ? 'عرض المزيد من رموز الطوارئ (+٩)' : 'Show More Emergency Codes (+9)')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM FLOATING AUDIO LOG FOR INTERACTION */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-full px-4"
          >
            <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4 border border-slate-750">
              <div className="flex items-center gap-3">
                <span className="block w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                <div className="text-xs">
                  <div className="font-bold text-slate-100">{isRtl ? 'جاري نداء الطوارئ الصوتي...' : 'Active Intercom Broadcast...'}</div>
                  <div className="text-slate-400 font-mono text-[10px] mt-0.5">{isRtl ? 'بث الرمز بصوت معبر ملون' : 'Speaking simulated pager alert'}</div>
                </div>
              </div>
              <button
                id="emergency-floating-stop"
                onClick={stopAnnouncement}
                className="cursor-pointer bg-red-650 hover:bg-red-700 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
              >
                <VolumeX className="w-3.5 h-3.5" />
                {isRtl ? 'إلغاء النداء' : 'Stop Alert'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PROCEDURES MODAL - PERFECT MIRROR IMAGE OF SCREENSHOT 1 & 6 */}
      <AnimatePresence>
        {selectedCode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-slate-900/85 backdrop-blur-xs overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full my-auto flex flex-col p-4.5 md:p-6 overflow-hidden border border-slate-200 max-h-[92vh]"
            >
              
              {/* Top Left Close X Action - IN RED CIRCLE MATCHING SCREENSHOT 1 */}
              <button
                id="close-procedure-modal-btn"
                onClick={handleCloseModal}
                className="absolute top-4 left-4 z-10 w-9 h-9 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                title={isRtl ? 'إغلاق' : 'Close'}
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Inside Modal Body Content - SCROLLABLE & CENTERED */}
              <div className="space-y-6 pt-8 overflow-y-auto pr-1 pl-1 grow pb-2">
                
                {isRtl ? (
                  /* 1. ARABIC PROCEDURES CARD */
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                    {/* Topic Red/Blue Banner exactly as in screenshots */}
                    <div 
                      className="py-3 px-5 text-center font-bold text-base md:text-lg text-white tracking-wide text-balance font-sans"
                      style={{ backgroundColor: selectedCode.hexColor, textWrap: 'balance' }}
                    >
                      {selectedCode.id === 'all_clear' 
                        ? 'إجراءات زوال الخطر التامة' 
                        : `بروتوكول وإجراءات: ${selectedCode.nameAr}`}
                    </div>

                    {/* Chevrons list (Symmetrical or ordered grid) */}
                    <div className="p-4 bg-white space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 dir-rtl" style={{ direction: 'rtl' }}>
                        {selectedCode.actionsAr.map((text, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center justify-between p-3.5 rounded-xl border border-sky-100 bg-sky-50/50 hover:bg-sky-50 transition-colors relative group overflow-hidden"
                          >
                            {/* Semicircle side slash indicator */}
                            <div 
                              className="absolute top-0 right-0 bottom-0 w-1.5"
                              style={{ backgroundColor: selectedCode.hexColor }}
                            />

                            {/* Content */}
                            <div className="flex items-center gap-3 pr-2 grow pl-2">
                              <span className="p-1 rounded-lg bg-white shadow-3xs text-slate-600 shrink-0">
                                {/* Action subicon fallback */}
                                <Activity className="w-4 h-4 text-sky-600" />
                              </span>
                              <p 
                                className="text-xs md:text-sm font-bold text-slate-800 leading-relaxed text-right text-balance"
                                style={{ textWrap: 'balance' }}
                              >
                                {text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* 2. ENGLISH PROCEDURES CARD */
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                    {/* Topic Red/Blue Banner */}
                    <div 
                      className="py-3 px-5 text-center font-bold text-base md:text-lg text-white tracking-wide font-sans text-balance"
                      style={{ backgroundColor: selectedCode.hexColor, textWrap: 'balance' }}
                    >
                      {selectedCode.id === 'all_clear' 
                        ? 'ALL CLEAR PROCEDURES (System Secured)' 
                        : `Protocol & Action Steps: ${selectedCode.nameEn}`}
                    </div>

                    {/* Chevrons list in English */}
                    <div className="p-4 bg-white space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 dir-ltr" style={{ direction: 'ltr' }}>
                        {selectedCode.actionsEn.map((text, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center justify-between p-3.5 rounded-xl border border-sky-100 bg-sky-50/50 hover:bg-sky-50 transition-colors relative group overflow-hidden"
                          >
                            {/* Semicircle side slash indicator */}
                            <div 
                              className="absolute top-0 left-0 bottom-0 w-1.5"
                              style={{ backgroundColor: selectedCode.hexColor }}
                            />

                            {/* Content */}
                            <div className="flex items-center gap-3 pl-2 grow pr-2">
                              <span className="p-1 rounded-lg bg-white shadow-3xs text-slate-600 shrink-0">
                                <Activity className="w-4 h-4 text-sky-600" />
                              </span>
                              <p 
                                className="text-xs md:text-sm font-bold text-slate-800 leading-relaxed text-left text-balance"
                                style={{ textWrap: 'balance' }}
                              >
                                {text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Speaker play option direct in modal */}
                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-200/60 max-w-md mx-auto">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 pr-2 text-balance" style={{ textWrap: 'balance' }}>
                    <Info className="w-4 h-4 text-sky-600 shrink-0" />
                    {isRtl ? 'سماع النداء الصوتي للموظفين:' : 'Hear active pager play:'}
                  </span>
                  <button
                    id="modal-repeat-alert-voice"
                    onClick={() => playAnnouncement(selectedCode)}
                    className="cursor-pointer font-sans font-bold text-xs px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Volume2 className="w-4 h-4" />
                    {isRtl ? 'تكرار نداء الطوارئ' : 'Repeat Announcement'}
                  </button>
                </div>

                {/* BOTTOM DONE/CLOSE BUTTON 'تم' MATCHING SCREENSHOTS - BLUE ROUNDED */}
                <div className="pt-2 text-center">
                  <button
                    id="finish-procedure-modal-btn"
                    onClick={handleCloseModal}
                    className="cursor-pointer w-full max-w-xs font-sans font-bold text-base bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full shadow-lg border border-blue-500 transition-transform hover:scale-102 active:scale-98"
                  >
                    {isRtl ? 'تم' : 'Done / Return'}
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
export { EmergencyCodes };
