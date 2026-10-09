import React from "react";
import { siteConfig } from "@/config/site";

export default function StatsBar() {
  return (
    <section className="bg-navy-950 text-white border-b-2 border-gold-500 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-navy-800">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center ${
                idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gold-400 tracking-tight">
                {stat.value}
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider mt-2">
                {stat.label}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
