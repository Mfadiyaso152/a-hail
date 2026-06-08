/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Shield, 
  UserCheck, 
  Briefcase, 
  User, 
  Check, 
  HelpCircle,
  Clock,
  Heart,
  FileText
} from 'lucide-react';
import { generalSafetyTips } from '../data';

interface SafetyTipsProps {
  isRtl: boolean;
}

export default function SafetyTips({ isRtl }: SafetyTipsProps) {
  
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto p-6 md:p-8 space-y-10">
      
      {/* Custom customizable logo header info */}
      <div className="flex flex-row items-center justify-center w-full">
        {/* Banner matching Slide 1 design */}
        <div className="flex-1 bg-sky-600 text-white py-2.5 px-6 rounded-full shadow-lg border border-sky-500 flex flex-col items-center justify-center min-w-0">
          <h2 className="text-base sm:text-lg md:text-xl font-black tracking-wide font-sans text-white text-center leading-tight">
            نصائح السلامة أثناء الطوارئ
          </h2>
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-sky-100 uppercase font-sans mt-0.5 text-center">
            Emergency safety tips
          </span>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 1: GENERAL SAFETY INSTRUCTIONS / تعليمات السلامة العامة */}
      <div className="space-y-4">
        <div className="text-center font-black text-lg text-rose-750 font-sans border-b border-rose-100 pb-2 text-balance" style={{ textWrap: 'balance' }}>
          تعليمات السلامة العامة / General safety instructions
        </div>

        {/* 双栏对齐 - Two Columns split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-slate-50/40">
          
          {/* Right panel (Arabic - RTL) */}
          <div className="p-6 space-y-3 font-sans text-right dir-rtl">
            <div className="text-sky-700 font-extrabold text-xs tracking-wider uppercase mb-1">
              إرشادات السلامة الأساسية:
            </div>
            {generalSafetyTips.map((tip, index) => (
              <div key={tip.id} className="flex items-start gap-2.5">
                <span className="text-red-500 font-black shrink-0 text-sm mt-0.5">•</span>
                <p className="text-xs md:text-sm text-slate-800 font-bold leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                  {tip.textAr}
                </p>
              </div>
            ))}
          </div>

          {/* Left panel (English - LTR) - WITH VERTICAL BORDER DIVIDER ON ITS RIGHT SIDE IN RTL */}
          <div className="p-6 space-y-3 font-sans text-left border-t md:border-t-0 md:border-r border-slate-200">
            <div className="text-sky-700 font-extrabold text-xs tracking-wider uppercase mb-1">
              General Guidelines:
            </div>
            {generalSafetyTips.map((tip, index) => (
              <div key={tip.id} className="flex items-start gap-2.5">
                <span className="text-red-500 font-black shrink-0 text-sm mt-0.5">•</span>
                <p className="text-xs md:text-sm text-slate-800 font-bold leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                  {tip.textEn}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}

    </div>
  );
}
export { SafetyTips };
