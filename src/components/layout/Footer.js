import Link                from "next/link";
import { FOOTER_COLUMNS }  from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">

        {/* ── Top: brand + link columns ── */}
        <div className="grid grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold leading-none">+</span>
              </div>
              <span className="text-white font-semibold text-sm">ClinicSync AI</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Reducing unnecessary ER visits and clinic wait times using AI.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/40 hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* ── Bottom: copyright ── */}
        <div className="border-t border-white/[0.07] pt-6 flex justify-between items-center">
          <span className="text-xs text-white/25">
            © 2025 ClinicSync AI. All rights reserved.
          </span>
          <span className="text-xs text-white/25">
            Built with Next.js · Powered by Anthropic AI
          </span>
        </div>

      </div>
    </footer>
  );
}
