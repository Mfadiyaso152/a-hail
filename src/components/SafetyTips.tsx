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
import { generalSafetyTips, roleResponsibilities } from '../data';
import { FmsLogo } from './FmsLogo';

interface SafetyTipsProps {
  isRtl: boolean;
}

export default function SafetyTips({ isRtl }: SafetyTipsProps) {
  
  // High-fidelity custom category vector badges to represent different roles
  const renderCategoryDecoration = (roleId: string) => {
    const sizeClasses = "w-8 h-8 text-sky-600";
    switch (roleId) {
      case 'doctors':
        return (
          <div className="p-3 bg-red-50 rounded-2xl border border-red-100 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 text-red-500">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M12 5v14M9 12h6" />
            </svg>
          </div>
        );
      case 'nurses':
        return (
          <div className="p-3 bg-teal-50 rounded-2xl border border-teal-100 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 text-teal-600">
              <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5 M12 2C8.13 2 5 5.13 5 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7Z" />
              <path d="M12 6v6M10 9h4" />
            </svg>
          </div>
        );
      case 'administrators':
        return (
          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 text-amber-600">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
        );
      case 'security':
        return (
          <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 text-blue-600">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
              <path d="m9 11 2 2 4-4" />
            </svg>
          </div>
        );
      case 'others':
        return (
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 text-slate-600">
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12a4 4 0 0 1-8 0" />
              <path d="M12 14v4M12 6v4M8 10h8" />
            </svg>
          </div>
        );
      default:
        return <User className={sizeClasses} />;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto p-6 md:p-8 space-y-10">
      
      {/* Custom customizable logo header info */}
      <div className="flex flex-row items-center justify-center gap-3 w-full">
        {/* Banner matching Slide 1 design */}
        <div className="flex-1 bg-sky-600 text-white py-2 px-4 rounded-full shadow-lg border border-sky-500 flex flex-col items-center justify-center min-w-0">
          <h2 className="text-base sm:text-lg md:text-xl font-black tracking-wide font-sans text-white text-center leading-tight">
            نصائح السلامة أثناء الطوارئ
          </h2>
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-sky-100 uppercase font-sans mt-0.5 text-center">
            Emergency safety tips
          </span>
        </div>
        
        {/* Logo slightly larger and placed on the left. In RTL, placing it second in rendering tree places it on the left (West side). */}
        <FmsLogo size={74} hideText={true} className="shrink-0" />
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 1: GENERAL SAFETY INSTRUCTIONS / تعليمات السلامة العامة */}
      <div className="space-y-4">
        <div className="text-center font-black text-lg text-rose-750 font-sans border-b border-rose-100 pb-2 text-balance" style={{ textWrap: 'balance' }}>
          تعليمات السلامة العامة / General safety instructions
        </div>

        {/* 双栏对齐 - Two Columns split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-slate-50/40">
          
          {/* Left panel (English - LTR) */}
          <div className="p-6 space-y-3 font-sans text-left border-b md:border-b-0 md:border-r border-slate-200">
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

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 2: RESPONSIBILITIES DURING EMERGENCY / المسؤوليات أثناء الطوارئ */}
      <div className="space-y-6">
        <div className="text-center font-black text-lg text-rose-750 font-sans border-b border-rose-100 pb-2 text-balance" style={{ textWrap: 'balance' }}>
          المسؤوليات أثناء الطوارئ / Responsibilities during an emergency
        </div>

        {/* Roles Table List matching Slide 1 layout */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm divide-y divide-slate-100 bg-white">
          
          {roleResponsibilities.map((role) => (
            <div 
              key={role.id}
              className="group flex flex-col md:flex-row items-stretch hover:bg-slate-50/70 transition-colors"
            >
              
              {/* Category Name Column Box - styled blue label with drawing icon */}
              <div className="w-full md:w-64 bg-slate-50/50 p-5 border-b md:border-b-0 md:border-r border-slate-200/60 flex items-center gap-4 shrink-0">
                {renderCategoryDecoration(role.id)}
                <div className="font-sans text-right">
                  <div className="font-black text-slate-900 text-sm md:text-base leading-tight">
                    {role.titleAr}
                  </div>
                  <div className="font-bold text-sky-700 text-xs md:text-sm mt-0.5 tracking-tight uppercase font-mono">
                    {role.titleEn}
                  </div>
                </div>
              </div>

              {/* Main Responsibilities Bullet list containing both Arabic and English */}
              <div className="grow p-5 space-y-4">
                
                {/* 1. Arabic Bullet */}
                <div className="space-y-2 dir-rtl text-right">
                  {role.bulletsAr.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <span className="text-sky-600 font-bold shrink-0 mt-0.5">-</span>
                      <p className="text-xs md:text-sm font-bold text-slate-800 leading-relaxed text-balance" style={{ textWrap: 'balance' }}>
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Light visual divider inside cell */}
                <div className="border-t border-slate-100 my-2" />

                {/* 2. English Bullet */}
                <div className="space-y-2 text-left">
                  {role.bulletsEn.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <span className="text-sky-600 font-bold shrink-0 mt-0.5">-</span>
                      <p className="text-xs md:text-sm font-bold text-slate-800 leading-relaxed font-sans text-balance" style={{ textWrap: 'balance' }}>
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
export { SafetyTips };
