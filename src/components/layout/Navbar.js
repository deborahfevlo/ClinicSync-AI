import Link                               from "next/link";
import { LANDING_NAV_LINKS, AUTH_ROUTES } from "@/data/navigation";
import NavScrollLink                      from "./NavScrollLink";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center h-16 gap-10">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
            <span className="text-white text-xl font-bold leading-none">+</span>
          </div>
          <span className="font-semibold text-base text-gray-900">ClinicSync AI</span>
        </Link>

        {/* ── Anchor nav links ── */}
        <div className="flex items-center gap-7 flex-1">
          {LANDING_NAV_LINKS.map(link => (
            <NavScrollLink key={link.label} href={link.href} label={link.label} />
          ))}
        </div>

        {/* ── Auth CTAs ── */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href={AUTH_ROUTES.login}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900  rounded-lg hover:bg-gray-50 transition-colors"
          >
            Log In
          </Link>
          <Link
            href={AUTH_ROUTES.register}
            className="inline-flex items-center px-4 py-3 text-sm font-medium text-white bg-brand rounded-full hover:opacity-90 transition-opacity"
          >
            Get Started Free
          </Link>
        </div>

      </div>
    </nav>
  );
}
