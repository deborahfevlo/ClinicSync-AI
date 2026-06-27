import Link            from "next/link";
import { PRICING_PLANS } from "@/data/landing";
import SectionHeader   from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <SectionHeader
            tag="Pricing"
            title="Simple, transparent pricing"
            sub="No hidden fees. 14-day free trial on all plans. Cancel anytime."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-3 gap-6 items-start">
          {PRICING_PLANS.map(({ name, price, period, desc, features, cta, featured }, i) => (
            <AnimateOnScroll key={name} delay={i * 80}>
              <div className={[
                "bg-white rounded-2xl p-7 relative",
                featured
                  ? "border-2 border-brand"
                  : "border border-gray-200",
              ].join(" ")}>

                {/* Most Popular badge */}
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-[11px] font-semibold px-3.5 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                )}

                {/* Plan info */}
                <div className="mb-5">
                  <p className="text-sm font-medium text-gray-500 mb-2">{name}</p>
                  <div className="flex items-baseline gap-0.5 mb-2">
                    <span className="text-4xl font-bold">{price}</span>
                    <span className="text-sm text-gray-500">{period}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>

                {/* CTA */}
                <Link
                  href="/register"
                  className={[
                    "block text-center w-full py-3 text-sm font-medium rounded-lg mb-5 transition-opacity hover:opacity-90",
                    featured
                      ? "bg-brand text-white"
                      : "border border-gray-200 text-gray-900 hover:bg-gray-50",
                  ].join(" ")}
                >
                  {cta}
                </Link>

                {/* Features */}
                <div className="border-t border-gray-200 pt-4 space-y-2.5">
                  {features.map(f => (
                    <div key={f} className="flex items-start gap-2">
                      <span className="text-brand text-xs shrink-0 mt-0.5">✓</span>
                      <span className="text-xs text-gray-500">{f}</span>
                    </div>
                  ))}
                </div>

              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
