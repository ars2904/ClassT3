"use client";

import React, { useState } from "react";
import { achievers, testimonials } from "@/data/results";
import {
  Trophy,
  Star,
  TrendingUp,
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";
import DemoModal from "@/components/ui/DemoModal";

export default function ResultsPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "CBSE Boards", "ICSE Boards", "JEE Advanced", "NEET Medical"];

  const filteredAchievers =
    activeFilter === "All"
      ? achievers
      : achievers.filter((a) =>
          a.exam.toLowerCase().includes(activeFilter.toLowerCase().split(" ")[0])
        );

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-600" /> Academic Hall of Fame
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Our Results Speak Louder Than Words
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Every year, our students break records and secure admissions into India&apos;s most prestigious universities and top school boards.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-3xl font-extrabold font-display text-brand-700 block">
                98.4%
              </span>
              <span className="text-xs text-slate-500 font-medium">Scored 90%+ in Boards</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-3xl font-extrabold font-display text-brand-700 block">
                142
              </span>
              <span className="text-xs text-slate-500 font-medium">Perfect 100/100 Scores</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-3xl font-extrabold font-display text-brand-700 block">
                AIR 284
              </span>
              <span className="text-xs text-slate-500 font-medium">Top NEET Medical Rank</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-3xl font-extrabold font-display text-brand-700 block">
                AIR 412
              </span>
              <span className="text-xs text-slate-500 font-medium">JEE Advanced Rank</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === f
                  ? "bg-brand-700 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Achiever Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredAchievers.map((achiever) => (
            <div
              key={achiever.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-premium-hover transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header score & badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-4xl font-black font-display text-brand-700 block">
                      {achiever.score}
                    </span>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      {achiever.exam}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                    {achiever.badge}
                  </span>
                </div>

                {/* Profile Card */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100 mb-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-slate-200 flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={achiever.image}
                      alt={achiever.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{achiever.name}</h3>
                    <p className="text-xs text-slate-500">{achiever.school}</p>
                    <p className="text-[11px] font-semibold text-brand-600 mt-0.5">{achiever.rank}</p>
                  </div>
                </div>

                {/* Student Quote */}
                <p className="text-xs text-slate-600 italic leading-relaxed mb-4">
                  &ldquo;{achiever.quote}&rdquo;
                </p>
              </div>

              {/* Transformation Jump */}
              {achiever.improvement && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{achiever.improvement}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Verified Parent Reviews Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Parent Testimonials
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900 mt-3">
              Why Parents Trust Our Mentorship
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Feedback from parents who saw their children&apos;s grades and self-belief transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">
                    &ldquo;{t.highlight}&rdquo;
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-slate-200/80">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">{t.author}</h5>
                    <p className="text-[11px] text-brand-700 font-medium">{t.studentName || t.gradeOrExam}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-brand-900 via-brand-800 to-indigo-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
            Want Your Child In Next Year&apos;s Hall of Fame?
          </h2>
          <p className="text-brand-100 text-sm mt-2 max-w-xl mx-auto">
            Book 2 complimentary demo sessions to understand how our diagnostic system works.
          </p>
          <button
            onClick={() => setDemoOpen(true)}
            className="mt-6 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-2xl text-sm transition-all shadow-lg inline-flex items-center gap-2"
          >
            <CalendarCheck className="w-4 h-4" /> Book Free Demo Class
          </button>
        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
