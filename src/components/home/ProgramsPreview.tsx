"use client";

import React, { useState } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";
import {
  GraduationCap,
  Atom,
  TrendingUp,
  BookOpen,
  ArrowRight,
  Users,
  CheckCircle2,
} from "lucide-react";
import DemoModal from "@/components/ui/DemoModal";

export default function ProgramsPreview() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const mainPrograms = [
    {
      id: "prog-school",
      title: "Secondary School (CBSE & ICSE)",
      targetGrade: "Classes 6th to 10th",
      description: "Thorough conceptual foundation in Mathematics, Science, and Social Sciences with NCERT line-by-line drilling for board excellence.",
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English"],
      accentColor: "#1a3a6c",
      icon: BookOpen,
      slug: "class-10-board-excellence",
      badge: "Board Preparation",
    },
    {
      id: "prog-science",
      title: "Junior College Science (JEE & NEET)",
      targetGrade: "Classes 11th & 12th",
      description: "Integrated 2-year preparation for Board Exams alongside IIT-JEE (Main/Advanced), NEET Medical, and State CETs.",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      accentColor: "#2d5fa3",
      icon: Atom,
      slug: "class-11-12-jee-advanced-engineering",
      badge: "Engineering & Medical",
    },
    {
      id: "prog-foundation",
      title: "STEM Foundation & Olympiads",
      targetGrade: "Classes 8th & 9th",
      description: "Early analytical problem-solving, mental speed arithmetic, and conceptual physics to build top competitive acumen early.",
      subjects: ["Advanced Maths", "Conceptual Science", "Logical Reasoning"],
      accentColor: "#c9a84c",
      icon: GraduationCap,
      slug: "class-9-ste-olympiad-foundation",
      badge: "Analytical Spark",
    },
    {
      id: "prog-crash",
      title: "FastTrack 90-Day Exam Sprint",
      targetGrade: "Class 10 & 12 Boards",
      description: "Intensive last-minute revision, previous 10-year question mastery, step-marking tactics, and full-length simulated mock tests.",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      accentColor: "#e8641a",
      icon: TrendingUp,
      slug: "fastrack-board-exam-crash-course",
      badge: "High-Yield Revision",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory-200/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-2">
            Structured Curricula
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy-900 tracking-tight">
            Our Coaching Programmes
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Every batch follows a disciplined academic schedule with small batch sizes, daily doubt resolution, and timed evaluation.
          </p>
        </div>

        {/* 4 Spacious Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {mainPrograms.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group relative hover:-translate-y-1"
              >
                <div className="p-6 sm:p-7">
                  {/* Top Icon Wrap */}
                  <div className="w-14 h-14 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center mb-5 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-navy-50 text-navy-900 border border-navy-200/60 mb-2">
                    {prog.targetGrade}
                  </span>

                  <h3 className="text-xl font-bold font-display text-navy-900 leading-snug group-hover:text-navy-800">
                    <Link href={`/courses/${prog.slug}`}>{prog.title}</Link>
                  </h3>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {prog.subjects.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedCourse(prog.title);
                      setDemoOpen(true);
                    }}
                    className="text-xs font-bold text-gold-600 hover:text-gold-700 uppercase tracking-wider"
                  >
                    Book Demo Class
                  </button>

                  <Link
                    href={`/courses/${prog.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 hover:text-gold-600 group-hover:translate-x-1 transition-all"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Bottom Gold Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>
            );
          })}
        </div>

        {/* View All Programs Bar */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            <span>View All Batches & Fee Breakdown</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>

      <DemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        defaultCourse={selectedCourse}
      />
    </section>
  );
}
