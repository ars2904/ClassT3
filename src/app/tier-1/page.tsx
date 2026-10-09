"use client";

import React, { useState } from "react";
import { soloTutorData } from "@/data/solo-tutor";
import { tier1Memories } from "@/data/life-at-academy";
import TuitionMap from "@/components/ui/TuitionMap";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  XCircle,
  Star,
  Award,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Users,
  Target,
  FileCheck,
  HelpCircle,
  ChevronDown,
  Camera,
} from "lucide-react";

export default function Tier1SoloTutorPage() {
  const [studentName, setStudentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [selectedBatch, setSelectedBatch] = useState(soloTutorData.batches[0].grade);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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
          name: studentName,
          phone: parentPhone,
          grade: selectedBatch,
          type: "Tier 1 Solo Tutor Demo Request",
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsappDirect = (msg?: string) => {
    const text = encodeURIComponent(
      msg ||
        `Hello ${soloTutorData.tutorName}, I am inquiring about tuition batches for ${selectedBatch}. Are seats available?`
    );
    window.open(`https://wa.me/${soloTutorData.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-ivory-50 min-h-screen text-slate-900 font-sans">
      {/* Top Urgent Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2.5 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 bg-gold-500 text-navy-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> Batch 2025–26
            </span>
            <span className="text-slate-200">
              Only 2 seats left in Class 10 & 12 • Max 10 Students Per Batch
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${soloTutorData.phone.replace(/[^0-9+]/g, "")}`}
              className="text-slate-200 hover:text-gold-400 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Call: {soloTutorData.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => whatsappDirect()}
              className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Sir</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Dignified Academic Header */}
      <header className="sticky top-0 z-40 bg-navy-900 border-b-2 border-gold-500 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-navy-950 border border-gold-500/40 text-gold-400 flex items-center justify-center font-bold text-xl font-display shadow">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold font-display text-white leading-tight">
                {soloTutorData.tuitionName}
              </h1>
              <p className="text-[11px] font-bold text-gold-400 tracking-wider uppercase">
                Mentored by {soloTutorData.tutorName} • {soloTutorData.qualifications}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#book-demo"
              className="hidden sm:inline-block px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded text-xs uppercase tracking-wider font-semibold border border-white/20 transition-colors"
            >
              Book Trial
            </a>
            <button
              onClick={() => whatsappDirect()}
              className="px-4 py-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md shadow-gold-500/20"
            >
              WhatsApp Sir
            </button>
          </div>
        </div>
      </header>

      {/* Quick Anchor Subnav */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-start gap-6 sm:gap-8 text-xs font-bold uppercase tracking-wider text-slate-600 overflow-x-auto no-scrollbar">
          <a href="#about" className="hover:text-gold-600 whitespace-nowrap">About Sir</a>
          <a href="#methodology" className="hover:text-gold-600 whitespace-nowrap">Methodology</a>
          <a href="#comparison" className="hover:text-gold-600 whitespace-nowrap">Why Solo Mentor</a>
          <a href="#timetable" className="hover:text-gold-600 whitespace-nowrap">Batch Timetable</a>
          <a href="#fees" className="hover:text-gold-600 whitespace-nowrap">Monthly Fees</a>
          <a href="#results" className="hover:text-gold-600 whitespace-nowrap">Board Toppers</a>
          <a href="#reviews" className="hover:text-gold-600 whitespace-nowrap">Parent Reviews</a>
          <a href="#moments" className="hover:text-gold-600 whitespace-nowrap">Life at Academy</a>
          <a href="#faqs" className="hover:text-gold-600 whitespace-nowrap">FAQs</a>
          <a href="#book-demo" className="text-gold-600 hover:underline whitespace-nowrap">Free Trial Class</a>
        </div>
      </div>

      {/* Hero Section: WARM, LIGHT, HIGH-CONTRAST & APPROACHABLE */}
      <section className="py-10 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-ivory-100 to-ivory-200/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-navy-900 text-gold-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest shadow-xs">
                ✦ Neighborhood Home Tuition • Max 10 Students
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-navy-900 leading-[1.25]">
                Mathematics & Science Made Simple By A Mentor Who{" "}
                <span className="text-gold-600 italic font-serif">Personally Teaches</span> Every Class.
              </h2>

              <p className="text-slate-700 text-xs sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
                {soloTutorData.personalPromise}
              </p>

              {/* 4 Clean Value Pills on White */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2 max-w-lg mx-auto lg:mx-0 text-left text-[11px] sm:text-xs font-semibold text-slate-800">
                <div className="p-2.5 sm:p-3 bg-white rounded-lg border border-slate-200 shadow-xs flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-600 flex-shrink-0" />
                  <span>Max 10 Per Batch</span>
                </div>
                <div className="p-2.5 sm:p-3 bg-white rounded-lg border border-slate-200 shadow-xs flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-600 flex-shrink-0" />
                  <span>NCERT & Homework</span>
                </div>
                <div className="p-2.5 sm:p-3 bg-white rounded-lg border border-slate-200 shadow-xs flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-600 flex-shrink-0" />
                  <span>Sunday Written Tests</span>
                </div>
                <div className="p-2.5 sm:p-3 bg-white rounded-lg border border-slate-200 shadow-xs flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-600 flex-shrink-0" />
                  <span>Direct Parent Calls</span>
                </div>
              </div>

              {/* Action Buttons - 2 column on mobile */}
              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:items-center sm:justify-center lg:sm:justify-start sm:gap-4 pt-2 sm:pt-3">
                <button
                  onClick={() => whatsappDirect()}
                  className="w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Sir</span>
                </button>

                <a
                  href="#book-demo"
                  className="w-full sm:w-auto px-4 sm:px-7 py-3 sm:py-4 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md text-center flex items-center justify-center"
                >
                  Book 2 Trials
                </a>
              </div>
            </div>

            {/* Right Card: High-Contrast Crisp White Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white border-2 border-gold-500/60 rounded-2xl p-7 sm:p-8 max-w-sm w-full text-center shadow-xl relative">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-gold-500 mx-auto mb-4 shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                    alt={soloTutorData.tutorName}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold font-display text-navy-900">
                  {soloTutorData.tutorName}
                </h3>
                <p className="text-xs text-gold-700 font-bold uppercase tracking-wider mt-1">
                  {soloTutorData.qualifications}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {soloTutorData.experienceYears}+ Years of Dedicated Personal Mentoring
                </p>

                <div className="flex items-center justify-center gap-1 text-gold-500 my-3.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-500" />
                  ))}
                  <span className="text-xs text-navy-900 font-bold ml-1.5">4.9 / 5.0 (80+ Parents)</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 text-left border-t border-slate-100 pt-3 italic">
                  &ldquo;{soloTutorData.bio}&rdquo;
                </p>

                <div className="p-3 rounded-lg bg-ivory-100 border border-slate-200 text-xs text-navy-900 font-medium text-left">
                  📍 <strong>Classroom:</strong> {soloTutorData.landmark}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Proof Metrics Strip */}
      <section className="bg-navy-950 text-white py-10 border-b-2 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-navy-800">
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">14+ Years</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Teaching Legacy</p>
            </div>
            <div className="flex flex-col items-center pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">1,200+</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Students Mentored</p>
            </div>
            <div className="flex flex-col items-center pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">94.6%</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Scored Above 85%</p>
            </div>
            <div className="flex flex-col items-center pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">Max 10</span>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">Batch Limit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Dedicated Mentor Advantage */}
      <section id="about" className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              The Dedicated Mentor Advantage
            </span>
            <h3 className="text-3xl font-bold font-display text-navy-900">
              Why Parents Choose Sir Over Overcrowded Institutes
            </h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Commercial coaching centres pack 80 students in an auditorium. Here, your child gets dedicated, patient instruction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {soloTutorData.whySoloMentor.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-ivory-100 border border-slate-200 shadow-sm flex items-start gap-4 hover:border-gold-500 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold font-display text-navy-900 text-lg">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: 4-Step Proven Teaching Methodology */}
      <section id="methodology" className="py-20 lg:py-24 bg-ivory-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              Systematic Approach
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-display text-navy-900">
              How Er. Amit Sharma Teaches
            </h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              A structured 4-step framework designed to eliminate exam anxiety and build board-level problem-solving mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {soloTutorData.methodology.map((m, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-xl border border-slate-200 shadow-sm hover:border-gold-500 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black font-display text-gold-500 block mb-3">
                    {m.step}
                  </span>
                  <h4 className="text-lg font-bold font-display text-navy-900 mb-2">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {m.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-gold-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                  <span>Guaranteed Mastery</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Side-by-Side Comparison Matrix */}
      <section id="comparison" className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              Clear Contrast
            </span>
            <h3 className="text-3xl font-bold font-display text-navy-900">
              Sharma Sir vs Crowded Coaching Institutes
            </h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              See why parents choose focused personal mentorship over large commercial factories.
            </p>
          </div>

          <div className="bg-ivory-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-navy-950 text-white uppercase font-bold text-[11px] tracking-wider border-b-2 border-gold-500">
                  <tr>
                    <th className="py-4 px-6">Evaluation Feature</th>
                    <th className="py-4 px-6 text-gold-400 bg-navy-900">Sharma Sir&apos;s Academy</th>
                    <th className="py-4 px-6 text-slate-400">Crowded Coaching Institutes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {soloTutorData.comparison.map((c, i) => (
                    <tr key={i} className="hover:bg-ivory-100/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-navy-900">{c.feature}</td>
                      <td className="py-4 px-6 font-semibold text-emerald-800 bg-emerald-50/40 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{c.sharmaSir}</span>
                      </td>
                      <td className="py-4 px-6 text-slate-600">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                          <span>{c.commercial}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Board Results & Hall of Fame */}
      <section id="results" className="py-20 lg:py-24 bg-ivory-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              Proven Track Record
            </span>
            <h3 className="text-3xl font-bold font-display text-navy-900">
              Recent Board Exam Achievers
            </h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Real students from local schools who made remarkable score jumps under Sir&apos;s guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {soloTutorData.toppers.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-gold-500 transition-all text-center"
              >
                <div>
                  <span className="text-4xl font-black font-display text-gold-600 block mb-1">
                    {t.score}
                  </span>
                  <h4 className="text-base font-bold font-display text-navy-900 mt-2">
                    {t.student}
                  </h4>
                  <p className="text-xs font-semibold text-slate-700">{t.exam}</p>
                  <p className="text-[11px] text-slate-500 italic mt-0.5">{t.school}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-medium text-emerald-700">
                  {t.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Timetable Matrix */}
      <section id="timetable" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              Schedule & Batch Limits
            </span>
            <h3 className="text-3xl font-bold font-display text-navy-900">
              Available Batches & Timings (2025–26)
            </h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Strictly 10 seats per batch. Check remaining availability below.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-navy-950 text-white uppercase font-bold text-[11px] tracking-wider border-b-2 border-gold-500">
                  <tr>
                    <th className="py-4 px-6">Class / Grade</th>
                    <th className="py-4 px-6">Subject</th>
                    <th className="py-4 px-6">Days</th>
                    <th className="py-4 px-6">Time Slot</th>
                    <th className="py-4 px-6">Seats Left</th>
                    <th className="py-4 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {soloTutorData.batches.map((b, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-navy-900">{b.grade}</td>
                      <td className="py-4 px-6 text-slate-700">{b.subject}</td>
                      <td className="py-4 px-6 text-slate-600">{b.days}</td>
                      <td className="py-4 px-6 font-mono font-medium text-slate-800">{b.time}</td>
                      <td className="py-4 px-6">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-gold-500/15 text-gold-700 border border-gold-500/30">
                          Only {b.seatsLeft} seats left
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() =>
                            whatsappDirect(
                              `Hi Sir, please reserve my trial seat in the ${b.grade} batch (${b.days} at ${b.time}).`
                            )
                          }
                          className="px-3.5 py-1.5 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          Reserve Seat
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Transparent Fee Packages */}
      <section id="fees" className="py-20 bg-ivory-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              Transparent Pricing
            </span>
            <h3 className="text-3xl font-bold font-display text-navy-900">
              Monthly Tuition Fee Packages
            </h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Pay monthly. No advance annual lock-ins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {soloTutorData.batches.slice(0, 3).map((pkg, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-white border border-slate-200 hover:border-gold-500 shadow-sm flex flex-col justify-between transition-all"
              >
                <div>
                  <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-wider">
                    {pkg.grade}
                  </span>
                  <h4 className="text-xl font-bold font-display text-navy-900 mt-1">{pkg.subject}</h4>

                  <div className="my-5 pb-5 border-b border-slate-200">
                    <span className="text-3xl sm:text-4xl font-bold font-display text-navy-900">
                      {pkg.feeMonthly}
                    </span>
                    <span className="text-xs text-slate-500 block mt-1">Payable monthly</span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                      <span>3 Classes per week (2 hours each)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                      <span>Weekly Sunday written exam paper</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                      <span>Full school NCERT & past 5 years papers solved</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                      <span>Personal 1-on-1 doubt time after class</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() =>
                    whatsappDirect(`Hi Sir, I want to book a free trial class for ${pkg.grade} (${pkg.feeMonthly}).`)
                  }
                  className="mt-8 w-full py-3.5 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors"
                >
                  Book 2 Free Trial Classes
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Parent Reviews */}
      <section id="reviews" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              Colony Parent Reviews
            </span>
            <h3 className="text-3xl font-bold font-display text-navy-900">
              Verified Results & Academic Jumps
            </h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {soloTutorData.reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-ivory-100 p-7 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-gold-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-gold-500/15 text-gold-700">
                      {rev.score}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-sans">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200">
                  <h5 className="font-bold text-navy-900 text-xs">{rev.studentOrParent}</h5>
                  <p className="text-[11px] text-slate-500">{rev.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Life at Academy / Classroom Moments */}
      <section id="moments" className="py-20 lg:py-24 bg-ivory-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              <Camera className="w-3.5 h-3.5" />
              <span>Study Room Moments</span>
            </span>
            <h3 className="text-3xl font-bold font-display text-navy-900">
              Life at Academy
            </h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Inside our focused 10-student study environment where every doubt is resolved with patience and care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tier1Memories.map((m, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group hover:border-gold-500"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-navy-950/80 backdrop-blur-sm border border-gold-500/40 text-gold-400 text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {m.badge}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold font-display text-navy-900 text-base group-hover:text-gold-600 transition-colors">
                      {m.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {m.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Frequently Asked Questions (Accordion) */}
      <section id="faqs" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              Parent Queries
            </span>
            <h3 className="text-3xl font-bold font-display text-navy-900">
              Frequently Asked Questions
            </h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-4">
            {soloTutorData.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 font-bold text-navy-900 text-sm sm:text-base flex items-center justify-between gap-4"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      openFaq === idx ? "rotate-180 text-gold-600" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Classroom Location & Fast Trial Booking */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Address */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest">
                Visit Classroom
              </span>
              <h3 className="text-3xl font-bold font-display text-navy-900">
                Where Classes Take Place
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Parents are welcome to visit during evening hours to review the study environment, previous student notebooks, and discuss batch timings with Sir.
              </p>

              <div className="p-6 rounded-xl bg-ivory-100 border border-slate-200 space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 block font-bold">Classroom Address:</strong>
                    <span className="text-slate-700">{soloTutorData.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 block font-bold">Landmark:</strong>
                    <span className="text-slate-700">{soloTutorData.landmark}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 block font-bold">Direct Helpline:</strong>
                    <a href={`tel:${soloTutorData.phone}`} className="text-navy-900 font-mono font-bold hover:text-gold-600">
                      {soloTutorData.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Trial Registration Form */}
            <div id="book-demo" className="lg:col-span-6 bg-ivory-100 p-8 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-2xl font-bold font-display text-navy-900 mb-1">
                Book 2 Complimentary Trial Classes
              </h4>
              <p className="text-xs text-slate-600 mb-6">
                Let your child attend 2 lectures with Sir. Experience the teaching quality firsthand before any decision.
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h5 className="font-bold text-navy-900 text-lg">Trial Class Requested!</h5>
                  <p className="text-xs text-slate-600 mt-1 mb-5">
                    Sir will call you at {parentPhone} to confirm the trial date.
                  </p>
                  <button
                    onClick={() => whatsappDirect()}
                    className="px-5 py-2.5 bg-emerald-600 text-white rounded text-xs font-bold uppercase tracking-wider"
                  >
                    Confirm on WhatsApp Now
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded border border-slate-300 text-xs sm:text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                      Parent WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9811234567"
                      value={parentPhone}
                      onChange={(e) => setParentPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded border border-slate-300 text-xs sm:text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                      Target Class *
                    </label>
                    <select
                      value={selectedBatch}
                      onChange={(e) => setSelectedBatch(e.target.value)}
                      className="w-full px-4 py-2.5 rounded border border-slate-300 text-xs sm:text-sm bg-white"
                    >
                      {soloTutorData.batches.map((b, i) => (
                        <option key={i} value={b.grade}>
                          {b.grade} ({b.subject})
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold rounded text-xs uppercase tracking-wider transition-all mt-2 shadow-md"
                  >
                    {loading ? "Registering..." : "Confirm Free Trial Seat"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-14">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-[11px] font-bold text-gold-600 uppercase tracking-widest">
                Directions on Google Maps
              </span>
              <h4 className="text-xl font-bold font-display text-navy-900 mt-1">
                How To Reach Amit Sharma Sir&apos;s Classroom
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Located in Green Park Extension, 2 minutes walk from Metro Gate 3. Easy drop-off point for parents.
              </p>
            </div>

            <TuitionMap
              locationQuery={`${soloTutorData.tuitionName} ${soloTutorData.address}`}
              centerName={soloTutorData.tuitionName}
              address={soloTutorData.address}
              landmark={soloTutorData.landmark}
              phone={soloTutorData.phone}
              timings="Evening Batches: 3:15 PM - 8:30 PM"
              height="h-[400px]"
              title="Er. Amit Sharma Classroom Location Map"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 text-slate-400 py-10 px-4 text-center text-xs border-t-2 border-gold-500">
        <p className="text-white font-bold font-display text-sm">{soloTutorData.tuitionName}</p>
        <p className="mt-1 text-slate-400">Dedicated Personal Coaching for Grades 8–12 CBSE & ICSE</p>
        <p className="mt-4 text-[11px] text-slate-500">
          © {new Date().getFullYear()} {soloTutorData.tutorName}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
