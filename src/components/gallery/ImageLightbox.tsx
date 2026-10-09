"use client";

import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Calendar, Sparkles } from "lucide-react";
import { MemoryItem } from "@/data/life-at-academy";

interface ImageLightboxProps {
  items: MemoryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageLightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % items.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const current = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview modal"
      className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close image preview"
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous image"
        className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-navy-900/80 hover:bg-gold-500 hover:text-navy-950 text-white border border-white/20 transition-all shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next image"
        className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-navy-900/80 hover:bg-gold-500 hover:text-navy-950 text-white border border-white/20 transition-all shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Modal Card */}
      <div
        className="max-w-4xl w-full bg-navy-900 border border-gold-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo Container */}
        <div className="relative bg-black flex items-center justify-center max-h-[60vh] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full max-h-[60vh] object-contain"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="px-3 py-1 bg-navy-950/80 backdrop-blur-sm border border-gold-500/50 text-gold-400 text-xs font-bold rounded-full uppercase tracking-wider">
              {current.category}
            </span>
          </div>
        </div>

        {/* Caption & Metadata Container */}
        <div className="p-6 bg-navy-900 text-white border-t border-navy-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {current.title}
            </h3>
            <span className="text-xs font-semibold text-gold-400 flex items-center gap-1.5 self-start sm:self-auto bg-navy-950 px-3 py-1 rounded-full border border-gold-500/30">
              <Calendar className="w-3.5 h-3.5" />
              {current.batchYear}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {current.caption}
          </p>

          <div className="mt-4 pt-3 border-t border-navy-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>
              Image {currentIndex + 1} of {items.length}
            </span>
            <span className="text-[11px] text-slate-500">
              Use arrow keys ← → to browse
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
