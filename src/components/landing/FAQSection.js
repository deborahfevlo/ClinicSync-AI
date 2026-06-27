"use client";

import { useState }    from "react";
import { FAQS }        from "@/data/landing";
import SectionHeader   from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section className="py-24 bg-gray-50">
      {/* Narrower container — FAQ reads better at ~700px */}
      <div className="max-w-2xl mx-auto px-6">
        <AnimateOnScroll>
          <SectionHeader tag="FAQ" title="Frequently Asked Questions" sub="" />
        </AnimateOnScroll>

        <div className="space-y-2">
          {FAQS.map(({ q, a }, idx) => {
            const isOpen = openIdx === idx;
            return (
              <AnimateOnScroll key={idx} delay={idx * 50}>
                <div className={[
                  "bg-white rounded-xl overflow-hidden border transition-colors",
                  isOpen ? "border-brand" : "border-gray-200",
                ].join(" ")}>

                  {/* Question */}
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-transparent border-0 cursor-pointer"
                  >
                    <span className="text-sm font-medium">{q}</span>
                    <span
                      className="text-brand text-xl shrink-0 leading-none inline-block transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      +
                    </span>
                  </button>

                  {/* Answer — conditionally rendered */}
                  {isOpen && (
                    <div className="px-5 pb-4 pt-0 border-t border-gray-100 text-sm text-gray-500 leading-relaxed">
                      {a}
                    </div>
                  )}

                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
