"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  Phone,
  MessageCircle,
  Menu,
  X,
  MapPin,
  Clock,
  Sparkles,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import DemoModal from "@/components/ui/DemoModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses & Batches", href: "/courses" },
    { label: "Results & Toppers", href: "/results" },
    { label: "Our Faculty", href: "/faculty" },
    { label: "Life at Academy", href: "/life-at-academy" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Admissions & Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar with Center Helpline & Branches (Classic NGT Style) */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gold-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open for Batch 2025–26</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>2 Branches: North Campus & South Extension</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="text-slate-200 hover:text-gold-400 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Call: {siteConfig.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                siteConfig.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Prestigious Academic Navbar */}
      <header className="sticky top-0 z-40 bg-navy-900 border-b-2 border-gold-500 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo + Mobile Back button on subpages */}
            <div className="flex items-center gap-2">
              {pathname !== "/" && (
                <Link
                  href="/"
                  aria-label="Back to Home"
                  className="flex items-center gap-1 text-gold-400 hover:text-white px-2 py-1.5 rounded-lg bg-navy-950/80 border border-gold-500/40 text-xs font-bold transition-all shadow-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-[11px] font-semibold sm:hidden">Back</span>
                </Link>
              )}

              <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg bg-navy-950 border border-gold-500/40 flex items-center justify-center text-gold-400 shadow group-hover:border-gold-400 transition-colors flex-shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-2xl font-bold font-display tracking-tight text-white leading-tight">
                    {siteConfig.shortName}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-gold-400 tracking-wider sm:tracking-widest uppercase line-clamp-1">
                    Academy of Excellence • Estd. {siteConfig.foundedYear}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 text-xs xl:text-sm font-semibold uppercase tracking-wider transition-all relative ${
                      isActive
                        ? "text-gold-400 font-bold"
                        : "text-slate-200 hover:text-gold-400"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gold-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-5 py-2.5 rounded bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-gold-500/20 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Book Free Demo
              </button>
            </div>

            {/* Mobile Actions: Clean Quick Call + Hamburger */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                aria-label="Call Helpline"
                className="p-2 text-gold-400 hover:text-gold-300 rounded-lg bg-navy-950/70 border border-gold-500/30"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation"
                className="p-2 text-slate-200 hover:text-white rounded-lg bg-navy-950/70 border border-navy-800"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950 border-t border-navy-800 px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-semibold rounded ${
                    isActive ? "text-gold-400 bg-navy-900 font-bold" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-navy-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDemoModalOpen(true);
                }}
                className="w-full py-2.5 bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider rounded"
              >
                Book Free Demo Class
              </button>
            </div>
          </div>
        )}
      </header>

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  );
}
