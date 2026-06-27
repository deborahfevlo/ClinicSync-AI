"use client";

import Image from "next/image";
import { CLINIC_LOGOS } from "@/data/landing";

export default function LogoBar() {
  return (
    <section className="overflow-hidden border-y border-gray-200 bg-white py-6">
      <div className="flex w-max items-center gap-16 whitespace-nowrap animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
        
        {[...CLINIC_LOGOS, ...CLINIC_LOGOS].map((logo, index) => (
          <div key={`${logo.name}-${index}`} className="flex items-center">
            <Image
              src={logo.src}
              alt={logo.name}
              width={120}
              height={40}
              className="h-10 w-auto object-contain opacity-70 transition hover:opacity-100"
            />
          </div>
        ))}

      </div>
    </section>
  );
}