"use client";

import { notFound } from "next/navigation";
import { ARTICLES, ArticleBlock } from "../articles-data";

function renderBlock(block: ArticleBlock, i: number) {
  switch (block.type) {
    case "h2":
      return <h2 key={i} className="text-2xl font-black text-zinc-900 mt-12 mb-4 tracking-tight">{block.text}</h2>;
    case "h3":
      return <h3 key={i} className="text-lg font-bold text-zinc-900 mt-8 mb-3">{block.text}</h3>;
    case "p":
      return <p key={i} className="text-zinc-700 leading-relaxed mb-5">{block.text}</p>;
    case "quote":
      return (
        <blockquote key={i} className="my-8 border-l-4 border-amber-400 pl-6 py-1">
          <p className="text-zinc-700 italic leading-relaxed mb-2">{block.text}</p>
          {block.author && <cite className="text-zinc-400 text-sm not-italic font-mono">— {block.author}</cite>}
        </blockquote>
      );
    case "ul":
      return (
        <ul key={i} className="mb-5 flex flex-col gap-2">
          {block.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-zinc-700">
              <span className="text-amber-500 mt-1 flex-shrink-0 font-mono text-sm">+</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mb-5 flex flex-col gap-2">
          {block.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-zinc-700">
              <span className="text-amber-500 mt-1 flex-shrink-0 font-mono text-sm w-5">{j + 1}.</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      );
    default:
      return null;
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

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
            <a href="/case-studies" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Case Studies</a>
            <a href="/insights" className="text-sm text-zinc-900 font-semibold border-b border-zinc-900 pb-0.5">Insights</a>
            <a href="/#about" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">About</a>
            <a href="/shop" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Shop</a>
          </div>
          <a href="/#assessment" className="bg-zinc-900 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors">
            Book Assessment →
          </a>
        </div>
      </nav>

      {/* ARTICLE HEADER */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <a href="/insights" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-8">
            ← Back to Insights
          </a>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold px-3 py-1 rounded-full border border-gray-300 bg-white text-zinc-700">{article.tag}</span>
            <span className="text-zinc-400 text-xs">{article.date}</span>
            <span className="text-zinc-400 text-xs">· {article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900 leading-snug mb-4">
            {article.title}
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed">{article.desc}</p>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {article.content.map((block, i) => renderBlock(block, i))}

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Free Assessment</p>
            <h2 className="text-2xl font-black text-zinc-900 mb-3">Want help applying this to your business?</h2>
            <p className="text-zinc-500 mb-6 max-w-md mx-auto text-sm leading-relaxed">One free conversation. We'll find your biggest quick win — on us.</p>
            <a href="/#assessment" className="bg-zinc-900 text-white font-bold px-7 py-3 rounded-xl hover:bg-zinc-800 transition-all text-sm">
              Book free assessment →
            </a>
          </div>
        </div>

        {/* MORE ARTICLES */}
        <div className="mt-16">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6">More from Fornida</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 4).map((a) => (
              <a
                key={a.slug}
                href={`/insights/${a.slug}`}
                className="group bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:-translate-y-0.5 transition-all"
              >
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{a.tag} · {a.readTime}</span>
                <p className="text-sm font-bold text-zinc-900 mt-2 leading-snug group-hover:text-zinc-700 transition-colors">{a.title}</p>
              </a>
            ))}
          </div>
        </div>
      </article>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <span className="text-zinc-900 font-black">FORNIDA</span>
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
