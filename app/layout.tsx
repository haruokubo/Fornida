import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fornida — Managed IT, Cybersecurity & AI for Texas Businesses",
  description:
    "One team for IT support, cybersecurity, and AI automation. Enterprise-grade defense for growing SMBs in Texas. Est. 2012.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Fornida",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
