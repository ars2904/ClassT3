import React from "react";
import Link from "next/link";
import { tier2Data } from "@/data/tier2-data";
import { GraduationCap, Phone, MapPin, Clock } from "lucide-react";

export default function Tier2Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-10 border-t-2 border-gold-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-navy-800">
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-white">
              <div className="w-8 h-8 rounded bg-navy-900 border border-gold-500/40 text-gold-400 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg font-display">{tier2Data.name}</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">{tier2Data.description}</p>
          </div>

          <div>
            <h4 className="font-bold text-gold-400 uppercase tracking-widest text-xs mb-4">Quick Navigation</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/tier-2" className="hover:text-gold-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/tier-2/batches" className="hover:text-gold-400 transition-colors">
                  Batches & Fee Matrix
                </Link>
              </li>
              <li>
                <Link href="/tier-2/results" className="hover:text-gold-400 transition-colors">
                  Results & Toppers
                </Link>
              </li>
              <li>
                <Link href="/tier-2/life-at-academy" className="hover:text-gold-400 transition-colors">
                  Life at Academy (Memories)
                </Link>
              </li>
              <li>
                <Link href="/tier-2/contact" className="hover:text-gold-400 transition-colors">
                  Contact & Campus Directions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gold-400 uppercase tracking-widest text-xs mb-4">Centre Information</h4>
            <div className="space-y-2.5 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{tier2Data.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="font-mono font-bold text-white">{tier2Data.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>{tier2Data.timings}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-slate-500 text-[11px]">
          © {new Date().getFullYear()} {tier2Data.name}. All rights reserved. Tier 2 Pro Growth Coaching Template.
        </div>
      </div>
    </footer>
  );
}
