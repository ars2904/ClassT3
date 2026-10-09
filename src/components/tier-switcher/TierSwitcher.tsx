"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, ChevronUp, Check, ExternalLink, X } from "lucide-react";

export default function TierSwitcher() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const tiers = [
    {
      id: "tier-1",
      name: "Tier 1: Solo Tutor",
      label: "1-Page Express",
      badge: "Home / Solo Tutor",
      href: "/tier-1",
      desc: "Single-page high conversion, timetable matrix, direct WhatsApp & map.",
    },
    {
      id: "tier-2",
      name: "Tier 2: Pro Growth",
      label: "4-Page Tuition",
      badge: "2–4 Teachers",
      href: "/tier-2",
      desc: "Home, Batches & Fees, Results, Contact for local coaching centers.",
    },
    {
      id: "tier-3",
      name: "Tier 3: Elite Academy",
      label: "Full Multi-Page",
      badge: "Flagship Academy",
      href: "/",
      desc: "Multi-branch, 350+ rankers, downloadable notes lead magnet, deep course pages.",
    },
  ];

  const currentTier = pathname.startsWith("/tier-1")
    ? tiers[0]
    : pathname.startsWith("/tier-2")
    ? tiers[1]
    : tiers[2];

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-3 sm:left-6 z-50">
      {/* Dropdown Popover (opens upwards) */}
      {open && (
        <div className="absolute bottom-14 left-0 w-80 sm:w-96 bg-slate-950/98 backdrop-blur-2xl border border-slate-700 rounded-3xl shadow-2xl p-4 text-white animate-fadeIn mb-2">
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
                      ? "bg-brand-900/90 border border-brand-400/60 shadow-md"
                      : "hover:bg-slate-900 border border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-white">{t.name}</span>
                      <span className="text-[10px] bg-slate-800 text-amber-300 font-semibold px-2 py-0.5 rounded-full">
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
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-2xl backdrop-blur-md border border-slate-700 hover:border-amber-400 transition-all cursor-pointer group"
      >
        <Layers className="w-4 h-4 text-amber-400" />
        <span className="hidden sm:inline text-slate-400 font-normal">Tier:</span>
        <span className="text-amber-300 font-bold">{currentTier.name}</span>
        <ChevronUp
          className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
            open ? "rotate-180 text-amber-300" : ""
          }`}
        />
      </button>
    </div>
  );
}
