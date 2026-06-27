import { MOCKUP_PATIENTS,MOCKUP_STAT_CARDS,MOCKUP_SIDEBAR_ITEMS,} from "@/data/landing";
import { T, RISK_DISPLAY } from "@/lib/styles";

export default function DashboardMockup() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.09)]">
      <BrowserChrome />
      <div className="flex h-95">
        <Sidebar />
        <MainArea />
      </div>
    </div>
  );
}



function BrowserChrome() {
  return (
    <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
      <div className="w-2.5 h-2.5 rounded-full bg-red-400"  />
      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"/>
      <div className="w-2.5 h-2.5 rounded-full bg-green-400"/>
      <div className="flex-1 max-w-55 mx-auto bg-white rounded-md px-3 py-1 text-[11px] text-gray-500 text-center">
        clinicsync.ai/dashboard
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="w-48 bg-navy shrink-0 py-4">
      {/* Logo row */}
      <div className="flex items-center gap-2 px-4 pb-3 border-b border-white/[0.07] mb-2">
        <div className="w-6 h-6 bg-brand rounded-md flex items-center justify-center">
          <span className="text-white text-xs font-bold">+</span>
        </div>
        <span className="text-white text-xs font-semibold">ClinicSync</span>
      </div>
      {MOCKUP_SIDEBAR_ITEMS.map(({ label, active }) => (
        <div
          key={label}
          className={[
            "px-4 py-2 text-xs border-l-2",
            active
              ? "bg-brand/15 border-brand text-brand font-medium"
              : "border-transparent text-white/40",
          ].join(" ")}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

function MainArea() {
  return (
    <div className="flex-1 p-4 bg-white overflow-hidden">
      <StatCards />
      <div className="grid grid-cols-[1fr_148px] gap-2.5 h-[calc(100%-80px)]">
        <PatientList />
        <RiskChart />
      </div>
    </div>
  );
}

function StatCards() {
  return (
    <div className="grid grid-cols-4 gap-2.5 mb-3">
      {MOCKUP_STAT_CARDS.map(({ label, value, delta, up }) => (
        <div key={label} className="bg-gray-50 rounded-lg border border-gray-200 px-3 py-2.5">
          <div className="text-[10px] text-gray-500 mb-1">{label}</div>
          <div className="text-base font-semibold mb-0.5">{value}</div>
          <div className={`text-[10px] font-medium ${up ? "text-brand" : "text-red-500"}`}>{delta}</div>
        </div>
      ))}
    </div>
  );
}

function PatientList() {
  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-3 py-2 border-b border-gray-200 flex justify-between items-center bg-white">
        <span className="text-[11px] font-medium">High-Risk Patients</span>
        <span className="text-[10px] text-brand">View all →</span>
      </div>
      {MOCKUP_PATIENTS.map(({ name, risk, initials }) => (
        <div key={name} className="flex items-center gap-2.5 px-1.75 border-b border-gray-100 bg-white">
          <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-[9px] font-semibold text-brand-dark shrink-0">
            {initials}
          </div>
          <span className="flex-1 text-[11px]">{name}</span>
          {/* Risk badge — dynamic colour needs inline style */}
          <span
            className="text-[9px] font-medium px-1.5 py-0.5 rounded-full"
            style={{ background: RISK_DISPLAY[risk].bg, color: RISK_DISPLAY[risk].text }}
          >
            {risk}
          </span>
        </div>
      ))}
    </div>
  );
}

function RiskChart() {
  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 p-3 flex flex-col items-center justify-center gap-2.5">
      <p className="text-[10px] font-medium text-gray-500 text-center">Risk Distribution</p>

      {/* SVG donut — needs raw hex colours */}
      <svg viewBox="0 0 80 80" className="w-20 h-20">
        <circle cx="40" cy="40" r="30" fill="none" stroke={T.gray100}      strokeWidth="10" />
        <circle cx="40" cy="40" r="30" fill="none" stroke="#EF4444"        strokeWidth="10" strokeDasharray="47 142" strokeDashoffset="35"  strokeLinecap="round" />
        <circle cx="40" cy="40" r="30" fill="none" stroke="#F59E0B"        strokeWidth="10" strokeDasharray="50 142" strokeDashoffset="-12" strokeLinecap="round" />
        <circle cx="40" cy="40" r="30" fill="none" stroke={T.teal}         strokeWidth="10" strokeDasharray="45 142" strokeDashoffset="-62" strokeLinecap="round" />
        <text x="40" y="44" textAnchor="middle" fontSize="13" fontWeight="600" fill={T.gray900}>88%</text>
      </svg>

      <div className="w-full space-y-1">
        {[
          { label: "High",     colour: "#EF4444", pct: "33%" },
          { label: "Moderate", colour: "#F59E0B", pct: "35%" },
          { label: "Low",      colour: T.teal,    pct: "32%" },
        ].map(({ label, colour, pct }) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: colour }} />
            <span className="text-[9px] text-gray-500 flex-1">{label}</span>
            <span className="text-[9px] font-medium">{pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
