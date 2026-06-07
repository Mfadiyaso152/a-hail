/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface HealthClusterLogoProps {
  className?: string;
  size?: number;
  isRtl?: boolean;
}

export default function HealthClusterLogo({ className = '', size = 56, isRtl = true }: HealthClusterLogoProps) {
  return (
    <div className={`flex items-center gap-3.5 ${className} select-none`}>
      {/* High-fidelity custom SVG for the Specialty Dental Center logo emblem */}
      <svg
        id="specialty-dental-center-hail-logo-main"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform hover:scale-103 duration-300"
      >
        {/* Outer glowing border ring */}
        <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="42" fill="#f0fdf4" />

        {/* Clean, high-fidelity Dental motif (Elegant Dental Tooth with therapeutic leaf & medical cross) */}
        <path
          d="M 50,22 Q 62,22 66,34 Q 70,46 64,58 C 60,66 54,76 50,78 C 46,76 40,66 36,58 Q 30,46 34,34 Q 38,22 50,22 Z"
          fill="#10b981"
          opacity="0.25"
        />
        {/* Left side of Tooth crown */}
        <path
          d="M 50,25 C 44,25 41,29 40,35 C 38,44 42,54 44.5,61 C 45.5,64 47,74 48,77 C 48.5,78 49,78 49.5,76 C 50.5,72 52,62 50,58 C 48,54 46,50 47,44 C 48,38 49,32 50,25 Z"
          fill="#059669"
        />
        {/* Right side of Tooth crown */}
        <path
          d="M 50,25 C 56,25 59,29 60,35 C 62,44 58,54 55.5,61 C 54.5,64 53,74 52,77 C 51.5,78 51,78 50.5,76 C 49.5,72 48,62 50,58 C 52,58 54,50 53,44 C 52,38 51,32 50,25 Z"
          fill="#34d399"
        />
        {/* Dentistry sparkle star overlay */}
        <path
          d="M 50,33 L 52,38 L 57,40 L 52,42 L 50,47 L 48,42 L 43,40 L 48,38 Z"
          fill="#fafaf9"
          stroke="#f59e0b"
          strokeWidth="1.2"
        />
        {/* Golden Care Cross nestled on leaf base */}
        <path
          d="M 47,62 H 53 M 50,59 V 65"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Official Typography of مركز طب الأسنان التخصصي بحائل / Specialty Dental Center in Hail */}
      <div className={`flex flex-col ${isRtl ? 'text-right' : 'text-left'} font-sans`}>
        <span className="font-sans font-black text-emerald-950 text-base md:text-lg leading-tight tracking-tight">
          مركز طب الأسنان التخصصي بحائل
        </span>
        <span className="font-sans font-extrabold text-emerald-700 text-xs md:text-sm tracking-widest uppercase font-mono mt-0.5">
          Specialty Dental Center in Hail
        </span>
        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mt-px">
          {isRtl ? 'وزارة الصحة • المملكة العربية السعودية' : 'Ministry of Health • KSA'}
        </span>
      </div>
    </div>
  );
}

export { HealthClusterLogo };
