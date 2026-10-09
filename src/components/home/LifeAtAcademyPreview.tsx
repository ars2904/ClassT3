"use client";

import React from "react";
import Link from "next/link";
import { tier3Memories } from "@/data/life-at-academy";
import { Camera, ArrowRight, Sparkles } from "lucide-react";

export default function LifeAtAcademyPreview() {
  const previewItems = tier3Memories.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              <Camera className="w-3.5 h-3.5" />
              <span>Campus Moments & Culture</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-navy-900 mt-1">
              Life at Apex Academy
            </h2>
            <div className="w-12 h-1 bg-gold-500 mt-3 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm mt-3 max-w-xl">
              Annual topper award nights, interactive classroom lectures, Sunday test simulations, and vibrant student festivals.
            </p>
          </div>

          <Link
            href="/life-at-academy"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md self-start md:self-auto"
          >
            <span>Explore Full Memories Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewItems.map((item) => (
            <Link
              key={item.id}
              href="/life-at-academy"
              className="group bg-ivory-100 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-gold-500 transition-all flex flex-col"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-navy-950/80 backdrop-blur-sm border border-gold-500/40 text-gold-400 text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold font-display text-navy-900 text-base group-hover:text-gold-600 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-bold text-gold-700">
                  <span>{item.batchYear}</span>
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
