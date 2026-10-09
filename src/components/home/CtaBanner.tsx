"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { CalendarCheck, MessageCircle, Phone, Sparkles } from "lucide-react";
import DemoModal from "@/components/ui/DemoModal";

export default function CtaBanner() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden border-t-2 border-gold-500">
      {/* Subtle gold glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block px-3 py-1 rounded-full border border-gold-500/40 bg-gold-500/10 text-gold-300 text-xs font-bold uppercase tracking-widest">
          ✦ Admissions Open For Academic Year 2025–26
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight max-w-3xl mx-auto">
          Take The First Step Towards Your Child&apos;s Academic Success.
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Attend 2 complimentary demo classes to experience our 1:15 small-batch teaching and dedicated doubt desk before enrolling.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => setDemoOpen(true)}
            className="w-full sm:w-auto px-8 py-4 rounded bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-gold-500/20 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Free Demo Class
          </button>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
              siteConfig.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="w-full sm:w-auto px-6 py-4 rounded border border-slate-500 hover:border-white text-slate-200 hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Call: {siteConfig.phone}</span>
          </a>
        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
