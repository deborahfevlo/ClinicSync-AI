/*
   Every link in the app lives here. Navbar, Footer, Sidebar,
   and PatientNavbar all import from this single file.
*/

/** Landing page anchor links — scroll to section on the home page */
export const LANDING_NAV_LINKS = [
  { label: "Features",     href: "/features"      },
  { label: "How It Works", href: "/howitworks"  },
  { label: "Pricing",      href: "/pricing"       },
  { label: "For Clinics",  href: "/clinics" },
];

/** Auth routes */
export const AUTH_ROUTES = {
  login:    "/login",
  register: "/register",
};

/** Patient-facing app links */
export const PATIENT_NAV_LINKS = [
  { label: "Symptom Checker",  href: "/chatbot"      },
  { label: "Book Appointment", href: "/booking"      },
  { label: "Telemedicine",     href: "/telemedicine" },
  { label: "My Records",       href: "/records"      },
];

/** Dashboard sidebar links */
export const DASHBOARD_NAV_LINKS = [
  { label: "Dashboard",    href: "/dashboard",              icon: "⊞" },
  { label: "Patients",     href: "/dashboard/patients",     icon: "👤" },
  { label: "Appointments", href: "/dashboard/appointments", icon: "📅" },
  { label: "Analytics",    href: "/dashboard/analytics",    icon: "📊" },
  { label: "Settings",     href: "/dashboard/settings",     icon: "⚙"  },
];

/** Footer columns */
export const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Features",     href: "#features"     },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing",      href: "#pricing"      },
      { label: "Changelog",    href: "/changelog"    },
    ],
  },
  {
    heading: "For Clinics",
    links: [
      { label: "Administrators", href: "#team-features" },
      { label: "Doctors",        href: "#team-features" },
      { label: "Patients",       href: "#team-features" },
      { label: "Integrations",   href: "/integrations"  },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "/docs"         },
      { label: "API Reference", href: "/docs/api"     },
      { label: "Blog",          href: "/blog"         },
      { label: "Case Studies",  href: "/case-studies" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us",       href: "/about"   },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use",   href: "/terms"   },
      { label: "Contact",        href: "/contact" },
    ],
  },
];
