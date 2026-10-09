import React from "react";
import Link from "next/link";
import { facultyMembers } from "@/data/faculty";
import { GraduationCap, Award, ArrowRight, BookOpen } from "lucide-react";

export default function FacultyPreview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
              <GraduationCap className="w-3.5 h-3.5" /> Elite Mentorship
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
              Taught Exclusively by Master Educators
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-xl">
              No junior teaching assistants or temporary instructors. Your child learns directly from authors, IITians, and Ph.D. scholars.
            </p>
          </div>

          <Link
            href="/faculty"
            className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 text-sm font-bold group transition-colors"
          >
            <span>Meet All Faculty Members</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facultyMembers.slice(0, 3).map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-premium-hover transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Photo Banner with Experience badge */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    {teacher.subject}
                  </span>
                  <h3 className="text-xl font-bold font-display">{teacher.name}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {teacher.experienceYears}+ Yrs Exp
                </div>
              </div>

              {/* Bio & Credentials */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-2 mb-3 text-xs font-semibold text-brand-800 bg-brand-50 p-2.5 rounded-xl border border-brand-100">
                    <Award className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>{teacher.qualifications}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {teacher.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[11px] text-slate-500 italic">
                    &ldquo;{teacher.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
