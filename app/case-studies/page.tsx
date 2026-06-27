"use client";

const CASE_STUDIES = [
  {
    id: "rehab-hospital-chain",
    tag: "Healthcare",
    date: "May 9, 2026",
    title: "How a Rehabilitation Hospital Chain Scaled from One Location to Five — With a Playbook for Eight More",
    summary: "A growing rehabilitation hospital network needed IT infrastructure that could scale as fast as their expansion plan. Fornida built a repeatable deployment playbook that turned each new location launch from a scramble into a system.",
    metrics: [
      { value: "1 → 5", label: "Locations scaled" },
      { value: "8+", label: "Sites playbook-ready" },
      { value: "100%", label: "Uptime on launch days" },
    ],
    industry: "Healthcare",
  },
  {
    id: "workflow-automation",
    tag: "AI Automation",
    date: "May 6, 2026",
    title: "Business Workflow Automation: How Fornida Cut Month-End Reconciliation from 5 Days to a Few Hours",
    summary: "Month-end close was consuming nearly a full work week. Fornida identified the manual bottlenecks in the reconciliation workflow and automated the repetitive data-pulling, matching, and reporting steps — proving the model on our own books first.",
    metrics: [
      { value: "5 days → hrs", label: "Reconciliation cycle" },
      { value: "~90%", label: "Time saved on close" },
      { value: "2 hrs", label: "First automation built" },
    ],
    industry: "Accounting / Operations",
  },
  {
    id: "rpm-wire-fraud",
    tag: "Cybersecurity",
    date: "Mar 5, 2026",
    title: "How RPM Stopped an $85,000 Wire Fraud Attempt After a Phishing Breach",
    summary: "After a phishing email compromised an employee account, a threat actor began monitoring RPM's communications and attempted to redirect an $85,000 wire payment. Fornida's SOC detected the anomaly and coordinated with the bank before the transfer cleared.",
    metrics: [
      { value: "$85,000", label: "Wire fraud prevented" },
      { value: "<2 hrs", label: "Incident contained" },
      { value: "0", label: "Data exfiltrated" },
    ],
    industry: "Finance / Security",
    client: "RPM",
  },
  {
    id: "exalthealth",
    tag: "Healthcare",
    date: "Feb 2, 2026",
    title: "Managed IT Services for Healthcare: How ExaltHealth Turned Hospital Openings into a Playbook",
    summary: "ExaltHealth was opening new hospital locations faster than their IT processes could keep up. Fornida stepped in to systematize device provisioning, network setup, and staff onboarding so every new location launched on time — and the next one launched faster.",
    metrics: [
      { value: "Repeatable", label: "Deployment playbook" },
      { value: "On-time", label: "Every location launch" },
      { value: "1 team", label: "IT across all sites" },
    ],
    industry: "Healthcare",
    client: "ExaltHealth",
  },
];

const TAG_COLORS: Record<string, string> = {
  Healthcare: "text-zinc-700 bg-gray-50 border-gray-300",
  "AI Automation": "text-zinc-700 bg-gray-50 border-gray-300",
  Cybersecurity: "text-zinc-700 bg-gray-50 border-gray-300",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/fornida-mark.png" alt="Fornida" className="h-8 w-auto" />
            <span className="text-zinc-900 text-xl font-black tracking-tight">FORNIDA</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Services</a>
            <a href="/case-studies" className="text-sm text-zinc-900 font-semibold border-b border-white pb-0.5">Case Studies</a>
            <a href="/insights" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Insights</a>
            <a href="/#about" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">About</a>
            <a href="/shop" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Shop</a>
          </div>
          <a href="/#assessment" className="bg-zinc-900 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors">
            Book Assessment →
          </a>
        </div>
      </nav>

      {/* HEADER */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Case Studies</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 text-zinc-900">
            Real problems.<br />
            <span className="italic text-amber-400">Measurable results.</span>
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl leading-relaxed">
            How Fornida helped businesses stop threats, automate workflows, and scale IT without the chaos.
          </p>
        </div>
      </div>

      {/* CASE STUDY LIST */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-8">
          {CASE_STUDIES.map((cs, i) => (
            <article
              key={cs.id}
              className="group bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${TAG_COLORS[cs.tag] ?? "text-zinc-700 bg-zinc-800 border-gray-300"}`}>
                    {cs.tag}
                  </span>
                  {cs.client && (
                    <span className="text-xs text-zinc-500 font-mono">{cs.client}</span>
                  )}
                  <span className="text-xs text-zinc-500 ml-auto">{cs.date}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-zinc-900 mb-4 leading-snug group-hover:text-zinc-700 transition-colors">
                  {cs.title}
                </h2>

                <p className="text-zinc-500 leading-relaxed mb-8 max-w-3xl">
                  {cs.summary}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-200">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-xl font-black text-amber-400">{m.value}</div>
                      <div className="text-xs text-zinc-500 uppercase tracking-widest mt-0.5">{m.label}</div>
                    </div>
                  ))}
                  <div className="ml-auto self-center">
                    <span className="text-sm text-zinc-500 group-hover:text-zinc-900 transition-colors font-semibold">
                      Read case study →
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-zinc-500 text-xs text-center mt-12">
          Results vary by workflow complexity, data quality, and implementation scope.
        </p>
      </div>

      {/* CTA */}
      <section className="border-t border-gray-200 py-20 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-black text-zinc-900 mb-4">Want results like these?</h2>
        <p className="text-zinc-500 mb-8 max-w-xl mx-auto">One free assessment. We'll find your biggest quick win — on us.</p>
        <a href="/#assessment" className="bg-zinc-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-zinc-800 transition-all">
          Book free assessment →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <span className="text-zinc-900 font-black">FORNIDA</span>
          <span className="text-zinc-500 text-xs">© 2026 Fornida LLC · 2609 Technology Dr, Suite 300, Plano, TX 75074</span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "MSA"].map((l) => (
              <a key={l} href="#" className="text-zinc-500 text-xs hover:text-zinc-500 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
