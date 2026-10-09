import React from "react";
import Link from "next/link";
import { testimonials } from "@/data/results";
import { Star, ShieldCheck, ArrowRight, PlusCircle } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
            Real Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy-900 tracking-tight">
            What Parents & Students Say About Us
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-sans">
            Over 94% of our annual admissions come from word-of-mouth recommendations by satisfied parents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-ivory-100 rounded-xl p-8 border border-slate-200 hover:border-gold-500 transition-colors flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Rating Stars & Verified tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-500" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Parent Review
                  </span>
                </div>

                {/* Highlight */}
                <h3 className="text-base sm:text-lg font-bold font-display text-navy-900 mb-2">
                  &ldquo;{t.highlight}&rdquo;
                </h3>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-sans">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-200">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-gold-500 flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-navy-900">{t.author}</h4>
                  <p className="text-[11px] text-gold-700 font-semibold">{t.gradeOrExam}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All & Write a Review Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            <span>Read All Verified Reviews</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>

          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded border-2 border-navy-900 hover:bg-navy-900 hover:text-white text-navy-900 font-bold text-xs uppercase tracking-wider transition-all"
          >
            <PlusCircle className="w-4 h-4 text-gold-600" />
            <span>Write A Review</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
