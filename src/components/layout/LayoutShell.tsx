"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isTier1 = pathname.startsWith("/tier-1");
  const isTier2 = pathname.startsWith("/tier-2");

  // For Tier 1 and Tier 2, they have their own dedicated navigation & footer
  if (isTier1 || isTier2) {
    return <main className="flex-1 w-full">{children}</main>;
  }

  // Tier 3 (Main Platform)
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </>
  );
}
