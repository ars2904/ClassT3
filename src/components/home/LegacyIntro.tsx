import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CheckCircle2, ArrowRight, Award } from "lucide-react";

export default function LegacyIntro() {
  const years = new Date().getFullYear() - siteConfig.foundedYear;

  return (
    <section className="py-20 lg:py-28 bg-ivory-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Iconic Circular Legacy Badge */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-navy-900 border-4 border-gold-500 shadow-2xl flex flex-col items-center justify-center text-center p-6 outline outline-8 outline-gold-500/15">
              <span className="text-4xl sm:text-5xl font-black font-display text-gold-400 block leading-none">
                {years}+
              </span>
              <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest mt-2 block">
                Years of Legacy
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                Founded in {siteConfig.foundedYear}
              </span>
              <div className="mt-3 w-10 h-0.5 bg-gold-500/60" />
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest">
              Pedagogy & Philosophy
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy-900 leading-tight">
              More Than Tuition — A Proven Foundation For Academic Confidence.
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans">
              Founded on the belief that overcrowded 80-student coaching factories leave struggling students behind, {siteConfig.name} maintains strict small batches of 15 students. Every child receives individual attention, step-by-step problem checking, and daily 1-on-1 doubt resolution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-800 text-left">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <span>Concept-first teaching without rote cramming</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <span>Daily 1-on-1 doubt clearing clinic</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <span>Weekly timed tests matching actual board patterns</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <span>Transparent parent-teacher progress reporting</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/faculty"
                className="inline-flex items-center gap-2 text-navy-900 hover:text-gold-600 font-bold text-sm tracking-wide transition-colors border-b-2 border-gold-500 pb-0.5"
              >
                <span>Read More About Our Teaching Faculty & Methodology</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
