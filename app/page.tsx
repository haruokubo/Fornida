"use client";

import { useEffect, useRef, useState } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────
interface StatItem {
  label: string;
  numeric: number;
  prefix?: string;
  suffix?: string;
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

interface ServiceItem {
  num: string;
  label: string;
  title: string;
  desc: string;
  bullets: string[];
  explore: string;
  highlight?: boolean;
}

const SERVICES: ServiceItem[] = [
  {
    num: "01",
    label: "SVC / 01",
    title: "Help Desk",
    desc: "Fast, human support for users, devices, systems, and everyday IT issues.",
    bullets: [
      "User & device support",
      "On-site visits, nationwide",
      "Ticketing & SLAs",
      "Patch management",
    ],
    explore: "Explore Help Desk",
  },
  {
    num: "02",
    label: "SVC / 02",
    title: "Cybersecurity",
    desc: "Layered protection across endpoints, email, identity, networks, monitoring, backups, AI governance, and incident response.",
    bullets: [
      "Endpoint detection",
      "Email & identity security",
      "SOC monitoring",
      "Backup & recovery",
      "AI governance & security",
      "Incident response & restoration",
    ],
    explore: "Explore Cybersecurity",
    highlight: true,
  },
  {
    num: "03",
    label: "SVC / 03",
    title: "AI Advantage",
    desc: "We teach your team to use AI well — across Copilot, ChatGPT, Claude, Grok — answer the questions that come up every week, and build workflows on top of clean data. Under two hours we just do it; bigger gets a real SOW.",
    bullets: [
      "Data cleanup (single source of truth)",
      "AI training for your team",
      "Tool-agnostic (Copilot · ChatGPT · Claude · Grok)",
      "On-call for questions",
      "Two-hour rule for small work",
      "SOWs for bigger projects",
    ],
    explore: "Explore AI Advantage",
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
  {
    quote:
      "We had no IT strategy — just chaos. Fornida came in, audited everything, and had us on a real managed plan within two weeks. Night and day.",
    name: "Sarah T.",
    role: "Operations Director, NorthStar Staffing",
  },
  {
    quote:
      "Our old MSP took days to respond to tickets. Fornida resolves most issues same-day. The SLA is real, not just a number on paper.",
    name: "Kevin M.",
    role: "CEO, Cornerstone Title Group",
  },
  {
    quote:
      "They trained our entire team on Copilot in one afternoon. We're actually using AI now instead of just talking about it.",
    name: "Priya N.",
    role: "VP of Finance, Meridian Healthcare Group",
  },
  {
    quote:
      "Fornida caught a phishing attempt before any of our staff even noticed. SentinelOne flagged it, they contained it, and I got a full report by end of day.",
    name: "Carlos V.",
    role: "Managing Partner, V&A Law Firm",
  },
  {
    quote:
      "We scaled from 12 to 40 employees in six months. Fornida handled every new device, account, and onboarding without a single hiccup.",
    name: "Amanda B.",
    role: "COO, BlueRidge Logistics",
  },
  {
    quote:
      "The free automation assessment alone was worth the call. They found two workflows we didn't even know could be automated and built them the same week.",
    name: "Tom H.",
    role: "President, Hartwell Distribution",
  },
];

const PARTNERS = [
  { name: "Microsoft Copilot", summary: "AI assistant built into Microsoft 365. Fornida deploys & governs it across your org — drafting, summarizing, and automating inside the tools your team already uses." },
  { name: "Claude", summary: "Anthropic's AI model known for safety and long-context reasoning. We integrate Claude into workflows requiring nuanced analysis, policy drafting, and document processing." },
  { name: "OpenAI", summary: "Powers ChatGPT and GPT-4. Fornida uses OpenAI APIs to build custom automations — from AP processing to employee onboarding — tailored to your business." },
  { name: "SentinelOne", summary: "AI-driven endpoint detection & response (EDR). Deployed across all your devices, it detects threats in real time and auto-rolls back malicious changes before damage spreads." },
  { name: "Azure", summary: "Microsoft's cloud platform. Fornida runs infrastructure, identity (Entra ID), backup, and AI workloads on Azure — giving you enterprise-grade cloud without enterprise complexity." },
  { name: "AWS", summary: "Amazon Web Services — cloud compute, storage, and AI services. We architect and manage AWS environments for clients who need scalability with full cost visibility." },
  { name: "SonicWall", summary: "Next-gen firewall and network security. Fornida deploys SonicWall to protect your perimeter, block threats at the gateway, and enforce zero-trust network access policies." },
  { name: "Dell", summary: "Workstations, servers, and networking gear. Fornida is a Dell partner — we procure, image, and deploy Dell hardware, and manage the full device lifecycle for your team." },
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
    <div className="flex-1 text-center border-r border-gray-200 last:border-r-0 py-8 px-4">
      <div className="text-3xl font-black text-zinc-900 tabular-nums tracking-tight">
        {display}
      </div>
      <div className="text-xs text-zinc-500 uppercase tracking-widest mt-2">
        {stat.label}
      </div>
    </div>
  );
}

// ─── Testimonials Carousel ─────────────────────────────────────────────────
const TESTI_AGES = ["1 month ago","2 months ago","3 months ago","4 months ago","2 months ago","1 month ago","3 months ago","5 months ago","2 months ago"];

function TestimonialsCarousel({ visible }: { visible: boolean }) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState<"left"|"right">("right");
  const [animating, setAnimating] = useState(false);

  const go = (next: number, direction: "left"|"right") => {
    if (animating) return;
    setDir(direction);
    setAnimating(true);
    setTimeout(() => { setIdx(next); setAnimating(false); }, 280);
  };

  const prev = () => go((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, "left");
  const next = () => go((idx + 1) % TESTIMONIALS.length, "right");

  const t = TESTIMONIALS[idx];
  const initials = t.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  const avatarColors = ["bg-zinc-600","bg-zinc-600","bg-zinc-500","bg-zinc-600","bg-zinc-500","bg-zinc-600","bg-zinc-500","bg-zinc-600","bg-zinc-600"];
  const accentColors = ["border-zinc-400","border-zinc-400","border-zinc-400","border-zinc-400","border-zinc-400","border-zinc-400","border-zinc-400","border-zinc-400","border-zinc-400"];

  return (
    <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      {/* Card */}
      <div className="relative overflow-hidden">
        <div
          className={`relative bg-gray-50 rounded-3xl shadow-xl border-t-4 ${accentColors[idx % accentColors.length]} p-10 transition-all duration-280`}
          style={{
            opacity: animating ? 0 : 1,
            transform: animating
              ? `translateX(${dir === "right" ? "-40px" : "40px"})`
              : "translateX(0)",
          }}
        >
          {/* Big quote mark */}
          <span className="absolute top-4 right-7 text-8xl font-serif text-zinc-700/60 leading-none select-none">&rdquo;</span>

          {/* Stars */}
          <div className="text-zinc-500 text-xl tracking-widest mb-5">★★★★★</div>

          {/* Quote */}
          <p className="text-zinc-200 text-lg leading-relaxed mb-8 font-medium">{t.quote}</p>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-6" />

          {/* Attribution */}
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-zinc-900 font-black text-base flex-shrink-0 shadow-md ${avatarColors[idx % avatarColors.length]}`}>
              {initials}
            </div>
            <div>
              <div className="font-black text-zinc-900">{t.name}</div>
              <div className="text-zinc-500 text-xs mt-0.5">{t.role}</div>
              <div className="text-zinc-500 text-[10px] uppercase tracking-widest mt-0.5">{TESTI_AGES[idx]}</div>
            </div>
            <div className="ml-auto flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">Google</span>
            </div>
          </div>
        </div>
      </div>

      {/* Counter + Controls */}
      <div className="flex items-center justify-between mt-8 px-1">
        <span className="text-xs font-bold text-zinc-500 tabular-nums">{idx + 1} / {TESTIMONIALS.length}</span>

        <div className="flex gap-1.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > idx ? "right" : "left")}
              className={`rounded-full transition-all duration-300 ${i === idx ? "bg-gray-50 w-6 h-2.5" : "bg-zinc-700 hover:bg-zinc-600 w-2.5 h-2.5"}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-300 shadow-sm flex items-center justify-center text-zinc-900 hover:bg-gray-100 hover:border-gray-400 transition-all font-bold">←</button>
          <button onClick={next} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-zinc-950 hover:bg-zinc-800 transition-all font-bold shadow-md">→</button>
        </div>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [activePill, setActivePill] = useState<string | null>(null);
  const [hoveredPill, setHoveredPill] = useState<string | null>(null);
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
    <main className="bg-white text-zinc-900 min-h-screen overflow-x-hidden" onClick={(e) => { if (!(e.target as HTMLElement).closest('button[class*="border-zinc"]') && !(e.target as HTMLElement).closest('button[class*="border-gray"]')) setActivePill(null); }}>

      {/* ── NAVIGATION ──────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/fornida-mark.png" alt="Fornida" className="h-8 w-auto" />
            <span className="text-zinc-900 text-xl font-black tracking-tight">FORNIDA</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Services</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Case Studies</a>
            <a href="/insights" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Insights</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">About</a>
            <a href="/shop" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Shop</a>
          </div>
          <a href="#assessment" className="bg-zinc-900 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors">
            Book Assessment →
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <img
          src="https://fornida.com/assets/fornida_hero_image.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/60 to-zinc-950/90" />
        <div className="relative max-w-4xl mx-auto pt-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-px bg-zinc-500" />
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">The Fornida Thesis</span>
            <div className="w-8 h-px bg-zinc-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 text-zinc-900">
            Secure{" "}
            <span className="italic text-amber-400">AI adoption</span>
            <br />
            for growing businesses.
          </h1>
          <p className="text-lg text-zinc-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            Fornida helps small and mid-sized businesses manage IT, strengthen cybersecurity, and automate workflows safely — delivered by one team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#assessment"
              className="border border-white text-zinc-900 font-bold text-base px-8 py-4 rounded-xl hover:bg-white hover:text-white transition-all"
            >
              Book AI Optimization Assessment →
            </a>
            <a
              href="#quick-win"
              className="border border-zinc-600 text-zinc-700 font-semibold text-base px-8 py-4 rounded-xl hover:border-white hover:text-zinc-900 transition-all"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────── */}
      <div
        ref={statsRef}
        className="border-y border-gray-200 bg-white"
      >
        <div className="max-w-5xl mx-auto flex divide-x divide-gray-200">
          {STATS.map((s) => (
            <StatBlock key={s.label} stat={s} active={statsVisible} />
          ))}
        </div>
      </div>

      {/* ── PROBLEM ─────────────────────────────────────── */}
      <section
        ref={problemRef}
        className="py-24 px-6 max-w-7xl mx-auto bg-white"
      >
        <div className="mb-12">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-zinc-900">
            Four threats slowing
            <br />
            your business down
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl leading-relaxed">
            Most SMBs face these invisible drags every day — and don't know
            where to start fixing them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 rounded-2xl overflow-hidden bg-gray-50">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className={`p-8 flex flex-col gap-4 ${
                i < PROBLEMS.length - 2 ? "border-b border-gray-200" : ""
              } ${i % 2 === 0 ? "border-r border-gray-200" : ""}`}
            >
              <span className="text-xs font-mono text-zinc-500 tracking-widest">
                0{i + 1} / 0{PROBLEMS.length}
              </span>
              <div>
                <h3 className="text-xl font-black text-zinc-900 mb-2">{p.title}.</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-auto flex items-center gap-2 pt-4 border-t border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                <span className="text-xs text-zinc-500 font-mono">{p.icon} {p.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────── */}
      <section ref={serviceRef} className="relative py-24 px-6 overflow-hidden bg-white border-t border-gray-200">
        <img
          src="https://fornida.com/assets/facility/noc-dashboard.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center opacity-10"
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">04 / What We Deliver</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
              One team for IT, security,
              <br />
              and automation.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-gray-50">
            {SERVICES.map((s, i) => (
              <div
                key={s.num}
                className={`p-8 flex flex-col gap-0 transition-all duration-500 ${
                  serviceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <p className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest mb-4">{s.label}</p>
                <h3 className="text-2xl font-black text-zinc-900 mb-3">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="flex flex-col gap-2 mb-8 flex-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-zinc-700">
                      <span className="text-zinc-400 mt-0.5 font-mono leading-none">+</span>
                      <span className="font-mono text-xs leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/services"
                  className="text-zinc-900 text-sm font-semibold hover:text-amber-500 transition-colors mt-auto"
                >
                  {s.explore} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / ORIGIN ──────────────────────────────── */}
      <section id="about" className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto">
          {/* Label */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">08 / Origin</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-2 text-zinc-900">
            Three chapters.
          </h2>
          <p className="text-3xl md:text-4xl font-black italic text-amber-400 mb-14">
            One operating philosophy.
          </p>

          {/* Timeline */}
          <div className="flex flex-col gap-10">
            {/* 2012 */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">2012 · Roots</p>
              <p className="text-zinc-700 leading-relaxed">
                Fornida started building mission-critical infrastructure for major national telecoms, including T-Mobile — datacenters, network backbone, enterprise IT.
              </p>
            </div>

            {/* 2018 */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">2018 · The Wake-Up Call</p>
              <p className="text-zinc-700 leading-relaxed mb-4">
                A sophisticated threat actor monitored our communications and slipped in a fraudulent wire change at the exact right moment. A vendor who picked up the phone to verify stopped it. Not a firewall — a phone call.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                If it could happen to us, it could happen to anyone. That's when Fornida became an MSP — enterprise-grade defense, repackaged for SMBs.
              </p>
            </div>

            {/* 2024 */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">2024 · AI, Proven on Ourselves</p>
              <p className="text-zinc-700 leading-relaxed">
                We rebuilt Dash — our internal ops platform, originally three years and four developers — from the ground up in three months using AI tools. Better architecture. Lower cost. Mission-critical, still in production. That's how we know what AI can do for your business: we did it on ours first.
              </p>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-8 text-xs text-zinc-500 uppercase tracking-widest">
            <span>Headquarters · Plano, Texas</span>
            <span>Founded · 2012</span>
            <span>Owner-Operated</span>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ────────────────────────────────── */}
      <section ref={testiRef} className="relative py-24 px-6 overflow-hidden bg-white">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">⭐ Client Results · Google Reviews</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 leading-tight">
              Reviews from operators
              <br />
              <span className="text-zinc-500 font-black">who run the business.</span>
            </h2>
          </div>
          <TestimonialsCarousel visible={testiVisible} />
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────── */}
      <section
        id="assessment"
        className="py-24 px-6 relative overflow-hidden bg-white"
      >
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
            Free Assessment
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-zinc-900">
            Get your free AI optimization assessment
          </h2>
          <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
            No commitment. One conversation to find your biggest quick win — on
            us. Response within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fornida.com/assessment"
              className="bg-zinc-900 text-zinc-950 font-bold text-base px-8 py-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book in 60 seconds →
            </a>
            <a
              href="https://fornida.com/contact"
              className="border border-gray-300 text-zinc-500 font-semibold text-base px-8 py-4 rounded-xl hover:border-zinc-500 hover:text-zinc-900 hover:bg-transparent transition-all"
            >
              Talk to an engineer instead
            </a>
          </div>
          <p className="text-zinc-500 text-xs mt-6">
            📍 2609 Technology Dr, Suite 300, Plano, TX 75074 · +1-949-722-1222
          </p>
        </div>
      </section>

      {/* ── PARTNER ECOSYSTEM BAR ───────────────────────── */}
      <section className="relative border-t border-b border-gray-200 py-12 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-32 bg-gray-50/[0.02] rounded-full blur-3xl" />
          <div className="absolute top-0 left-1/2 w-48 h-24 bg-gray-50/[0.02] rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/4 w-64 h-32 bg-gray-50/[0.02] rounded-full blur-3xl" />
        </div>

        <p className="relative text-center text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-10">
          Partner Ecosystem · Tools We Support · Vendors We Ship
        </p>

        {/* Marquee track */}
        <div className="relative flex"
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)" }}>
          <style>{`
            @keyframes marquee {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee 30s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="marquee-track">
            {[
              { name: "Claude", src: "https://fornida.com/assets/partners/claude.svg", glow: "rgba(210,140,90,0.5)" },
              { name: "OpenAI", src: "https://fornida.com/assets/partners/openai.svg", glow: "rgba(0,0,0,0.3)" },
              { name: "Grok", src: "https://fornida.com/assets/partners/xai.svg", glow: "rgba(0,0,0,0.3)" },
              { name: "Microsoft Copilot", src: "https://fornida.com/assets/partners/microsoft-copilot.svg", glow: "rgba(100,160,255,0.5)" },
              { name: "AWS", src: "https://fornida.com/assets/partners/aws.svg", glow: "rgba(255,153,0,0.5)" },
              { name: "Microsoft Azure", src: "https://fornida.com/assets/partners/azure.svg", glow: "rgba(0,120,215,0.5)" },
              { name: "Google Workspace", src: "https://fornida.com/assets/partners/google-workspace.svg", glow: "rgba(66,133,244,0.5)" },
              { name: "Microsoft 365", src: "https://fornida.com/assets/partners/microsoft-365.svg", glow: "rgba(220,80,50,0.5)" },
              { name: "Aruba", src: "https://fornida.com/assets/partners/aruba.svg", glow: "rgba(255,140,0,0.5)" },
              { name: "SentinelOne", src: "https://fornida.com/assets/partners/sentinelone.svg", glow: "rgba(130,80,255,0.5)" },
              { name: "SonicWall", src: "https://fornida.com/assets/partners/sonicwall.png", glow: "rgba(255,100,50,0.5)" },
              { name: "Check Point", src: "https://fornida.com/assets/partners/checkpoint.svg", glow: "rgba(220,40,40,0.5)" },
              { name: "Ubiquiti", src: "https://fornida.com/assets/partners/ubiquiti.svg", glow: "rgba(0,180,255,0.5)" },
              { name: "Dell", src: "https://fornida.com/assets/partners/dell.svg", glow: "rgba(0,120,215,0.5)" },
              { name: "HPE", src: "https://fornida.com/assets/partners/hpe.svg", glow: "rgba(0,190,100,0.5)" },
              { name: "Lenovo", src: "https://fornida.com/assets/partners/lenovo.svg", glow: "rgba(220,30,30,0.5)" },
              /* duplicate for seamless loop */
              { name: "Claude2", src: "https://fornida.com/assets/partners/claude.svg", glow: "rgba(210,140,90,0.5)" },
              { name: "OpenAI2", src: "https://fornida.com/assets/partners/openai.svg", glow: "rgba(0,0,0,0.3)" },
              { name: "Grok2", src: "https://fornida.com/assets/partners/xai.svg", glow: "rgba(0,0,0,0.3)" },
              { name: "Microsoft Copilot2", src: "https://fornida.com/assets/partners/microsoft-copilot.svg", glow: "rgba(100,160,255,0.5)" },
              { name: "AWS2", src: "https://fornida.com/assets/partners/aws.svg", glow: "rgba(255,153,0,0.5)" },
              { name: "Microsoft Azure2", src: "https://fornida.com/assets/partners/azure.svg", glow: "rgba(0,120,215,0.5)" },
              { name: "Google Workspace2", src: "https://fornida.com/assets/partners/google-workspace.svg", glow: "rgba(66,133,244,0.5)" },
              { name: "Microsoft 3652", src: "https://fornida.com/assets/partners/microsoft-365.svg", glow: "rgba(220,80,50,0.5)" },
              { name: "Aruba2", src: "https://fornida.com/assets/partners/aruba.svg", glow: "rgba(255,140,0,0.5)" },
              { name: "SentinelOne2", src: "https://fornida.com/assets/partners/sentinelone.svg", glow: "rgba(130,80,255,0.5)" },
              { name: "SonicWall2", src: "https://fornida.com/assets/partners/sonicwall.png", glow: "rgba(255,100,50,0.5)" },
              { name: "Check Point2", src: "https://fornida.com/assets/partners/checkpoint.svg", glow: "rgba(220,40,40,0.5)" },
              { name: "Ubiquiti2", src: "https://fornida.com/assets/partners/ubiquiti.svg", glow: "rgba(0,180,255,0.5)" },
              { name: "Dell2", src: "https://fornida.com/assets/partners/dell.svg", glow: "rgba(0,120,215,0.5)" },
              { name: "HPE2", src: "https://fornida.com/assets/partners/hpe.svg", glow: "rgba(0,190,100,0.5)" },
              { name: "Lenovo2", src: "https://fornida.com/assets/partners/lenovo.svg", glow: "rgba(220,30,30,0.5)" },
            ].map((p) => (
              <div
                key={p.name}
                className="group flex items-center justify-center mx-10 flex-shrink-0"
                style={{ filter: `drop-shadow(0 0 3px ${p.glow.replace("0.5","0.1")})`, transition: "filter 0.3s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.filter = `drop-shadow(0 0 10px ${p.glow}) drop-shadow(0 0 20px ${p.glow})`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.filter = `drop-shadow(0 0 3px ${p.glow.replace("0.5","0.1")})`; }}
              >
                <img
                  src={p.src}
                  alt={p.name.replace(/\d$/, "")}
                  className="h-8 w-auto object-contain opacity-50 group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="bg-white border-t border-gray-200 px-6 pt-14 pb-8">
        <div className="max-w-7xl mx-auto">

          {/* Top grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-12">

            {/* Brand col */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="text-zinc-900 text-lg font-black mb-3 tracking-tight">Fornida</div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                The managed-services partner for the AI era. Secure IT, practical automation, and operational support for growing businesses.
              </p>
              <div className="flex gap-3">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/company/fornida", svg: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /> },
                  { label: "Instagram", href: "https://www.instagram.com/fornidallc", svg: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></> },
                  { label: "X", href: "https://x.com/fornidallc", svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
                  { label: "YouTube", href: "https://www.youtube.com/@fornida", svg: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></> },
                  { label: "Facebook", href: "https://www.facebook.com/fornidallc", svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-zinc-500 hover:text-zinc-900 hover:border-zinc-500 transition-all">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      {s.svg}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {[
              {
                title: "Company",
                links: [
                  { label: "About", href: "#" },
                  { label: "Facility", href: "#" },
                  { label: "Contact", href: "#" },
                ],
              },
              {
                title: "Services",
                links: [
                  { label: "Help Desk", href: "/services#help-desk" },
                  { label: "Cybersecurity", href: "/services#cybersecurity" },
                  { label: "AI Advantage", href: "/services#ai-advantage" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { label: "Insights", href: "/insights" },
                  { label: "Case Studies", href: "#" },
                  { label: "Point of View", href: "#" },
                ],
              },
              {
                title: "Direct",
                links: [
                  { label: "Book Assessment", href: "/#assessment" },
                  { label: "Shop Hardware", href: "/shop" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Use", href: "#" },
                  { label: "Master Services Agreement", href: "#" },
                  { label: "Managed IT Terms", href: "#" },
                  { label: "Hosted Cloud Terms", href: "#" },
                  { label: "Hosted Cloud SLA", href: "#" },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <div className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest mb-4">{col.title}</div>
                {col.links.map((l) => (
                  <a key={l.label} href={l.href}
                    className="block text-zinc-500 text-sm mb-2.5 hover:text-zinc-700 transition-colors">
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-zinc-500">
            <span>© 2026 FORNIDA, LLC · 2609 TECHNOLOGY DR · SUITE 300 · PLANO, TX 75074</span>
            <div className="flex gap-6">
              <a href="tel:+19497221222" className="hover:text-zinc-500 transition-colors">+19497221222</a>
              <a href="mailto:info@fornida.com" className="hover:text-zinc-500 transition-colors">info@fornida.com</a>
              <span>v · 26.04</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
