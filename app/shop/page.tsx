"use client";

import { useState, useMemo } from "react";

interface Product {
  sku: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  inStock: boolean;
  badge?: string;
  image: string;
}

const CDN = "https://cdn11.bigcommerce.com/s-2bihpr2wvz/products";

const PRODUCTS: Product[] = [
  // Systems — iLO / TPM
  { sku: "488069-B21", name: "HPE Trusted Platform Module (TPM) - Hardware Security Chip for SimpliVity 380 Gen9", price: 50, category: "Systems", inStock: false, image: `${CDN}/128/images/13059/2c15b323-7d28-412a-aa44-43726258a067__73928.1652909995.386.513.jpg?c=2` },
  { sku: "512485-B21", name: "HPE iLO Advanced including 1yr 24x7 Technical Support and Updates 1-server LTU", price: 205, originalPrice: 399, category: "Systems", inStock: true, badge: "Popular", image: `${CDN}/131/images/10145/ILO__20323.1558452483.386.513.jpg?c=2` },
  // Systems — Storage Drives
  { sku: "652753-B21", name: "1TB 6G SAS 7.2K 3.5in DP MDL SC HDD", price: 314, category: "Systems", inStock: true, image: `${CDN}/145/images/7512/c05269956__65778.1549467571.386.513.png?c=2` },
  { sku: "652757-B21", name: "2TB 6G SAS 7.2K 3.5in DP MDL SC HDD", price: 106, originalPrice: 560, category: "Systems", inStock: true, badge: "Sale", image: `${CDN}/146/images/6244/HP_2TB_6G_SAS_7.2K_rpm_LFF_3.5-inch_SC_Midline_Hard_Drive_652757-B21_653948-001___18016.1470832226.1280.1280__17499.1548888864.386.513.png?c=2` },
  { sku: "652766-B21", name: "3TB 6G SAS 7.2K 3.5in DP MDL SC HDD", price: 134, originalPrice: 671, category: "Systems", inStock: true, badge: "Sale", image: `${CDN}/147/images/7513/c05269956__08728.1549467596.386.513.png?c=2` },
  { sku: "695510-B21", name: "4TB 6G SAS 7.2K 3.5in DP MDL SC HDD", price: 464, originalPrice: 500, category: "Systems", inStock: true, image: `${CDN}/163/images/6250/HP_4TB_6G_SAS_7.2K_rpm_LFF_3.5-inch_SC_Midline_Hard_Drive_695510-B21_695842-001__29163.1470832003.1280.1280__86617.1548889706.386.513.png?c=2` },
  { sku: "718162-B21", name: "HP 1.2TB 6G SAS 10K rpm SFF 2.5in SC Dual Port Enterprise HDD", price: 295, originalPrice: 699, category: "Systems", inStock: true, badge: "Sale", image: `${CDN}/171/images/7846/816899-B21__29210.1533647106.1280.1280__02584.1549321333.386.513__58712.1551391318.386.513.png?c=2` },
  { sku: "726757-B21", name: "HP H240ar 12Gb 1-port Int Smart Host Bus Adapter", price: 95, originalPrice: 249, category: "Systems", inStock: true, image: `${CDN}/189/images/6227/726821-B21__35517.1496604446__67022.1548888078.386.513.png?c=2` },
  { sku: "666986-B21", name: "HP Large Form Factor Hard Drive Blank Kit", price: 3, originalPrice: 5, category: "Systems", inStock: true, image: `${CDN}/160/images/7989/SVPHPE1903468__41788.1551713728.386.513.jpg?c=2` },
  { sku: "666987-B21", name: "HP Small Form Factor Hard Drive Blank Kit", price: 9, category: "Systems", inStock: true, image: `${CDN}/161/images/7988/SVPHPE1903468__12844.1551713327.386.513.jpg?c=2` },
  { sku: "700139-B21", name: "HP 32GB microSD Enterprise Mainstream Flash Media Kit", price: 155, originalPrice: 165, category: "Systems", inStock: true, image: `${CDN}/164/images/10135/i00052144__73007.1555518706.386.513.png?c=2` },
  // Systems — Memory
  { sku: "726717-B21", name: "HP 4GB (1x4GB) Single Rank x8 DDR4-2133 CAS-15-15-15 Registered Memory Kit", price: 125, originalPrice: 279, category: "Systems", inStock: true, image: `${CDN}/181/images/6201/s-l640__29479.1548884565.386.513.png?c=2` },
  { sku: "726718-B21", name: "HP 8GB (1x8GB) Single Rank x4 PC4-2133P-R DDR4-2133 Registered Memory", price: 135, originalPrice: 658, category: "Systems", inStock: true, badge: "Sale", image: `${CDN}/182/images/9860/HPE-DDR4-SmartMemory_1__30243.1548885272.386.513__23822.1554141835.386.513.png?c=2` },
  { sku: "726719-B21", name: "HP 16GB (1x16GB) Dual Rank x4 PC4-2133P-R DDR4-2133 Registered Memory", price: 192, originalPrice: 1264, category: "Systems", inStock: true, badge: "Sale", image: `${CDN}/183/images/6221/HP-Memory-726719-B21__72523.1548885889.386.513.png?c=2` },
  { sku: "726720-B21", name: "HP 16GB (1x16GB) Dual Rank x4 DDR4-2133 CAS-15-15-15 Load Reduced Memory Kit", price: 165, originalPrice: 889, category: "Systems", inStock: true, badge: "Sale", image: `${CDN}/184/images/6204/c05200574__73969.1548884878.386.513.png?c=2` },
  { sku: "726722-B21", name: "HP 32GB (1x32GB) Quad Rank x4 PC4-2133P-L DDR4-2133 Load Reduced Memory", price: 365, originalPrice: 2067, category: "Systems", inStock: true, badge: "Sale", image: `${CDN}/185/images/6205/726722-b21__81189.1548884999.386.513.jpg?c=2` },
  { sku: "726724-B21", name: "HP 64GB (1x64GB) Quad Rank x4 DDR4-2133 CAS-15-15-15 Load Reduced Memory Kit", price: 965, originalPrice: 4208, category: "Systems", inStock: true, badge: "Sale", image: `${CDN}/186/images/6206/3734823__58877.1506115684__55177.1548885042.386.513.jpg?c=2` },
  // Systems — Power Supplies
  { sku: "720478-B21", name: "HPE 500W Flex Slot Platinum Hot Plug Power Supply Kit", price: 145, originalPrice: 309, category: "Systems", inStock: true, image: `${CDN}/172/images/6199/s-l640__79687.1548884275.386.513.png?c=2` },
  { sku: "720479-B21", name: "HPE 800W Flex Slot Platinum Hot Plug Power Supply Kit", price: 165, originalPrice: 359, category: "Systems", inStock: true, image: `${CDN}/173/images/6200/c04420586__71300.1548884299.386.513.png?c=2` },
  { sku: "720480-B21", name: "HPE 800W Flex Slot -48VDC Hot Plug Power Supply Kit", price: 395, originalPrice: 469, category: "Systems", inStock: true, image: `${CDN}/174/images/6180/c04603072__63288.1548881822.386.513.png?c=2` },
  { sku: "720482-B21", name: "HPE 800W Flex Slot Titanium Hot Plug Power Supply Kit", price: 245, originalPrice: 409, category: "Systems", inStock: true, image: `${CDN}/175/images/6181/AJ7W_1_201811281909358629__77323.1548881933.386.513.jpg?c=2` },
  { sku: "720484-B21", name: "HPE 800W Flex Slot Universal Hot Plug Power Supply Kit", price: 165, category: "Systems", inStock: true, image: `${CDN}/176/images/6182/i00021977__83765.1548882042.386.513.png?c=2` },
  { sku: "720620-B21", name: "HPE 1400W Flex Slot Platinum Plus Hot Plug Power Supply Kit", price: 215, originalPrice: 429, category: "Systems", inStock: true, image: `${CDN}/177/images/6183/c04420610__38414.1548882098.386.513.png?c=2` },
  // Systems — Storage Controllers
  { sku: "726740-B21", name: "HP Smart Array P440ar/2GB FBWC 12Gb 1-port Int SAS Controller", price: 295, originalPrice: 599, category: "Systems", inStock: true, badge: "Popular", image: `${CDN}/188/images/6384/i00066678__36093.1548968191.386.513.png?c=2` },
  { sku: "726821-B21", name: "HP Smart Array P440/4GB FBWC 12Gb 1-port Int SAS Controller", price: 395, originalPrice: 899, category: "Systems", inStock: true, image: `${CDN}/190/images/6228/726821-B21__35517.1496604446__94517.1548888147.386.513.png?c=2` },
  { sku: "726825-B21", name: "HP Smart Array P441/4GB FBWC 12Gb 2-ports Ext SAS Controller", price: 445, originalPrice: 899, category: "Systems", inStock: true, image: `${CDN}/191/images/6229/726825-B21__66655.1496636256__26552.1548888176.386.513.png?c=2` },
  { sku: "726897-B21", name: "HP Smart Array P840/4GB FBWC 12Gb 2-ports Int SAS Controller", price: 525, originalPrice: 1249, category: "Systems", inStock: true, image: `${CDN}/192/images/6264/726897-B21__27965.1496603232__72863.1548947684.386.513.png?c=2` },
  { sku: "726903-B21", name: "HP Smart Array P841/4GB FBWC 12Gb 4-ports Ext SAS Controller", price: 695, originalPrice: 1399, category: "Systems", inStock: true, image: `${CDN}/193/images/7232/726903-B21__09092.1496601570__30552.1549316156.386.513.png?c=2` },
  { sku: "726907-B21", name: "HP H240 12Gb 2-ports Int Smart Host Bus Adapter", price: 125, originalPrice: 249, category: "Systems", inStock: true, image: `${CDN}/194/images/8217/1028429034__50499.1534538990.500.750__02724.1552499009.386.513.jpg?c=2` },
  { sku: "726911-B21", name: "HP H241 12Gb 2-ports Ext Smart Host Bus Adapter", price: 325, category: "Systems", inStock: true, image: `${CDN}/195/images/6231/726825-B21__66655.1496636256__24478.1548888230.386.513.png?c=2` },
  // Network Adapters — 1Gb
  { sku: "615732-B21", name: "HP Ethernet 1Gb 2-port 332T Adapter", price: 105, originalPrice: 199, category: "Network Adapters", inStock: true, image: `${CDN}/133/images/6164/i00079695__62515.1548870514.386.513.png?c=2` },
  { sku: "629135-B21", name: "HP Ethernet 1Gb 4-port 331FLR Adapter", price: 125, originalPrice: 313, category: "Network Adapters", inStock: true, image: `${CDN}/135/images/6381/333_o1a2-k7__57535.1558452483.386.513.png?c=2` },
  { sku: "647594-B21", name: "HPE 331T Network Adapter - PCIe 2.0 x4 Low Profile - Gigabit Ethernet x4", price: 163, originalPrice: 359, category: "Network Adapters", inStock: true, image: `${CDN}/136/images/12081/be29a1c5-9945-47f8-aacc-7ee28a19bfbd__38043.1629208792.386.513.jpg?c=2` },
  { sku: "652497-B21", name: "HP Ethernet 1Gb 2-port 361T Adapter", price: 125, originalPrice: 229, category: "Network Adapters", inStock: true, image: `${CDN}/137/images/6175/i78031078031__85790.1558452484.386.513.png?c=2` },
  // Network Adapters — 10Gb
  { sku: "652503-B21", name: "HP Ethernet 10Gb 2-port 530SFP Adapter", price: 325, originalPrice: 699, category: "Network Adapters", inStock: true, badge: "Sale", image: `${CDN}/138/images/6176/HP_Ethernet_10Gb_2-port_530SFP_Adapter_652503-B21_656244-001__67131.1466521142.1280.1280__18139.1558452484.386.513.png?c=2` },
  { sku: "656596-B21", name: "HP Ethernet 10Gb 2-port 530T Adapter", price: 325, originalPrice: 749, category: "Network Adapters", inStock: true, image: `${CDN}/149/images/6223/656596-b21_1__86319.1548887859.386.513.png?c=2` },
  { sku: "665243-B21", name: "HP Ethernet 10Gb 2-port 560FLR-SFP+ Adapter", price: 295, originalPrice: 679, category: "Network Adapters", inStock: true, image: `${CDN}/158/images/6382/665243-b21__62136.1548966608.386.513.png?c=2` },
  { sku: "665249-B21", name: "HP Ethernet 10Gb 2-port 560SFP+ Adapter", price: 325, originalPrice: 699, category: "Network Adapters", inStock: true, image: `${CDN}/159/images/6224/HP_Ethernet_10Gb_2-port_560SFP_Adapter_665249-B21_669279-001__78244.1466521445.1280.1280__79570.1548887889.386.513.png?c=2` },
  { sku: "700699-B21", name: "HP Ethernet 10Gb 2-port 561FLR-T Adapter", price: 395, originalPrice: 799, category: "Network Adapters", inStock: true, image: `${CDN}/165/images/6401/200383__52151.1548969138.386.513.png?c=2` },
  { sku: "700751-B21", name: "HP FlexFabric 10Gb 2-port 534FLR-SFP+ Adapter", price: 325, originalPrice: 599, category: "Network Adapters", inStock: true, image: `${CDN}/166/images/6225/c05232708__48485.1548887919.386.513.png?c=2` },
  { sku: "700759-B21", name: "HP FlexFabric 10Gb 2-port 533FLR-T Adapter", price: 325, originalPrice: 649, category: "Network Adapters", inStock: true, image: `${CDN}/167/images/6392/i00061187__37419.1548968505.386.513.png?c=2` },
  { sku: "716591-B21", name: "HP Ethernet 10Gb 2-port 561T Adapter", price: 395, originalPrice: 849, category: "Network Adapters", inStock: true, image: `${CDN}/170/images/6226/716591-b21__75815.1548887992.386.513.png?c=2` },
  // Notebooks & Accessories — Rail Kits & Optical Drives
  { sku: "663201-B21", name: "HP 1U Small Form Factor Ball Bearing Rail Kit", price: 105, originalPrice: 119, category: "Notebooks & Accessories", inStock: true, image: `${CDN}/153/images/7991/i00028330__20205.1551714985.386.513.png?c=2` },
  { sku: "663202-B21", name: "HP 1U Large Form Factor Ball Bearing Rail Kit", price: 75, originalPrice: 119, category: "Notebooks & Accessories", inStock: true, image: `${CDN}/154/images/6290/hp-1u-large-form-factor-ball-bearing-gen8-rail-kit-rack-rail-kit-1u-for-proliant-dl160-gen8-dl160-gen8-base-dl160-gen8-e-663202-__95472.1548954538.386.513.png?c=2` },
  { sku: "663203-B21", name: "HP 1U Cable Management Arm for Ball Bearing Rail Kit", price: 30, originalPrice: 44, category: "Notebooks & Accessories", inStock: true, image: `${CDN}/155/images/6291/663203-B21__11213.1510070690__13114.1548954573.386.513.jpg?c=2` },
  { sku: "701498-B21", name: "HP Mobile USB Non Leaded System DVD RW Drive", price: 89, originalPrice: 149, category: "Notebooks & Accessories", inStock: true, image: `${CDN}/168/images/6294/1450780717c03479920__96856.1548954722.386.513.png?c=2` },
  { sku: "726536-B21", name: "HP 9.5mm SATA DVD-ROM JackBlack Gen9 Optical Drive", price: 65, originalPrice: 99, category: "Notebooks & Accessories", inStock: true, image: `${CDN}/179/images/6295/hp_500__66443.1548954847.386.513.png?c=2` },
  { sku: "726537-B21", name: "HP 9.5mm SATA DVD-RW JackBlack G9 Optical Drive", price: 95, originalPrice: 129, category: "Notebooks & Accessories", inStock: true, image: `${CDN}/180/images/6296/726537-B21__87261.1548954879.386.513.png?c=2` },
  // Laptops
  { sku: "20RH003PUS", name: "Lenovo ThinkPad P43s 20RH - Core i7-8565U, 16GB RAM, 512GB SSD, 14\" FHD", price: 1300, category: "Laptops", inStock: true, badge: "Popular", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80&fit=crop" },
  { sku: "5G9C5", name: "Dell Latitude 3390 2-in-1 - Flip Design, Core i5-8130U, 8GB RAM, 256GB SSD, 13.3\"", price: 999, category: "Laptops", inStock: true, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80&fit=crop" },
  { sku: "7KK23UT#ABA", name: "HP EliteBook 840 G6 - Core i5-8265U, 8GB RAM, 256GB SSD, 14\" FHD", price: 1600, originalPrice: 1899, category: "Laptops", inStock: true, badge: "Sale", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80&fit=crop" },
  { sku: "7KJ99UT#ABA", name: "HP EliteBook 850 G6 - Core i5-8265U, 8GB RAM, 256GB SSD, 15.6\" FHD", price: 1450, originalPrice: 1750, category: "Laptops", inStock: true, badge: "Sale", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80&fit=crop" },
  { sku: "3RF07UT#ABA", name: "HP EliteBook 840 G5 - Core i5-7300U, 8GB RAM, 256GB SSD, 14\" FHD", price: 1300, category: "Laptops", inStock: true, image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&q=80&fit=crop" },
  { sku: "7MS68UT#ABA", name: "HP EliteBook x360 830 G6 13.3\" 2-in-1 - Core i5-8265U, 8GB RAM, 256GB SSD", price: 1300, originalPrice: 1429, category: "Laptops", inStock: true, badge: "Sale", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80&fit=crop" },
  { sku: "20RM0008US", name: "Lenovo ThinkBook 14s-IWL 20RM - Core i5-8265U, 8GB RAM, 256GB SSD, 14\" FHD", price: 800, originalPrice: 999, category: "Laptops", inStock: true, badge: "Sale", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80&fit=crop" },
  { sku: "20RH0013US", name: "Lenovo ThinkPad P43s 20RH - Core i7-8665U, 32GB RAM, 1TB SSD, 14\" FHD", price: 1525, originalPrice: 1899, category: "Laptops", inStock: true, badge: "Sale", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80&fit=crop" },
  { sku: "20RD0001US", name: "Lenovo ThinkPad X1 Carbon 20RD - Core i7-10510U, 16GB RAM, 512GB SSD, 14\" FHD", price: 1299, originalPrice: 1799, category: "Laptops", inStock: true, badge: "Sale", image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&q=80&fit=crop" },
  { sku: "LAT7320-I5", name: "Dell Latitude 7320 - Core i5-1145G7, 16GB RAM, 256GB SSD, 13.3\" FHD", price: 1195, originalPrice: 1499, category: "Laptops", inStock: true, image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80&fit=crop" },
  // Solutions
  { sku: "R740XD-VSAN", name: "vSAN DELL R740XD-24SFF Node — VMware vSAN Ready Node, Dual Xeon, NVMe", price: 0, category: "Solutions", inStock: false, badge: "Popular", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80&fit=crop" },
  { sku: "R740XD-S2D", name: "Dell S2D Microsoft R740XD-24SFF Node — Storage Spaces Direct, Windows Server", price: 0, category: "Solutions", inStock: false, image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=400&q=80&fit=crop" },
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
  Sale: "bg-red-100 text-zinc-700 border-red-200",
  Popular: "bg-cyan-50 text-zinc-900 border-cyan-200",
};

function ProductCard({
  product,
  cartQty,
  onAddToCart,
}: {
  product: Product;
  cartQty: number;
  onAddToCart: (sku: string) => void;
}) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div className="group relative border border-gray-200 shadow-sm rounded-2xl bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Cart-in indicator */}
      {cartQty > 0 && (
        <div className="absolute top-3 right-3 z-10 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[10px] font-bold shadow">
          ✓
        </div>
      )}

      <div className="aspect-square bg-white flex items-center justify-center p-4 relative overflow-hidden border-b border-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {!product.inStock && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-gray-100 text-zinc-500 border border-gray-200">
              OUT OF STOCK
            </span>
          )}
          {product.badge && product.inStock && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${BADGE_STYLES[product.badge]}`}>
              {product.badge.toUpperCase()}
            </span>
          )}
          {discount !== null && discount >= 30 && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-green-100 text-zinc-700 border border-green-200">
              -{discount}%
            </span>
          )}
        </div>
        {/* Quick-add overlay */}
        {product.inStock && (
          <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <button
              onClick={() => onAddToCart(product.sku)}
              className="bg-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-lg shadow hover:bg-cyan-600 transition-colors"
            >
              Quick add +
            </button>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="text-zinc-400 font-mono text-[10px] mb-1">{product.sku}</div>
        <h3 className="text-sm font-semibold text-zinc-900 leading-snug mb-3 flex-1">
          {product.name}
        </h3>
        <div className="flex items-end justify-between mt-auto gap-2">
          <div className="flex items-baseline gap-2">
            {product.price === 0 ? (
              <span className="text-sm font-bold text-zinc-900">Price on request</span>
            ) : (
              <>
                <span className="text-xl font-black text-zinc-900">${product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-sm text-zinc-400 line-through">${product.originalPrice.toLocaleString()}</span>
                )}
              </>
            )}
          </div>
          {product.price === 0 ? (
            <a href="/quote" className="text-xs font-bold px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-all whitespace-nowrap">
              Get Quote →
            </a>
          ) : (
            <button
              disabled={!product.inStock}
              onClick={() => product.inStock && onAddToCart(product.sku)}
              className={`text-xs font-bold px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                product.inStock
                  ? "bg-cyan-500 text-white hover:bg-cyan-600 active:scale-95"
                  : "bg-gray-100 text-zinc-400 cursor-not-allowed"
              }`}
            >
              {!product.inStock ? "Out of stock" : cartQty > 0 ? `In cart: ${cartQty}` : "Add to cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "savings">("default");
  const [cart, setCart] = useState<{ [sku: string]: number }>({});

  const addToCart = (sku: string) => {
    setCart((prev) => ({ ...prev, [sku]: (prev[sku] ?? 0) + 1 }));
  };

  const cartItemCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((total, [sku, qty]) => {
    const product = PRODUCTS.find((p) => p.sku === sku);
    return total + (product ? product.price * qty : 0);
  }, 0);

  const filtered = useMemo(() => {
    let items = PRODUCTS;
    if (activeCategory !== "All Products") {
      items = items.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
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

  const getCategoryCount = (cat: string) =>
    cat === "All Products" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === cat).length;

  return (
    <main className="bg-slate-300 text-zinc-900 min-h-screen pb-28">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-slate-300/90 backdrop-blur-md border-b border-gray-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-zinc-900 text-xl font-black tracking-tight">FORNIDA</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Services</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Case Studies</a>
            <a href="/insights" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Insights</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">About</a>
            <a href="/shop" className="text-sm text-zinc-900 font-semibold border-b border-cyan-500 pb-0.5">Shop</a>
          </div>
          <div className="flex items-center gap-3">
            {/* Cart badge */}
            <div className="relative">
              <button className="text-zinc-500 hover:text-zinc-900 transition-colors p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
            <a href="/#assessment" className="bg-cyan-500 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-cyan-600 transition-colors">
              Book Assessment →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="bg-white border-b border-gray-200 py-6 px-6 text-center">
        <h2 className="text-lg font-bold text-zinc-900 mb-3">
          🖥️ Enterprise Hardware &nbsp;·&nbsp; Certified Refurbished &nbsp;·&nbsp; Ships Nationwide
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-600">
          <span className="flex items-center gap-1.5"><span className="text-zinc-700 font-bold">✓</span> Free Shipping $500+</span>
          <span className="flex items-center gap-1.5"><span className="text-zinc-700 font-bold">✓</span> 30-Day Returns</span>
          <span className="flex items-center gap-1.5"><span className="text-zinc-700 font-bold">✓</span> Secure Checkout</span>
          <span className="flex items-center gap-1.5"><span className="text-zinc-700 font-bold">✓</span> MSP-Backed Support</span>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="bg-white border-y border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-around gap-4 text-center text-sm">
            <div>
              <span className="font-bold text-zinc-900">57</span>
              <span className="text-zinc-500 ml-1">Products Available</span>
            </div>
            <div>
              <span className="font-bold text-zinc-900">Ships from</span>
              <span className="text-zinc-500 ml-1">Plano, TX</span>
            </div>
            <div>
              <span className="font-bold text-zinc-900">Est.</span>
              <span className="text-zinc-500 ml-1">2012</span>
            </div>
            <div>
              <span className="font-bold text-zinc-900">MSP-Backed</span>
              <span className="text-zinc-500 ml-1">Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-10">
        {/* Sidebar */}
        <aside className="w-52 flex-shrink-0">
          <div className="sticky top-24">
            <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Categories</div>
            <nav className="flex flex-col gap-1">
              {CATEGORIES.map((cat) => {
                const count = getCategoryCount(cat);
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between transition-all border ${
                      isActive
                        ? "bg-cyan-500 text-white border-cyan-500 font-semibold"
                        : "bg-white border-gray-200 text-zinc-600 hover:text-zinc-900 hover:border-gray-300"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-xs ${isActive ? "text-zinc-900" : "text-zinc-400"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </nav>

          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Search & Sort */}
          <div className="flex gap-3 mb-6 flex-wrap">
            <div className="relative flex-1 min-w-52">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by name or SKU..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-gray-300 text-zinc-900 rounded-xl pl-9 pr-4 py-2.5 text-sm placeholder-zinc-400 focus:outline-none focus:border-cyan-400 transition-all"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="bg-white border border-gray-300 text-zinc-900 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-400 transition-all appearance-none cursor-pointer"
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="savings">Most Savings</option>
            </select>
          </div>

          {/* Category pill tabs */}
          <div className="flex flex-wrap gap-2 mb-5">
            {CATEGORIES.map((cat) => {
              const count = getCategoryCount(cat);
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                    isActive
                      ? "bg-cyan-500 text-white border-cyan-500"
                      : "bg-white border-gray-200 text-zinc-600 hover:border-gray-400 hover:text-zinc-900"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          <div className="text-xs text-zinc-500 mb-5">
            Showing <span className="text-zinc-700 font-semibold">{filtered.length}</span> products
            {filtered.length !== inStockCount && (
              <span> · <span className="text-zinc-700 font-semibold">{inStockCount} in stock</span></span>
            )}
            {search && <span> for <span className="text-zinc-700">&ldquo;{search}&rdquo;</span></span>}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24 border border-gray-200 rounded-2xl bg-white">
              <div className="text-4xl mb-4">🔍</div>
              <div className="text-zinc-700 font-semibold mb-2">No products found</div>
              <div className="text-zinc-500 text-sm">Try a different search or category</div>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All Products"); }}
                className="mt-4 text-zinc-900 text-sm hover:text-zinc-900 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((p) => (
                <ProductCard
                  key={p.sku}
                  product={p}
                  cartQty={cart[p.sku] ?? 0}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          )}

          <div className="mt-12 border border-gray-200 rounded-2xl p-8 bg-white shadow-sm text-center">
            <div className="text-lg font-bold text-zinc-900 mb-2">Don&apos;t see what you need?</div>
            <p className="text-zinc-500 text-sm mb-5">
              We source Dell, HPE, Lenovo, and more. Tell us the SKU or spec and we&apos;ll quote it.
            </p>
            <a
              href="/quote"
              className="inline-block bg-cyan-500 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-cyan-600 transition-all"
            >
              Request a Quote →
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 mt-10 py-8 px-6 text-center text-zinc-500 text-xs">
        &copy; {new Date().getFullYear()} Fornida. All rights reserved. &nbsp;|&nbsp; Plano, TX &nbsp;|&nbsp;{" "}
        <a href="mailto:info@fornida.com" className="hover:text-zinc-300 transition-colors">info@fornida.com</a>
      </footer>

      {/* Sticky cart bottom bar */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {cartItemCount}
              </div>
              <div>
                <div className="text-sm font-semibold text-zinc-900">
                  {cartItemCount} item{cartItemCount !== 1 ? "s" : ""} in cart
                </div>
                <div className="text-xs text-zinc-500">
                  Subtotal: <span className="font-bold text-zinc-900">${cartTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <a
              href="/cart"
              className="bg-cyan-500 text-white font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-cyan-600 transition-all"
            >
              View Cart →
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
