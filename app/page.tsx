"use client";

import { useEffect, useRef, useState } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────
interface StatItem {
  label: string;
  numeric: number;
  prefix?: string;
  suffix?: string;
}

interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  highlight?: boolean;
}

interface ProblemItem {
  icon: string;
  title: string;
  desc: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────
const STATS: StatItem[] = [
  { label: "Founded", numeric: 2012 },
  { label: "Sq ft Facility", numeric: 34, suffix: "K sqft" },
  { label: "Hardware Stock", numeric: 5, prefix: "$", suffix: "M+" },
  { label: "SOC Coverage", numeric: 24, suffix: "/7/365" },
];

const PROBLEMS: ProblemItem[] = [
  {
    icon: "🕵️",
    title: "Shadow AI",
    desc: "Employees using unvetted AI tools — leaking data and bypassing compliance without knowing it.",
  },
  {
    icon: "📂",
    title: "Data Sprawl",
    desc: "Business files scattered across drives, inboxes, and apps. No visibility, no control.",
  },
  {
    icon: "🔁",
    title: "Manual Drag",
    desc: "Repetitive admin tasks consuming hours that should go toward growth and strategy.",
  },
  {
    icon: "🔍",
    title: "Blind Spots",
    desc: "Hidden security risks that only surface after an incident — and by then it's too late.",
  },
];

const SERVICES: ServiceItem[] = [
  {
    num: "01",
    title: "Help Desk & IT Support",
    desc: "User support, device management, on-site visits nationwide, patch management, and SLA-backed ticketing — all in one team.",
  },
  {
    num: "02",
    title: "Cybersecurity & SOC",
    desc: "Endpoint detection, email security, 24/7 SOC monitoring, backup & recovery, AI governance, and incident response.",
    highlight: true,
  },
  {
    num: "03",
    title: "AI Advantage",
    desc: "Data cleanup, multi-tool AI training (Copilot, Claude, ChatGPT, Grok), on-call support, and fast automation sprints with a 2-hour rule.",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Fornida found three shadow-AI tools our team was using. Within a week, we had a governed policy and zero compliance risk.",
    name: "James R.",
    role: "CFO, Plano Manufacturing Co.",
  },
  {
    quote:
      "The quick-win automation they built for our AP process saves us 12+ hours per month. Worth it — and the first one was free.",
    name: "Monica K.",
    role: "COO, DFW Logistics Group",
  },
  {
    quote:
      "After a wire fraud scare with our old vendor, Fornida was the obvious move. Their incident response is night-and-day better.",
    name: "David L.",
    role: "President, Apex Real Estate",
  },
];

const PARTNERS = [
  "Microsoft Copilot",
  "Claude",
  "OpenAI",
  "SentinelOne",
  "Azure",
  "AWS",
  "SonicWall",
  "Dell",
];

// ─── Hooks ─────────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = (target / duration) * 16;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Stat Block ────────────────────────────────────────────────────────────
function StatBlock({ stat, active }: { stat: StatItem; active: boolean }) {
  const count = useCountUp(stat.numeric, 1800, active);
  const display =
    stat.numeric === 2012
      ? active
        ? count.toString()
        : "—"
      : `${stat.prefix ?? ""}${active ? count : "—"}${stat.suffix ?? ""}`;

  return (
    <div className="flex-1 text-center border-r border-white/5 last:border-r-0 py-8 px-4">
      <div className="text-3xl font-black text-cyan-400 tabular-nums tracking-tight">
        {display}
      </div>
      <div className="text-xs text-zinc-500 uppercase tracking-widest mt-2">
        {stat.label}
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const { ref: statsRef, inView: statsVisible } = useInView(0.5);
  const { ref: problemRef, inView: problemVisible } = useInView(0.1);
  const { ref: serviceRef, inView: serviceVisible } = useInView(0.1);
  const { ref: testiRef, inView: testiVisible } = useInView(0.1);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <main className="bg-[#07070f] text-white min-h-screen overflow-x-hidden">

      {/* ── NAVIGATION ──────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#07070f]/80 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-cyan-400 text-xl font-black tracking-tight">
            FORNIDA
          </span>
          <div className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-sm text-zinc-400 hover:text-white transition-colors">Services</a>
            {["Case Studies", "Insights", "About"].map((l) => (
              <a key={l} href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">{l}</a>
            ))}
            <a href="/shop" className="text-sm text-zinc-400 hover:text-white transition-colors">Shop</a>
          </div>
          <a
            href="#assessment"
            className="bg-cyan-400 text-black text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-cyan-300 transition-colors"
          >
            Book Assessment →
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Mesh gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,212,255,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_60%,rgba(124,58,237,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_70%,rgba(0,212,255,0.05),transparent)]" />

        <div className="relative max-w-4xl mx-auto pt-20 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-cyan-400/20 text-cyan-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Texas-based MSP · Est. 2012
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Secure AI Adoption
            <br />
            <span className="text-cyan-400">for Growing Businesses</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            One team for IT, security, and automation. Enterprise-grade defense
            built for the SMB reality — with AI baked in from day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#assessment"
              className="bg-cyan-400 text-black font-bold text-base px-8 py-4 rounded-xl hover:bg-cyan-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book AI Optimization Assessment →
            </a>
            <a
              href="#quick-win"
              className="border border-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/5 transition-all"
            >
              Claim Your Free Quick Win
            </a>
          </div>

          {/* Partner pills */}
          <div className="mt-16 flex items-center justify-center gap-3 flex-wrap">
            <span className="text-xs text-zinc-600 uppercase tracking-widest mr-2">
              Works with
            </span>
            {PARTNERS.map((p) => (
              <span
                key={p}
                className="text-xs text-zinc-500 border border-white/5 px-3 py-1.5 rounded-md hover:border-white/15 hover:text-zinc-300 transition-all cursor-default"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────── */}
      <div
        ref={statsRef}
        className="border-y border-white/5 bg-black/40 backdrop-blur-sm"
      >
        <div className="max-w-5xl mx-auto flex divide-x divide-white/5">
          {STATS.map((s) => (
            <StatBlock key={s.label} stat={s} active={statsVisible} />
          ))}
        </div>
      </div>

      {/* ── PROBLEM ─────────────────────────────────────── */}
      <section
        ref={problemRef}
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <div className="mb-12">
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Four threats slowing
            <br />
            your business down
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Most SMBs face these invisible drags every day — and don't know
            where to start fixing them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className={`group border border-white/5 rounded-2xl p-8 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300 bg-white/[0.02] ${
                problemVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────── */}
      <section ref={serviceRef} className="py-24 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
              What We Deliver
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              IT + Security + AI.
              <br />
              One team. No gaps.
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
              No juggling three vendors. One accountable partner covering all
              three layers — with full context on your environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={s.num}
                className={`relative border rounded-2xl p-8 transition-all duration-500 ${
                  s.highlight
                    ? "border-cyan-400/30 bg-cyan-400/[0.03]"
                    : "border-white/5 bg-white/[0.01] hover:border-white/10"
                } ${
                  serviceVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="text-6xl font-black text-white/5 mb-4 select-none leading-none">
                  {s.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm mb-6">
                  {s.desc}
                </p>
                <a
                  href="#"
                  className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORIGIN STORY ────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="text-4xl font-black tracking-tight mb-6">
              We learned the hard way.
              <br />
              <span className="text-zinc-500">So you don't have to.</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              In 2018, a wire fraud incident changed everything. We pivoted from
              telecom infrastructure to become the MSP we wished existed — one
              that treats security as a first principle, not an afterthought.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              In 2024, we rebuilt our entire internal ops platform using AI in
              just 3 months. Now we bring that same capability to our clients.
            </p>
            <a
              href="/about"
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
            >
              Read the full story →
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { year: "2012", label: "Founded on telecom infrastructure" },
              { year: "2018", label: "Wire fraud wake-up → MSP pivot" },
              { year: "2024", label: "AI-rebuilt ops platform in 90 days" },
            ].map((item) => (
              <div
                key={item.year}
                className="border border-white/5 rounded-xl p-6 bg-white/[0.02] text-center"
              >
                <div className="text-2xl font-black text-cyan-400 mb-2">
                  {item.year}
                </div>
                <div className="text-xs text-zinc-500 leading-relaxed">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ────────────────────────────────── */}
      <section ref={testiRef} className="py-24 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
              Client Results
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Trusted by Texas businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className={`border border-white/5 rounded-2xl p-8 bg-white/[0.02] transition-all duration-500 ${
                  testiVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-yellow-400 text-sm mb-4 tracking-widest">
                  ★★★★★
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-zinc-600 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────── */}
      <section
        id="assessment"
        className="py-24 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,50,100,0.5),transparent)]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            Free Assessment
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Get your free AI optimization assessment
          </h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            No commitment. One conversation to find your biggest quick win — on
            us. Response within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fornida.com/assessment"
              className="bg-cyan-400 text-black font-bold text-base px-8 py-4 rounded-xl hover:bg-cyan-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book in 60 seconds →
            </a>
            <a
              href="https://fornida.com/contact"
              className="border border-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/5 transition-all"
            >
              Talk to an engineer instead
            </a>
          </div>
          <p className="text-zinc-600 text-xs mt-6">
            📍 2609 Technology Dr, Suite 300, Plano, TX 75074 · +1-949-722-1222
          </p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="border-t border-white/5 bg-black/60 px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="text-cyan-400 text-lg font-black mb-3 tracking-tight">
              FORNIDA
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Secure AI adoption for growing businesses. Plano, TX. Est. 2012.
            </p>
          </div>
          {[
            {
              title: "Services",
              links: ["Help Desk", "Cybersecurity", "AI Advantage", "Hardware Shop"],
            },
            {
              title: "Company",
              links: ["About", "Case Studies", "Insights", "Contact"],
            },
            {
              title: "Contact",
              links: [
                "+1-949-722-1222",
                "info@fornida.com",
                "2609 Technology Dr",
                "Plano, TX 75074",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-white text-xs font-bold uppercase tracking-widest mb-4">
                {col.title}
              </div>
              {col.links.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="block text-zinc-600 text-sm mb-2 hover:text-zinc-400 transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <span className="text-zinc-700 text-xs">
            © 2026 Fornida LLC. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "MSA"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-zinc-700 text-xs hover:text-zinc-500 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
