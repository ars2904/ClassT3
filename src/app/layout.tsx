import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import LayoutShell from "@/components/layout/LayoutShell";
import TierSwitcher from "@/components/tier-switcher/TierSwitcher";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "tuition classes",
    "coaching institute",
    "CBSE coaching",
    "ICSE tuition",
    "JEE coaching",
    "NEET prep",
    "class 10 coaching",
    "maths science tuition",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Fonts: Playfair Display for prestigious academic headings & Source Sans 3 / Inter for clean body */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&family=Source+Sans+3:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 pb-16 md:pb-0">
        <TierSwitcher />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
