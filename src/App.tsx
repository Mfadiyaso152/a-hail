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
import { ChevronDown, ChevronUp, Globe } from 'lucide-react';
import FmsLogo from './components/FmsLogo';

export default function App() {
  // Locale State: true = Arabic by default for Saudi Health Cluster
  const [isRtl, setIsRtl] = useState(true);
  
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
    <div className="min-h-screen bg-slate-100 flex flex-col transition-all duration-300">
      
      {/* Immersive Responsive Container - Spans full width/page on desktop, adaptive on mobile */}
      <div 
        id="app-container" 
        className="w-full max-w-5xl mx-auto min-h-screen bg-slate-50 flex flex-col relative text-right md:shadow-xl md:border-x md:border-slate-200 animate-fadeIn"
        style={{ direction: isRtl ? 'rtl' : 'ltr' }}
      >
        
        {/* Dynamic Continuous Page Scroll Content Area - Expanded for Desktop Comfort */}
        <div className="flex-1 overflow-y-auto pt-6 px-4 md:px-8 pb-12 space-y-8">
          
          {/* TOP BAR / LANGUAGE SWITCHER BUTTON (Tidy, arranged nicely at the beginning) */}
          <div className={`flex flex-row items-center justify-between bg-slate-100 hover:bg-slate-100/95 py-2.5 px-4 rounded-2xl border border-slate-200 select-none gap-4 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-xs font-black text-slate-700 font-sans tracking-wide">
                {isRtl ? 'تجمع حائل الصحي' : 'Hail Health Cluster'}
              </span>
            </div>
            <button
              onClick={() => setIsRtl(!isRtl)}
              dir={isRtl ? 'rtl' : 'ltr'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-250 shadow-2xs text-xs font-black text-sky-700 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer hover:border-slate-350 shrink-0 select-none whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 text-sky-600 animate-spin-slow" />
              <span>{isRtl ? 'Change to English' : 'التحويل إلى العربية'}</span>
            </button>
          </div>

          {/* SECTION 1: EMERGENCY CODES PAGER */}
          <div id="section-1-codes" className="space-y-4 bg-white p-4.5 rounded-2xl border border-slate-200 flex flex-col">
            
            {/* Header Area with Title on the right, Logo on the left (automatically set by RTL flex-row) */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-1 select-none">
              <div className={`font-sans flex-1 ${isRtl ? 'text-right' : 'text-left'}`}>
                <h3 className="text-base sm:text-lg md:text-xl font-black text-emerald-950 leading-tight">
                  {isRtl ? 'رموز الطوارئ' : 'Emergency Codes'}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 font-mono mt-1 tracking-wide uppercase">
                  {isRtl ? 'نظام رموز الاستجابة للطوارئ المعتمد' : 'EMERGENCY SYSTEM CODES'}
                </p>
              </div>
              <div className="flex items-center justify-center shrink-0">
                <FmsLogo size={58} hideText={true} className="bg-slate-50 p-2 rounded-2xl border border-slate-200 shadow-2xs" />
              </div>
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
                {isRtl ? 'خطة الكوارث بمركز طب الأسنان' : 'Internal Disaster Plan (RACE/PASS)'}
              </h3>
              <p className="text-[9px] text-slate-400 font-mono mt-0.5">
                {isRtl ? 'إجراءات احتواء والحد من الكوارث الداخلية' : 'DISASTER CONTAINMENT PROCEDURE'}
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
              <span>{showMore ? (isRtl ? 'عرض أقل' : 'Show Less') : (isRtl ? 'عرض المزيد من إرشادات السلامة' : 'Show More Safety Guidelines')}</span>
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
                    {isRtl ? 'إرشادات السلامة العامة' : 'General Safety Guidelines'}
                  </h3>
                  <p className="text-[9px] text-slate-400 font-mono mt-0.5">
                    {isRtl ? 'دليل إجراءات السلامة المعتمد بالمركز' : 'GENERAL SAFETY GUIDELINES'}
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
                    {isRtl ? 'الأسئلة الشائعة في السلامة' : 'Safety Literacy FAQ'}
                  </h3>
                  <p className="text-[9px] text-slate-400 font-mono mt-0.5">
                    {isRtl ? 'إجابات الأسئلة المتكررة حول الأمان' : 'SAFETY LITERACY FAQ'}
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
                {isRtl 
                  ? 'جميع الحقوق محفوظه 2026 - الأمن الصحي بمركز طب الأسنان التخصصي' 
                  : 'All Rights Reserved 2026 - Healthcare Security at Specialized Dental Center'}
              </div>
              <div className="text-[10px] text-emerald-700 font-bold">
                {isRtl 
                  ? 'تجمع حائل الصحي • المملكة العربية السعودية' 
                  : 'Hail Health Cluster • Kingdom of Saudi Arabia'}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export { App };
