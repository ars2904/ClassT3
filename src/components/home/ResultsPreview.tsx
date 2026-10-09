import React from "react";
import Link from "next/link";
import { achievers } from "@/data/results";
import { Trophy, ArrowRight, Award, Star } from "lucide-react";

export default function ResultsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-2">
            Proven Merit
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy-900 tracking-tight">
            Our Hall of Fame & Board Toppers
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Consistently producing top scores across CBSE, ICSE, State Boards, and Competitive Entrances.
          </p>
        </div>

        {/* Toppers Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-14">
          {achievers.map((achiever) => (
            <div
              key={achiever.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 p-5 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              {/* Circular Avatar with Gold Ring (Iconic Indian Coaching Style) */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-gold-500 p-0.5 mb-3 group-hover:scale-105 transition-transform shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={achiever.image}
                  alt={achiever.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Score in bold gold */}
              <span className="text-xl sm:text-2xl font-black font-display text-gold-600 block leading-tight">
                {achiever.score}
              </span>

              <h4 className="font-bold text-slate-900 text-sm mt-1 leading-snug">
                {achiever.name}
              </h4>

              <p className="text-[11px] font-semibold text-navy-900 mt-1 line-clamp-1">
                {achiever.exam}
              </p>

              <p className="text-[10px] text-slate-500 italic mt-0.5 line-clamp-1">
                {achiever.school}
              </p>

              <span className="mt-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-700 border border-gold-500/30">
                {achiever.badge}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            <span>View All 350+ Rankers & Parent Reviews</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
