"use client";

import React, { useState } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";
import {
  BookOpen,
  Search,
  Filter,
  Users,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import DemoModal from "@/components/ui/DemoModal";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState("");

  const categories = [
    "All",
    "High School (9-10)",
    "Senior Secondary (11-12)",
    "Competitive Prep",
    "Middle School (6-8)",
  ];

  const filtered = courses.filter((c) => {
    const matchesCat =
      selectedCategory === "All" || c.category === selectedCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.subjects.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
      c.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" /> Academic Programs 2025–26
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Academic Batches & Test Prep
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Every program features our signature 1:12 small-batch format, daily 1-on-1 doubt clearing clinics, and curated study materials.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/90 shadow-sm mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-brand-700 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search subject or exam..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Course Cards Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">No courses match your criteria</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try searching with another subject like Math, Science, or clear your filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchTerm("");
              }}
              className="mt-4 px-4 py-2 bg-brand-700 text-white rounded-xl text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6">
                  {/* Grade Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-50 text-brand-700">
                      {course.targetGrade}
                    </span>
                    {course.badge && (
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> {course.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-brand-700 transition-colors">
                    <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                    {course.tagline}
                  </p>

                  {/* Subject Badges */}
                  <div className="flex flex-wrap gap-1.5 my-4">
                    {course.subjects.map((sub, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2 py-0.5 bg-slate-100 text-slate-700 rounded-lg"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>

                  {/* Specs Grid */}
                  <div className="space-y-2 py-3 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Users className="w-3.5 h-3.5 text-brand-600" /> Max Batch Size:
                      </span>
                      <strong className="text-slate-800 font-bold">{course.batchSize} Students</strong>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-brand-600" /> Schedule:
                      </span>
                      <span className="text-slate-700 font-medium line-clamp-1">{course.schedule}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Mode:
                      </span>
                      <span className="text-emerald-700 font-bold">{course.mode}</span>
                    </div>
                  </div>
                </div>

                {/* Footer with Fee and CTAs */}
                <div className="bg-slate-50 p-6 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Tuition Fee</p>
                      <p className="text-base font-extrabold text-slate-900">{course.feeTier.annual}</p>
                    </div>
                    {course.feeTier.monthly && (
                      <span className="text-xs text-slate-500">{course.feeTier.monthly}</span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setSelectedCourseTitle(course.title);
                        setDemoOpen(true);
                      }}
                      className="w-full py-2.5 px-3 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl text-xs transition-colors text-center"
                    >
                      Book Demo
                    </button>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="w-full py-2.5 px-3 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Syllabus</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <DemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        defaultCourse={selectedCourseTitle}
      />
    </div>
  );
}
