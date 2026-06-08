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
            {isRtl ? 'نصائح السلامه اثناء الطوارئ' : 'Emergency Safety Tips'}
          </h2>
          {!isRtl && (
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-sky-100 uppercase font-sans mt-0.5 text-center">
              HAIL HEALTH CLUSTER GENERAL SYSTEM GUIDANCE
            </span>
          )}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 1: GENERAL SAFETY INSTRUCTIONS / تعليمات السلامة العامة */}
      <div className="space-y-4">
        {!isRtl && (
          <div className="text-center font-black text-lg text-rose-700 font-sans border-b border-rose-100 pb-2 text-balance" style={{ textWrap: 'balance' }}>
            General safety instructions
          </div>
        )}

        {/* Unified single-column responsive panel */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-slate-50/40 p-6 md:p-8">
          
          {isRtl ? (
            /* Arabic panel */
            <div className="space-y-3.5 font-sans text-right" style={{ direction: 'rtl' }}>
              <div className="text-sky-700 font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-2">
                إرشادات السلامة الأساسية بالمركز:
              </div>
              {generalSafetyTips.map((tip) => (
                <div key={tip.id} className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-black shrink-0 text-base mt-0.5">•</span>
                  <p className="text-xs md:text-sm text-slate-800 font-bold leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                    {tip.textAr}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            /* English panel */
            <div className="space-y-3.5 font-sans text-left" style={{ direction: 'ltr' }}>
              <div className="text-sky-700 font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-2">
                General Safety & Fire Prevention Rules:
              </div>
              {generalSafetyTips.map((tip) => (
                <div key={tip.id} className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-black shrink-0 text-base mt-0.5">•</span>
                  <p className="text-xs md:text-sm text-slate-800 font-bold leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                    {tip.textEn}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}

    </div>
  );
}
export { SafetyTips };
