/* ═══════════════════════════════════════════════════════════════
   src/app/layout.js  —  Root layout

   Wraps every single page. Loads Inter font, sets metadata,
   imports global CSS (Tailwind directives live here).
   Keep this minimal — section-specific layouts handle their shells.
═══════════════════════════════════════════════════════════════ */

import "./globals.css";

export const metadata = {
  title:       { default: "ClinicSync AI", template: "%s | ClinicSync AI" },
  description: "Reducing unnecessary ER visits and clinic wait times using AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
