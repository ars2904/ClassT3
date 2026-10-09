"use client";

import React from "react";
import { MapPin, Navigation, ExternalLink, Clock, Phone } from "lucide-react";

interface TuitionMapProps {
  locationQuery: string;
  centerName: string;
  address: string;
  landmark?: string;
  phone?: string;
  timings?: string;
  height?: string;
  title?: string;
}

export default function TuitionMap({
  locationQuery,
  centerName,
  address,
  landmark,
  phone,
  timings,
  height = "h-[420px]",
  title = "Tuition Center Location",
}: TuitionMapProps) {
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    locationQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const directMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    locationQuery
  )}`;

  return (
    <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/50 shadow-xl bg-navy-950">
      {/* Top Map Location Header */}
      <div className="bg-navy-900 border-b border-navy-800 px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-navy-950 border border-gold-500/40 text-gold-400 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-4 h-4 text-gold-400" />
          </div>
          <div>
            <h4 className="text-white font-bold font-display text-sm leading-tight">
              {centerName}
            </h4>
            <p className="text-[11px] text-slate-300 line-clamp-1">{address}</p>
          </div>
        </div>

        <a
          href={directMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-xs self-start sm:self-auto"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Directions</span>
          <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
        </a>
      </div>

      {/* Interactive Map Iframe */}
      <div className={`relative w-full ${height} bg-slate-100`}>
        <iframe
          title={title}
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter saturate-110"
        />

        {/* Floating Quick Info Pill on Desktop */}
        {(landmark || timings || phone) && (
          <div className="hidden md:flex absolute bottom-4 left-4 bg-navy-950/90 backdrop-blur-md border border-gold-500/40 rounded-xl p-3.5 text-xs text-slate-200 shadow-xl max-w-sm space-y-1.5 z-10">
            {landmark && (
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <span>
                  <strong>Landmark:</strong> {landmark}
                </span>
              </p>
            )}
            {timings && (
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <span>
                  <strong>Hours:</strong> {timings}
                </span>
              </p>
            )}
            {phone && (
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <span>
                  <strong>Helpline:</strong> {phone}
                </span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
