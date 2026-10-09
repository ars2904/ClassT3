"use client";

import React, { useState } from "react";
import Link from "next/link";
import { tier2Memories, MemoryItem } from "@/data/life-at-academy";
import Tier2Navbar from "@/components/tier2/Tier2Navbar";
import Tier2Footer from "@/components/tier2/Tier2Footer";
import ImageLightbox from "@/components/gallery/ImageLightbox";
import { Sparkles, Camera, Award, Users, BookOpen, Calendar, ArrowRight, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { tier2Data } from "@/data/tier2-data";

const categories = [
  "All",
  "Felicitations & Awards",
  "Classroom Life",
  "Mock Test Days",
  "Celebrations & Festivals",
  "Seminars & PTM",
] as const;

export default function Tier2LifeAtAcademyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    selectedCategory === "All"
      ? tier2Memories
      : tier2Memories.filter((m) => m.category === selectedCategory);

  const handleOpenLightbox = (item: MemoryItem) => {
    const idx = filtered.findIndex((m) => m.id === item.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  return (
    <div className="bg-ivory-50 min-h-screen text-slate-900 font-sans">
      <Tier2Navbar />

      {/* Hero Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-24 border-b-2 border-gold-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Memories at Zenith Tutorials</span>
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white">
            Life at Academy
          </h1>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through our small-batch classrooms, Sunday diagnostic testing sessions, annual board merit celebrations, and community events at City Center Plaza.
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

      {/* Merit & Community Strip */}
      <section className="bg-navy-900 text-white py-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-navy-800">
            <div>
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">12+</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Years of Center Memories</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">3,500+</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Students Guided</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">100%</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Personal Teacher Mentorship</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">Max 14</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Students per Memory</p>
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
                  <span>Enlarge Photo</span>
                  <ArrowRight className="w-4 h-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Visit CTA */}
        <div className="mt-20 bg-navy-950 text-white rounded-2xl p-10 sm:p-14 text-center max-w-4xl mx-auto border-2 border-gold-500/60 shadow-xl space-y-4">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
            ✦ Admissions Open 2025–26
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-display">
            Experience Our Center In Person
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Parents and students are welcome to visit Sector 15 center to meet our 3 founders and review past student notebooks.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/tier-2/contact#demo"
              className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md"
            >
              Book 2 Demo Classes
            </Link>
            <a
              href={`https://wa.me/${tier2Data.whatsapp}`}
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Helpline
            </a>
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

      <Tier2Footer />
    </div>
  );
}
