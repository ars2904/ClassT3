"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp, Calendar } from "lucide-react";
import { siteConfig } from "@/config/site";
import DemoModal from "@/components/ui/DemoModal";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <>
      {/* Floating Buttons on Desktop (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-12 h-12 bg-white/90 backdrop-blur border border-slate-200 text-slate-700 hover:text-brand-700 hover:border-brand-300 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative group w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl shadow-emerald-500/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full" />
          <MessageCircle className="w-7 h-7" />

          {/* Hover Tooltip */}
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-5px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 text-slate-800 text-[11px] font-bold active:bg-slate-200 transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-700 mb-0.5" />
            <span>Call Now</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-500 text-white text-[11px] font-bold active:bg-emerald-600 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-white mb-0.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => setDemoOpen(true)}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-gradient-to-r from-brand-700 to-indigo-700 text-white text-[11px] font-bold active:opacity-90 transition-opacity shadow-sm"
          >
            <Calendar className="w-4 h-4 text-amber-300 mb-0.5" />
            <span>Free Demo</span>
          </button>
        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
