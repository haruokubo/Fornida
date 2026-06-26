"use client";

import { useState } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "help-desk",
    num: "01",
    icon: "🖥️",
    title: "Help Desk & IT Support",
    tagline: "Your team's tech problems solved — fast.",
    description:
      "From password resets to full device rollouts, our Help Desk team handles it all. Nationwide on-site visits, SLA-backed ticketing, and proactive patch management so you're never caught off guard.",
    features: [
      { title: "User & Device Support", desc: "End-user troubleshooting, hardware/software issues resolved remotely or on-site." },
      { title: "On-Site Visits Nationwide", desc: "Field technicians dispatched across the US when remote support isn't enough." },
      { title: "SLA-Backed Ticketing", desc: "Every ticket tracked with defined response and resolution time commitments." },
      { title: "Patch Management", desc: "OS and application patches applied on schedule — no manual tracking required." },
      { title: "Device Lifecycle", desc: "Procurement, imaging, deployment, and decommission handled end-to-end." },
      { title: "24/7 Emergency Line", desc: "Critical issues don't wait for business hours. Neither do we." },
    ],
    accent: "#52525b",
    accentBg: "rgba(82,82,91,0.08)",
    accentBorder: "rgba(82,82,91,0.35)",
  },
  {
    id: "cybersecurity",
    num: "02",
    icon: "🔒",
    title: "Cybersecurity & SOC",
    tagline: "Enterprise-grade defense. SMB price.",
    description:
      "We built our security practice after experiencing wire fraud firsthand in 2018. That wake-up call shaped everything — from how we monitor endpoints to how we respond to incidents at 2 AM.",
    features: [
      { title: "Endpoint Detection & Response", desc: "SentinelOne-powered EDR across all devices — real-time threat detection and automated rollback." },
      { title: "Email & Identity Security", desc: "Anti-phishing, BEC protection, MFA enforcement, and Microsoft Entra ID governance." },
      { title: "24/7 SOC Monitoring", desc: "Round-the-clock Security Operations Center. Human analysts, not just alerts." },
      { title: "Backup & Disaster Recovery", desc: "Immutable backups with tested restore procedures. RPO and RTO defined upfront." },
      { title: "AI Governance", desc: "Policy framework for AI tool usage — preventing shadow AI data leakage before it happens." },
      { title: "Incident Response", desc: "Containment, forensics, remediation, and post-incident reporting. We've been there." },
    ],
    accent: "#52525b",
    accentBg: "rgba(82,82,91,0.08)",
    accentBorder: "rgba(82,82,91,0.35)",
  },
  {
    id: "ai-advantage",
    num: "03",
    icon: "⚡",
    title: "AI Advantage",
    tagline: "Automate the work that's slowing you down.",
    description:
      "In 2024, we rebuilt our entire internal operations platform using AI in 3 months. Now we do the same for clients — starting with a free quick-win automation to prove the value before any commitment.",
    features: [
      { title: "Free Quick-Win Automation", desc: "We identify and build one automation for free within 2 hours. No contracts required to start." },
      { title: "Data Cleanup & Organization", desc: "Structured cleanup of business files, SharePoint, and shared drives so AI tools actually work." },
      { title: "Multi-Tool AI Training", desc: "Hands-on training for Copilot, ChatGPT, Claude, and Grok — tailored to your team's workflows." },
      { title: "Accounting Workflows", desc: "AP processing, invoicing, and reconciliation automated to cut manual hours." },
      { title: "Employee Onboarding", desc: "Automated provisioning, document collection, and system access from day one." },
      { title: "Operations Reporting", desc: "KPI dashboards and automated alerts replacing manual spreadsheet pulls." },
    ],
    accent: "#52525b",
    accentBg: "rgba(82,82,91,0.08)",
    accentBorder: "rgba(82,82,91,0.35)",
  },
];

const QUICK_WINS = [
  { icon: "📊", label: "AP & Invoicing Automation" },
  { icon: "🛒", label: "Procurement & PO Workflows" },
  { icon: "👤", label: "Employee Onboarding" },
  { icon: "📈", label: "KPI Reporting & Alerts" },
];

// ─── Service Card ───────────────────────────────────────────────────────────
function ServiceSection({ svc, index }: { svc: typeof SERVICES[0]; index: number }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  const isEven = index % 2 === 0;

  return (
    <section
      id={svc.id}
      className={`py-20 px-6 border-b border-gray-200 ${isEven ? "bg-white" : "bg-slate-300"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${!isEven ? "lg:flex lg:flex-row-reverse" : ""}`}>

          {/* Left — text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-black px-3 py-1.5 rounded-full border"
                style={{ color: svc.accent, background: svc.accentBg, borderColor: svc.accentBorder }}
              >
                {svc.num}
              </span>
              <span className="text-2xl">{svc.icon}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3 text-zinc-900">{svc.title}</h2>
            <p className="font-semibold mb-5" style={{ color: svc.accent }}>{svc.tagline}</p>
            <p className="text-zinc-500 text-lg leading-relaxed mb-8">{svc.description}</p>

            <a
              href="/#assessment"
              className="inline-block bg-zinc-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a free assessment →
            </a>
          </div>

          {/* Right — feature list */}
          <div className="flex flex-col gap-3">
            {svc.features.map((f, i) => (
              <button
                key={f.title}
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full text-left rounded-xl p-5 transition-all group border"
                style={{
                  background: expanded === i ? svc.accentBg : "#ffffff",
                  borderColor: expanded === i ? svc.accentBorder : "#e5e7eb",
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-sm text-zinc-900">{f.title}</span>
                  <span
                    className="text-lg flex-shrink-0 transition-transform duration-200"
                    style={{
                      color: svc.accent,
                      transform: expanded === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </div>
                {expanded === i && (
                  <p className="text-zinc-500 text-sm leading-relaxed mt-3">{f.desc}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <main className="bg-slate-300 text-zinc-900 min-h-screen">

      {/* ── NAV ───────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-slate-300/90 backdrop-blur-md border-b border-gray-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/fornida-mark.png" alt="Fornida" className="h-8 w-auto" />
            <span className="text-zinc-900 text-xl font-black tracking-tight">FORNIDA</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-sm text-zinc-900 font-semibold border-b border-zinc-700 pb-0.5">Services</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Case Studies</a>
            <a href="/insights" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Insights</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">About</a>
            <a href="/shop" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Shop</a>
          </div>
          <a href="/#assessment" className="bg-zinc-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors">
            Book Assessment →
          </a>
        </div>
      </nav>

      {/* ── HEADER ────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-gray-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(82,82,91,0.08),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <p className="text-zinc-900 text-xs font-bold uppercase tracking-widest mb-4">What We Deliver</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-5 text-zinc-900">
            IT. Security. AI.<br />
            <span className="text-zinc-500">One team. No gaps.</span>
          </h1>
          <p className="text-zinc-500 text-xl max-w-2xl leading-relaxed mb-10">
            Most businesses juggle three vendors and still fall through the cracks. Fornida covers all three layers with a single accountable team — and full context on your environment.
          </p>

          {/* Jump links */}
          <div className="flex flex-wrap gap-3">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 border border-gray-200 text-sm text-zinc-600 px-4 py-2 rounded-lg hover:border-zinc-300/50 hover:text-zinc-900 transition-all bg-white shadow-sm"
              >
                <span>{s.icon}</span>
                <span>{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICE SECTIONS ──────────────────────────── */}
      {SERVICES.map((svc, i) => (
        <ServiceSection key={svc.id} svc={svc} index={i} />
      ))}

      {/* ── QUICK WIN CALLOUT ─────────────────────────── */}
      <section className="py-20 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-zinc-900 text-xs font-bold uppercase tracking-widest mb-4">Free Offer</p>
              <h2 className="text-4xl font-black tracking-tight mb-4 text-zinc-900">
                The 2-hour rule:<br />
                <span className="text-gray-500">one automation, on us.</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                We'll identify your biggest manual bottleneck and build the first automation in under 2 hours — free, no commitment. If it saves you time, we talk about what's next.
              </p>
              <a
                href="/#assessment"
                className="inline-block bg-zinc-700 text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-[1.02]"
              >
                Claim your free quick win →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {QUICK_WINS.map((q) => (
                <div
                  key={q.label}
                  className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm text-center hover:border-zinc-300/50 hover:-translate-y-1 transition-all"
                >
                  <div className="text-3xl mb-3">{q.icon}</div>
                  <div className="text-sm font-semibold text-zinc-700">{q.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────── */}
      <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-slate-100 via-slate-100 to-slate-300">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(82,82,91,0.08),transparent)]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black tracking-tight mb-4 text-zinc-900">Ready to consolidate your IT?</h2>
          <p className="text-zinc-600 text-lg mb-10">
            One conversation. We'll show you exactly what's exposed, what's manual, and what AI can fix — in 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#assessment"
              className="bg-zinc-700 text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-[1.02]"
            >
              Book free assessment →
            </a>
            <a
              href="mailto:info@fornida.com"
              className="border border-gray-300 text-zinc-700 font-semibold text-base px-8 py-4 rounded-xl hover:bg-gray-50 transition-all"
            >
              Email us directly
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer className="border-t border-zinc-800 bg-zinc-900 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <span className="text-zinc-900 font-black">FORNIDA</span>
          <span className="text-zinc-500 text-xs">© 2026 Fornida LLC · 2609 Technology Dr, Suite 300, Plano, TX 75074</span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "MSA"].map((l) => (
              <a key={l} href="#" className="text-zinc-500 text-xs hover:text-zinc-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
