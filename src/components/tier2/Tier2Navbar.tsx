"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tier2Data } from "@/data/tier2-data";
import { GraduationCap, Phone, MessageCircle, Menu, X, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

export default function Tier2Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/tier-2" },
    { label: "Batches & Fees", href: "/tier-2/batches" },
    { label: "Results & Toppers", href: "/tier-2/results" },
    { label: "Life at Academy", href: "/tier-2/life-at-academy" },
    { label: "Contact & Location", href: "/tier-2/contact" },
  ];

  return (
    <>
      {/* Top Helpline Strip */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-gold-400 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions Open for Classes 8th–12th • Sector 15 Centre</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${tier2Data.phone.replace(/[^0-9+]/g, "")}`}
              className="text-slate-200 hover:text-gold-400 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Helpline: {tier2Data.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`https://wa.me/${tier2Data.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-navy-900 border-b-2 border-gold-500 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo + Mobile Back button on subpages */}
            <div className="flex items-center gap-2">
              {pathname !== "/tier-2" && (
                <Link
                  href="/tier-2"
                  aria-label="Back to Tier 2 Home"
                  className="flex items-center gap-1 text-gold-400 hover:text-white px-2 py-1.5 rounded-lg bg-navy-950/80 border border-gold-500/40 text-xs font-bold transition-all shadow-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-[11px] font-semibold sm:hidden">Back</span>
                </Link>
              )}

              <Link href="/tier-2" className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-navy-950 border border-gold-500/40 text-gold-400 flex items-center justify-center font-bold shadow flex-shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-base sm:text-xl font-bold font-display text-white block leading-tight">
                    {tier2Data.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-gold-400 uppercase tracking-wider sm:tracking-widest">
                    Quality Neighborhood Coaching
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-colors ${
                      active
                        ? "text-gold-400 font-bold border-b-2 border-gold-400"
                        : "text-slate-200 hover:text-gold-400"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/tier-2/contact#demo"
                className="px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md shadow-gold-500/20"
              >
                Book Demo Class
              </Link>
            </div>

            {/* Mobile Actions: Phone + Hamburger */}
            <div className="flex items-center gap-1.5 md:hidden">
              <a
                href={`tel:${tier2Data.phone.replace(/[^0-9+]/g, "")}`}
                aria-label="Call Helpline"
                className="p-2 text-gold-400 hover:text-gold-300 rounded-lg bg-navy-950/70 border border-gold-500/30"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-slate-200 hover:text-white rounded-lg bg-navy-950/70 border border-navy-800"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-navy-950 border-t border-navy-800 p-4 space-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded text-xs font-semibold text-slate-200 hover:text-gold-400 uppercase tracking-wider"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-navy-800">
              <Link
                href="/tier-2/contact#demo"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-2.5 bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider rounded"
              >
                Book Free Demo Class
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
