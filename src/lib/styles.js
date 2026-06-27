/* ─────────────────────────────────────────────────────────────────
   src/lib/styles.js

   WHY this file still exists even with Tailwind:
   Tailwind classes cover 95% of our styling. But some places
   still need raw hex values:
     - SVG attributes (fill, stroke)  — Tailwind can't style these
     - Dynamic inline styles          — e.g. opacity/transform driven by JS state
     - The RISK_DISPLAY map           — risk badge colours based on runtime data

   Everything else → Tailwind className.
───────────────────────────────────────────────────────────────── */

// ── Brand colour tokens (hex) ─────────────────────────────────
// These match tailwind.config.js exactly.
// Use for: SVG fill/stroke, dynamic style props, JS colour logic.
export const T = {
  teal:      "#1D9E75",   // brand.DEFAULT
  tealLight: "#E1F5EE",   // brand.light
  tealDark:  "#0F6E56",   // brand.dark
  navy:      "#0D1B2A",   // navy
  gray100:   "#F3F4F6",
  gray200:   "#E5E7EB",
  gray500:   "#6B7280",
  gray900:   "#111827",
};

// ── Risk level display map ────────────────────────────────────
// Used wherever a risk badge renders — keeps colours consistent.
// bg/text are raw hex because the value is dynamic (patient.riskLevel).
/** @type {Record<import("@/types").RiskLevel, { bg: string, text: string, label: string }>} */
export const RISK_DISPLAY = {
  high:     { bg: "#FECACA", text: "#991B1B", label: "High Risk"     },
  moderate: { bg: "#FEF3C7", text: "#92400E", label: "Moderate Risk" },
  low:      { bg: "#D1FAE5", text: "#065F46", label: "Low Risk"      },
};
