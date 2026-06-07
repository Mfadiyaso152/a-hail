/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';

interface FmsLogoProps {
  className?: string;
  size?: number;
  isRtl?: boolean;
  hideText?: boolean;
}

export default function FmsLogo({ className = '', size = 52, isRtl = true, hideText = false }: FmsLogoProps) {
  // Use a local image so the user can easily overwrite it with their own file
  const logoSrc = "/logo.png";

  const imgEl = (
    <img
      id="custom-clinic-logo-image"
      src={logoSrc}
      alt="Clinic Logo"
      style={{ width: size, height: size }}
      className="shrink-0 transition-transform active:scale-95 duration-300 object-contain rounded-xl"
      onError={(e) => {
        // Fallback to a nice premium dynamic vector medical dental ornament if logo.png hasn't been uploaded yet
        e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23ffffff' rx='30' stroke='%23059669' stroke-width='4'/><circle cx='50' cy='50' r='38' fill='%23f0fdf4'/><path d='M 50,22 Q 62,22 66,34 Q 70,46 64,58 C 60,66 54,76 50,78 C 46,76 40,66 36,58 Q 30,46 34,34 Q 38,22 50,22 Z' fill='%2310b981' opacity='0.25'/><path d='M 50,25 C 44,25 41,29 40,35 C 38,44 42,54 44.5,61 C 45.5,64 47,74 48,77 C 48.5,78 49,78 49.5,76 C 50.5,72 52,62 50,58 C 48,54 46,50 47,44 C 48,38 49,32 50,25 Z' fill='%23059669'/><path d='M 50,25 C 56,25 59,29 60,35 C 62,44 58,54 55.5,61 C 54.5,64 53,74 52,77 C 51.5,78 51,78 50.5,76 C 49.5,72 48,62 50,58 C 52,58 54,50 53,44 C 52,38 51,32 50,25 Z' fill='%2334d399'/><path d='M 50,33 L 52,38 L 57,40 L 52,42 L 50,47 L 48,42 L 43,40 L 48,38 Z' fill='%23fafaf9' stroke='%23f59e0b' stroke-width='1.2'/><path d='M 47,62 H 53 M 50,59 V 65' stroke='%23ffffff' stroke-width='2.5' stroke-linecap='round'/></svg>";
      }}
      referrerPolicy="no-referrer"
    />
  );

  if (hideText) {
    return (
      <div className={`${className} select-none flex items-center justify-center`}>
        {imgEl}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 ${className} select-none ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
      {imgEl}

      {/* Official Text & Dental Institution Label */}
      <div className={`flex flex-col ${isRtl ? 'text-right' : 'text-left'} font-sans`}>
        <span className="block font-black text-emerald-950 text-xs md:text-sm leading-tight tracking-tight">
          مركز طب الأسنان التخصصي بحائل
        </span>
        <span className="block font-semibold text-emerald-700 text-[9px] md:text-[10px] tracking-wider uppercase font-mono mt-0.5">
          Specialty Dental Center in Hail
        </span>
      </div>
    </div>
  );
}

export { FmsLogo };
