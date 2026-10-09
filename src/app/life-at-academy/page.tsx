"use client";

import React, { useState } from "react";
import Link from "next/link";
import { tier3Memories, MemoryItem } from "@/data/life-at-academy";
import ImageLightbox from "@/components/gallery/ImageLightbox";
import { Sparkles, Camera, Award, Users, BookOpen, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";

const categories = [
  "All",
  "Felicitations & Awards",
  "Classroom Life",
  "Mock Test Days",
  "Celebrations & Festivals",
  "Seminars & PTM",
] as const;

export default function LifeAtAcademyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    selectedCategory === "All"
      ? tier3Memories
      : tier3Memories.filter((m) => m.category === selectedCategory);

  const handleOpenLightbox = (item: MemoryItem) => {
    const idx = filtered.findIndex((m) => m.id === item.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  return (
    <div className="bg-ivory-50 min-h-screen text-slate-900 font-sans">
      {/* Hero Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-24 border-b-2 border-gold-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Memories, Milestones & Celebrations</span>
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white">
            Life at Apex Academy
          </h1>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Beyond textbooks and rigorous mock tests, experience the joyful milestones, topper felicitations, festive celebrations, and vibrant campus life that make our academy special.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all shadow-sm ${
                  selectedCategory === cat
                    ? "bg-gold-500 text-navy-950 font-black shadow-md shadow-gold-500/20 scale-105"
                    : "bg-navy-900/80 text-slate-200 border border-navy-700 hover:bg-navy-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Memories in Numbers Strip */}
      <section className="bg-navy-900 text-white py-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-navy-800">
            <div>
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">25+</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Years of Celebrations</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">50+</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Annual Award Nights</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">10,000+</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Smiling Alumni</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">100+</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Career & Strategy Seminars</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1 hover:border-gold-500 flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-bold text-gold-300 flex items-center gap-1.5">
                    <Camera className="w-4 h-4" /> Click to view full image
                  </span>
                </div>

                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 bg-navy-950/80 backdrop-blur-sm border border-gold-500/40 text-gold-400 text-[11px] font-bold rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 bg-white/90 text-navy-950 text-[11px] font-bold rounded-full shadow-xs">
                    {item.batchYear}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-display text-navy-900 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-sans line-clamp-2">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-gold-700 font-bold">
                  <span>Enlarge Memory</span>
                  <ArrowRight className="w-4 h-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Invitation */}
        <div className="mt-20 bg-navy-950 text-white rounded-2xl p-10 sm:p-14 text-center max-w-4xl mx-auto border-2 border-gold-500/60 shadow-xl space-y-4">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
            ✦ Join Our Academic Family
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-display">
            Be Part of Our Next Success Story & Felicitation
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Experience our classrooms in person. Attend 2 complimentary demo lectures and take a free baseline diagnostic assessment.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact#book-demo"
              className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md"
            >
              Book 2 Free Demo Classes
            </Link>
            <Link
              href="/results"
              className="px-8 py-3.5 border border-white/40 hover:border-white text-white font-semibold text-xs uppercase tracking-wider rounded transition-all hover:bg-white/10"
            >
              View Board Toppers
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        items={filtered}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
