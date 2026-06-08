/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HelpCircle, FileQuestion, ArrowRightLeft } from 'lucide-react';
import { safetyFaqs } from '../data';

interface SafetyFaqsProps {
  isRtl: boolean;
}

export default function SafetyFaqs({ isRtl }: SafetyFaqsProps) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto p-6 md:p-8 space-y-10">
      
      {/* Custom customizable logo header info */}
      <div className="flex flex-row items-center justify-center w-full">
        {/* Banner matching Slide 3 */}
        <div className="flex-1 bg-sky-600 text-white py-2.5 px-6 rounded-full shadow-lg border border-sky-500 flex flex-col items-center justify-center min-w-0">
          <h2 className="text-base sm:text-lg md:text-xl font-black tracking-wide font-sans text-white text-center leading-tight">
            {isRtl ? 'الأسئلة الشائعة حول السلامة' : 'Safety Frequently Asked Questions'}
          </h2>
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-sky-100 uppercase font-sans mt-0.5 text-center">
            {isRtl ? 'دليل إجابة استفسارات الأمان' : 'OFFICIAL HAIL HEALTH SAFETY ASSURANCE FAQ'}
          </span>
         </div>
      </div>

      {/* FAQs Solid Table Layout - Streamlined Single Column for Active Language */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
        
        {/* Column Header */}
        <div className="bg-sky-500 text-white font-extrabold text-sm md:text-base border-b border-sky-600 py-3.5 px-6 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-white shrink-0" />
          <span>
            {isRtl ? 'الأسئلة الشائعة والأجوبة الرسمية المعتمدة' : 'Official Emergency & Fire Guidance FAQs'}
          </span>
        </div>

        {/* FAQ Rows list conditionally rendered based on active language direction */}
        <div className="divide-y divide-slate-100">
          {safetyFaqs.map((faq, index) => (
            <div 
              key={index}
              id={`faq-item-row-${index}`}
            >
              {isRtl ? (
                /* Arabic Cell (RTL) */
                <div className="p-5 md:p-6 space-y-2 text-right font-sans hover:bg-slate-50/50 transition-colors" style={{ direction: 'rtl' }}>
                  <div className="flex items-start gap-2.5 text-rose-700 font-extrabold text-xs sm:text-sm md:text-base">
                    <FileQuestion className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <h4 className="leading-tight select-all text-balance font-black" style={{ textWrap: 'balance' }}>
                      {faq.questionAr}
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm font-bold text-slate-700 pr-7.5 leading-relaxed select-all text-balance font-sans" style={{ textWrap: 'balance' }}>
                    {faq.answerAr}
                  </p>
                </div>
              ) : (
                /* English Cell (LTR) */
                <div className="p-5 md:p-6 space-y-2 text-left font-sans hover:bg-slate-50/50 transition-colors" style={{ direction: 'ltr' }}>
                  <div className="flex items-start gap-2.5 text-rose-700 font-extrabold text-xs sm:text-sm md:text-base">
                    <FileQuestion className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <h4 className="leading-tight select-all text-balance font-black" style={{ textWrap: 'balance' }}>
                      {faq.questionEn}
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm font-bold text-slate-700 pl-7.5 leading-relaxed select-all text-balance font-sans" style={{ textWrap: 'balance' }}>
                    {faq.answerEn}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
export { SafetyFaqs };
