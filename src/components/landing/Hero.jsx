"use client";

import Link                from "next/link";
import { useEffect, useState } from "react";
import { HERO }            from "@/data/landing";
import DashboardMockup     from "./DashboardMockup";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  // Shared entrance style — JS drives opacity/transform
  const enter = (delay) => ({
    opacity:    mounted ? 1 : 0,
    transform:  mounted ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  /* Split headline so the accent phrase gets the brand colour */
  const before = HERO.headline.split(HERO.accentPhrase)[0];
  const after  = HERO.headline.split(HERO.accentPhrase)[1];

  return (
    <section className="bg-white pt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Eyebrow tag */}
        <div style={enter(0)} className="inline-flex items-center gap-1.5 bg-brand-light text-brand-dark rounded-full px-3.5 py-1.5 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
          {HERO.eyebrow}
        </div>

        {/* Headline */}
        <h1 style={enter(100)} className="text-5xl sm:text-[52px] font-semibold tracking-tight leading-[1.15] mb-5 max-w-2xl">
          {before}
          <span className="text-brand">{HERO.accentPhrase}</span>
          {after}
        </h1>

        {/* Sub-copy */}
        <p style={enter(200)} className="text-lg text-gray-500 leading-relaxed max-w-xl mb-9">
          {HERO.subtext}
        </p>

        {/* CTAs */}
        <div style={enter(280)} className="flex items-center gap-3 mb-16">
          <Link
            href={HERO.primaryCta.href}
            className="inline-flex items-center px-7 py-3.5 text-base font-medium text-white bg-brand rounded-lg hover:opacity-90 transition-opacity"
          >
            {HERO.primaryCta.label}
          </Link>
          <a
            href={HERO.secondaryCta.href}
            onClick={e => {
              e.preventDefault();
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-medium text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="text-brand font-bold text-xs">▶</span>
            {HERO.secondaryCta.label}
          </a>
        </div>

        {/* Dashboard mockup */}
        <div style={enter(360)} className="w-full">
          <DashboardMockup />
        </div>

      </div>
    </section>
  );
}
