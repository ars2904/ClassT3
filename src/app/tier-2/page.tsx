"use client";

import React, { useState } from "react";
import Link from "next/link";
import { tier2Data } from "@/data/tier2-data";
import { tier2Memories } from "@/data/life-at-academy";
import Tier2Navbar from "@/components/tier2/Tier2Navbar";
import Tier2Footer from "@/components/tier2/Tier2Footer";
import {
  Users,
  CheckCircle2,
  CalendarCheck,
  Award,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  BookOpen,
  Trophy,
  ShieldCheck,
  HelpCircle,
  FileCheck,
  ChevronDown,
  Star,
  MapPin,
  Camera,
} from "lucide-react";

export default function Tier2HomePage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("Class 10 (CBSE)");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleQuickLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          grade,
          type: "Tier 2 Quick Lead",
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
    <div className="bg-ivory-50 min-h-screen text-slate-900 font-sans">
      <Tier2Navbar />

      {/* Spacious Grand Hero with Real Classroom Photography */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center text-white overflow-hidden border-b-2 border-gold-500">
        {/* Background Real Classroom Photo */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=85"
            alt="Interactive classroom coaching"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-900/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/50 bg-navy-950/70 backdrop-blur-md text-gold-300 text-xs font-bold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Admissions Open 2025–26 • Sector 15 Centre</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.18] drop-shadow-md">
            Quality Coaching For School Excellence &{" "}
            <span className="text-gold-400 italic font-serif">Board Merit</span>.
          </h1>

          <p className="text-slate-200 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-sans">
            Personalized 14-student batches, dedicated 3-mentor team for Maths, Science & Physics, and weekly diagnostic testing for Classes 8th to 12th.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/tier-2/contact#demo"
              className="w-full sm:w-auto px-8 py-4 rounded bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-gold-500/30 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Free Demo Class
            </Link>

            <Link
              href="/tier-2/batches"
              className="w-full sm:w-auto px-8 py-4 rounded border-2 border-white/70 hover:border-white text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all hover:bg-white/10 backdrop-blur-xs"
            >
              View Batches & Timetable
            </Link>

            <a
              href={`tel:${tier2Data.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full sm:w-auto px-6 py-4 rounded border border-navy-700 bg-navy-950/80 text-slate-200 hover:text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call Helpline</span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/15 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-semibold text-slate-200 backdrop-blur-xs">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Classes 8th to 12th</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Max 14 Per Batch</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Weekly Sunday Tests</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>AC Smart Classrooms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Metrics Ribbon */}
      <section className="bg-navy-950 text-white py-10 border-b-2 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-navy-800">
            {tier2Data.stats.map((st, i) => (
              <div key={i} className={`flex flex-col items-center ${i > 0 ? "pt-4 sm:pt-0" : ""}`}>
                <span className="text-3xl sm:text-4xl font-bold font-display text-gold-400">
                  {st.value}
                </span>
                <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Center Philosophy & Director's Note */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photographic Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-gold-500/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                  alt="Faculty mentoring students"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent p-6 text-white">
                  <p className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                    Founded by Er. Vivek Joshi
                  </p>
                  <p className="text-sm font-semibold mt-1">
                    Ex-FIITJEE Senior Faculty • 12+ Years Coaching Experience
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-navy-900 border-2 border-gold-500 rounded-xl p-4 shadow-xl text-white hidden sm:block">
                <span className="text-2xl font-bold font-display text-gold-400 block">100%</span>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-300">
                  Board Pass Rate
                </span>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest">
                Our Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-navy-900 leading-tight">
                Why We Built Zenith Tutorials Around Small, Disciplined Batches.
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                In overcrowded coaching factories packing 80+ children per auditorium, individual student difficulties get overlooked. Quiet learners fall behind, while doubts remain unasked out of hesitation.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                At Zenith Tutorials, every batch is strictly capped at 14 students. Our three founders personally teach every lecture, mark every weekly test, and sit down with students to resolve homework doubts face-to-face.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-ivory-100 border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Direct Teacher Accountability</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Zero junior TAs. Only seasoned full-time faculty teach your child.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-ivory-100 border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Synchronized School Syllabus</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Aligned with CBSE & ICSE schedules to avoid exam burnout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The 3 Core Teachers */}
      <section className="py-20 lg:py-28 bg-ivory-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              Our Mentors
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-navy-900">
              Meet Our 3 Subject Experts
            </h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Dedicated educators who personally teach and guide students step-by-step through school syllabi and board papers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tier2Data.teachers.map((teacher, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group hover:-translate-y-1 hover:border-gold-500"
              >
                <div className="h-64 overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block">
                      {teacher.subject}
                    </span>
                    <h3 className="text-xl font-bold font-display text-navy-900 mt-1">
                      {teacher.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-700 mt-1">
                      {teacher.qualifications}
                    </p>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                      {teacher.experience}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Teaches 100% of Lectures</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zenith Tutorials (6-Card Grid) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              Coaching Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-navy-900">
              Why Parents Choose Zenith Over Large Mega-Institutes
            </h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Every system and policy is built around individual student progress, not commercial mass batching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tier2Data.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-ivory-100 border border-slate-200 hover:border-gold-500 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center font-bold mb-4 shadow">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-navy-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {feat.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-bold text-navy-900">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                  <span>Verified Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Batches Grid */}
      <section className="py-20 lg:py-28 bg-ivory-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-14">
            <div>
              <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
                Schedules & Batches
              </span>
              <h2 className="text-3xl font-bold font-display text-navy-900">
                Popular Academic Batches
              </h2>
            </div>
            <Link
              href="/tier-2/batches"
              className="text-xs font-bold uppercase tracking-wider text-navy-900 hover:text-gold-600 flex items-center gap-1"
            >
              View Full Timetable & Fees <ArrowRight className="w-4 h-4 text-gold-600" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tier2Data.batches.slice(0, 3).map((b) => (
              <div
                key={b.id}
                className="p-8 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-sm hover:border-gold-500 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-navy-50 text-navy-900 border border-navy-200">
                      {b.grade}
                    </span>
                    <span className="text-xs font-bold text-red-600">
                      Only {b.seatsLeft} seats left
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-navy-900 mt-2">{b.stream}</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Subjects: {b.subjects.join(", ")}
                  </p>

                  <div className="my-5 py-4 border-y border-slate-100 text-xs text-slate-700 space-y-2">
                    <p className="flex items-center justify-between">
                      <span className="text-slate-400">Class Timings:</span>
                      <strong className="text-slate-900 font-mono">{b.timing}</strong>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="text-slate-400">Weekly Days:</span>
                      <strong className="text-slate-900">{b.days}</strong>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="text-slate-400">Batch Limit:</span>
                      <strong className="text-slate-900">{b.batchLimit} Max</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Tuition Fee</span>
                    <span className="text-lg font-black text-navy-900 font-display">{b.fee}</span>
                  </div>
                  <Link
                    href="/tier-2/contact"
                    className="px-4 py-2 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Enroll
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame / Results Preview on Home */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              Board Merit
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-navy-900">
              Recent Board Exam Achievers
            </h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Our small-batch students regularly outscore competitors in Class 10 & 12 board examinations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tier2Data.results.map((res, i) => (
              <div
                key={i}
                className="bg-ivory-100 rounded-xl border border-slate-200 p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-center hover:border-gold-500"
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-gold-500/15 text-gold-700 text-xs font-bold rounded-full mb-3 border border-gold-500/30">
                    {res.badge}
                  </span>

                  <span className="text-4xl font-bold font-display text-gold-600 block leading-tight">
                    {res.score}
                  </span>

                  <h3 className="text-base font-bold font-display text-navy-900 mt-2">{res.student}</h3>
                  <p className="text-xs font-semibold text-slate-700">{res.exam}</p>
                  <p className="text-[11px] text-slate-500 italic mt-0.5">{res.school}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Result</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/tier-2/results"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white rounded text-xs uppercase tracking-wider font-bold transition-all shadow-md"
            >
              <span>View Complete Hall of Fame & Scorecards</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities & Infrastructure Tour */}
      <section className="py-20 lg:py-28 bg-ivory-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              Study Environment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-navy-900">
              Modern Center Infrastructure
            </h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Designed to foster calm concentration, safety, and interactive learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tier2Data.facilities.map((fac, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:border-gold-500 transition-all flex flex-col"
              >
                <div className="h-44 overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold font-display text-navy-900 text-base">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Academy / Memories Preview */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
                <Camera className="w-3.5 h-3.5" />
                <span>Center Culture & Memories</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-navy-900 mt-1">
                Life at Academy
              </h2>
              <div className="w-12 h-1 bg-gold-500 mt-3 rounded-full" />
              <p className="text-slate-600 text-xs sm:text-sm mt-3 max-w-xl">
                Glimpses into our 14-student classrooms, Sunday test environments, Teachers&apos; Day celebrations, and annual felicitation ceremonies.
              </p>
            </div>

            <Link
              href="/tier-2/life-at-academy"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md self-start md:self-auto"
            >
              <span>View Full Memories Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tier2Memories.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                href="/tier-2/life-at-academy"
                className="group bg-ivory-100 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-gold-500 transition-all flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-navy-950/80 backdrop-blur-sm border border-gold-500/40 text-gold-400 text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold font-display text-navy-900 text-base group-hover:text-gold-600 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                      {item.caption}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-bold text-gold-700">
                    <span>{item.batchYear}</span>
                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Enlarge <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20 lg:py-28 bg-ivory-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              Parent Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-navy-900">
              What Families Say About Zenith Tutorials
            </h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tier2Data.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-ivory-100 p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-gold-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-gold-500/15 text-gold-700">
                      {t.studentAchievement}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-sans">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-200">
                  <h4 className="font-bold text-navy-900 text-xs">{t.name}</h4>
                  <p className="text-[11px] text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instant Demo Booking & Fast Lead Form */}
      <section className="py-20 lg:py-24 bg-ivory-100 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border-2 border-gold-500/60 p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-navy-900 text-gold-400 text-xs font-bold uppercase tracking-widest">
                  ✦ Complimentary Demo Class
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy-900">
                  Experience Our Teaching In Person Before Enrolling.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Attend 2 complimentary sessions with our founders. We will evaluate your child&apos;s baseline concepts and recommend the optimal batch schedule.
                </p>
                <div className="space-y-2 text-xs text-slate-700 pt-2 font-semibold">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Free diagnostic test report included</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Zero commitment or registration fees</span>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 bg-ivory-50 p-6 rounded-xl border border-slate-200">
                {submitted ? (
                  <div className="text-center py-6">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-lg font-bold font-display text-navy-900">Demo Scheduled!</h4>
                    <p className="text-xs text-slate-600 mt-1 mb-4">
                      Our coordinator will call {phone} to confirm the trial date.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 bg-navy-900 text-white rounded text-xs font-bold uppercase tracking-wider"
                    >
                      Book Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuickLead} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                        Student Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priyanshu Roy"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs sm:text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                        Parent WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9822144556"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs sm:text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                        Class / Grade *
                      </label>
                      <select
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs sm:text-sm bg-white"
                      >
                        <option value="Class 10 (CBSE)">Class 10 (CBSE/ICSE)</option>
                        <option value="Class 9 (CBSE)">Class 9 (CBSE/ICSE)</option>
                        <option value="Class 11 Science (PCM/PCB)">Class 11 Science (PCM/PCB)</option>
                        <option value="Class 12 Science (PCM/PCB)">Class 12 Science (PCM/PCB)</option>
                        <option value="Class 11 & 12 Commerce">Class 11 & 12 Commerce</option>
                        <option value="Class 8 Foundation">Class 8 Foundation</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md mt-1"
                    >
                      {loading ? "Submitting..." : "Reserve Free Demo Seat"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              Clear Guidance
            </span>
            <h2 className="text-3xl font-bold font-display text-navy-900">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-4">
            {tier2Data.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-ivory-100 rounded-xl border border-slate-200 shadow-sm overflow-hidden"
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
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-950 text-white text-center border-t-2 border-gold-500">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
            ✦ Free Trial Classes Available
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display">
            Start Your Child&apos;s Academic Preparation With Confidence
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Visit our center in Sector 15 or book 2 complimentary demo sessions for your child today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-3">
            <Link
              href="/tier-2/contact"
              className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 rounded font-bold text-xs uppercase tracking-wider shadow-md"
            >
              Book Free Trial Session
            </Link>
            <a
              href={`https://wa.me/${tier2Data.whatsapp}`}
              className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Helpline
            </a>
          </div>
        </div>
      </section>

      <Tier2Footer />
    </div>
  );
}
