"use client";

import React, { useState } from "react";
import { facultyMembers } from "@/data/faculty";
import { siteConfig } from "@/config/site";
import {
  GraduationCap,
  Award,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import DemoModal from "@/components/ui/DemoModal";

export default function FacultyPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" /> Experienced Mentors
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Meet The Master Minds Behind Our Ranks
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Great teaching isn&apos;t just about knowledge; it is about empathy, patience, and knowing exactly where students get stuck.
          </p>
        </div>

        {/* Founder & Philosophy Banner */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 mb-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                Founder&apos;s Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                &ldquo;Every child has a genius inside. It takes the right mentor to unlock it.&rdquo;
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                When we founded {siteConfig.name} in {siteConfig.foundedYear}, we made a firm promise:
                we would never operate like an overcrowded commercial factory. We kept our batches small (12 to 15 students) so that every child receives the patient, personal guidance they deserve.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Zero Rote Cramming</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Patience with Every Doubt</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Lifelong Academic Discipline</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-brand-900 to-indigo-950 text-white p-6 rounded-2xl">
              <p className="text-xs text-brand-200 uppercase tracking-wider font-semibold">
                Institute Credo
              </p>
              <h3 className="text-xl font-bold font-display mt-1">Our Teaching Code</h3>
              <ul className="space-y-3 mt-4 text-xs text-brand-100">
                <li className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Concept visualized before equations are written</span>
                </li>
                <li className="flex items-start gap-2">
                  <HeartHandshake className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>No student left behind or humiliated for asking basics</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Complete transparency with parents at all times</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Faculty Roster */}
        <div className="space-y-8 mb-16">
          {facultyMembers.map((teacher, idx) => (
            <div
              key={teacher.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-premium-hover transition-all duration-300 p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Photo */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border border-slate-200 flex-shrink-0 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
                  {teacher.experienceYears}+ Yrs
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 space-y-3 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">
                      {teacher.subject}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-slate-900">
                      {teacher.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">{teacher.role}</p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold rounded-xl self-center md:self-start">
                    <Award className="w-3.5 h-3.5 text-brand-600" />
                    <span>{teacher.qualifications}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {teacher.bio}
                </p>

                {/* Achievements */}
                <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
                  {teacher.achievements.map((ach, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {ach}
                    </span>
                  ))}
                </div>

                {/* Teacher Quote */}
                <p className="text-xs text-slate-500 italic pt-2 border-t border-slate-100">
                  &ldquo;{teacher.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Experience Their Teaching In Person
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
            Book 2 complimentary demo sessions to see how our faculty interacts with your child.
          </p>
          <button
            onClick={() => setDemoOpen(true)}
            className="mt-6 px-8 py-4 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-2xl text-sm transition-all shadow-lg shadow-brand-700/20 inline-flex items-center gap-2"
          >
            <CalendarCheck className="w-4 h-4" /> Book Free Demo With Faculty
          </button>
        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
