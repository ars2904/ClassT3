import React from "react";
import Link from "next/link";
import { tier2Data } from "@/data/tier2-data";
import Tier2Navbar from "@/components/tier2/Tier2Navbar";
import Tier2Footer from "@/components/tier2/Tier2Footer";
import { Trophy, Star, TrendingUp, CheckCircle2, Sparkles, Award, ArrowRight } from "lucide-react";

export default function Tier2ResultsPage() {
  return (
    <div className="bg-ivory-50 min-h-screen text-slate-900 font-sans">
      <Tier2Navbar />

      {/* Hero Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b-2 border-gold-500 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Academic Hall of Fame</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
            School Toppers & Board Achievers
          </h1>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            See how our small, disciplined 14-student batches consistently outperform large commercial coaching institutes year after year.
          </p>
        </div>
      </section>

      {/* Center Merit Metrics Ribbon */}
      <section className="bg-navy-900 text-white py-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-navy-800">
            <div>
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">100%</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Board Pass Rate</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">48+</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Scored Above 95%</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">12</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Perfect 100/100 Scores</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">3.2x</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Average Score Jump</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Results Showcase */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
            Proven Performance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-navy-900">
            Class 10 & 12 Board Merits
          </h2>
          <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm mt-3">
            Authentic scorecards from local sector schools, mentored directly by our 3 senior educators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {tier2Data.results.map((res, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all text-center hover:border-gold-500 group"
            >
              <div>
                <span className="inline-block px-3.5 py-1 bg-gold-500/15 text-gold-700 text-xs font-bold rounded-full mb-5 border border-gold-500/30">
                  {res.badge}
                </span>

                <span className="text-5xl font-black font-display text-gold-600 block leading-tight group-hover:scale-105 transition-transform">
                  {res.score}
                </span>

                <h3 className="text-xl font-bold font-display text-navy-900 mt-4">{res.student}</h3>
                <p className="text-xs font-semibold text-slate-700 mt-1">{res.exam}</p>
                <p className="text-[11px] text-slate-500 italic mt-1">{res.school}</p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified School Result</span>
              </div>
            </div>
          ))}
        </div>

        {/* Parent Testimonial Quote Banner */}
        <div className="bg-ivory-100 rounded-2xl border border-slate-200 p-8 sm:p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="flex justify-center text-gold-400 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400" />
              ))}
            </div>
            <p className="text-base sm:text-lg text-slate-800 italic leading-relaxed font-serif">
              &ldquo;My son jumped from 76% in Class 9 to 98.2% in Class 10 CBSE Boards. The personal attention, weekly Sunday tests, and Vivek Sir&apos;s doubt clearing made the entire difference.&rdquo;
            </p>
            <div>
              <strong className="text-navy-900 font-bold block text-sm">Mrs. Anjali Malhotra</strong>
              <span className="text-xs text-slate-500">Mother of Ishaan Malhotra (School 1st Rank)</span>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-navy-950 text-white rounded-2xl p-10 sm:p-14 text-center max-w-3xl mx-auto border-2 border-gold-500/60 shadow-xl space-y-4">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
            ✦ Admissions Open For Next Batch
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display">
            Want Your Child To Be On Our Next Board Merit List?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Book 2 trial classes to experience our 3-mentor guidance in person before making any commitment.
          </p>
          <div className="pt-2">
            <Link
              href="/tier-2/contact#demo"
              className="inline-block px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md"
            >
              Book Free Demo Class
            </Link>
          </div>
        </div>
      </section>

      <Tier2Footer />
    </div>
  );
}
