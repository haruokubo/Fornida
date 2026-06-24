"use client";

import { useState, useMemo } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────
interface Product {
  sku: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  inStock: boolean;
  badge?: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────
const PRODUCTS: Product[] = [
  { sku: "488069-B21", name: "HPE Trusted Platform Module (TPM)", price: 50, category: "Systems", inStock: false },
  { sku: "512485-B21", name: "HPE iLO Advanced 1yr Support 1-server License", price: 205, originalPrice: 399, category: "Systems", inStock: true, badge: "Popular" },
  { sku: "615732-B21", name: "HP Ethernet 1Gb 2-port 332T Adapter", price: 105, originalPrice: 199, category: "Network Adapters", inStock: true },
  { sku: "629135-B21", name: "HP Ethernet 1Gb 4-port 331FLR Adapter", price: 125, originalPrice: 313, category: "Network Adapters", inStock: true },
  { sku: "647594-B21", name: "HPE 331T PCIe 2.0 Gigabit 4-port Network Adapter", price: 163, originalPrice: 359, category: "Network Adapters", inStock: true },
  { sku: "652497-B21", name: "HP Ethernet 1Gb 2-port 361T Adapter", price: 125, originalPrice: 229, category: "Network Adapters", inStock: true },
  { sku: "652503-B21", name: "HP Ethernet 10Gb 2-port 530SFP+ Adapter", price: 325, originalPrice: 699, category: "Network Adapters", inStock: true, badge: "Sale" },
  { sku: "652753-B21", name: "1TB 6G SAS 7.2K 3.5in DP MDL SC HDD", price: 314, category: "Systems", inStock: true },
  { sku: "652757-B21", name: "2TB 6G SAS 7.2K 3.5in Midline HDD", price: 106, originalPrice: 560, category: "Systems", inStock: true, badge: "Sale" },
  { sku: "652766-B21", name: "3TB 6G SAS 7.2K 3.5in Midline HDD", price: 134, originalPrice: 671, category: "Systems", inStock: true, badge: "Sale" },
  { sku: "695510-B21", name: "4TB 6G SAS 7.2K Midline HDD", price: 464, originalPrice: 500, category: "Systems", inStock: true },
  { sku: "726717-B21", name: "4GB DDR4-2133 CAS-15-15-15 Registered Memory", price: 125, originalPrice: 279, category: "Systems", inStock: true },
  { sku: "726718-B21", name: "8GB DDR4-2133 Registered Memory Kit", price: 135, originalPrice: 658, category: "Systems", inStock: true, badge: "Sale" },
  { sku: "726719-B21", name: "16GB DDR4-2133 Dual Rank Registered Memory", price: 192, originalPrice: 1264, category: "Systems", inStock: true, badge: "Sale" },
  { sku: "NC375T-DELL", name: "Dell Certified HP NC375T PCIe Quad Port Adapter", price: 149, originalPrice: 320, category: "Dell Certified Refurbished", inStock: true },
  { sku: "BCM5719-DELL", name: "Dell Certified Broadcom 5719 Quad-Port 1GbE", price: 89, originalPrice: 189, category: "Dell Certified Refurbished", inStock: true },
  { sku: "H730P-DELL", name: "Dell PERC H730P 2GB RAID Controller", price: 279, originalPrice: 499, category: "Dell Certified Refurbished", inStock: true, badge: "Popular" },
  { sku: "NB-ELITEBOOK", name: "HP EliteBook 840 G8 14\" i5 16GB 512GB SSD", price: 649, originalPrice: 1299, category: "Notebooks & Accessories", inStock: true },
  { sku: "NB-LATITUDE", name: "Dell Latitude 5520 15\" i7 16GB 512GB SSD", price: 699, originalPrice: 1399, category: "Notebooks & Accessories", inStock: true, badge: "Popular" },
  { sku: "LP-THINKPAD", name: "Lenovo ThinkPad T14 Gen 2 AMD Ryzen 5 16GB", price: 549, originalPrice: 1099, category: "Laptops", inStock: true },
  { sku: "LP-PROBOOK", name: "HP ProBook 450 G8 i5 8GB 256GB SSD", price: 399, originalPrice: 799, category: "Laptops", inStock: true },
  { sku: "SOL-BACKUP", name: "Veeam Backup & Replication — SMB License", price: 499, category: "Solutions", inStock: true },
  { sku: "SOL-EDR", name: "SentinelOne Endpoint Protection — 1yr/seat", price: 89, category: "Solutions", inStock: true, badge: "Popular" },
  { sku: "SOL-M365", name: "Microsoft 365 Business Premium — 1yr/user", price: 22, category: "Solutions", inStock: true },
];

const CATEGORIES = [
  "All Products",
  "Dell Certified Refurbished",
  "Network Adapters",
  "Notebooks & Accessories",
  "Systems",
  "Laptops",
  "Solutions",
];

const BADGE_STYLES: Record<string, string> = {
  Sale: "bg-red-500/20 text-red-400 border-red-500/30",
  Popular: "bg-cyan-400/20 text-cyan-400 border-cyan-400/30",
};

// ─── Product Card ───────────────────────────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div className="group relative border border-white/5 rounded-2xl bg-white/[0.02] hover:border-cyan-400/20 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image placeholder */}
      <div className="aspect-square bg-white/5 flex items-center justify-center p-8 relative">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle, #00d4ff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
        />
        <div className="relative text-center">
          <div className="text-4xl mb-2">🖥️</div>
          <div className="text-[10px] text-zinc-600 font-mono">{product.sku}</div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {!product.inStock && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">
              OUT OF STOCK
            </span>
          )}
          {product.badge && product.inStock && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${BADGE_STYLES[product.badge]}`}>
              {product.badge.toUpperCase()}
            </span>
          )}
          {discount && discount >= 30 && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              -{discount}%
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-[10px] text-zinc-600 font-mono mb-1">{product.sku}</div>
        <h3 className="text-sm font-semibold text-zinc-200 leading-snug mb-3 flex-1 group-hover:text-white transition-colors">
          {product.name}
        </h3>

        <div className="flex items-end justify-between mt-auto">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-white">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-zinc-600 line-through">${product.originalPrice}</span>
              )}
            </div>
          </div>
          <button
            disabled={!product.inStock}
            className={`text-xs font-bold px-4 py-2 rounded-lg transition-all ${
              product.inStock
                ? "bg-cyan-400 text-black hover:bg-cyan-300 active:scale-95"
                : "bg-white/5 text-zinc-600 cursor-not-allowed"
            }`}
          >
            {product.inStock ? "Add to cart" : "Notify me"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "savings">("default");

  const filtered = useMemo(() => {
    let items = PRODUCTS;

    if (activeCategory !== "All Products") {
      items = items.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (sortBy === "price-asc") items = [...items].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") items = [...items].sort((a, b) => b.price - a.price);
    if (sortBy === "savings") {
      items = [...items].sort((a, b) => {
        const savA = a.originalPrice ? a.originalPrice - a.price : 0;
        const savB = b.originalPrice ? b.originalPrice - b.price : 0;
        return savB - savA;
      });
    }

    return items;
  }, [activeCategory, search, sortBy]);

  const inStockCount = filtered.filter((p) => p.inStock).length;

  return (
    <main className="bg-[#07070f] text-white min-h-screen">

      {/* ── NAV ───────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-[#07070f]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-cyan-400 text-xl font-black tracking-tight">FORNIDA</a>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Case Studies", "Insights", "About"].map((l) => (
              <a key={l} href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">{l}</a>
            ))}
            <a href="/shop" className="text-sm text-white font-semibold border-b border-cyan-400 pb-0.5">Shop</a>
          </div>
          <a href="/#assessment" className="bg-cyan-400 text-black text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-cyan-300 transition-colors">
            Book Assessment →
          </a>
        </div>
      </nav>

      {/* ── HEADER ────────────────────────────────────── */}
      <div className="border-b border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Hardware Shop</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
            Enterprise hardware.<br />
            <span className="text-zinc-500">SMB prices.</span>
          </h1>
          <p className="text-zinc-500 text-base">
            $5M+ in stock · Ships nationwide from Plano, TX · Dell, HPE, Lenovo &amp; more
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-10">

        {/* ── SIDEBAR ───────────────────────────────────── */}
        <aside className="w-52 flex-shrink-0">
          <div className="sticky top-24">
            <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Categories</div>
            <nav className="flex flex-col gap-1">
              {CATEGORIES.map((cat) => {
                const count = cat === "All Products"
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between transition-all ${
                      activeCategory === cat
                        ? "bg-cyan-400/10 text-cyan-400 font-semibold border border-cyan-400/20"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-xs ${activeCategory === cat ? "text-cyan-400/60" : "text-zinc-700"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 p-4 border border-white/5 rounded-xl bg-white/[0.02]">
              <div className="text-xs font-bold text-zinc-400 mb-2">Need a quote?</div>
              <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                Bulk orders, custom configs, or items not listed — we can source it.
              </p>
              <a
                href="mailto:info@fornida.com"
                className="block w-full text-center bg-white/5 hover:bg-white/10 text-white text-xs font-semibold py-2 rounded-lg transition-colors"
              >
                Contact us →
              </a>
            </div>
          </div>
        </aside>

        {/* ── MAIN CONTENT ──────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* Search + Sort bar */}
          <div className="flex gap-3 mb-6 flex-wrap">
            <div className="relative flex-1 min-w-52">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by name or SKU..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400/40 focus:bg-white/8 transition-all"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-cyan-400/40 transition-all appearance-none cursor-pointer"
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="savings">Most Savings</option>
            </select>
          </div>

          {/* Results count */}
          <div className="text-xs text-zinc-600 mb-5">
            Showing <span className="text-zinc-400 font-semibold">{filtered.length}</span> products
            {filtered.length !== inStockCount && (
              <span> · <span className="text-emerald-500 font-semibold">{inStockCount} in stock</span></span>
            )}
            {search && (
              <span> for <span className="text-zinc-400">"{search}"</span></span>
            )}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24 border border-white/5 rounded-2xl">
              <div className="text-4xl mb-4">🔍</div>
              <div className="text-zinc-400 font-semibold mb-2">No products found</div>
              <div className="text-zinc-600 text-sm">Try a different search or category</div>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All Products"); }}
                className="mt-4 text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((p) => (
                <ProductCard key={p.sku} product={p} />
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-12 border border-white/5 rounded-2xl p-8 bg-white/[0.01] text-center">
            <div className="text-lg font-bold mb-2">Don't see what you need?</div>
            <p className="text-zinc-500 text-sm mb-5">
              We source Dell, HPE, Lenovo, and more. Tell us the SKU or spec and we'll quote it.
            </p>
            <a
              href="mailto:info@fornida.com?subject=Hardware%20Quote%20Request"
              className="inline-block bg-cyan-400 text-black font-bold text-sm px-6 py-3 rounded-xl hover:bg-cyan-300 transition-all"
            >
              Request a Quote →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
