import { TESTIMONIALS } from "@/data/landing";
import SectionHeader    from "@/components/ui/SectionHeader";
import AnimateOnScroll  from "@/components/ui/AnimateOnScroll";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <SectionHeader
            tag="Testimonials"
            title="What Our Clients Say"
            sub=""
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, role, initials }, i) => (
            <AnimateOnScroll key={name} delay={i * 90}>
              <div className="bg-white rounded-2xl border border-gray-200 p-7 h-full">
                {/* Stars */}
                <div className="text-amber-400 text-sm tracking-widest mb-4">★★★★★</div>
                {/* Quote */}
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  &ldquo;{quote}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-xs font-semibold text-brand-dark shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="text-xs font-semibold">{name}</p>
                    <p className="text-xs text-gray-500">{role}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
