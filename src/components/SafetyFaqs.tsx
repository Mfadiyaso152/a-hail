/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { safetyFaqs } from '../data';

interface SafetyFaqsProps {
  isRtl: boolean;
}

export default function SafetyFaqs({ isRtl }: SafetyFaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto p-6 md:p-8 space-y-6">
      
      {/* Banner design */}
      <div className="flex flex-row items-center justify-center w-full">
        <div className="flex-1 bg-sky-600 text-white py-2.5 px-6 rounded-full shadow-lg border border-sky-500 flex flex-col items-center justify-center min-w-0">
          <h2 className="text-base sm:text-lg md:text-xl font-black tracking-wide font-sans text-white text-center leading-tight">
            {isRtl ? 'الأسئلة الشائعة حول السلامة' : 'Safety FAQs'}
          </h2>
        </div>
      </div>

      <div className="space-y-3">
        {safetyFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/40 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className={`w-full py-4 px-5 text-right font-sans flex items-start justify-between gap-3 cursor-pointer outline-none ${
                  isRtl ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex items-start gap-3 flex-1 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <HelpCircle className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-black text-slate-800 leading-snug">
                    {isRtl ? faq.questionAr : faq.questionEn}
                  </span>
                </div>
                <div className="shrink-0 mt-0.5 text-slate-400">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className={`px-5 pb-5 pt-1 border-t border-slate-100 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-bold">
                    {isRtl ? faq.answerAr : faq.answerEn}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { SafetyFaqs };
