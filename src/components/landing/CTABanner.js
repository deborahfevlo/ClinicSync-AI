import Link            from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function CTABanner() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl font-semibold text-white tracking-tight leading-tight mb-4">
            Ready to Transform<br />
            <span className="text-brand">Healthcare Operations?</span>
          </h2>

          <p className="text-base text-white/55 leading-relaxed mb-9 max-w-lg mx-auto">
            Join leading clinics already reducing ER visits and wait times with ClinicSync AI.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Link
              href="/register"
              className="inline-flex items-center px-7 py-3.5 text-base font-medium text-white bg-brand rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Free Trial
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center px-7 py-3.5 text-base font-medium text-white border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
            >
              Schedule a Demo
            </Link>
          </div>

          <p className="text-xs text-white/30 mt-5">
            14-day free trial · No credit card required · Cancel anytime
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
