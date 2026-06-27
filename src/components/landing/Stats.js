import { STATS } from "@/data/landing";

export default function Stats() {
  return (
    <section className="bg-navy py-16 overflow-hidden">
      <div className="flex w-max items-center gap-16 whitespace-nowrap animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">

        {[...STATS, ...STATS].map(({ value, label }, i) => (
          <div key={`${label}-${i}`} className="text-center min-w-50">
            
            <div className="text-5xl font-bold text-brand mb-2">
              {value}
            </div>

            <div className="text-sm text-white/55 leading-relaxed">
              {label}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}