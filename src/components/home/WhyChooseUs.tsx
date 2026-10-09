import React from "react";
import {
  Users,
  HelpCircle,
  Award,
  FileCheck2,
  BellRing,
  BookMarked,
} from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Users,
      title: "Strictly Small Batch Size (1:15 Ratio)",
      desc: "Unlike mass commercial coaching institutes with 80+ students per hall, our batch limit ensures every student's notes and homework are checked individually.",
    },
    {
      icon: HelpCircle,
      title: "Daily 1-on-1 Doubt Clearing Desk",
      desc: "Dedicated 45-minute daily doubt sessions before and after classes. Students can sit individually with faculties until every concept confusion is resolved.",
    },
    {
      icon: Award,
      title: "Veteran IIT & Senior Board Faculties",
      desc: "Taught exclusively by educators with 12+ to 18+ years of teaching experience. No substitute teachers or inexperienced junior assistants.",
    },
    {
      icon: FileCheck2,
      title: "Weekly Timed Topic & Prelim Tests",
      desc: "Every Sunday is test day. Papers are marked strictly as per official Board and NTA marking schemes with error analysis returned within 48 hours.",
    },
    {
      icon: BellRing,
      title: "Biometric Attendance & Parent SMS Alerts",
      desc: "Instant SMS alerts on student arrival and departure, alongside bi-weekly progress review calls to keep parents completely in the loop.",
    },
    {
      icon: BookMarked,
      title: "Comprehensive Printed Study Material",
      desc: "Chapter-wise theory summaries, color-coded formula sheets, 10-year solved previous year question banks, and assertion-reason workbooks.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden border-b border-navy-800">
      {/* Subtle Gold Corner Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-800/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold text-gold-400 uppercase tracking-widest mb-2">
            The Apex Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Why Discerning Parents Choose Us
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-sans">
            We provide a disciplined, transparent academic ecosystem engineered to maximize student confidence and scores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-white/[0.04] border border-white/10 hover:border-gold-500/50 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-900 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold font-display text-white group-hover:text-gold-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-slate-300 text-sm mt-3 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
