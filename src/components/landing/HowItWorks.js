import { HOW_IT_WORKS_STEPS } from "@/data/landing";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <AnimateOnScroll>
          <SectionHeader
            tag="Simple Process"
            title="Get started in 3 simple steps"
            sub="From first symptom to the right care — in minutes, not hours."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-3 gap-8 mt-12">
          {HOW_IT_WORKS_STEPS.map(({ num, title, desc }, i) => (
            <AnimateOnScroll key={num} delay={i * 120}>
              
              <div
                className="
                  text-center
                  relative
                  animate-[floatStep_6s_ease-in-out_infinite]
                "
              >
                
                {/* glowing number circle */}
                <div className="
                  w-14 h-14 rounded-full bg-brand text-white text-lg font-bold
                  flex items-center justify-center mx-auto mb-6
                  animate-[pulseSoft_3s_ease-in-out_infinite]
                  transition-transform duration-300
                ">
                  {num}
                </div>

                {/* title */}
                <h3 className="text-base font-semibold mb-3 transition-all duration-300">
                  {title}
                </h3>

                {/* description */}
                <p className="text-sm text-gray-500 leading-relaxed max-w-65 mx-auto">
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