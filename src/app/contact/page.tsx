"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { faqs } from "@/data/faqs";
import TuitionMap from "@/components/ui/TuitionMap";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("Class 10");
  const [preferredBranch, setPreferredBranch] = useState(siteConfig.branches[0].name);
  const [selectedBranchIndex, setSelectedBranchIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
          email,
          grade,
          message: `Preferred Branch: ${preferredBranch}. Message: ${message}`,
          type: "Contact & Admissions Form",
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
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Admissions Office
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Connect With Our Academic Advisors
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Have questions about batch schedules, fee structures, or diagnostic scholarships? We are here to guide you.
          </p>
        </div>

        {/* 2-Column Section: Form & Campus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Left Column: Comprehensive Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-bold font-display text-slate-900 mb-2">
              Admission Enquiry Form
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mb-6">
              Fill in your details below and our senior academic counselor will call you within 2 hours.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Enquiry Registered!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Thank you, <strong>{name}</strong>. We have received your admission query for {grade}. An academic advisor will reach out to you at {phone}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Student / Parent Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajiv Kapoor"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. parent@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Target Grade / Program *
                    </label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-800 bg-white"
                    >
                      <option value="Class 10 (Board Exam)">Class 10 (CBSE/ICSE Boards)</option>
                      <option value="Class 11 - 12 (JEE Main & Adv)">Class 11 - 12 (JEE Main & Adv)</option>
                      <option value="Class 11 - 12 (NEET Medical)">Class 11 - 12 (NEET Medical)</option>
                      <option value="Class 9 (STEM Prep)">Class 9 (STEM Prep)</option>
                      <option value="Class 6 to 8 (Junior Genius)">Class 6 to 8 (Foundation)</option>
                      <option value="90-Day Crash Course">90-Day Exam Crash Course</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Preferred Campus
                  </label>
                  <select
                    value={preferredBranch}
                    onChange={(e) => setPreferredBranch(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-800 bg-white"
                  >
                    {siteConfig.branches.map((b, i) => (
                      <option key={i} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                    <option value="Online Only">Online Classes Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Specific Questions or Needs
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Interested in weekday morning batches, previous math score was 75%..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-700 via-brand-800 to-indigo-800 hover:from-brand-800 hover:to-indigo-900 text-white font-bold text-sm shadow-lg shadow-brand-700/25 transition-all flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Sending..." : "Submit Admission Enquiry"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Campus Details & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Connect Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-brand-300 flex flex-col items-center text-center transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800">Direct Call</span>
                <span className="text-[11px] text-slate-500 mt-0.5">{siteConfig.phone}</span>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  siteConfig.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 shadow-sm hover:bg-emerald-100/70 flex flex-col items-center text-center transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-emerald-900">WhatsApp Desk</span>
                <span className="text-[11px] text-emerald-700 mt-0.5">Quick response</span>
              </a>
            </div>

            {/* Branch Locations */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold font-display text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-700" /> Our Physical Centres
              </h3>

              <div className="space-y-4">
                {siteConfig.branches.map((b, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-sm">{b.name}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{b.address}</p>
                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-200/60 text-xs">
                      <span className="text-brand-700 font-mono font-semibold">{b.phone}</span>
                      <a
                        href={siteConfig.address.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-700 hover:underline font-bold text-[11px]"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Office Hours: {siteConfig.officeHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Campus Map Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
              Interactive Campus Navigation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy-900 mt-2">
              Find Our Teaching Centres On Map
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Select a branch below to explore route directions, metro proximity, and parking availability.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {siteConfig.branches.map((b, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedBranchIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedBranchIndex === idx
                      ? "bg-navy-900 text-gold-400 border-2 border-gold-500 shadow-md scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          <TuitionMap
            locationQuery={`${siteConfig.branches[selectedBranchIndex].name} ${siteConfig.branches[selectedBranchIndex].address}`}
            centerName={siteConfig.branches[selectedBranchIndex].name}
            address={siteConfig.branches[selectedBranchIndex].address}
            phone={siteConfig.branches[selectedBranchIndex].phone}
            timings={siteConfig.branches[selectedBranchIndex].timings}
            height="h-[460px]"
            title={`Interactive Google Map of ${siteConfig.branches[selectedBranchIndex].name}`}
          />
        </div>

        {/* FAQs Accordion Section */}
        <div id="faqs" className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Clear Guidance
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Everything you need to know about our demo classes, fee policies, and doubt clearing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-brand-700 flex-shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${
                        isOpen ? "rotate-180 text-brand-700" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
