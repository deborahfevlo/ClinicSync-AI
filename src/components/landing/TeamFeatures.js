import { USER_TYPES } from "@/data/landing";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function TeamFeatures() {
  return (
    <section id="team-features" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <SectionHeader
            tag="Built For Everyone"
            title="Everything Your Healthcare Team Needs"
            sub="ClinicSync AI serves patients, doctors, and administrators — each with a tailored experience."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-3 gap-6">
          {USER_TYPES.map(({ role, icon, headerBg, features }, i) => (
            <AnimateOnScroll key={role} delay={i * 100}>
              
              {/* CARD */}
              <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">

                {/* Header */}
                <div className={`${headerBg} px-6 pt-6 pb-5 transition-transform duration-300 group-hover:scale-[1.02]`}>
                  <div className="text-3xl mb-2.5 transition-transform duration-300 group-hover:scale-110">
                    {icon}
                  </div>
                  <h3 className="text-base font-semibold">
                    {role}
                  </h3>
                </div>

                {/* Feature list */}
                <div className="px-6 py-5 space-y-3">
                  {features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-2.5 transition-all duration-300 group-hover:translate-x-0.5"
                    >
                      <span className="text-brand font-bold text-sm shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">
                        ✓
                      </span>

                      <span className="text-xs text-gray-500 leading-relaxed transition-colors duration-300 group-hover:text-gray-600">
                        {f}
                      </span>
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