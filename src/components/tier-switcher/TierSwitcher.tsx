"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, ChevronUp, Check, ExternalLink, X, Eye } from "lucide-react";

export default function TierSwitcher() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const pathname = usePathname();

  const tiers = [
    {
      id: "tier-1",
      name: "Tier 1: Solo Tutor",
      short: "T1: Solo",
      label: "1-Page Express",
      badge: "Home / Solo Tutor",
      href: "/tier-1",
      desc: "Single-page high conversion, timetable matrix, direct WhatsApp & map.",
    },
    {
      id: "tier-2",
      name: "Tier 2: Pro Growth",
      short: "T2: Growth",
      label: "4-Page Tuition",
      badge: "2–4 Teachers",
      href: "/tier-2",
      desc: "Home, Batches & Fees, Results, Contact for local coaching centers.",
    },
    {
      id: "tier-3",
      name: "Tier 3: Elite Academy",
      short: "T3: Elite",
      label: "Full Multi-Page",
      badge: "Flagship Academy",
      href: "/",
      desc: "Multi-branch, 350+ rankers, live testimonials, interactive map, course pages.",
    },
  ];

  const currentTier = pathname.startsWith("/tier-1")
    ? tiers[0]
    : pathname.startsWith("/tier-2")
    ? tiers[1]
    : tiers[2];

  return (
    <div className="fixed bottom-16 sm:bottom-6 left-3 sm:left-6 z-50">
      {/* Dropdown Popover */}
      {open && (
        <div className="fixed sm:absolute inset-x-4 sm:inset-x-auto bottom-20 sm:bottom-14 sm:left-0 sm:w-96 bg-slate-950/98 backdrop-blur-2xl border border-slate-700 rounded-3xl shadow-2xl p-4 text-white animate-fadeIn mb-2 max-w-sm sm:max-w-none mx-auto sm:mx-0">
          <div className="px-2 pb-3 border-b border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-200">Commercial Template Switcher</p>
              <p className="text-[10px] text-slate-400">Switch preview to demonstrate to clients</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close switcher"
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 mt-3">
            {tiers.map((t) => {
              const isSelected = currentTier.id === t.id;
              return (
                <Link
                  key={t.id}
                  href={t.href}
                  onClick={() => setOpen(false)}
                  className={`p-3 rounded-2xl block transition-all ${
                    isSelected
                      ? "bg-navy-900 border border-gold-400/60 shadow-md"
                      : "hover:bg-slate-900 border border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-white">{t.name}</span>
                      <span className="text-[10px] bg-slate-800 text-gold-400 font-semibold px-2 py-0.5 rounded-full">
                        {t.badge}
                      </span>
                    </div>
                    {isSelected ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{t.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Pill Trigger */}
      {minimized ? (
        <button
          onClick={() => setMinimized(false)}
          title="Show Tier Switcher"
          aria-label="Show Tier Switcher"
          className="w-10 h-10 rounded-full bg-navy-950/90 text-gold-400 border border-gold-500/50 shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
        >
          <Layers className="w-5 h-5" />
        </button>
      ) : (
        <div className="inline-flex items-center gap-1 bg-navy-950/95 backdrop-blur-md rounded-full border border-gold-500/50 shadow-2xl p-1">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-semibold hover:bg-navy-900 transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-gold-400" />
            <span className="hidden sm:inline text-slate-400 font-normal">Tier:</span>
            <span className="hidden sm:inline text-gold-400 font-bold">{currentTier.name}</span>
            <span className="sm:hidden text-gold-400 font-bold text-[11px]">{currentTier.short}</span>
            <ChevronUp
              className={`w-3 h-3 text-slate-400 transition-transform ${
                open ? "rotate-180 text-gold-400" : ""
              }`}
            />
          </button>

          <button
            onClick={() => setMinimized(true)}
            title="Minimize"
            aria-label="Minimize Tier Switcher"
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-navy-900 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
}
