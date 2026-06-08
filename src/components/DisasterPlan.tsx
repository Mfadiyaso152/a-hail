/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  Info
} from 'lucide-react';

interface DisasterPlanProps {
  isRtl: boolean;
  onAnnounceCodeRed: () => void;
}

export default function DisasterPlan({ isRtl, onAnnounceCodeRed }: DisasterPlanProps) {
  
  // Custom vector illustrations for the PASS blocks to perfectly match Image 4 doodles
  const renderPassIllustration = (step: string) => {
    switch (step) {
      case 'P': // Pull pin
        return (
          <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto text-slate-700">
            <circle cx="50" cy="50" r="42" fill="#fff" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
            <rect x="42" y="55" width="16" height="25" rx="3" fill="#dc2626" />
            <path d="M 35,45 L 65,45 M 35,55 L 65,55" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
            {/* Pull ring */}
            <circle cx="68" cy="40" r="14" fill="none" stroke="#f59e0b" strokeWidth="4" />
            {/* Security pin stick */}
            <line x1="40" y1="50" x2="68" y2="50" stroke="#94a3b8" strokeWidth="3" />
          </svg>
        );
      case 'A': // Aim at base
        return (
          <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto text-slate-700">
            <circle cx="50" cy="50" r="42" fill="#fff" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
            {/* Ground line */}
            <line x1="15" y1="80" x2="85" y2="80" stroke="#cbd5e1" strokeWidth="2" />
            {/* Flame source at base */}
            <path d="M 68,80 C 62,65 72,50 78,40 C 82,50 92,65 88,80 Z" fill="#ef4444" />
            <path d="M 72,80 C 70,72 75,65 77,58 C 79,65 85,72 82,80 Z" fill="#f97316" />
            {/* Hose pointing */}
            <path d="M 15,35 C 30,35 25,70 52,70" fill="none" stroke="#475569" strokeWidth="5" />
            {/* Nozzle head */}
            <rect x="52" y="65" width="12" height="10" rx="2" fill="#1e293b" transform="rotate(-15, 52, 65)" />
            {/* Stream target line */}
            <path d="M 62,67 L 76,77" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />
            {/* Distance span annotation (1.5M - 2M) */}
            <path d="M 25,88 H 75" stroke="#0284c7" strokeWidth="1.5" />
            <path d="M 25,85 V 91 M 75,85 V 91" stroke="#0284c7" strokeWidth="1.5" />
            <text x="50" y="96" fontSize="8" fontWeight="bold" fill="#0284c7" textAnchor="middle">1.5 M - 2 M</text>
          </svg>
        );
      case 'S1': // Squeeze
        return (
          <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto text-slate-700">
            <circle cx="50" cy="50" r="42" fill="#fff" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
            {/* Handle top and lower lever */}
            <path d="M 25,60 C 25,60 40,40 70,40" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
            {/* Top trigger lever (squeezed down) */}
            <path d="M 30,52 C 30,40 50,22 75,38" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
            {/* Squeeze force arrows */}
            <path d="M 65,22 L 65,34 M 60,30 L 65,34 L 70,30" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
            <path d="M 65,58 L 65,46 M 60,50 L 65,46 L 70,50" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
          </svg>
        );
      case 'S2': // Sweep
        return (
          <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto text-slate-700">
            <circle cx="50" cy="50" r="42" fill="#fff" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
            {/* Floor line */}
            <line x1="15" y1="80" x2="85" y2="80" stroke="#cbd5e1" strokeWidth="2" />
            {/* Suppressed flames */}
            <path d="M 25,80 C 23,70 27,65 30,60 C 33,65 37,70 35,80 Z" fill="#ef4444" opacity="0.6" />
            <path d="M 70,80 C 68,68 72,63 75,57 C 78,63 82,68 80,80 Z" fill="#ef4444" opacity="0.6" />
            {/* Sweep arrows */}
            <path d="M 25,40 C 50,20 60,20 75,40" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3"/>
            <path d="M 25,40 L 33,40 M 25,40 L 28,32" fill="none" stroke="#22c55e" strokeWidth="3" />
            <path d="M 75,40 L 67,40 M 75,40 L 72,32" fill="none" stroke="#22c55e" strokeWidth="3" />
            {/* Extinguish spray mist */}
            <ellipse cx="50" cy="55" rx="18" ry="8" fill="#e0f2fe" opacity="0.8" />
            {/* Distance span annotation (1.5M - 2M) */}
            <text x="50" y="92" fontSize="8" fontWeight="bold" fill="#0284c7" textAnchor="middle">1.5 M - 2 M</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto p-6 md:p-8 space-y-10">
      
      {/* Custom customizable logo header info */}
      <div className="flex flex-row items-center justify-center w-full">
        {/* Banner matching Slide 4 and Slide 2 design */}
        <div className="flex-1 bg-sky-600 text-white py-2.5 px-6 rounded-full shadow-lg border border-sky-500 flex flex-col items-center justify-center min-w-0">
          <h2 className="text-base sm:text-lg md:text-xl font-black tracking-wide font-sans text-white text-center leading-tight">
            خطة الكوارث الداخلية
          </h2>
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-sky-100 uppercase font-sans mt-0.5 text-center">
            INTERNAL DISASTER PLAN
          </span>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. SECTION RACE: IN CASE OF FIRE / عند اكتشاف الحريق_ */}
      <div className="space-y-6">
        
        {/* red subtitle */}
        <div className="text-center font-black font-sans border-b border-red-100 pb-2 flex flex-col items-center justify-center space-y-1">
          <span className="text-base md:text-lg text-red-650 tracking-wide uppercase">IN CASE OF FIRE</span>
          <span className="text-base md:text-lg text-red-650">عند اكتشاف الحريق</span>
        </div>

        {/* Huge RACE Double-ended Arrow */}
        <div className="flex items-center justify-center">
          <div className="relative bg-sky-500 text-white text-3xl font-black font-sans px-10 py-2.5 rounded-md flex items-center justify-center shadow-lg">
            {/* left arrow point */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[22px] w-0 h-0 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent border-r-[24px] border-r-sky-500" />
            
            <span>RACE</span>
            
            {/* right arrow point */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[22px] w-0 h-0 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent border-l-[24px] border-l-sky-500" />
          </div>
        </div>

        {/* RACE Split Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-slate-200 rounded-2xl p-6 bg-slate-50/40">
          
          {/* ARABIC PANEL (Right) */}
          <div className="space-y-5 font-sans dir-rtl">
            
            {/* R */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-400">
                R
              </span>
              <div className="space-y-1">
                <span className="text-red-650 font-black text-sm block">إنقاذ المرضى:</span>
                <p className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                  نقل المرضى/الزوار من مكان الخطر إلى مكان آمن.
                </p>
              </div>
            </div>

            {/* A */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-400">
                A
              </span>
              <div className="space-y-1">
                <span className="text-red-650 font-black text-sm block">تفعيل الإنذار:</span>
                <ul className="text-xs md:text-sm text-slate-700 font-bold list-disc pr-4 space-y-1">
                  <li className="text-balance" style={{ textWrap: 'balance' }}>أطلق نداء الشفرة الحمراء بصوت مرتفع.</li>
                  <li className="text-balance" style={{ textWrap: 'balance' }}>اتصل بخط البلاغ الخاص بالمستشفى.</li>
                  <li className="text-balance" style={{ textWrap: 'balance' }}>اسحب جهاز الإنذار.</li>
                </ul>
              </div>
            </div>

            {/* C */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-400">
                C
              </span>
              <div className="space-y-1">
                <span className="text-red-650 font-black text-sm block">احتواء وحصر الحريق:</span>
                <ul className="text-xs md:text-sm text-slate-700 font-bold list-disc pr-4 space-y-1">
                  <li className="text-balance" style={{ textWrap: 'balance' }}>أغلق جميع الأبواب.</li>
                  <li className="text-balance" style={{ textWrap: 'balance' }}>أغلق محبس الأكسجين.</li>
                  <li className="text-balance" style={{ textWrap: 'balance' }}>ضع مناشف مبتلة أسفل الباب.</li>
                </ul>
              </div>
            </div>

            {/* E */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-400">
                E
              </span>
              <div className="space-y-1">
                <span className="text-red-650 font-black text-sm block text-balance" style={{ textWrap: 'balance' }}>الإطفاء والإخلاء.</span>
              </div>
            </div>
          </div>

          {/* ENGLISH PANEL (Left) - WITH VERTICAL BORDER DIVIDER ON ITS RIGHT SIDE IN RTL */}
          <div className="space-y-5 font-sans text-left md:border-r md:border-slate-300 md:pr-8">
            {/* R */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-400">
                R
              </span>
              <div className="space-y-1">
                <span className="text-red-650 font-black text-sm block">Rescue the patient:</span>
                <p className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                  Safe anyone from the fire area to another safe place .
                </p>
              </div>
            </div>

            {/* A */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-400">
                A
              </span>
              <div className="space-y-1">
                <span className="text-red-650 font-black text-sm block">Activate Alarm:</span>
                <ul className="text-xs md:text-sm text-slate-700 font-bold list-disc pl-4 space-y-1">
                  <li className="text-balance" style={{ textWrap: 'balance' }}>Call Code Red .</li>
                  <li className="text-balance" style={{ textWrap: 'balance' }}>Call the Hospital Reporting Line .</li>
                  <li className="text-balance" style={{ textWrap: 'balance' }}>Activate Fire Alarm.</li>
                </ul>
              </div>
            </div>

            {/* C */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-400">
                C
              </span>
              <div className="space-y-1">
                <span className="text-red-650 font-black text-sm block">Contain Fire :</span>
                <ul className="text-xs md:text-sm text-slate-700 font-bold list-disc pl-4 space-y-1">
                  <li className="text-balance" style={{ textWrap: 'balance' }}>Close The Door.</li>
                  <li className="text-balance" style={{ textWrap: 'balance' }}>Oxygen Vavle Lock.</li>
                  <li className="text-balance" style={{ textWrap: 'balance' }}>Put Towels The Door.</li>
                </ul>
              </div>
            </div>

            {/* E */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-400">
                E
              </span>
              <div className="space-y-1">
                <span className="text-red-650 font-black text-sm block text-balance" style={{ textWrap: 'balance' }}>Extinguish Or EVACUATE .</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. SECTION PASS: HOW TO US EXTINGUISHER / طريقة استخدام طفاية الحريق */}
      <div className="space-y-6 pt-4">
        
        {/* red subtitle */}
        <div className="text-center font-black text-lg text-red-600 font-sans border-b border-red-100 pb-2">
          HOW TO US EXTINGUISHER <span className="mx-2">•</span> طريقة استخدام طفاية الحريق
        </div>

        {/* Huge PASS Double-ended Arrow */}
        <div className="flex items-center justify-center">
          <div className="relative bg-sky-500 text-white text-3xl font-black font-sans px-10 py-2.5 rounded-md flex items-center justify-center shadow-lg">
            {/* left arrow point */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[22px] w-0 h-0 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent border-r-[24px] border-r-sky-500" />
            
            <span>PASS</span>
            
            {/* right arrow point */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[22px] w-0 h-0 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent border-l-[24px] border-l-sky-500" />
          </div>
        </div>

        {/* Flow of letters P-A-S-S with subtitles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {/* P */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto shadow-sm pb-0.5">
              P
            </span>
            <div className="mt-3 space-y-1 text-xs md:text-sm font-black text-slate-800">
              <div className="text-red-600 text-balance" style={{ textWrap: 'balance' }}>pull the pin</div>
              <div className="font-sans font-bold text-balance" style={{ textWrap: 'balance' }}>سحب مسمار الأمان</div>
            </div>
          </div>

          {/* A */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto shadow-sm pb-0.5">
              A
            </span>
            <div className="mt-3 space-y-1 text-xs md:text-sm font-black text-slate-800">
              <div className="text-red-600 text-balance" style={{ textWrap: 'balance' }}>Aim at the base of fire</div>
              <div className="font-sans font-bold text-balance" style={{ textWrap: 'balance' }}>وجه الخرطوم إلى قاعدة الحريق</div>
            </div>
          </div>

          {/* S */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto shadow-sm pb-0.5">
              S
            </span>
            <div className="mt-3 space-y-1 text-xs md:text-sm font-black text-slate-800">
              <div className="text-red-600 text-balance" style={{ textWrap: 'balance' }}>Squeeze the trigger</div>
              <div className="font-sans font-bold text-balance" style={{ textWrap: 'balance' }}>اضغط على المقبض</div>
            </div>
          </div>

          {/* S */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto shadow-sm pb-0.5">
              S
            </span>
            <div className="mt-3 space-y-1 text-xs md:text-sm font-black text-slate-800">
              <div className="text-red-600 text-balance" style={{ textWrap: 'balance' }}>Sweep side to side</div>
              <div className="font-sans font-bold text-balance" style={{ textWrap: 'balance' }}>حرك الخرطوم يميناً ويساراً</div>
            </div>
          </div>
        </div>

        {/* 4 Vector Illustration Cards exactly matching Image 4 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          
          {/* Card 1: P */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center space-y-2">
            {renderPassIllustration('P')}
            <span className="text-xs font-black uppercase text-slate-400">PULL THE PIN</span>
          </div>

          {/* Card 2: A */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center space-y-2">
            {renderPassIllustration('A')}
            <span className="text-xs font-black uppercase text-slate-400">AIM AT THE BASE</span>
          </div>

          {/* Card 3: S1 */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center space-y-2">
            {renderPassIllustration('S1')}
            <span className="text-xs font-black uppercase text-slate-400">SQUEEZE TRIGGER</span>
          </div>

          {/* Card 4: S2 */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center space-y-2">
            {renderPassIllustration('S2')}
            <span className="text-xs font-black uppercase text-slate-400">SWEEP SIDE TO SIDE</span>
          </div>

        </div>

      </div>

    </div>
  );
}
export { DisasterPlan };
