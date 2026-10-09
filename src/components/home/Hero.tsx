"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  Phone,
  ShieldCheck,
  Star,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import DemoModal from "@/components/ui/DemoModal";

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center justify-center text-white overflow-hidden border-b-2 border-gold-500">
      {/* Background Hero Image with Layered NGT-Style Academic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=85"
          alt="Classroom students studying"
          className="w-full h-full object-cover object-center scale-105 animate-fadeIn"
        />
        {/* Deep Multi-stop Academic Overlay (NGT Signature) */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-900/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center space-y-8">
        {/* Academic Heritage Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/50 bg-navy-950/70 backdrop-blur-md text-gold-300 text-xs font-bold tracking-widest uppercase shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>{new Date().getFullYear() - siteConfig.foundedYear}+ Years of Proven Academic Excellence</span>
        </div>

        {/* Editorial Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.18] max-w-4xl mx-auto drop-shadow-md">
          Nurturing Academic Potential Into{" "}
          <span className="text-gold-400 italic font-serif">Board Merit</span> & Top Ranks.
        </h1>

        {/* Tagline with breathing room */}
        <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-sm font-sans">
          Premier coaching for Classes 6th–10th (CBSE & ICSE), 11th–12th Science (JEE Main & NEET), and Commerce. Taught exclusively in small, personal batches of 15 students.
        </p>

        {/* Confident Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => setDemoOpen(true)}
            className="w-full sm:w-auto px-8 py-4 rounded bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-gold-500/30 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Free Demo Class
          </button>

          <Link
            href="/courses"
            className="w-full sm:w-auto px-8 py-4 rounded border-2 border-white/70 hover:border-white text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all hover:bg-white/10 backdrop-blur-xs"
          >
            Explore All Programs
          </Link>

          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="w-full sm:w-auto px-6 py-4 rounded border border-navy-700 hover:border-gold-500/60 text-slate-200 hover:text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all bg-navy-950/80 backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Call: {siteConfig.phone}</span>
          </a>
        </div>

        {/* 4 Clean Value Bullets */}
        <div className="pt-8 border-t border-white/15 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-semibold text-slate-200 backdrop-blur-xs">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>Strictly 15 Per Batch</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>Daily Doubt Clinics</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>Veteran IIT/PhD Faculties</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>Weekly Parent Reports</span>
          </div>
        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
