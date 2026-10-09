"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import TuitionMap from "@/components/ui/TuitionMap";

export default function BranchesBar() {
  const [activeBranch, setActiveBranch] = useState(0);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
            Centres & Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-navy-900">
            Our Teaching Centres
          </h2>
          <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm mt-3">
            Air-conditioned, CCTV-monitored smart classrooms equipped with acoustic audio and digital projection.
          </p>
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {siteConfig.branches.map((b, idx) => (
            <div
              key={idx}
              onClick={() => setActiveBranch(idx)}
              className={`p-7 sm:p-8 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between shadow-sm ${
                activeBranch === idx
                  ? "bg-ivory-100 border-2 border-gold-500 shadow-md"
                  : "bg-white border-slate-200 hover:border-gold-400"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg font-display text-navy-900">{b.name}</h3>
                      <span className="text-[11px] text-gold-700 font-semibold uppercase tracking-wider">
                        Branch #{idx + 1}
                      </span>
                    </div>
                  </div>

                  {activeBranch === idx && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gold-500 text-navy-950 uppercase tracking-wider">
                      Selected on Map
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  {b.address}
                </p>

                <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-200">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gold-600" />
                    <strong className="text-slate-900 font-mono">{b.phone}</strong>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold-600" />
                    <span>{b.timings}</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                    activeBranch === idx ? "text-gold-700 font-black" : "text-navy-900"
                  }`}
                >
                  <Navigation className="w-3.5 h-3.5 text-gold-600" />
                  <span>{activeBranch === idx ? "Viewing on Map Below ↓" : "View on Map"}</span>
                </button>

                <a
                  href={`tel:${b.phone.replace(/[^0-9+]/g, "")}`}
                  className="px-3.5 py-1.5 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-bold rounded text-xs uppercase tracking-wider transition-colors"
                >
                  Call Branch
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Interactive Map */}
        <div className="max-w-5xl mx-auto">
          <TuitionMap
            locationQuery={`${siteConfig.branches[activeBranch].name} ${siteConfig.branches[activeBranch].address}`}
            centerName={siteConfig.branches[activeBranch].name}
            address={siteConfig.branches[activeBranch].address}
            phone={siteConfig.branches[activeBranch].phone}
            timings={siteConfig.branches[activeBranch].timings}
            height="h-[400px]"
            title={`Interactive Google Map showing ${siteConfig.branches[activeBranch].name}`}
          />
        </div>
      </div>
    </section>
  );
}
