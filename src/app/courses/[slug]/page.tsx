import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { courses } from "@/data/courses";
import {
  GraduationCap,
  Users,
  Clock,
  Calendar,
  CheckCircle2,
  Sparkles,
  BookOpen,
  ArrowLeft,
  ShieldCheck,
  Award,
} from "lucide-react";
import CourseEnrollmentCard from "./CourseEnrollmentCard";

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-800"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Programs
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-brand-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-white/10 text-brand-200 text-xs font-bold uppercase tracking-wider">
                {course.targetGrade}
              </span>
              {course.badge && (
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> {course.badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight">
              {course.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              {course.tagline}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 text-xs text-slate-300 border-t border-white/10 mt-8">
              <div>
                <p className="text-slate-400">Batch Size</p>
                <p className="text-white font-bold text-sm mt-0.5">Strictly {course.batchSize} Students</p>
              </div>
              <div>
                <p className="text-slate-400">Duration</p>
                <p className="text-white font-bold text-sm mt-0.5">{course.duration}</p>
              </div>
              <div>
                <p className="text-slate-400">Class Mode</p>
                <p className="text-white font-bold text-sm mt-0.5">{course.mode}</p>
              </div>
              <div>
                <p className="text-slate-400">Next Batch</p>
                <p className="text-amber-400 font-bold text-sm mt-0.5">{course.nextBatchDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold font-display text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-brand-700" /> Program Overview
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {course.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
                {course.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus Roadmap */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold font-display text-slate-900 mb-2">
                Curriculum & Syllabus Breakdown
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Structured phased progression ensuring zero exam anxiety.
              </p>

              <div className="space-y-6">
                {course.syllabusOverview.map((module, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-brand-700 text-white text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h3 className="font-bold text-slate-900 text-base">{module.title}</h3>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 pl-8">
                      {module.topics.map((t, tidx) => (
                        <li key={tidx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* What is Included */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold font-display text-slate-900 mb-4">
                What&apos;s Included In This Program
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-brand-50/50 border border-brand-100 flex items-start gap-3"
                  >
                    <Award className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Enrollment Card (Right 4 cols) */}
          <div className="lg:col-span-4">
            <CourseEnrollmentCard course={course} />
          </div>
        </div>
      </div>
    </div>
  );
}
