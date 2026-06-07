/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useEmergencyAnnouncer } from './hooks/useEmergencyAnnouncer';
import { emergencyCodes } from './data';
import { EmergencyCodes } from './components/EmergencyCodes';
import { DisasterPlan } from './components/DisasterPlan';
import { SafetyTips } from './components/SafetyTips';
import { SafetyFaqs } from './components/SafetyFaqs';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function App() {
  // Locale State: true = Arabic by default for Saudi Health Cluster
  const isRtl = true;
  
  // Show More state to keep the initial page height low/compact
  const [showMore, setShowMore] = useState(false);

  // Audio Engine Hook
  const {
    playAnnouncement,
    stopAnnouncement,
    isPlaying,
    activeCodeId,
    languageMode,
    setLanguageMode,
    voicesLoaded
  } = useEmergencyAnnouncer();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-0 md:p-4 transition-all duration-300">
      
      {/* Dynamic Mobile App Viewport Container (Perfectly suited for mobile) */}
      <div 
        id="mobile-app-frame" 
        className="w-full max-w-[480px] min-h-screen md:min-h-[850px] md:max-h-[920px] bg-slate-50 md:rounded-[42px] md:shadow-2xl md:border-[10px] md:border-slate-800 flex flex-col relative overflow-hidden text-right"
        style={{ direction: 'rtl' }}
      >
        
        {/* Dynamic Continuous Page Scroll Content Area (Stacked 4 Paragraphs on top of each other) */}
        <div className="flex-1 overflow-y-auto pt-4 px-3 pb-8 space-y-6">
          
          {/* SECTION 1: EMERGENCY CODES PAGER */}
          <div id="section-1-codes" className="space-y-3 bg-white p-3.5 rounded-2xl border border-slate-200">
            
            <div className="text-center font-sans">
              <h3 className="text-sm font-black text-emerald-950">
                رموز الطوارئ
              </h3>
              <p className="text-[9px] text-slate-400 font-mono mt-0.5">
                EMERGENCY SYSTEM CODES
              </p>
            </div>

            <EmergencyCodes
              isRtl={isRtl}
              activeCodeId={activeCodeId}
              isPlaying={isPlaying}
              playAnnouncement={playAnnouncement}
              stopAnnouncement={stopAnnouncement}
              languageMode={languageMode}
              setLanguageMode={setLanguageMode}
              voicesLoaded={voicesLoaded}
            />
          </div>

          {/* SECTION 2: DISASTER DRILLS */}
          <div id="section-2-disaster" className="space-y-3 bg-white p-3.5 rounded-2xl border border-slate-200">

            <div className="text-center font-sans">
              <h3 className="text-sm font-black text-emerald-950">
                خطة الكوارث RACE/PASS
              </h3>
              <p className="text-[9px] text-slate-400 font-mono mt-0.5">
                DISASTER CONTAINMENT PROCEDURE
              </p>
            </div>
            
            <DisasterPlan
              isRtl={isRtl}
              onAnnounceCodeRed={() => {
                const redCode = emergencyCodes.find(c => c.id === 'red');
                if (redCode) playAnnouncement(redCode);
              }}
            />
          </div>

          {/* COLLAPSIBLE TOGGLE BUTTON FOR SECTIONS 3 & 4 */}
          <div className="flex justify-center pt-1 pb-1">
            <button
              id="toggle-show-all-sections"
              onClick={() => setShowMore(!showMore)}
              className={`cursor-pointer transition-all duration-350 transform active:scale-95 flex items-center gap-1.5 px-6 py-2.5 rounded-full font-sans font-black text-xs shadow-md border ${
                showMore 
                  ? 'bg-slate-200 hover:bg-slate-300 text-slate-850 border-slate-300' 
                  : 'bg-sky-600 hover:bg-sky-700 text-white border-sky-500 hover:shadow-lg hover:scale-101'
              }`}
            >
              <span>{showMore ? 'عرض أقل' : 'عرض المزيد من إرشادات السلامة'}</span>
              {showMore ? (
                <ChevronUp className="w-4 h-4 animate-bounce" />
              ) : (
                <ChevronDown className="w-4 h-4 animate-bounce" />
              )}
            </button>
          </div>

          {/* SECTION 3 & 4: GENERAL SAFETY & FAQ (Visually hidden unless showMore is true) */}
          {showMore && (
            <div className="space-y-6 animate-fadeIn duration-500">
              {/* SECTION 3: GENERAL SAFETY & RESPONSIBILITIES */}
              <div id="section-3-safety" className="space-y-3 bg-white p-3.5 rounded-2xl border border-slate-200">

                <div className="text-center font-sans">
                  <h3 className="text-sm font-black text-emerald-950">
                    إرشادات السلامة العامة
                  </h3>
                  <p className="text-[9px] text-slate-400 font-mono mt-0.5">
                    GENERAL SAFETY GUIDELINES
                  </p>
                </div>
                
                <SafetyTips
                  isRtl={isRtl}
                />
              </div>

              {/* SECTION 4: SAFETY FAQ */}
              <div id="section-4-faqs" className="space-y-3 bg-white p-3.5 rounded-2xl border border-slate-200">

                <div className="text-center font-sans">
                  <h3 className="text-sm font-black text-emerald-950">
                    الأسئلة الشائعة في السلامة
                  </h3>
                  <p className="text-[9px] text-slate-400 font-mono mt-0.5">
                    SAFETY LITERACY FAQ
                  </p>
                </div>
                
                <SafetyFaqs
                  isRtl={isRtl}
                />
              </div>
            </div>
          )}

          {/* Seamless Copyright Footer holding the Dental Institution name exclusively */}
          <div className="pt-4 border-t border-slate-200 text-center space-y-2 select-none">
            <div className="bg-emerald-50 rounded-2xl p-3 border border-emerald-100 space-y-1">
              <div className="text-emerald-950 font-black text-xs md:text-sm tracking-tight leading-tight">
                الحقوق محفوظة لمركز طب الأسنان التخصصي بحائل © ٢٠٢٦
              </div>
              <div className="text-[10px] text-emerald-700 font-bold">
                وزارة الصحة • المملكة العربية السعودية
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export { App };
