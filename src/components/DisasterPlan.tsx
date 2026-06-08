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
  
  // Custom vector illustrations for the PASS blocks to perfectly match realistic, professional illustrations
  const renderPassIllustration = (step: string) => {
    switch (step) {
      case 'P': // Pull pin
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto drop-shadow-md">
            {/* Definitions for beautiful metallic gradients */}
            <defs>
              <linearGradient id="metalRed" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>
              <linearGradient id="brassGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="70%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
              <linearGradient id="steelSilver" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f1f5f9" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
            
            {/* Top neck of fire extinguisher */}
            <rect x="42" y="58" width="16" height="15" rx="2" fill="url(#steelSilver)" />
            <rect x="36" y="73" width="28" height="20" rx="3" fill="url(#metalRed)" />
            
            {/* Levers - Upper handle pointing up, lower handle pointing horizontal */}
            <path d="M 32,60 C 45,55 50,55 74,58" stroke="#475569" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M 33,52 C 45,38 52,38 72,42" stroke="url(#steelSilver)" strokeWidth="6" strokeLinecap="round" />
            
            {/* Safety Pin inserted into holes */}
            <line x1="38" y1="48" x2="68" y2="48" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
            <rect x="48" y="44" width="6" height="8" fill="#ef4444" rx="1" />
            
            {/* Realistic gold Pull Ring */}
            <circle cx="68" cy="48" r="13" fill="none" stroke="url(#brassGold)" strokeWidth="4.5" />
            
            {/* Realistic yellow plastic security seal */}
            <rect x="34" y="45" width="4" height="6" fill="#fbbf24" />
            
            {/* Pull action arrows */}
            <path d="M 76,30 L 86,30 M 82,25 L 87,30 L 82,35" fill="none" stroke="#eab308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <text x="82" y="20" fontSize="8" fontWeight="900" fill="#d97706" textAnchor="middle">PULL</text>
          </svg>
        );
      case 'A': // Aim at base
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto drop-shadow-md">
            <circle cx="50" cy="50" r="45" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
            
            {/* Fire flame at the right base with beautiful gradient layered effects */}
            <path d="M 70,75 C 62,60 72,45 78,32 C 83,43 92,58 88,75 Z" fill="#ef4444" />
            <path d="M 73,75 C 68,66 74,55 77,46 C 81,54 86,64 83,75 Z" fill="#f97316" />
            <path d="M 76,75 C 74,70 77,63 79,56 C 81,61 84,67 82,75 Z" fill="#facc15" />
            
            {/* Extinguisher hose coming from left */}
            <path d="M 12,45 C 18,32 30,35 48,58" fill="none" stroke="#1e293b" strokeWidth="5.5" strokeLinecap="round" />
            
            {/* Metal nozzle pointer */}
            <rect x="44" y="52" width="14" height="8" rx="2" fill="url(#steelSilver)" transform="rotate(35, 44, 52)" />
            <circle cx="53" cy="59" r="4.5" fill="#1e293b" />
            
            {/* Spray jet stream starting from nozzle towards flame base */}
            <path d="M 54,60 L 72,68 M 53,61 L 70,72" stroke="#bae6fd" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3" />
            <path d="M 52,65 Q 64,68 74,75" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Target base highlight */}
            <ellipse cx="76" cy="74" rx="8" ry="4" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="2 2" className="animate-pulse" />
            
            {/* Safety Distance span annotation (1.5M - 2M) */}
            <path d="M 16,84 H 84" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 16,81 V 87 M 84,81 V 87" stroke="#0284c7" strokeWidth="1.5" />
            <text x="50" y="93" fontSize="8" fontWeight="950" fill="#0284c7" textAnchor="middle">1.5M - 2M (١.٥ - ٢ م)</text>
          </svg>
        );
      case 'S1': // Squeeze
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto drop-shadow-md">
            <circle cx="50" cy="50" r="45" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
            
            {/* Extinguisher realistic valve neck assembly */}
            <rect x="34" y="60" width="18" height="15" fill="url(#steelSilver)" rx="1" />
            <rect x="30" y="75" width="26" height="15" fill="url(#metalRed)" rx="2" />
            
            {/* Lower heavy grip handle - solid and stable */}
            <path d="M 28,64 C 44,64 50,64 74,64" stroke="#475569" strokeWidth="6.5" strokeLinecap="round" />
            
            {/* Top trigger lever (SQUEEZED down towards lower handle) */}
            <path d="M 31,56 C 45,56 50,56 72,59" stroke="url(#steelSilver)" strokeWidth="6" strokeLinecap="round" />
            
            {/* Vibrant squeezing force arrows pointing together */}
            <path d="M 66,35 L 66,48 M 61,44 L 66,48 L 71,44" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 66,79 L 66,66 M 61,70 L 66,66 L 71,70" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Hands squeezing indicator */}
            <path d="M 58,40 Q 64,30 76,30" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="2 2" />
            <text x="50" y="24" fontSize="8" fontWeight="bold" fill="#15803d" textAnchor="middle">PRESS / اضغط</text>
          </svg>
        );
      case 'S2': // Sweep
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto drop-shadow-md">
            <circle cx="50" cy="50" r="45" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
            
            {/* Ground safety plane */}
            <line x1="12" y1="78" x2="88" y2="78" stroke="#cbd5e1" strokeWidth="1.5" />
            
            {/* Small Suppressed flames being snuffed out at bottom sides */}
            <g opacity="0.45">
              <path d="M 20,78 C 16,68 22,60 25,52 C 28,60 32,68 30,78 Z" fill="#ef4444" />
              <path d="M 22,78 C 19,72 23,67 25,62 C 27,67 30,72 28,78 Z" fill="#f97316" />
            </g>
            <g opacity="0.3">
              <path d="M 75,78 C 71,70 76,64 78,56 C 80,64 84,70 82,78 Z" fill="#ef4444" />
            </g>
            
            {/* Highly visual Green Sweeping movement arc */}
            <path d="M 22,38 Q 50,18 78,38" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
            {/* Double arrowheads */}
            <path d="M 27,33 L 20,38 L 25,45 M 73,33 L 80,38 L 75,45" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Thick cooling white/sky powder discharge cloud fully suppressing the base center */}
            <ellipse cx="50" cy="65" rx="22" ry="11" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.9" />
            <ellipse cx="48" cy="66" rx="14" ry="7" fill="#f0f9ff" opacity="0.95" />
            
            {/* Sprayer nozzle directing into the center */}
            <line x1="50" y1="42" x2="50" y2="52" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
            <rect x="46" y="52" width="8" height="6" rx="1" fill="#1e293b" />
            
            <text x="50" y="93" fontSize="8" fontWeight="black" fill="#15803d" textAnchor="middle">SWEEP / يمنة ويسرة</text>
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
            {isRtl ? 'خطة الكوارث الداخلية' : 'Internal Disaster Plan'}
          </h2>
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-sky-100 uppercase font-sans mt-0.5 text-center">
            {isRtl ? 'خطة الاحتواء والإطفاء السريع' : 'RACE / PASS SYSTEM'}
          </span>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. SECTION RACE: IN CASE OF FIRE / عند اكتشاف الحريق_ */}
      <div className="space-y-6">
        
        {/* red subtitle */}
        <div className="text-center font-black font-sans border-b border-red-100 pb-2 flex flex-col items-center justify-center space-y-1">
          <a 
            href="https://youtu.be/wnnPbHzmh8k?si=CRo2NYwidG8X6r6C" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-red-800 transition-colors cursor-pointer group flex flex-col items-center"
          >
            <span className="text-base md:text-lg text-red-650 tracking-wide uppercase font-black underline decoration-2 underline-offset-4 group-hover:text-red-800">
              {isRtl ? 'خطوات الإطفاء (عند اكتشاف الحريق)' : 'IN CASE OF FIRE (Safety Steps)'}
            </span>
          </a>
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

        {/* RACE Split Grid Section - Responsive clean layout showing ONLY the active language to optimize space */}
        <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/40">
          
          {isRtl ? (
            /* ARABIC PANEL (RTL) */
            <div className="space-y-5 font-sans" style={{ direction: 'rtl' }}>
              
              {/* R */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-450">
                  R
                </span>
                <div className="space-y-1">
                  <span className="text-red-600 font-black text-sm block">إنقاذ المرضى والمراجعين (Rescue):</span>
                  <p className="text-xs md:text-sm text-slate-750 font-bold leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                    نقل وتأمين المرضى والزوار من مكان الخطر الفوري إلى أقرب مكان آمن.
                  </p>
                </div>
              </div>

              {/* A */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-450">
                  A
                </span>
                <div className="space-y-1">
                  <span className="text-red-600 font-black text-sm block">تفعيل الإنذار والتبليغ (Activate Alarm):</span>
                  <ul className="text-xs md:text-sm text-slate-750 font-bold list-disc pr-4 space-y-1">
                    <li className="text-balance" style={{ textWrap: 'balance' }}>أطلق نداء الشفرة الحمراء (Code Red) بصوت مرتفع لتنبيه زملائك.</li>
                    <li className="text-balance" style={{ textWrap: 'balance' }}>اتصل مباشرة برقم بلاغات الطوارئ بالمركز أو المنسق الأمني.</li>
                    <li className="text-balance" style={{ textWrap: 'balance' }}>اسحب يد جهاز إنذار الحريق اليدوي المثبت بـ الجدار.</li>
                  </ul>
                </div>
              </div>

              {/* C */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-450">
                  C
                </span>
                <div className="space-y-1">
                  <span className="text-red-600 font-black text-sm block">احتواء وحصر الحريق (Contain Fire):</span>
                  <ul className="text-xs md:text-sm text-slate-750 font-bold list-disc pr-4 space-y-1">
                    <li className="text-balance" style={{ textWrap: 'balance' }}>أغلق أبواب الغرف والممرات للحد من انتشار النيران والدخان.</li>
                    <li className="text-balance" style={{ textWrap: 'balance' }}>قم بإغلاق صمام مغذي الأكسجين الطبي إن أمكن.</li>
                    <li className="text-balance" style={{ textWrap: 'balance' }}>ضع مناشف أو عوائق مبتلة مبللة بالماء أسفل الأبواب المحتشدة.</li>
                  </ul>
                </div>
              </div>

              {/* E */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-440">
                  E
                </span>
                <div className="space-y-1">
                  <span className="text-red-600 font-black text-sm block text-balance" style={{ textWrap: 'balance' }}>الإطفاء السريع أو الإخلاء فوراً (Extinguish / Evacuate):</span>
                  <p className="text-xs md:text-sm text-slate-750 font-bold leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                    استخدم مطفأة الحريق اليدوية إذا كان الحريق في بدايته صغيراً ومكشوفاً، وإلا باشر بإخلاء الجناح فوراً باتجاه مخارج الطوارئ الآمنة.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* ENGLISH PANEL (LTR) */
            <div className="space-y-5 font-sans" style={{ direction: 'ltr' }}>
              {/* R */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-400">
                  R
                </span>
                <div className="space-y-1">
                  <span className="text-red-600 font-black text-sm block">Rescue patients / visitors:</span>
                  <p className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                    Move and safeguard anyone in immediate danger of fire to the nearest safe refuge area.
                  </p>
                </div>
              </div>

              {/* A */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-400">
                  A
                </span>
                <div className="space-y-1">
                  <span className="text-red-600 font-black text-sm block">Activate Alarm & report:</span>
                  <ul className="text-xs md:text-sm text-slate-700 font-bold list-disc pl-4 space-y-1">
                    <li className="text-balance" style={{ textWrap: 'balance' }}>Shout loud warning vocals "Code Red" for coworker awareness.</li>
                    <li className="text-balance" style={{ textWrap: 'balance' }}>Call the internal emergency hotline or the hospital duty officer.</li>
                    <li className="text-balance" style={{ textWrap: 'balance' }}>Pull the manually activated fire alarm station located on the wall.</li>
                  </ul>
                </div>
              </div>

              {/* C */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-400">
                  C
                </span>
                <div className="space-y-1">
                  <span className="text-red-600 font-black text-sm block">Contain Fire & smoke:</span>
                  <ul className="text-xs md:text-sm text-slate-700 font-bold list-disc pl-4 space-y-1">
                    <li className="text-balance" style={{ textWrap: 'balance' }}>Close doors and windows to restrict drafts and seal flames.</li>
                    <li className="text-balance" style={{ textWrap: 'balance' }}>Shut off medical oxygen flow supply valves where safe.</li>
                    <li className="text-balance" style={{ textWrap: 'balance' }}>Place damp or wet towels underneath the bottom of door slits.</li>
                  </ul>
                </div>
              </div>

              {/* E */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-sky-400">
                  E
                </span>
                <div className="space-y-1">
                  <span className="text-red-600 font-black text-sm block text-balance" style={{ textWrap: 'balance' }}>Extinguish or Evacuate:</span>
                  <p className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                    Attempt extinguishing only if the fire is very small and manageable. Otherwise, evacuate instantly using emergency stairwells.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. SECTION PASS: HOW TO US EXTINGUISHER / طريقة استخدام طفاية الحريق */}
      <div className="space-y-6 pt-4">
        
        {/* red subtitle */}
        <div className="text-center font-black text-lg text-red-600 font-sans border-b border-red-100 pb-2">
          <a 
            href="https://youtu.be/JyZ_hShzKTM?si=L3LjP4EzBuc_b_XB" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-red-800 transition-colors cursor-pointer underline decoration-2 underline-offset-4"
          >
            {isRtl ? 'طريقة استخدام طفاية الحريق (PASS)' : 'HOW TO USE A FIRE EXTINGUISHER (PASS)'}
          </a>
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

        {/* Flow of letters P-A-S-S with adaptive single-language subtitle */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {/* P */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto shadow-sm pb-0.5">
              P
            </span>
            <div className="mt-3 space-y-1 text-xs md:text-sm font-black text-slate-800">
              <div className="text-red-600 text-balance uppercase" style={{ textWrap: 'balance' }}>
                {isRtl ? 'سحب مسمار الأمان' : 'pull the pin'}
              </div>
              <div className="font-sans text-[10px] sm:text-xs text-slate-400 font-bold leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                {isRtl ? 'حرر ممسك المطفأة' : 'Release extinguisher lock'}
              </div>
            </div>
          </div>

          {/* A */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto shadow-sm pb-0.5">
              A
            </span>
            <div className="mt-3 space-y-1 text-xs md:text-sm font-black text-slate-800">
              <div className="text-red-600 text-balance uppercase" style={{ textWrap: 'balance' }}>
                {isRtl ? 'وجه الخرطوم' : 'Aim at fire base'}
              </div>
              <div className="font-sans text-[10px] sm:text-xs text-slate-400 font-bold leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                {isRtl ? 'صوّب نحو قاعدة الحريق' : 'Point to base of fire'}
              </div>
            </div>
          </div>

          {/* S */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto shadow-sm pb-0.5">
              S
            </span>
            <div className="mt-3 space-y-1 text-xs md:text-sm font-black text-slate-800">
              <div className="text-red-600 text-balance uppercase" style={{ textWrap: 'balance' }}>
                {isRtl ? 'اضغط المقبض' : 'Squeeze the trigger'}
              </div>
              <div className="font-sans text-[10px] sm:text-xs text-slate-400 font-bold leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                {isRtl ? 'فرّغ مادة الإطفاء بقوة' : 'Squeeze handle to discharge'}
              </div>
            </div>
          </div>

          {/* S */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto shadow-sm pb-0.5">
              S
            </span>
            <div className="mt-3 space-y-1 text-xs md:text-sm font-black text-slate-800">
              <div className="text-red-600 text-balance uppercase" style={{ textWrap: 'balance' }}>
                {isRtl ? 'حرّك يمنة ويسرة' : 'Sweep side to side'}
              </div>
              <div className="font-sans text-[10px] sm:text-xs text-slate-400 font-bold leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                {isRtl ? 'اغمر جمرات اللهب تماماً' : 'Cover active fuel area'}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Vector Illustration Cards exactly matching PASS steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          
          {/* Card 1: P */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center space-y-2">
            {renderPassIllustration('P')}
            <span className="text-xs font-black uppercase text-slate-500">
              {isRtl ? 'سحب مسمار الأمان' : 'PULL THE PIN'}
            </span>
          </div>

          {/* Card 2: A */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center space-y-2">
            {renderPassIllustration('A')}
            <span className="text-xs font-black uppercase text-slate-500">
              {isRtl ? 'توجيه نحو القاعدة' : 'AIM AT THE BASE'}
            </span>
          </div>

          {/* Card 3: S1 */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center space-y-2">
            {renderPassIllustration('S1')}
            <span className="text-xs font-black uppercase text-slate-500">
              {isRtl ? 'الضغط على الزناد' : 'SQUEEZE TRIGGER'}
            </span>
          </div>

          {/* Card 4: S2 */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center space-y-2">
            {renderPassIllustration('S2')}
            <span className="text-xs font-black uppercase text-slate-500">
              {isRtl ? 'تحريك يمنة ويسرة' : 'SWEEP SIDE TO SIDE'}
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
export { DisasterPlan };
