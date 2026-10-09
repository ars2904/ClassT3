"use client";

import React, { useState } from "react";
import Link from "next/link";
import { tier2Data } from "@/data/tier2-data";
import Tier2Navbar from "@/components/tier2/Tier2Navbar";
import Tier2Footer from "@/components/tier2/Tier2Footer";
import { BookOpen, CheckCircle2, Clock, Users, MessageCircle, Sparkles, ShieldCheck, ArrowRight, Phone } from "lucide-react";

export default function Tier2BatchesPage() {
  const [selectedGrade, setSelectedGrade] = useState("All");

  const grades = ["All", "Class 8", "Class 9", "Class 10", "Class 11 & 12"];

  const filtered =
    selectedGrade === "All"
      ? tier2Data.batches
      : tier2Data.batches.filter((b) => b.grade.includes(selectedGrade));

  const whatsappDirect = (batchName: string) => {
    const text = encodeURIComponent(
      `Hello Zenith Tutorials, I am inquiring about admissions for ${batchName}. Are seats available?`
    );
    window.open(`https://wa.me/${tier2Data.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-ivory-50 min-h-screen text-slate-900 font-sans">
      <Tier2Navbar />

      {/* Hero Page Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b-2 border-gold-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Year 2025–26 Timetable</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
            Class Batches & Transparent Fee Matrix
          </h1>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Strictly 14 students per classroom. Monthly fee payable with zero annual lock-in. Free printed study booklets and Sunday test series included.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {grades.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGrade(g)}
                className={`px-5 py-2.5 rounded text-xs uppercase tracking-wider font-bold transition-all shadow-sm ${
                  selectedGrade === g
                    ? "bg-gold-500 text-navy-950 font-black shadow-md shadow-gold-500/20"
                    : "bg-navy-900/80 text-slate-200 border border-navy-700 hover:bg-navy-800"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Batches Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filtered.map((batch) => (
            <div
              key={batch.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-gold-500 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded bg-navy-50 text-navy-900 border border-navy-200">
                    {batch.grade}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                    Only {batch.seatsLeft} seats left
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-navy-900 mt-1">
                  {batch.stream}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Subjects: {batch.subjects.join(", ")}
                </p>

                <div className="my-6 py-5 border-y border-slate-100 text-xs text-slate-700 space-y-3">
                  <p className="flex items-center justify-between">
                    <span className="text-slate-400">Class Timings:</span>
                    <strong className="text-navy-900 font-mono font-semibold">{batch.timing}</strong>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="text-slate-400">Weekly Days:</span>
                    <strong className="text-navy-900">{batch.days}</strong>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="text-slate-400">Batch Limit:</span>
                    <strong className="text-navy-900">{batch.batchLimit} Students Strict</strong>
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-600 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span>Weekly chapter tests + personal doubt desk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span>Printed question banks and notes included</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs text-slate-400 uppercase font-bold">Monthly Fee</span>
                  <span className="text-2xl font-bold font-display text-navy-900">{batch.fee}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => whatsappDirect(`${batch.grade} (${batch.stream})`)}
                    className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                  <Link
                    href={`/tier-2/contact?batch=${encodeURIComponent(batch.grade)}#demo`}
                    className="py-2.5 px-3 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white rounded text-xs font-bold uppercase tracking-wider text-center transition-colors"
                  >
                    Book Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What Every Enrollment Includes */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">
              Standard Benefits
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy-900 mt-1">
              What Every Batch Enrollment Includes
            </h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="p-5 rounded-xl bg-ivory-100 border border-slate-200">
              <BookOpen className="w-6 h-6 text-gold-600 mb-3" />
              <h4 className="font-bold text-navy-900 text-sm">Printed Study Booklets</h4>
              <p className="text-xs text-slate-600 mt-1">
                Chapter-wise theory notes, past 10-year board questions, and formula cheat sheets.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-ivory-100 border border-slate-200">
              <Clock className="w-6 h-6 text-gold-600 mb-3" />
              <h4 className="font-bold text-navy-900 text-sm">Sunday Test Series</h4>
              <p className="text-xs text-slate-600 mt-1">
                Weekly mock tests graded with red pen feedback and step-by-step mark breakdown.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-ivory-100 border border-slate-200">
              <Users className="w-6 h-6 text-gold-600 mb-3" />
              <h4 className="font-bold text-navy-900 text-sm">Daily Doubt Desks</h4>
              <p className="text-xs text-slate-600 mt-1">
                30 minutes before and after every lecture to clear school homework roadblocks.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-ivory-100 border border-slate-200">
              <ShieldCheck className="w-6 h-6 text-gold-600 mb-3" />
              <h4 className="font-bold text-navy-900 text-sm">WhatsApp Parent Reports</h4>
              <p className="text-xs text-slate-600 mt-1">
                Attendance punch alerts and marks reports delivered straight to parents.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center border-2 border-gold-500/60 shadow-xl space-y-4">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
            ✦ Need Guidance Selecting A Batch?
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display">
            Speak With Our Academic Coordinator
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Call our helpline to discuss school timings, subject combinations, or book a free diagnostic test.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a
              href={`tel:${tier2Data.phone}`}
              className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {tier2Data.phone}</span>
            </a>
            <Link
              href="/tier-2/contact#demo"
              className="px-6 py-3 border border-white/40 hover:border-white text-white font-semibold text-xs uppercase tracking-wider rounded transition-all hover:bg-white/10"
            >
              Book 2 Demo Classes
            </Link>
          </div>
        </div>
      </section>

      <Tier2Footer />
    </div>
  );
}
