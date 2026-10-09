"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import { siteConfig } from "@/config/site";
import DemoModal from "@/components/ui/DemoModal";

export default function FloatingActions() {
  const [demoOpen, setDemoOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <>
      {/* Floating Buttons on Desktop (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3">
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

      {/* Mobile Sticky Bottom Conversion Bar - Styled in Oxford Navy & Gold */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-navy-950/95 backdrop-blur-md border-t border-gold-500/40 px-3 py-2 shadow-[0_-8px_25px_rgba(0,0,0,0.35)]">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-navy-900 border border-gold-500/30 text-slate-100 text-xs font-bold active:bg-navy-800 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>Call</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold active:bg-emerald-700 transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => setDemoOpen(true)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-black uppercase tracking-wider active:bg-gold-300 transition-colors shadow-md"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Demo</span>
          </button>
        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
