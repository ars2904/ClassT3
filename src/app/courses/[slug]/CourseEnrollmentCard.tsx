"use client";

import React, { useState } from "react";
import { Course } from "@/data/courses";
import { siteConfig } from "@/config/site";
import {
  CalendarCheck,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

export default function CourseEnrollmentCard({ course }: { course: Course }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          courseId: course.title,
          grade: course.targetGrade,
          type: "Course Detail Page Direct Enquiry",
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sticky top-28 bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
      {/* Fee Badge */}
      <div className="pb-6 border-b border-slate-100">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Total Course Fee
        </span>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-3xl font-extrabold font-display text-slate-900">
            {course.feeTier.annual}
          </span>
          {course.feeTier.monthly && (
            <span className="text-xs text-slate-500">({course.feeTier.monthly})</span>
          )}
        </div>
        {course.feeTier.discountNote && (
          <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg mt-2 inline-block">
            {course.feeTier.discountNote}
          </p>
        )}
      </div>

      {/* Batch Alert */}
      <div className="my-5 p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs flex items-center gap-2.5">
        <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
        <span>
          <strong>{course.nextBatchDate}</strong> • Limited to {course.batchSize} students only
        </span>
      </div>

      {submitted ? (
        <div className="text-center py-6">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="font-bold text-slate-900 text-base">Seat Pre-Reserved!</h4>
          <p className="text-xs text-slate-600 mt-1 mb-4">
            Our coordinator will connect with you via WhatsApp/Phone shortly with the batch timetable.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
              `Hi, I just submitted an admission request for ${course.title}. Please send fee breakdown.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold"
          >
            <MessageCircle className="w-3.5 h-3.5" /> Continue on WhatsApp
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs sm:text-sm text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              WhatsApp / Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs sm:text-sm text-slate-800"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-700 to-indigo-700 hover:from-brand-800 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm shadow-lg shadow-brand-700/25 transition-all mt-2 disabled:opacity-75"
          >
            {loading ? "Submitting..." : "Book 2 Free Demo Classes"}
          </button>
        </form>
      )}

      {/* Direct Contact Links */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col gap-2">
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
            `Hi, I have questions about ${course.title}. Can you guide me?`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold border border-emerald-200 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>Chat with Course Counselor</span>
        </a>

        <a
          href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 text-xs font-bold transition-colors"
        >
          <Phone className="w-4 h-4 text-brand-700" />
          <span>Call Academic Desk</span>
        </a>
      </div>

      <div className="pt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>100% Satisfaction Guarantee or Full Refund</span>
      </div>
    </div>
  );
}
