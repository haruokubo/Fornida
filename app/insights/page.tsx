"use client";

import { ARTICLES } from "./articles-data";

const FEATURED_VIDEO = {
  id: "s-dTmpLPDhE",
  title: "Welcome to Fornida | Cybersecurity & IT Solutions",
  description:
    "Narrated by CEO Farzad Vahid — an inside look at how Fornida delivers enterprise-grade IT support, cybersecurity, and AI automation to growing businesses across Texas and nationwide.",
  category: "Company Overview",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-zinc-900 text-xl font-black tracking-tight">FORNIDA</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Services</a>
            <a href="/case-studies" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Case Studies</a>
            <a href="/insights" className="text-sm text-zinc-900 font-semibold border-b border-zinc-900 pb-0.5">Insights</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">About</a>
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
          <p className="text-zinc-900 text-xs font-bold uppercase tracking-widest mb-3">Insights</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 text-zinc-900">
            Ideas worth<br />
            <span className="text-zinc-500">acting on.</span>
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl leading-relaxed">
            Practical thinking on IT, cybersecurity, and AI — from the team that lives it every day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* FEATURED VIDEO */}
        <div className="mb-16">
          <p className="text-zinc-900 text-xs font-bold uppercase tracking-widest mb-6">Featured Video</p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Video embed */}
            <div className="lg:col-span-3">
              <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 bg-gray-50" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${FEATURED_VIDEO.id}?rel=0&modestbranding=1`}
                  title={FEATURED_VIDEO.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video info */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <span className="inline-block text-xs font-bold text-zinc-900 bg-white border border-gray-300 px-3 py-1 rounded-full mb-4">
                {FEATURED_VIDEO.category}
              </span>
              <h2 className="text-2xl font-black tracking-tight mb-4 leading-snug text-zinc-900">
                {FEATURED_VIDEO.title}
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-6">
                {FEATURED_VIDEO.description}
              </p>
              <a
                href={`https://www.youtube.com/watch?v=${FEATURED_VIDEO.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 mb-16" />

        {/* ARTICLE GRID */}
        <div>
          <p className="text-zinc-900 text-xs font-bold uppercase tracking-widest mb-8">Latest Articles</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSIGHTS.map((item) => (
              <article
                key={item.title}
                className="group bg-gray-50 border border-gray-200 shadow-sm rounded-2xl p-7 hover:border-gray-400 hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${TAG_COLORS[item.tag] ?? "text-zinc-500 bg-white border-gray-200"}`}>
                    {item.tag}
                  </span>
                  <span className="text-[10px] text-zinc-500">{item.readTime}</span>
                </div>
                <h3 className="text-base font-bold leading-snug mb-3 text-zinc-900 group-hover:text-zinc-900 transition-colors flex-1">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                  {item.desc}
                </p>
                <span className="text-zinc-900 text-xs font-semibold transition-colors">
                  Read article →
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* NEWSLETTER CTA */}
        <div className="mt-20 bg-gray-50 border border-gray-200 rounded-2xl p-10 text-center">
          <p className="text-zinc-900 text-xs font-bold uppercase tracking-widest mb-3">Stay Sharp</p>
          <h2 className="text-3xl font-black tracking-tight mb-3 text-zinc-900">Get insights in your inbox</h2>
          <p className="text-zinc-500 text-base mb-8 max-w-md mx-auto">
            Practical IT and AI thinking — no fluff. One email when something worth reading goes live.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <input
              type="email"
              placeholder="you@company.com"
              className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-stone-400 transition-all w-72"
            />
            <button className="bg-zinc-900 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-gray-50 transition-all">
              Subscribe →
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-gray-50 px-6 py-10 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <span className="text-zinc-500 font-black">FORNIDA</span>
          <span className="text-zinc-500 text-xs">© 2026 Fornida LLC · 2609 Technology Dr, Suite 300, Plano, TX 75074</span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "MSA"].map((l) => (
              <a key={l} href="#" className="text-zinc-500 text-xs hover:text-zinc-700 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
