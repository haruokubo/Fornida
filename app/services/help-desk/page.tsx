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

export default function HelpDeskPage() {
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
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">SERVICE / 01</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.02] mb-6 max-w-4xl">
            Fast, human IT support for{" "}
            <em className="not-italic text-teal-500">everyday business issues.</em>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-10">
            Fornida delivers responsive support for users, devices, systems, vendors, and daily technology problems impacting productivity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#assessment" className="bg-black text-white font-bold px-7 py-3.5 rounded-xl hover:bg-gray-900 transition-all text-sm">
              Book Assessment →
            </a>
            <a href="/services" className="border border-gray-300 text-gray-600 font-semibold px-7 py-3.5 rounded-xl hover:border-black hover:text-black transition-all text-sm">
              See All Services
            </a>
          </div>
        </div>
      </section>

      {/* 01 WHY IT MATTERS */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-gray-100">
        <div className="mb-10">
          <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">01 / Why It Matters</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3">
            Your team should not lose hours<br />fighting technology.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
          {[
            { num: "01", title: "Employees blocked by everyday IT issues", desc: "Password problems, device issues, and email trouble create productivity drag that compounds across the whole team." },
            { num: "02", title: "Internal staff stuck playing accidental IT support", desc: "Capable employees become organizational bottlenecks when IT ownership isn't clear. Their real work suffers." },
            { num: "03", title: "Slow vendor handoffs and unclear ownership", desc: "Multi-vendor environments create resolution gaps. When nobody owns the ticket, it stays open." },
          ].map((item, i) => (
            <div key={item.num} className={`p-8 ${i < 2 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`}>
              <span className="text-gray-300 text-xs font-mono">{item.num}</span>
              <h3 className="text-lg font-black mt-3 mb-3 text-black">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 02 WHAT'S INCLUDED */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-10">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">02 / What's Included</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3">What Fornida supports</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { code: "HD/01", title: "User & device support", desc: "Employee devices, accounts, access, troubleshooting, onboarding and offboarding handled end-to-end." },
              { code: "HD/02", title: "Nationwide on-site visits", desc: "US-wide service including hardware swaps, post-incident work, and office stand-ups. HQ in Plano, Texas." },
              { code: "HD/03", title: "Ticketing & SLAs", desc: "Structured intake, urgency and impact triage, response expectations, and full activity visibility." },
              { code: "HD/04", title: "Patch management", desc: "OS, application, and firmware updates to reduce risk and maintain stability across all managed endpoints." },
            ].map((s) => (
              <div key={s.code} className="bg-white border border-gray-200 rounded-xl p-6">
                <span className="text-teal-500 text-xs font-mono uppercase tracking-widest">{s.code}</span>
                <h3 className="text-base font-black mt-2 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-gray-400 text-xs font-mono uppercase tracking-widest mb-4">Also Available</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Microsoft 365 support", "Vendor coordination", "Network & connectivity", "Senior engineer escalation"].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-teal-500 font-mono text-sm mt-0.5">+</span>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 HOW WE WORK */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-gray-100">
        <div className="mb-10">
          <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">03 / How We Work</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3">
            Support backed by people who know{" "}
            <em className="not-italic text-teal-500">your environment.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
          {[
            { step: "01", label: "Intake", desc: "Users submit issues through a single support channel. No hunting for the right contact." },
            { step: "02", label: "Triage", desc: "Issues prioritized by urgency, impact, and business context — not first-come-first-served." },
            { step: "03", label: "Resolve", desc: "Direct handling or escalation to technical experts. Ownership never falls through the cracks." },
            { step: "04", label: "Improve", desc: "Recurring issues documented and used to improve the environment and reduce future tickets." },
          ].map((s, i) => (
            <div key={s.step} className={`p-7 ${i < 3 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`}>
              <span className="text-2xl font-black text-gray-100">{s.step}</span>
              <h3 className="text-base font-black mt-2 mb-2">{s.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 AI ERA */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">04 / AI-Era Support</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3 mb-5">
              The help desk is becoming the front line of{" "}
              <em className="not-italic text-teal-500">AI adoption.</em>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              As employees adopt AI tools — Copilot, ChatGPT, Claude, Grok — the help desk handles account issues, permissions, prompt troubleshooting, integration questions, and security concerns. Issues resolved under two hours are handled directly. Larger projects escalate to AI Advantage with formal SOWs.
            </p>
            <a href="/services/ai-advantage" className="text-teal-500 font-semibold text-sm hover:text-teal-600 transition-colors">
              Explore AI Advantage →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          Need IT support your team can{" "}
          <em className="not-italic text-teal-500">actually rely on?</em>
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          One conversation. We'll assess your help desk needs, on-site requirements, ticketing workflow, and patching posture — free.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/#assessment" className="bg-black text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-900 transition-all">
            Book Assessment →
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
