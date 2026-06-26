"use client";

import { useState } from "react";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setEmail(data.get("email") as string);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/20 transition-all";
  const labelClass = "block text-sm font-semibold text-zinc-300 mb-2";
  const fieldClass = "mb-6";

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-white text-xl font-black tracking-tight">FORNIDA</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-sm text-zinc-500 hover:text-white transition-colors">Services</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Case Studies</a>
            <a href="/insights" className="text-sm text-zinc-500 hover:text-white transition-colors">Insights</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">About</a>
            <a href="/shop" className="text-sm text-zinc-500 hover:text-white transition-colors">Shop</a>
          </div>
          <a
            href="/#assessment"
            className="bg-zinc-900 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-zinc-900 transition-colors"
          >
            Book Assessment →
          </a>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-zinc-900 border-b border-zinc-800 py-16 px-6 text-center">
        <div className="text-white text-xs font-bold uppercase tracking-widest mb-3">Get a Quote</div>
        <h1 className="text-4xl font-black text-white mb-4">Tell us what you need.</h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto leading-relaxed">
          Bulk orders, custom configs, hard-to-find hardware — we source it. Fill out the form and a Fornida engineer will respond within one business day.
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        {submitted ? (
          <div className="max-w-lg mx-auto bg-zinc-900 rounded-2xl shadow-lg border border-zinc-800 p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-black text-white mb-3">Quote request received!</h2>
            <p className="text-zinc-500 leading-relaxed mb-8">
              A Fornida engineer will reach out to you at{" "}
              <span className="font-semibold text-zinc-700">{email}</span> within one business day.
            </p>
            <a
              href="/shop"
              className="inline-block bg-white text-zinc-950 font-bold px-6 py-3 rounded-xl hover:bg-zinc-900 transition-all"
            >
              Return to shop →
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900 rounded-2xl shadow-lg border border-zinc-800 p-10">
                <form onSubmit={handleSubmit}>
                  {/* Row 1: Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>Company Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        placeholder="Acme Corp"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className={fieldClass}>
                    <label htmlFor="email" className={labelClass}>Business Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@acmecorp.com"
                      className={inputClass}
                    />
                  </div>

                  {/* Row 2: Phone + Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className={labelClass}>Timeline</label>
                      <select id="timeline" name="timeline" className={inputClass}>
                        <option value="asap">As soon as possible</option>
                        <option value="1week">Within 1 week</option>
                        <option value="1month">Within 1 month</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className={fieldClass}>
                    <label htmlFor="needs" className={labelClass}>What do you need?</label>
                    <textarea
                      id="needs"
                      name="needs"
                      rows={4}
                      placeholder="e.g. 10x HP EliteBook 840 G6, bulk server memory, custom rack configuration..."
                      className={inputClass}
                    />
                  </div>

                  <div className={fieldClass}>
                    <label htmlFor="budget" className={labelClass}>Quantity / Budget Range</label>
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      placeholder="e.g. 5 units, ~$10,000 budget"
                      className={inputClass}
                    />
                  </div>

                  <div className={fieldClass}>
                    <label htmlFor="referral" className={labelClass}>How did you hear about us?</label>
                    <select id="referral" name="referral" className={inputClass}>
                      <option value="google">Google Search</option>
                      <option value="referral">Referral</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="existing">Existing Client</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={fieldClass}>
                    <label htmlFor="notes" className={labelClass}>
                      Additional Notes{" "}
                      <span className="text-zinc-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder="Any other details, special requirements, or questions..."
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-zinc-950 font-bold text-base py-4 rounded-xl hover:bg-zinc-900 transition-all"
                  >
                    Submit Quote Request →
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-7 h-fit sticky top-28">
                <h3 className="text-base font-bold text-white mb-5">Why request a quote?</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Bulk pricing on 5+ units",
                    "Hard-to-find SKUs sourced within 48hrs",
                    "Custom imaging & deployment included",
                    "Net-30 terms available for qualified businesses",
                    "MSP-backed support included with every order",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-400">
                      <svg
                        className="w-4 h-4 text-zinc-700 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-zinc-800 pt-6">
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Questions?</div>
                  <div className="text-sm text-zinc-700 font-semibold mb-1">Call us:</div>
                  <a
                    href="tel:+19497221222"
                    className="text-white font-bold text-sm hover:text-white transition-colors block mb-3"
                  >
                    +1-949-722-1222
                  </a>
                  <div className="text-sm text-zinc-700 font-semibold mb-1">Email:</div>
                  <a
                    href="mailto:info@fornida.com"
                    className="text-white font-bold text-sm hover:text-white transition-colors"
                  >
                    info@fornida.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-8 px-6 text-center text-zinc-500 text-xs">
        &copy; 2026 FORNIDA, LLC &nbsp;·&nbsp; 5700 Tennyson Pkwy, Plano, TX 75024 &nbsp;·&nbsp;{" "}
        <a href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
        &nbsp;·&nbsp;
        <a href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Use</a>
        &nbsp;·&nbsp;
        <a href="/msa" className="hover:text-zinc-300 transition-colors">MSA</a>
      </footer>
    </main>
  );
}
