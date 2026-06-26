"use client";

import { useState, useEffect } from "react";

const CDN = "https://cdn11.bigcommerce.com/s-2bihpr2wvz/products";

const ALL_PRODUCTS = [
  { sku: "488069-B21", name: "HPE Trusted Platform Module (TPM) - Hardware Security Chip for SimpliVity 380 Gen9", price: 50, image: `${CDN}/128/images/13059/2c15b323-7d28-412a-aa44-43726258a067__73928.1652909995.386.513.jpg?c=2` },
  { sku: "512485-B21", name: "HPE iLO Advanced including 1yr 24x7 Technical Support and Updates 1-server LTU", price: 205, image: `${CDN}/131/images/10145/ILO__20323.1558452483.386.513.jpg?c=2` },
  { sku: "652753-B21", name: "1TB 6G SAS 7.2K 3.5in DP MDL SC HDD", price: 314, image: `${CDN}/145/images/7512/c05269956__65778.1549467571.386.513.png?c=2` },
  { sku: "652757-B21", name: "2TB 6G SAS 7.2K 3.5in DP MDL SC HDD", price: 106, image: `${CDN}/146/images/6244/HP_2TB_6G_SAS_7.2K_rpm_LFF_3.5-inch_SC_Midline_Hard_Drive_652757-B21_653948-001___18016.1470832226.1280.1280__17499.1548888864.386.513.png?c=2` },
  { sku: "652766-B21", name: "3TB 6G SAS 7.2K 3.5in DP MDL SC HDD", price: 134, image: `${CDN}/147/images/7513/c05269956__08728.1549467596.386.513.png?c=2` },
  { sku: "695510-B21", name: "4TB 6G SAS 7.2K 3.5in DP MDL SC HDD", price: 464, image: `${CDN}/163/images/6250/HP_4TB_6G_SAS_7.2K_rpm_LFF_3.5-inch_SC_Midline_Hard_Drive_695510-B21_695842-001__29163.1470832003.1280.1280__86617.1548889706.386.513.png?c=2` },
  { sku: "718162-B21", name: "HP 1.2TB 6G SAS 10K rpm SFF 2.5in SC Dual Port Enterprise HDD", price: 295, image: `${CDN}/171/images/7846/816899-B21__29210.1533647106.1280.1280__02584.1549321333.386.513__58712.1551391318.386.513.png?c=2` },
  { sku: "726757-B21", name: "HP H240ar 12Gb 1-port Int Smart Host Bus Adapter", price: 95, image: `${CDN}/189/images/6227/726821-B21__35517.1496604446__67022.1548888078.386.513.png?c=2` },
  { sku: "666986-B21", name: "HP Large Form Factor Hard Drive Blank Kit", price: 3, image: `${CDN}/160/images/7989/SVPHPE1903468__41788.1551713728.386.513.jpg?c=2` },
  { sku: "666987-B21", name: "HP Small Form Factor Hard Drive Blank Kit", price: 9, image: `${CDN}/161/images/7988/SVPHPE1903468__12844.1551713327.386.513.jpg?c=2` },
  { sku: "700139-B21", name: "HP 32GB microSD Enterprise Mainstream Flash Media Kit", price: 155, image: `${CDN}/164/images/10135/i00052144__73007.1555518706.386.513.png?c=2` },
  { sku: "726717-B21", name: "HP 4GB (1x4GB) Single Rank x8 DDR4-2133 CAS-15-15-15 Registered Memory Kit", price: 125, image: `${CDN}/181/images/6201/s-l640__29479.1548884565.386.513.png?c=2` },
  { sku: "726718-B21", name: "HP 8GB (1x8GB) Single Rank x4 PC4-2133P-R DDR4-2133 Registered Memory", price: 135, image: `${CDN}/182/images/9860/HPE-DDR4-SmartMemory_1__30243.1548885272.386.513__23822.1554141835.386.513.png?c=2` },
  { sku: "726719-B21", name: "HP 16GB (1x16GB) Dual Rank x4 PC4-2133P-R DDR4-2133 Registered Memory", price: 192, image: `${CDN}/183/images/6221/HP-Memory-726719-B21__72523.1548885889.386.513.png?c=2` },
  { sku: "726720-B21", name: "HP 16GB (1x16GB) Dual Rank x4 DDR4-2133 CAS-15-15-15 Load Reduced Memory Kit", price: 165, image: `${CDN}/184/images/6204/c05200574__73969.1548884878.386.513.png?c=2` },
  { sku: "726722-B21", name: "HP 32GB (1x32GB) Quad Rank x4 PC4-2133P-L DDR4-2133 Load Reduced Memory", price: 365, image: `${CDN}/185/images/6205/726722-b21__81189.1548884999.386.513.jpg?c=2` },
  { sku: "726724-B21", name: "HP 64GB (1x64GB) Quad Rank x4 DDR4-2133 CAS-15-15-15 Load Reduced Memory Kit", price: 965, image: `${CDN}/186/images/6206/3734823__58877.1506115684__55177.1548885042.386.513.jpg?c=2` },
  { sku: "720478-B21", name: "HPE 500W Flex Slot Platinum Hot Plug Power Supply Kit", price: 145, image: `${CDN}/172/images/6199/s-l640__79687.1548884275.386.513.png?c=2` },
  { sku: "720479-B21", name: "HPE 800W Flex Slot Platinum Hot Plug Power Supply Kit", price: 165, image: `${CDN}/173/images/6200/c04420586__71300.1548884299.386.513.png?c=2` },
  { sku: "720480-B21", name: "HPE 800W Flex Slot -48VDC Hot Plug Power Supply Kit", price: 395, image: `${CDN}/174/images/6180/c04603072__63288.1548881822.386.513.png?c=2` },
  { sku: "720482-B21", name: "HPE 800W Flex Slot Titanium Hot Plug Power Supply Kit", price: 245, image: `${CDN}/175/images/6181/AJ7W_1_201811281909358629__77323.1548881933.386.513.jpg?c=2` },
  { sku: "720484-B21", name: "HPE 800W Flex Slot Universal Hot Plug Power Supply Kit", price: 165, image: `${CDN}/176/images/6182/i00021977__83765.1548882042.386.513.png?c=2` },
  { sku: "720620-B21", name: "HPE 1400W Flex Slot Platinum Plus Hot Plug Power Supply Kit", price: 215, image: `${CDN}/177/images/6183/c04420610__38414.1548882098.386.513.png?c=2` },
  { sku: "726740-B21", name: "HP Smart Array P440ar/2GB FBWC 12Gb 1-port Int SAS Controller", price: 295, image: `${CDN}/188/images/6384/i00066678__36093.1548968191.386.513.png?c=2` },
  { sku: "726821-B21", name: "HP Smart Array P440/4GB FBWC 12Gb 1-port Int SAS Controller", price: 395, image: `${CDN}/190/images/6228/726821-B21__35517.1496604446__94517.1548888147.386.513.png?c=2` },
  { sku: "726825-B21", name: "HP Smart Array P441/4GB FBWC 12Gb 2-ports Ext SAS Controller", price: 445, image: `${CDN}/191/images/6229/726825-B21__66655.1496636256__26552.1548888176.386.513.png?c=2` },
  { sku: "726897-B21", name: "HP Smart Array P840/4GB FBWC 12Gb 2-ports Int SAS Controller", price: 525, image: `${CDN}/192/images/6264/726897-B21__27965.1496603232__72863.1548947684.386.513.png?c=2` },
  { sku: "726903-B21", name: "HP Smart Array P841/4GB FBWC 12Gb 4-ports Ext SAS Controller", price: 695, image: `${CDN}/193/images/7232/726903-B21__09092.1496601570__30552.1549316156.386.513.png?c=2` },
  { sku: "726907-B21", name: "HP H240 12Gb 2-ports Int Smart Host Bus Adapter", price: 125, image: `${CDN}/194/images/8217/1028429034__50499.1534538990.500.750__02724.1552499009.386.513.jpg?c=2` },
  { sku: "726911-B21", name: "HP H241 12Gb 2-ports Ext Smart Host Bus Adapter", price: 325, image: `${CDN}/195/images/6231/726825-B21__66655.1496636256__24478.1548888230.386.513.png?c=2` },
  { sku: "615732-B21", name: "HP Ethernet 1Gb 2-port 332T Adapter", price: 105, image: `${CDN}/133/images/6164/i00079695__62515.1548870514.386.513.png?c=2` },
  { sku: "629135-B21", name: "HP Ethernet 1Gb 4-port 331FLR Adapter", price: 125, image: `${CDN}/135/images/6381/333_o1a2-k7__57535.1558452483.386.513.png?c=2` },
  { sku: "647594-B21", name: "HPE 331T Network Adapter - PCIe 2.0 x4 Low Profile - Gigabit Ethernet x4", price: 163, image: `${CDN}/136/images/12081/be29a1c5-9945-47f8-aacc-7ee28a19bfbd__38043.1629208792.386.513.jpg?c=2` },
  { sku: "652497-B21", name: "HP Ethernet 1Gb 2-port 361T Adapter", price: 125, image: `${CDN}/137/images/6175/i78031078031__85790.1558452484.386.513.png?c=2` },
  { sku: "652503-B21", name: "HP Ethernet 10Gb 2-port 530SFP Adapter", price: 325, image: `${CDN}/138/images/6176/HP_Ethernet_10Gb_2-port_530SFP_Adapter_652503-B21_656244-001__67131.1466521142.1280.1280__18139.1558452484.386.513.png?c=2` },
  { sku: "656596-B21", name: "HP Ethernet 10Gb 2-port 530T Adapter", price: 325, image: `${CDN}/149/images/6223/656596-b21_1__86319.1548887859.386.513.png?c=2` },
  { sku: "665243-B21", name: "HP Ethernet 10Gb 2-port 560FLR-SFP+ Adapter", price: 295, image: `${CDN}/158/images/6382/665243-b21__62136.1548966608.386.513.png?c=2` },
  { sku: "665249-B21", name: "HP Ethernet 10Gb 2-port 560SFP+ Adapter", price: 325, image: `${CDN}/159/images/6224/HP_Ethernet_10Gb_2-port_560SFP_Adapter_665249-B21_669279-001__78244.1466521445.1280.1280__79570.1548887889.386.513.png?c=2` },
  { sku: "700699-B21", name: "HP Ethernet 10Gb 2-port 561FLR-T Adapter", price: 395, image: `${CDN}/165/images/6401/200383__52151.1548969138.386.513.png?c=2` },
  { sku: "700751-B21", name: "HP FlexFabric 10Gb 2-port 534FLR-SFP+ Adapter", price: 325, image: `${CDN}/166/images/6225/c05232708__48485.1548887919.386.513.png?c=2` },
  { sku: "700759-B21", name: "HP FlexFabric 10Gb 2-port 533FLR-T Adapter", price: 325, image: `${CDN}/167/images/6392/i00061187__37419.1548968505.386.513.png?c=2` },
  { sku: "716591-B21", name: "HP Ethernet 10Gb 2-port 561T Adapter", price: 395, image: `${CDN}/170/images/6226/716591-b21__75815.1548887992.386.513.png?c=2` },
  { sku: "663201-B21", name: "HP 1U Small Form Factor Ball Bearing Rail Kit", price: 105, image: `${CDN}/153/images/7991/i00028330__20205.1551714985.386.513.png?c=2` },
  { sku: "663202-B21", name: "HP 1U Large Form Factor Ball Bearing Rail Kit", price: 75, image: `${CDN}/154/images/6290/hp-1u-large-form-factor-ball-bearing-gen8-rail-kit-rack-rail-kit-1u-for-proliant-dl160-gen8-dl160-gen8-base-dl160-gen8-e-663202-__95472.1548954538.386.513.png?c=2` },
  { sku: "663203-B21", name: "HP 1U Cable Management Arm for Ball Bearing Rail Kit", price: 30, image: `${CDN}/155/images/6291/663203-B21__11213.1510070690__13114.1548954573.386.513.jpg?c=2` },
  { sku: "701498-B21", name: "HP Mobile USB Non Leaded System DVD RW Drive", price: 89, image: `${CDN}/168/images/6294/1450780717c03479920__96856.1548954722.386.513.png?c=2` },
  { sku: "726536-B21", name: "HP 9.5mm SATA DVD-ROM JackBlack Gen9 Optical Drive", price: 65, image: `${CDN}/179/images/6295/hp_500__66443.1548954847.386.513.png?c=2` },
  { sku: "726537-B21", name: "HP 9.5mm SATA DVD-RW JackBlack G9 Optical Drive", price: 95, image: `${CDN}/180/images/6296/726537-B21__87261.1548954879.386.513.png?c=2` },
  { sku: "20RH003PUS", name: "Lenovo ThinkPad P43s 20RH - Core i7-8565U, 16GB RAM, 512GB SSD, 14\" FHD", price: 1300, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80&fit=crop" },
  { sku: "5G9C5", name: "Dell Latitude 3390 2-in-1 - Core i5-8130U, 8GB RAM, 256GB SSD, 13.3\"", price: 999, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80&fit=crop" },
  { sku: "7KK23UT#ABA", name: "HP EliteBook 840 G6 - Core i5-8265U, 8GB RAM, 256GB SSD, 14\" FHD", price: 1600, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80&fit=crop" },
  { sku: "7KJ99UT#ABA", name: "HP EliteBook 850 G6 - Core i5-8265U, 8GB RAM, 256GB SSD, 15.6\" FHD", price: 1450, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80&fit=crop" },
  { sku: "3RF07UT#ABA", name: "HP EliteBook 840 G5 - Core i5-7300U, 8GB RAM, 256GB SSD, 14\" FHD", price: 1300, image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&q=80&fit=crop" },
  { sku: "20L5000AUS", name: "Lenovo ThinkPad X1 Carbon Gen 6 - Core i7-8550U, 16GB RAM, 512GB SSD, 14\" FHD", price: 1750, image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?w=400&q=80&fit=crop" },
  { sku: "NX.GTJAA.002", name: "Acer TravelMate P2 - Core i5-8250U, 8GB RAM, 256GB SSD, 14\" FHD", price: 850, image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&q=80&fit=crop" },
  { sku: "83A10000US", name: "Lenovo ThinkPad E580 - Core i7-8550U, 8GB RAM, 256GB SSD, 15.6\" FHD", price: 999, image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80&fit=crop" },
  { sku: "8QR68UA#ABA", name: "HP ProBook 450 G5 - Core i5-8250U, 8GB RAM, 256GB SSD, 15.6\" FHD", price: 899, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80&fit=crop" },
  { sku: "20HH001AUS", name: "Lenovo ThinkPad T470 - Core i5-7200U, 8GB RAM, 256GB SSD, 14\" FHD", price: 750, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80&fit=crop" },
];

const PRODUCT_MAP = Object.fromEntries(ALL_PRODUCTS.map((p) => [p.sku, p]));

export default function CartPage() {
  const [cart, setCart] = useState<{ [sku: string]: number }>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("fornida-cart") ?? "{}");
      setCart(saved);
    } catch {}
    setLoaded(true);
  }, []);

  const updateQty = (sku: string, qty: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[sku];
      else next[sku] = qty;
      localStorage.setItem("fornida-cart", JSON.stringify(next));
      return next;
    });
  };

  const removeItem = (sku: string) => updateQty(sku, 0);

  const clearCart = () => {
    setCart({});
    localStorage.removeItem("fornida-cart");
  };

  const items = Object.entries(cart)
    .filter(([sku]) => PRODUCT_MAP[sku])
    .map(([sku, qty]) => ({ ...PRODUCT_MAP[sku], qty }));

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = subtotal >= 500 ? 0 : 49;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-stone-100 text-zinc-900">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-stone-100/90 backdrop-blur-md border-b border-stone-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/fornida-mark.png" alt="Fornida" className="h-8 w-auto" />
            <span className="text-zinc-900 text-xl font-black tracking-tight">FORNIDA</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Services</a>
            <a href="/insights" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Insights</a>
            <a href="/shop" className="text-sm text-zinc-900 font-semibold border-b border-zinc-900 pb-0.5">Shop</a>
          </div>
          <a href="/#assessment" className="bg-zinc-900 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-zinc-900 transition-colors">
            Book Assessment →
          </a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8 flex items-center gap-3">
          <a href="/shop" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">← Back to Shop</a>
        </div>
        <h1 className="text-4xl font-black tracking-tight mb-10 text-zinc-900">Your Cart</h1>

        {!loaded ? null : items.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="text-2xl font-bold text-zinc-700 mb-3">Your cart is empty</h2>
            <p className="text-zinc-500 mb-8">Add some hardware from our shop to get started.</p>
            <a href="/shop" className="bg-zinc-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-zinc-900 transition-all">
              Browse Shop →
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Items */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.sku} className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5 flex gap-5 items-start">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded-xl bg-stone-50 border border-stone-200 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-400 font-mono mb-1">{item.sku}</p>
                    <p className="text-sm font-semibold text-zinc-900 leading-snug mb-3">{item.name}</p>
                    <div className="flex items-center gap-4 flex-wrap">
                      {/* Qty stepper */}
                      <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQty(item.sku, item.qty - 1)}
                          className="px-3 py-1.5 text-stone-600 hover:bg-stone-50 transition-colors font-bold text-lg leading-none"
                        >−</button>
                        <span className="px-4 py-1.5 text-sm font-semibold text-zinc-900 border-x border-stone-200">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.sku, item.qty + 1)}
                          className="px-3 py-1.5 text-stone-600 hover:bg-stone-50 transition-colors font-bold text-lg leading-none"
                        >+</button>
                      </div>
                      <button
                        onClick={() => removeItem(item.sku)}
                        className="text-xs text-zinc-400 hover:text-red-500 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-lg font-black text-zinc-900">${(item.price * item.qty).toLocaleString()}</p>
                    {item.qty > 1 && (
                      <p className="text-xs text-zinc-400">${item.price.toLocaleString()} each</p>
                    )}
                  </div>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="text-xs text-zinc-400 hover:text-red-500 transition-colors self-start mt-2"
              >
                Clear cart
              </button>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-black text-zinc-900 mb-5">Order Summary</h2>

                <div className="flex flex-col gap-3 text-sm mb-5">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal ({items.reduce((s, i) => s + i.qty, 0)} items)</span>
                    <span className="font-semibold text-zinc-900">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green-600 font-semibold" : "font-semibold text-zinc-900"}>
                      {shipping === 0 ? "Free" : `$${shipping}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-zinc-400">Free shipping on orders $500+</p>
                  )}
                  <div className="border-t border-stone-200 pt-3 flex justify-between font-black text-zinc-900 text-base">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>

                <a
                  href="/checkout"
                  className="block w-full text-center bg-zinc-900 text-white font-bold text-sm py-3.5 rounded-xl hover:bg-zinc-900 transition-all mb-3"
                >
                  Proceed to Checkout →
                </a>
                <a
                  href="/shop"
                  className="block w-full text-center border border-stone-200 text-stone-600 font-semibold text-sm py-3 rounded-xl hover:bg-stone-50 transition-all"
                >
                  Continue Shopping
                </a>

                <div className="mt-5 pt-5 border-t border-stone-200 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span>✓</span><span>Ships from Plano, TX</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span>✓</span><span>30-day returns</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span>✓</span><span>MSP-backed support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-zinc-900 border-t border-zinc-800 mt-16 py-8 px-6 text-center text-zinc-500 text-xs">
        &copy; {new Date().getFullYear()} Fornida. All rights reserved. &nbsp;|&nbsp; Plano, TX &nbsp;|&nbsp;
        <a href="mailto:info@fornida.com" className="hover:text-zinc-300 transition-colors">info@fornida.com</a>
      </footer>
    </main>
  );
}
