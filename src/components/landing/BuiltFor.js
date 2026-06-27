import { FEATURES } from "@/data/landing";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function BuiltFor() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <SectionHeader
            tag="Core AI Features"
            title="Built for Modern Healthcare Operations"
            sub="Four AI layers working together to reduce unnecessary visits and improve clinic efficiency."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-4 gap-5">
          {FEATURES.map(({ icon, title, desc }, i) => (
            <AnimateOnScroll key={title} delay={i * 80}>
              
              {/* CARD */}
              <div className="group relative overflow-hidden bg-white rounded-xl border border-gray-200 p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">

                {/* light sweep effect */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-linear-to-r from-transparent via-white/40 to-transparent" />
                </div>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-brand-light flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
                  {icon}
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold mb-2 transition-colors duration-300 group-hover:text-gray-900">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed transition-colors duration-300 group-hover:text-gray-600">
                  {desc}
                </p>

              </div>

            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}