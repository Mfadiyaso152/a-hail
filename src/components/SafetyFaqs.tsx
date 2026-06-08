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
            الأسئلة الشائعة حول السلامة
          </h2>
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-sky-100 uppercase font-sans mt-0.5 text-center">
            Safety FAQ
          </span>
         </div>
      </div>

      {/* FAQs Solid Table Grid matching Image 3 structure */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
        
        {/* Column Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-white font-extrabold text-sm md:text-base border-b border-sky-600">
          {/* Right Column Header (Arabic) */}
          <div className="bg-sky-500 py-3.5 px-6 text-right dir-rtl leading-none flex items-center justify-start">
            الأسئلة الشائعة والأجوبة
          </div>

          {/* Left Column Header (English) - with right border for spacer */}
          <div className="bg-sky-500 text-left py-3.5 px-6 border-t md:border-t-0 md:border-r border-sky-600 tracking-wider flex items-center justify-start">
            Frequently Asked Questions & Answers
          </div>
        </div>

        {/* FAQ Rows split symmetrically */}
        <div className="divide-y divide-slate-200">
          {safetyFaqs.map((faq, index) => (
            <div 
              key={index}
              id={`faq-item-row-${index}`}
              className="grid grid-cols-1 md:grid-cols-2 hover:bg-slate-50/50 transition-colors"
            >
              {/* Right Cell (Arabic Q&A - RTL/Cairo) */}
              <div className="p-5.5 space-y-2 text-right dir-rtl font-sans">
                <div className="flex items-start gap-2 text-rose-700 font-black text-xs md:text-sm">
                  <FileQuestion className="w-4.5 h-4.5 text-sky-600 shrink-0 mt-0.5" />
                  <h4 className="leading-tight select-all text-balance" style={{ textWrap: 'balance' }}>
                    {faq.questionAr}
                  </h4>
                </div>
                <p className="text-xs md:text-sm font-bold text-slate-850 pr-6.5 leading-relaxed select-all text-balance" style={{ textWrap: 'balance' }}>
                  {faq.answerAr}
                </p>
              </div>

              {/* Left Cell (English Q&A - LTR) - WITH VERTICAL BORDER DIVIDER */}
              <div className="p-5.5 space-y-2 text-left border-t md:border-t-0 md:border-r border-slate-200">
                <div className="flex items-start gap-2 text-rose-700 font-extrabold text-xs md:text-sm">
                  <FileQuestion className="w-4.5 h-4.5 text-sky-600 shrink-0 mt-0.5" />
                  <h4 className="leading-tight select-all text-balance" style={{ textWrap: 'balance' }}>
                    {faq.questionEn}
                  </h4>
                </div>
                <p className="text-xs md:text-sm font-bold text-slate-850 pl-6.5 leading-relaxed select-all text-balance" style={{ textWrap: 'balance' }}>
                  {faq.answerEn}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
export { SafetyFaqs };
