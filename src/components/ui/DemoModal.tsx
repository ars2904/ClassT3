"use client";

import React, { useState } from "react";
import { X, CheckCircle, GraduationCap, Phone, User, BookOpen, Clock, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export default function DemoModal({ isOpen, onClose, defaultCourse = "" }: DemoModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("Grade 10 (CBSE/ICSE)");
  const [mode, setMode] = useState("Classroom (Offline)");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          grade,
          courseId: defaultCourse || "Demo Class Request",
          mode,
          type: "Demo Class Booking",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please connect with us directly via WhatsApp or Phone.");
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true); // Fallback to friendly success for UX
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${siteConfig.shortName}, I am ${name}. I just requested a Free Demo class for ${grade}. Please share batch timings!`
    );
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-indigo-900 px-6 py-6 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" /> 100% Free • No Obligation
          </div>
          <h3 className="text-2xl font-bold font-display">Book Your Free Demo Class</h3>
          <p className="text-brand-100 text-sm mt-1">
            Experience our 1:12 small batch learning & expert faculty before you enroll.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Demo Class Reserved!</h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto mb-6">
                Thank you, <strong>{name}</strong>. Our senior academic counselor will call you at{" "}
                <span className="text-slate-900 font-semibold">{phone}</span> to confirm your preferred time slot.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={openWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-emerald-600/20"
                >
                  Confirm on WhatsApp Now
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {defaultCourse && (
                <div className="bg-brand-50 border border-brand-200 text-brand-900 text-xs px-3.5 py-2.5 rounded-xl font-medium flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-brand-700 flex-shrink-0" />
                  <span>Selected Program: <strong>{defaultCourse}</strong></span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Student / Parent Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aryan Verma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  WhatsApp / Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Target Grade / Class
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-800 bg-white"
                  >
                    <option value="Class 6 - 8 (Foundation)">Class 6 - 8 (Foundation)</option>
                    <option value="Class 9 (STEM Prep)">Class 9 (STEM Prep)</option>
                    <option value="Class 10 (Board Exam)">Class 10 (Board Exam)</option>
                    <option value="Class 11 - 12 (JEE Main/Adv)">Class 11 - 12 (JEE Main/Adv)</option>
                    <option value="Class 11 - 12 (NEET Medical)">Class 11 - 12 (NEET Medical)</option>
                    <option value="Class 11 - 12 (Commerce)">Class 11 - 12 (Commerce)</option>
                    <option value="90-Day Crash Course">90-Day Crash Course</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Learning Mode
                  </label>
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-800 bg-white"
                  >
                    <option value="Classroom (Offline)">Classroom (Offline Centre)</option>
                    <option value="Live Online">Live Online Class</option>
                    <option value="Hybrid (Both)">Hybrid (Offline + Online)</option>
                  </select>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                Slots are assigned based on seat availability (Only 15 students per batch).
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-700 to-indigo-700 hover:from-brand-800 hover:to-indigo-800 text-white font-semibold text-sm transition-all shadow-lg shadow-brand-700/25 flex items-center justify-center gap-2 mt-4 disabled:opacity-75"
              >
                {loading ? "Confirming Slot..." : "Confirm Free Demo Seat"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
