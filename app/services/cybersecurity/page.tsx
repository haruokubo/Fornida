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

export default function CybersecurityPage() {
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
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">SERVICE / 02</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.02] mb-6 max-w-4xl">
            Layered cybersecurity for{" "}
            <em className="not-italic text-teal-500">real business operations.</em>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-10">
            Protection across endpoints, email, identity, networks, monitoring, backups, incident response, and recovery — integrated into actual business workflows.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#assessment" className="bg-black text-white font-bold px-7 py-3.5 rounded-xl hover:bg-gray-900 transition-all text-sm">
              Request Security Review →
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
            The attack surface now includes everyday<br />tools, accounts, and workflows.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
          {[
            { num: "01", title: "Unprotected endpoints and accounts", desc: "Unmanaged devices with weak controls are the most common entry point for modern attacks." },
            { num: "02", title: "Email and identity-based attacks", desc: "Account compromise exploits legitimate credentials. The attacker looks exactly like a real user." },
            { num: "03", title: "Weak backup and recovery readiness", desc: "Untested backup processes fail at the worst moment. Recovery readiness has to be proven, not assumed." },
          ].map((item, i) => (
            <div key={item.num} className={`p-8 ${i < 2 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`}>
              <span className="text-gray-300 text-xs font-mono">{item.num}</span>
              <h3 className="text-lg font-black mt-3 mb-3">{item.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3">Core security coverage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { code: "SEC/01", title: "Endpoint detection", desc: "Device, server, and endpoint monitoring with AI-driven threat detection and automated rollback." },
              { code: "SEC/02", title: "Email & identity security", desc: "Threat controls, MFA enforcement, and account compromise response across Microsoft 365 and beyond." },
              { code: "SEC/03", title: "SOC monitoring", desc: "24/7 real-time threat detection, alerting, and analyst-led escalation. Humans on the alerts, not just tools." },
              { code: "SEC/04", title: "Backup & recovery", desc: "Strategy, planning, and restoration testing so your backup actually works when you need it." },
              { code: "SEC/05", title: "Incident response & restoration", desc: "Containment, investigation, and operational recovery when something goes wrong." },
              { code: "SEC/06", title: "AI governance & security", desc: "Tool inventories, identity-bound AI access, sensitive-data controls, and audit logs for AI adoption." },
            ].map((s) => (
              <div key={s.code} className="bg-white border border-gray-200 rounded-xl p-6">
                <span className="text-teal-500 text-xs font-mono uppercase tracking-widest">{s.code}</span>
                <h3 className="text-base font-black mt-2 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-gray-400 text-xs font-mono uppercase tracking-widest mb-4">Also Covered</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Firewall & network security", "Security vendor management", "Policy & access controls", "Recovery readiness reviews"].map((item) => (
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
            Four-step operating discipline.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
          {[
            { step: "01", label: "Assess", desc: "Review endpoints, identity, email, network, backups, AI tools, and overall risk posture." },
            { step: "02", label: "Protect", desc: "Implement layered controls across users, devices, accounts, email, and infrastructure." },
            { step: "03", label: "Monitor", desc: "Real-time identification of suspicious behavior — 24/7, with humans on the alerts." },
            { step: "04", label: "Respond & Recover", desc: "Threat containment, investigation, and operational restoration when an incident hits." },
          ].map((s, i) => (
            <div key={s.step} className={`p-7 ${i < 3 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`}>
              <span className="text-2xl font-black text-gray-100">{s.step}</span>
              <h3 className="text-base font-black mt-2 mb-2">{s.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 STATS */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {[
              { value: "100+", label: "Incident response engagements" },
              { value: "24/7", label: "Recovery readiness & monitoring" },
              { value: "Senior", label: "Expertise on every account" },
              { value: "Dallas", label: "Based, hardware & ops depth" },
            ].map((stat, i) => (
              <div key={stat.label} className={`p-8 text-center ${i < 3 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`}>
                <div className="text-3xl font-black text-black">{stat.value}</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          Want to know where your business is{" "}
          <em className="not-italic text-teal-500">exposed?</em>
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Start with a security review. We identify risks, gaps, and recovery readiness — no commitment required.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/#assessment" className="bg-black text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-900 transition-all">
            Request Security Review →
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
