"use client";

import { useState, useEffect } from "react";

const CDN = "https://cdn11.bigcommerce.com/s-2bihpr2wvz/products";

const ALL_PRODUCTS: Record<string, { name: string; price: number; image: string }> = {
  "488069-B21": { name: "HPE Trusted Platform Module (TPM)", price: 50, image: `${CDN}/128/images/13059/2c15b323-7d28-412a-aa44-43726258a067__73928.1652909995.386.513.jpg?c=2` },
  "512485-B21": { name: "HPE iLO Advanced 1yr Support LTU", price: 205, image: `${CDN}/131/images/10145/ILO__20323.1558452483.386.513.jpg?c=2` },
  "652753-B21": { name: "1TB 6G SAS 7.2K 3.5in DP MDL SC HDD", price: 314, image: `${CDN}/145/images/7512/c05269956__65778.1549467571.386.513.png?c=2` },
  "652757-B21": { name: "2TB 6G SAS 7.2K 3.5in DP MDL SC HDD", price: 106, image: `${CDN}/146/images/6244/HP_2TB_6G_SAS_7.2K_rpm_LFF_3.5-inch_SC_Midline_Hard_Drive_652757-B21_653948-001___18016.1470832226.1280.1280__17499.1548888864.386.513.png?c=2` },
  "652766-B21": { name: "3TB 6G SAS 7.2K 3.5in DP MDL SC HDD", price: 134, image: `${CDN}/147/images/7513/c05269956__08728.1549467596.386.513.png?c=2` },
  "695510-B21": { name: "4TB 6G SAS 7.2K 3.5in DP MDL SC HDD", price: 464, image: `${CDN}/163/images/6250/HP_4TB_6G_SAS_7.2K_rpm_LFF_3.5-inch_SC_Midline_Hard_Drive_695510-B21_695842-001__29163.1470832003.1280.1280__86617.1548889706.386.513.png?c=2` },
  "718162-B21": { name: "HP 1.2TB 6G SAS 10K SFF Enterprise HDD", price: 295, image: `${CDN}/171/images/7846/816899-B21__29210.1533647106.1280.1280__02584.1549321333.386.513__58712.1551391318.386.513.png?c=2` },
  "726757-B21": { name: "HP H240ar 12Gb Smart Host Bus Adapter", price: 95, image: `${CDN}/189/images/6227/726821-B21__35517.1496604446__67022.1548888078.386.513.png?c=2` },
  "666986-B21": { name: "HP LFF Hard Drive Blank Kit", price: 3, image: `${CDN}/160/images/7989/SVPHPE1903468__41788.1551713728.386.513.jpg?c=2` },
  "666987-B21": { name: "HP SFF Hard Drive Blank Kit", price: 9, image: `${CDN}/161/images/7988/SVPHPE1903468__12844.1551713327.386.513.jpg?c=2` },
  "700139-B21": { name: "HP 32GB microSD Enterprise Flash Media Kit", price: 155, image: `${CDN}/164/images/10135/i00052144__73007.1555518706.386.513.png?c=2` },
  "726717-B21": { name: "HP 4GB DDR4-2133 Registered Memory Kit", price: 125, image: `${CDN}/181/images/6201/s-l640__29479.1548884565.386.513.png?c=2` },
  "726718-B21": { name: "HP 8GB DDR4-2133 Registered Memory", price: 135, image: `${CDN}/182/images/9860/HPE-DDR4-SmartMemory_1__30243.1548885272.386.513__23822.1554141835.386.513.png?c=2` },
  "726719-B21": { name: "HP 16GB DDR4-2133 Registered Memory", price: 192, image: `${CDN}/183/images/6221/HP-Memory-726719-B21__72523.1548885889.386.513.png?c=2` },
  "726720-B21": { name: "HP 16GB DDR4-2133 Load Reduced Memory Kit", price: 165, image: `${CDN}/184/images/6204/c05200574__73969.1548884878.386.513.png?c=2` },
  "726722-B21": { name: "HP 32GB DDR4-2133 Load Reduced Memory", price: 365, image: `${CDN}/185/images/6205/726722-b21__81189.1548884999.386.513.jpg?c=2` },
  "726724-B21": { name: "HP 64GB DDR4-2133 Load Reduced Memory Kit", price: 965, image: `${CDN}/186/images/6206/3734823__58877.1506115684__55177.1548885042.386.513.jpg?c=2` },
  "720478-B21": { name: "HPE 500W Flex Slot Platinum PSU Kit", price: 145, image: `${CDN}/172/images/6199/s-l640__79687.1548884275.386.513.png?c=2` },
  "720479-B21": { name: "HPE 800W Flex Slot Platinum PSU Kit", price: 165, image: `${CDN}/173/images/6200/c04420586__71300.1548884299.386.513.png?c=2` },
  "720480-B21": { name: "HPE 800W Flex Slot -48VDC PSU Kit", price: 395, image: `${CDN}/174/images/6180/c04603072__63288.1548881822.386.513.png?c=2` },
  "720482-B21": { name: "HPE 800W Flex Slot Titanium PSU Kit", price: 245, image: `${CDN}/175/images/6181/AJ7W_1_201811281909358629__77323.1548881933.386.513.jpg?c=2` },
  "720484-B21": { name: "HPE 800W Flex Slot Universal PSU Kit", price: 165, image: `${CDN}/176/images/6182/i00021977__83765.1548882042.386.513.png?c=2` },
  "720620-B21": { name: "HPE 1400W Flex Slot Platinum Plus PSU Kit", price: 215, image: `${CDN}/177/images/6183/c04420610__38414.1548882098.386.513.png?c=2` },
  "726740-B21": { name: "HP Smart Array P440ar/2GB SAS Controller", price: 295, image: `${CDN}/188/images/6384/i00066678__36093.1548968191.386.513.png?c=2` },
  "726821-B21": { name: "HP Smart Array P440/4GB SAS Controller", price: 395, image: `${CDN}/190/images/6228/726821-B21__35517.1496604446__94517.1548888147.386.513.png?c=2` },
  "726825-B21": { name: "HP Smart Array P441/4GB SAS Controller", price: 445, image: `${CDN}/191/images/6229/726825-B21__66655.1496636256__26552.1548888176.386.513.png?c=2` },
  "726897-B21": { name: "HP Smart Array P840/4GB SAS Controller", price: 525, image: `${CDN}/192/images/6264/726897-B21__27965.1496603232__72863.1548947684.386.513.png?c=2` },
  "726903-B21": { name: "HP Smart Array P841/4GB SAS Controller", price: 695, image: `${CDN}/193/images/7232/726903-B21__09092.1496601570__30552.1549316156.386.513.png?c=2` },
  "726907-B21": { name: "HP H240 12Gb Smart Host Bus Adapter", price: 125, image: `${CDN}/194/images/8217/1028429034__50499.1534538990.500.750__02724.1552499009.386.513.jpg?c=2` },
  "726911-B21": { name: "HP H241 12Gb Ext Smart Host Bus Adapter", price: 325, image: `${CDN}/195/images/6231/726825-B21__66655.1496636256__24478.1548888230.386.513.png?c=2` },
  "615732-B21": { name: "HP Ethernet 1Gb 2-port 332T Adapter", price: 105, image: `${CDN}/133/images/6164/i00079695__62515.1548870514.386.513.png?c=2` },
  "629135-B21": { name: "HP Ethernet 1Gb 4-port 331FLR Adapter", price: 125, image: `${CDN}/135/images/6381/333_o1a2-k7__57535.1558452483.386.513.png?c=2` },
  "647594-B21": { name: "HPE 331T Network Adapter PCIe Gigabit x4", price: 163, image: `${CDN}/136/images/12081/be29a1c5-9945-47f8-aacc-7ee28a19bfbd__38043.1629208792.386.513.jpg?c=2` },
  "652497-B21": { name: "HP Ethernet 1Gb 2-port 361T Adapter", price: 125, image: `${CDN}/137/images/6175/i78031078031__85790.1558452484.386.513.png?c=2` },
  "652503-B21": { name: "HP Ethernet 10Gb 2-port 530SFP Adapter", price: 325, image: `${CDN}/138/images/6176/HP_Ethernet_10Gb_2-port_530SFP_Adapter_652503-B21_656244-001__67131.1466521142.1280.1280__18139.1558452484.386.513.png?c=2` },
  "656596-B21": { name: "HP Ethernet 10Gb 2-port 530T Adapter", price: 325, image: `${CDN}/149/images/6223/656596-b21_1__86319.1548887859.386.513.png?c=2` },
  "665243-B21": { name: "HP Ethernet 10Gb 2-port 560FLR-SFP+ Adapter", price: 295, image: `${CDN}/158/images/6382/665243-b21__62136.1548966608.386.513.png?c=2` },
  "665249-B21": { name: "HP Ethernet 10Gb 2-port 560SFP+ Adapter", price: 325, image: `${CDN}/159/images/6224/HP_Ethernet_10Gb_2-port_560SFP_Adapter_665249-B21_669279-001__78244.1466521445.1280.1280__79570.1548887889.386.513.png?c=2` },
  "700699-B21": { name: "HP Ethernet 10Gb 2-port 561FLR-T Adapter", price: 395, image: `${CDN}/165/images/6401/200383__52151.1548969138.386.513.png?c=2` },
  "700751-B21": { name: "HP FlexFabric 10Gb 2-port 534FLR-SFP+ Adapter", price: 325, image: `${CDN}/166/images/6225/c05232708__48485.1548887919.386.513.png?c=2` },
  "700759-B21": { name: "HP FlexFabric 10Gb 2-port 533FLR-T Adapter", price: 325, image: `${CDN}/167/images/6392/i00061187__37419.1548968505.386.513.png?c=2` },
  "716591-B21": { name: "HP Ethernet 10Gb 2-port 561T Adapter", price: 395, image: `${CDN}/170/images/6226/716591-b21__75815.1548887992.386.513.png?c=2` },
  "663201-B21": { name: "HP 1U SFF Ball Bearing Rail Kit", price: 105, image: `${CDN}/153/images/7991/i00028330__20205.1551714985.386.513.png?c=2` },
  "663202-B21": { name: "HP 1U LFF Ball Bearing Rail Kit", price: 75, image: `${CDN}/154/images/6290/hp-1u-large-form-factor-ball-bearing-gen8-rail-kit-rack-rail-kit-1u-for-proliant-dl160-gen8-dl160-gen8-base-dl160-gen8-e-663202-__95472.1548954538.386.513.png?c=2` },
  "663203-B21": { name: "HP 1U Cable Management Arm for Rail Kit", price: 30, image: `${CDN}/155/images/6291/663203-B21__11213.1510070690__13114.1548954573.386.513.jpg?c=2` },
  "701498-B21": { name: "HP Mobile USB DVD RW Drive", price: 89, image: `${CDN}/168/images/6294/1450780717c03479920__96856.1548954722.386.513.png?c=2` },
  "726536-B21": { name: "HP 9.5mm SATA DVD-ROM JackBlack Gen9", price: 65, image: `${CDN}/179/images/6295/hp_500__66443.1548954847.386.513.png?c=2` },
  "726537-B21": { name: "HP 9.5mm SATA DVD-RW JackBlack G9", price: 95, image: `${CDN}/180/images/6296/726537-B21__87261.1548954879.386.513.png?c=2` },
  "20RH003PUS": { name: "Lenovo ThinkPad P43s - i7, 16GB, 512GB SSD, 14\"", price: 1300, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80&fit=crop" },
  "5G9C5": { name: "Dell Latitude 3390 2-in-1 - i5, 8GB, 256GB, 13.3\"", price: 999, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80&fit=crop" },
  "7KK23UT#ABA": { name: "HP EliteBook 840 G6 - i5, 8GB, 256GB, 14\"", price: 1600, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80&fit=crop" },
  "7KJ99UT#ABA": { name: "HP EliteBook 850 G6 - i5, 8GB, 256GB, 15.6\"", price: 1450, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80&fit=crop" },
  "3RF07UT#ABA": { name: "HP EliteBook 840 G5 - i5, 8GB, 256GB, 14\"", price: 1300, image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&q=80&fit=crop" },
  "20L5000AUS": { name: "Lenovo ThinkPad X1 Carbon Gen 6 - i7, 16GB, 512GB", price: 1750, image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?w=400&q=80&fit=crop" },
  "NX.GTJAA.002": { name: "Acer TravelMate P2 - i5, 8GB, 256GB, 14\"", price: 850, image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&q=80&fit=crop" },
  "83A10000US": { name: "Lenovo ThinkPad E580 - i7, 8GB, 256GB, 15.6\"", price: 999, image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80&fit=crop" },
  "8QR68UA#ABA": { name: "HP ProBook 450 G5 - i5, 8GB, 256GB, 15.6\"", price: 899, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80&fit=crop" },
  "20HH001AUS": { name: "Lenovo ThinkPad T470 - i5, 8GB, 256GB, 14\"", price: 750, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80&fit=crop" },
};

function formatCard(val: string) {
  return val.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}
function formatExpiry(val: string) {
  const d = val.replace(/\D/g, "").slice(0, 4);
  return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<{ [sku: string]: number }>({});
  const [placed, setPlaced] = useState(false);

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", state: "", zip: "", country: "US",
    cardNumber: "", expiry: "", cvv: "", cardName: "",
  });

  useEffect(() => {
    try { setCart(JSON.parse(localStorage.getItem("fornida-cart") ?? "{}")); } catch {}
  }, []);

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const items = Object.entries(cart)
    .filter(([sku]) => ALL_PRODUCTS[sku])
    .map(([sku, qty]) => ({ sku, qty, ...ALL_PRODUCTS[sku] }));

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 500 ? 0 : 49;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.removeItem("fornida-cart");
    setPlaced(true);
  };

  if (placed) return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="bg-gray-50 rounded-3xl border border-gray-200 shadow-sm p-12 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
        <h1 className="text-2xl font-black text-zinc-900 mb-3">Order Placed!</h1>
        <p className="text-zinc-500 mb-2">Thank you for your order. A Fornida engineer will confirm and process your shipment within one business day.</p>
        <p className="text-zinc-500 text-sm mb-8">Confirmation will be sent to <strong className="text-zinc-200">{form.email}</strong></p>
        <a href="/shop" className="inline-block bg-zinc-900 text-zinc-950 font-bold px-8 py-3 rounded-xl hover:bg-zinc-800 transition-all">
          Back to Shop
        </a>
      </div>
    </main>
  );

  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/fornida-mark.png" alt="Fornida" className="h-8 w-auto" />
            <span className="text-zinc-900 text-xl font-black tracking-tight">FORNIDA</span>
          </a>
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <span className="font-semibold text-zinc-900">Secure Checkout</span>
            <span>🔒</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-6 flex items-center gap-2 text-sm text-zinc-500">
          <a href="/cart" className="hover:text-zinc-900 transition-colors">← Back to Cart</a>
        </div>
        <h1 className="text-3xl font-black tracking-tight mb-8 text-zinc-900">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left — form */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Contact */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-base font-black text-zinc-900 mb-5">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 mb-1.5">First Name *</label>
                    <input required value={form.firstName} onChange={e => set("firstName", e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-stone-400 transition-all"
                      placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Last Name *</label>
                    <input required value={form.lastName} onChange={e => set("lastName", e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-stone-400 transition-all"
                      placeholder="Smith" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Email *</label>
                    <input required type="email" value={form.email} onChange={e => set("email", e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-stone-400 transition-all"
                      placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Phone</label>
                    <input value={form.phone} onChange={e => set("phone", e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-stone-400 transition-all"
                      placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
              </div>

              {/* Shipping */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-base font-black text-zinc-900 mb-5">Shipping Address</h2>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Street Address *</label>
                    <input required value={form.address} onChange={e => set("address", e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-stone-400 transition-all"
                      placeholder="123 Main St, Suite 400" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-semibold text-zinc-500 mb-1.5">City *</label>
                      <input required value={form.city} onChange={e => set("city", e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-stone-400 transition-all"
                        placeholder="Dallas" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 mb-1.5">State *</label>
                      <input required value={form.state} onChange={e => set("state", e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-stone-400 transition-all"
                        placeholder="TX" maxLength={2} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 mb-1.5">ZIP *</label>
                      <input required value={form.zip} onChange={e => set("zip", e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-stone-400 transition-all"
                        placeholder="75001" maxLength={10} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-base font-black text-zinc-900 mb-1">Payment</h2>
                <p className="text-xs text-zinc-500 mb-5 flex items-center gap-1.5">
                  <span>🔒</span> Secure & encrypted
                </p>

                {/* Card type icons */}
                <div className="flex items-center gap-2 mb-5">
                  {["VISA", "MC", "AMEX", "DISC"].map((c) => (
                    <span key={c} className="border border-gray-200 rounded px-2 py-0.5 text-[10px] font-black text-zinc-500 bg-gray-50">{c}</span>
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Card Number *</label>
                    <input required value={form.cardNumber}
                      onChange={e => set("cardNumber", formatCard(e.target.value))}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-stone-400 transition-all font-mono tracking-widest"
                      placeholder="1234 5678 9012 3456" maxLength={19} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Name on Card *</label>
                    <input required value={form.cardName} onChange={e => set("cardName", e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-stone-400 transition-all"
                      placeholder="Jane Smith" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Expiry *</label>
                      <input required value={form.expiry}
                        onChange={e => set("expiry", formatExpiry(e.target.value))}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-stone-400 transition-all font-mono"
                        placeholder="MM/YY" maxLength={5} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 mb-1.5">CVV *</label>
                      <input required value={form.cvv}
                        onChange={e => set("cvv", e.target.value.replace(/\D/g, "").slice(0, 4))}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-stone-400 transition-all font-mono"
                        placeholder="•••" maxLength={4} type="password" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — order summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-24">
                <h2 className="text-base font-black text-zinc-900 mb-4">Order Summary</h2>

                <div className="flex flex-col gap-3 mb-5 max-h-64 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div key={item.sku} className="flex gap-3 items-start">
                      <div className="relative flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-contain rounded-lg border border-gray-200 bg-gray-50" />
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-zinc-600 text-zinc-900 rounded-full text-[10px] font-bold flex items-center justify-center">{item.qty}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-zinc-900 font-semibold leading-tight line-clamp-2">{item.name}</p>
                        <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{item.sku}</p>
                      </div>
                      <p className="text-sm font-bold text-zinc-900 flex-shrink-0">${(item.price * item.qty).toLocaleString()}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 flex flex-col gap-2 text-sm mb-5">
                  <div className="flex justify-between text-zinc-500">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-zinc-500">
                    <span>Shipping</span>
                    <span className={`font-semibold ${shipping === 0 ? "text-green-600" : ""}`}>{shipping === 0 ? "Free" : `$${shipping}`}</span>
                  </div>
                  <div className="flex justify-between font-black text-zinc-900 text-base pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-zinc-900 text-white font-bold text-sm py-3.5 rounded-xl hover:bg-gray-50 transition-all active:scale-[0.98]"
                >
                  Place Order · ${total.toLocaleString()}
                </button>

                <div className="mt-4 flex flex-col gap-1.5">
                  <p className="text-[10px] text-zinc-500 text-center">By placing your order you agree to Fornida&apos;s Terms of Sale.</p>
                  <div className="flex justify-center gap-4 mt-1">
                    {["✓ Ships from Plano TX", "✓ 30-day returns"].map(t => (
                      <span key={t} className="text-[10px] text-zinc-500">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <footer className="bg-gray-50 border-t border-gray-200 mt-16 py-8 px-6 text-center text-zinc-500 text-xs">
        &copy; {new Date().getFullYear()} Fornida. All rights reserved. &nbsp;|&nbsp; Plano, TX
      </footer>
    </main>
  );
}
