"use client";

const NAV = () => (
  <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="/" className="flex items-center gap-2">
        <img src="/fornida-mark.png" alt="Fornida" className="h-8 w-auto" />
        <span className="text-black text-xl font-black tracking-tight">FORNIDA</span>
      </a>
      <div className="hidden md:flex items-center gap-8">
        <a href="/services" className="text-sm text-black font-semibold border-b border-black pb-0.5">Services</a>
        <a href="/case-studies" className="text-sm text-gray-500 hover:text-black transition-colors">Case Studies</a>
        <a href="/insights" className="text-sm text-gray-500 hover:text-black transition-colors">Insights</a>
        <a href="/#about" className="text-sm text-gray-500 hover:text-black transition-colors">About</a>
        <a href="/shop" className="text-sm text-gray-500 hover:text-black transition-colors">Shop</a>
      </div>
      <a href="/#assessment" className="bg-black text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
        Book Assessment →
      </a>
    </div>
  </nav>
);

export default function AIAdvantagePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <NAV />

      {/* HERO */}
      <section className="relative border-b border-gray-200 overflow-hidden">
        <img
          src="https://fornida.com/assets/facility/noc-dashboard.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center opacity-10"
        />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">SERVICE / 03</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.02] mb-6 max-w-4xl">
            We teach you to fish.{" "}
            <em className="not-italic text-teal-500">And we're a call away.</em>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-10">
            AI governance, practical automation, team training, and on-call support — so your business actually uses AI instead of just talking about it.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#assessment" className="bg-black text-white font-bold px-7 py-3.5 rounded-xl hover:bg-gray-900 transition-all text-sm">
              Book AI Readiness Assessment →
            </a>
            <a href="/services" className="border border-gray-300 text-gray-600 font-semibold px-7 py-3.5 rounded-xl hover:border-black hover:text-black transition-all text-sm">
              See All Services
            </a>
          </div>
        </div>
      </section>

      {/* 01 REALITY */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-gray-100">
        <div className="mb-10">
          <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">01 / Reality</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3">
            AI is already inside your business.<br />Most owners just don't see it yet.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
          {[
            { num: "01", title: "Personal AI accounts on company data", desc: "Employees are pasting sensitive data into unmonitored tools with terms of service the company never reviewed." },
            { num: "02", title: "No policy in place", desc: "Missing governance, approved-tools list, identity-bound access, and audit trail. Usage is happening without rules." },
            { num: "03", title: "Messy data foundation", desc: "No consolidated repository means LLM workflows hallucinate, fail, or pull from the wrong version of everything." },
          ].map((item, i) => (
            <div key={item.num} className={`p-8 ${i < 2 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`}>
              <span className="text-gray-300 text-xs font-mono">{item.num}</span>
              <h3 className="text-lg font-black mt-3 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 02 OPERATING MODEL */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-10">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">02 / Operating Model</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3">Four stages to real AI leverage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stage: "STAGE 01", label: "Policy · Govern", items: ["AI usage policy", "Approved-tools list", "Identity-bound access", "Sensitive-data controls", "Audit logging", "Ongoing review"] },
              { stage: "STAGE 02", label: "Foundation · Secure", items: ["Endpoint management", "Identity & MFA", "Email security", "Backups", "Cybersecurity monitoring", "Recovery readiness"] },
              { stage: "STAGE 03", label: "Readiness · Clean", items: ["Data consolidation into one repository", "Clear ownership", "Sensible permissions", "LLM-usable SOPs"] },
              { stage: "STAGE 04", label: "Leverage · Automate", items: ["Copilot & Power Automate", "ChatGPT workflows", "Claude integrations", "Custom lightweight tools"] },
            ].map((s) => (
              <div key={s.stage} className="bg-white border border-gray-200 rounded-xl p-6">
                <span className="text-teal-500 text-xs font-mono uppercase tracking-widest">{s.stage}</span>
                <h3 className="text-base font-black mt-2 mb-4">{s.label}</h3>
                <ul className="flex flex-col gap-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-teal-500 font-mono mt-0.5">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 WORKSHOPS */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-gray-100">
        <div className="mb-10">
          <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">03 / AI Workshops</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3">
            Teaching practical AI — not slide decks.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { code: "WORKSHOP/01", title: "AI Foundations", desc: "LLM capabilities and limitations, safe approved-tool usage, company policy application, and hands-on practice." },
            { code: "WORKSHOP/02", title: "Role-Based Training", desc: "Function-specific sessions for finance, ops, sales, and HR with role-relevant tasks, prompts, and workflows." },
            { code: "WORKSHOP/03", title: "Prompt Engineering", desc: "Practical prompting, reusable templates, and review loops for Copilot, ChatGPT, Claude, and tool-specific best practices." },
          ].map((s) => (
            <div key={s.code} className="border border-gray-200 rounded-xl p-6">
              <span className="text-teal-500 text-xs font-mono uppercase tracking-widest">{s.code}</span>
              <h3 className="text-base font-black mt-2 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 border border-gray-200 rounded-xl p-6 bg-gray-50">
          <p className="text-gray-400 text-xs font-mono uppercase tracking-widest mb-4">Delivery Options</p>
          <div className="flex flex-wrap gap-3">
            {["On-site half-day", "On-site full-day", "Remote / virtual", "Ongoing monthly sessions", "Manager train-the-trainer", "Custom curriculum"].map((d) => (
              <span key={d} className="text-sm text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-lg">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 04 REAL RESULTS */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-10">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">04 / Real Results</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3">
              Workflows we've already rebuilt.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { case: "CASE 01 · Finance Ops", before: "20 hrs/week manual reconciliation", after: "30 min AI-assisted review", detail: "Workflows mapped, data structured, human review retained in loop." },
              { case: "CASE 02 · Sales Ops", before: "Days of spreadsheet work per commission cycle", after: "Minutes to generate commission reports", detail: "Removes repetitive admin drag. Math becomes objective and traceable." },
              { case: "CASE 03 · Operations", before: "1–2 days manual review per purchasing cycle", after: "15 min red/orange/green recommendations", detail: "Team reviews prioritized recommendations instead of raw analysis." },
              { case: "CASE 04 · Client Visibility", before: "No real-time client view of tickets or KPIs", after: "Client portal built over one weekend", detail: "Operational visibility as a client-facing advantage." },
            ].map((c) => (
              <div key={c.case} className="bg-white border border-gray-200 rounded-xl p-6">
                <span className="text-teal-500 text-xs font-mono uppercase tracking-widest">{c.case}</span>
                <div className="mt-4 grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Before</p>
                    <p className="text-gray-600 text-sm font-semibold">{c.before}</p>
                  </div>
                  <div>
                    <p className="text-teal-500 text-[10px] uppercase tracking-widest mb-1">After</p>
                    <p className="text-black text-sm font-bold">{c.after}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed border-t border-gray-100 pt-3">{c.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs text-center mt-8">Results vary by workflow complexity, data quality, and implementation scope.</p>
        </div>
      </section>

      {/* 05 THE RULE */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-gray-100">
        <div className="max-w-2xl">
          <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">05 / The Two-Hour Rule</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3 mb-5">
            Under 4 hours — we do it.<br />
            <em className="not-italic text-teal-500">Over 4 hours — we scope it.</em>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Any workflow that takes under four hours to build is handled directly inside the monthly engagement — no separate project, no additional billing. Over four hours, we issue a statement of work with timeline and pricing.
          </p>
          <p className="text-gray-500 leading-relaxed">
            This keeps small wins moving fast and keeps large projects honest. Most useful internal automations — a credit-card classifier, a quick dashboard, a workflow tweak — fit inside four hours once the data is clean.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          Start with an{" "}
          <em className="not-italic text-teal-500">AI Readiness Assessment.</em>
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Focused review of AI fit, governance priorities, data cleanup needs, and automation opportunities. No cost, no sales pressure.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/#assessment" className="bg-black text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-900 transition-all">
            Book AI Readiness Assessment →
          </a>
          <a href="/services" className="border border-gray-300 text-gray-600 font-semibold px-8 py-4 rounded-xl hover:border-black hover:text-black transition-all">
            See All Services
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <span className="text-black font-black">FORNIDA</span>
          <span className="text-gray-400 text-xs">© 2026 Fornida LLC · 2609 Technology Dr, Suite 300, Plano, TX 75074</span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "MSA"].map((l) => (
              <a key={l} href="#" className="text-gray-400 text-xs hover:text-black transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
