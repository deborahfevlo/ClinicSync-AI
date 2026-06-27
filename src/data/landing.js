/* 
  Components import what they need and render it.
   To edit copy, pricing, FAQs, stats — change ONLY this file.
*/

// ── Hero ──────────────────────────────────────────────────────
export const HERO = {
  eyebrow:         "AI-Powered Healthcare Management",
  headline:        "Reduce Unnecessary ER Visits with AI",
  accentPhrase:    "ER Visits",                           // rendered in brand colour
  subtext:         "Help patients assess symptoms before visiting. Help clinics manage patient flow intelligently to reduce congestion and improve care.",
  primaryCta:      { label: "Start Free Trial",   href: "/register"    },
  secondaryCta:    { label: "See How It Works",   href: "#how-it-works" },
};

// ── Trusted-by logos ──────────────────────────────────────────
export const CLINIC_LOGOS = [
  { name: "37 Millitary Hospital", src: "/logos/37_Millitary_logo.png" },
  { name: "37 Military", src: "/logos/Kath_logo.jpeg" },
  { name: "Korle Bu", src: "/logos/KorleBu_logo.png" },
];

// ── Core AI features ──────────────────────────────────────────
/** @type {import("@/types").Feature[]} */
export const FEATURES = [
  {
    icon:  "🧠",
    title: "NLP Symptom Analysis",
    desc:  "Patients describe symptoms naturally. The AI extracts key indicators, duration, and severity — no forms to fill in.",
  },
  {
    icon:  "🎯",
    title: "Instant Risk Assessment",
    desc:  "Every submission returns a colour-coded risk level — low, moderate, or high — with a clear recommended action in under 2 seconds.",
  },
  {
    icon:  "📅",
    title: "Predictive Scheduling",
    desc:  "Historical attendance trains the model to predict peak times and surface the optimal booking slot for each patient.",
  },
  {
    icon:  "⚡",
    title: "Real-Time Alerts",
    desc:  "Doctors receive instant flags when a patient reports high-risk symptoms — before they walk through the door.",
  },
];

// ── Impact metrics ────────────────────────────────────────────
/** @type {import("@/types").Stat[]} */
export const STATS = [
  { value: "35%", label: "Reduction in unnecessary ER visits"       },
  { value: "28%", label: "Reduction in average patient waiting time" },
  { value: "40%", label: "Better appointment distribution"           },
  { value: "20%", label: "Increase in early severe case detection"   },
];

// ── User type features ────────────────────────────────────────
export const USER_TYPES = [
  {
    role:     "For Patients",
    icon:     "🧑‍⚕️",
    headerBg: "bg-brand-light",
    features: [
      "Conversational symptom checker chatbot",
      "Colour-coded risk level results",
      "Smart booking at least-congested times",
      "Telemedicine option for moderate-risk cases",
      "Clear, calm guidance — no panic",
    ],
  },
  {
    role:     "For Doctors",
    icon:     "👨‍⚕️",
    headerBg: "bg-indigo-50",
    features: [
      "High-risk patient alerts before arrival",
      "Full patient symptom history dashboard",
      "Risk trend analytics per patient",
      "Human override for all AI decisions",
      "Predicted patient load for shift planning",
    ],
  },
  {
    role:     "For Administrators",
    icon:     "📊",
    headerBg: "bg-orange-50",
    features: [
      "Department congestion heatmaps",
      "Daily and weekly volume forecasts",
      "AI-powered appointment optimisation",
      "Seasonal illness trend detection",
      "Resource allocation recommendations",
    ],
  },
];

// ── How it works steps ────────────────────────────────────────
export const HOW_IT_WORKS_STEPS = [
  {
    num:   "01",
    title: "Describe Your Symptoms",
    desc:  "Type or speak your symptoms into the AI chatbot. It understands natural language — no forms to fill in.",
  },
  {
    num:   "02",
    title: "Get an Instant Assessment",
    desc:  "The AI returns a risk level — low, moderate, or high — with a clear recommended next action.",
  },
  {
    num:   "03",
    title: "Take the Right Action",
    desc:  "Book a smart appointment, start a telemedicine call, or get directed to emergency care if needed.",
  },
];

// ── Pricing plans ─────────────────────────────────────────────
/** @type {import("@/types").PricingPlan[]} */
export const PRICING_PLANS = [
  {
    name:     "Starter",
    price:    "$99",
    period:   "/month",
    desc:     "For small clinics getting started with AI-powered triage.",
    features: [
      "Up to 500 patient assessments / month",
      "Basic risk scoring",
      "Appointment scheduling",
      "Email support",
    ],
    cta:      "Get Started",
    featured: false,
  },
  {
    name:     "Professional",
    price:    "$299",
    period:   "/month",
    desc:     "For established clinics ready to fully optimise patient flow.",
    features: [
      "Unlimited patient assessments",
      "Advanced NLP symptom analysis",
      "Predictive scheduling engine",
      "Doctor and admin dashboards",
      "Real-time high-risk alerts",
      "Priority support",
    ],
    cta:      "Start Free Trial",
    featured: true,
  },
  {
    name:     "Enterprise",
    price:    "Custom",
    period:   "",
    desc:     "For hospital networks and multi-location facilities.",
    features: [
      "Everything in Professional",
      "Multi-location management",
      "Custom AI model training",
      "HL7 / FHIR integration",
      "Dedicated success manager",
      "SLA guarantee",
    ],
    cta:      "Contact Sales",
    featured: false,
  },
];

// ── Testimonials ──────────────────────────────────────────────
/** @type {import("@/types").Testimonial[]} */
export const TESTIMONIALS = [
  {
    quote:    "ClinicSync AI reduced our Monday morning overcrowding by 40% in the first month. Patients arrive pre-assessed and we can prioritise immediately.",
    name:     "Dr. Akosua Mensah",
    role:     "Medical Director, Trust Hospital",
    initials: "AM",
  },
  {
    quote:    "The high-risk alerts mean I am never caught off guard. I know what is coming before a patient walks through the door — that has changed how I work completely.",
    name:     "Dr. Kwame Asante",
    role:     "Senior Physician, Korle Bu Medical",
    initials: "KA",
  },
  {
    quote:    "Appointment distribution improved dramatically. Our afternoon slots are now as full as mornings. The predictive scheduling is remarkably accurate.",
    name:     "Abena Owusu",
    role:     "Clinic Administrator, Nyaho Medical",
    initials: "AO",
  },
];

// ── FAQ ───────────────────────────────────────────────────────
/** @type {import("@/types").FAQ[]} */
export const FAQS = [
  {
    q: "Does ClinicSync AI provide medical diagnoses?",
    a: "No. ClinicSync AI is a guidance and triage tool, not a diagnostic system. It helps patients understand the urgency of their symptoms and directs them to the appropriate level of care. All final decisions remain with qualified medical professionals.",
  },
  {
    q: "How does the AI risk scoring work?",
    a: "Patients describe their symptoms in natural language. The NLP model extracts key indicators — symptom type, severity, and duration. A trained risk model assigns a score that maps to low, moderate, or high risk, each with a specific recommended action.",
  },
  {
    q: "Is patient data secure?",
    a: "Yes. All patient data is encrypted at rest (AES-256) and in transit (TLS). We do not store symptom conversations beyond the session unless the patient explicitly opts in. A human override system ensures doctors remain in full control.",
  },
  {
    q: "How does predictive scheduling reduce wait times?",
    a: "The system analyses historical attendance patterns, time-of-day trends, and seasonal illness data. It surfaces the least-congested slots and balances load across departments — reducing peak-hour overcrowding significantly.",
  },
  {
    q: "Can ClinicSync integrate with our existing systems?",
    a: "Enterprise plans include HL7/FHIR integration for lab results and existing EHR systems. Telemedicine integration is available via Twilio or Jitsi. Our API is fully documented for custom integrations.",
  },
];

// ── Dashboard mockup data (Hero preview only) ─────────────────
export const MOCKUP_PATIENTS = [
  { name: "Ama Owusu",     risk: "high",     initials: "AO" },
  { name: "Kofi Mensah",   risk: "moderate", initials: "KM" },
  { name: "Abena Asante",  risk: "low",      initials: "AA" },
  { name: "Kwame Boateng", risk: "high",     initials: "KB" },
  { name: "Akua Frempong", risk: "moderate", initials: "AF" },
];

export const MOCKUP_STAT_CARDS = [
  { label: "Total Patients", value: "1,284", delta: "+12%", up: true  },
  { label: "High Risk",      value: "47",    delta: "+3",   up: false },
  { label: "Avg Wait Time",  value: "18 min", delta: "-28%", up: true  },
  { label: "ER Avoided",     value: "312",   delta: "+35%", up: true  },
];

export const MOCKUP_SIDEBAR_ITEMS = [
  { label: "Dashboard",    active: true  },
  { label: "Patients",     active: false },
  { label: "Appointments", active: false },
  { label: "Analytics",    active: false },
  { label: "Settings",     active: false },
];
