"use client";

import React, { useState } from "react";
import { tier2Data } from "@/data/tier2-data";
import Tier2Navbar from "@/components/tier2/Tier2Navbar";
import Tier2Footer from "@/components/tier2/Tier2Footer";
import TuitionMap from "@/components/ui/TuitionMap";
import { MapPin, Phone, MessageCircle, Clock, CheckCircle2, Send, Mail, Sparkles, HelpCircle } from "lucide-react";

export default function Tier2ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("Class 10 (CBSE)");
  const [message, setMessage] = useState("");
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
          grade,
          message,
          type: "Tier 2 Contact Enquiry",
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsappDirect = () => {
    const text = encodeURIComponent(
      `Hello Zenith Tutorials, I am interested in visiting the center for ${grade} batches.`
    );
    window.open(`https://wa.me/${tier2Data.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-ivory-50 min-h-screen text-slate-900 font-sans">
      <Tier2Navbar />

      {/* Hero Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b-2 border-gold-500 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions & Counseling Desk</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
            Visit Our Coaching Centre
          </h1>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Centrally located in Sector 15 with dedicated AC smart classrooms and parent waiting lounge. Walk-ins welcome for counseling between 3 PM and 8 PM.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column: Center Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold font-display text-navy-900">
                Center Information & Timings
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parents are welcome to review previous years&apos; test question banks, inspect classroom facilities, and meet faculty members.
              </p>

              <div className="space-y-4 pt-2 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-navy-900 font-bold block">Center Address:</strong>
                    <span className="text-slate-700 leading-relaxed">{tier2Data.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-navy-900 font-bold block">Operating Hours:</strong>
                    <span className="text-slate-700">{tier2Data.timings}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-navy-900 font-bold block">Helpline Numbers:</strong>
                    <a href={`tel:${tier2Data.phone}`} className="text-navy-900 font-mono font-bold hover:text-gold-600 block">
                      {tier2Data.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-navy-900 font-bold block">Email:</strong>
                    <span className="text-slate-700">{tier2Data.email}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={whatsappDirect}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat With Center Coordinator</span>
                </button>
              </div>
            </div>

            <div className="bg-ivory-100 p-6 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-2">
              <strong className="text-navy-900 font-bold block text-sm">Directions & Landmarks</strong>
              <p>• Located on the 1st Floor of City Center Plaza, directly opposite the Central Bank.</p>
              <p>• 3 minutes walk from Sector 15 Main Market bus stop.</p>
              <p>• Dedicated 2-wheeler and 4-wheeler parking available inside the plaza basement.</p>
            </div>
          </div>

          {/* Right Column: Demo / Enquiry Form (7 cols) */}
          <div id="demo" className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy-900 mb-1">
              Book A Free Demo Class Or Send Query
            </h2>
            <p className="text-xs text-slate-500 mb-8">
              Our center coordinator will call you back within 2 hours with batch details.
            </p>

            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold font-display text-navy-900">Enquiry Received!</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-6 max-w-sm mx-auto">
                  Thank you! Our academic coordinator will call you at {phone} to schedule your free demo class.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-navy-900 text-white rounded text-xs font-bold uppercase tracking-wider"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                      Student / Parent Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ritu Verma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded border border-slate-300 text-xs sm:text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9822144556"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded border border-slate-300 text-xs sm:text-sm bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                    Target Class / Batch *
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-4 py-2.5 rounded border border-slate-300 text-xs sm:text-sm bg-white"
                  >
                    <option value="Class 10 (CBSE/ICSE)">Class 10 (CBSE / ICSE)</option>
                    <option value="Class 9 (CBSE/ICSE)">Class 9 (CBSE / ICSE)</option>
                    <option value="Class 11 Science (PCM/PCB)">Class 11 Science (PCM / PCB)</option>
                    <option value="Class 12 Science (PCM/PCB)">Class 12 Science (PCM / PCB)</option>
                    <option value="Class 11 & 12 Commerce">Class 11 & 12 Commerce</option>
                    <option value="Class 8 Middle School">Class 8 Middle School Foundation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                    Student Weaknesses or Notes (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="e.g. Student is struggling with Class 10 Trigonometry and Science numericals..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded border border-slate-300 text-xs sm:text-sm bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Submitting..." : "Confirm Free Demo Class"}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Center Location Map */}
        <div className="mt-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
              Center Location Map
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy-900 mt-2">
              Locate Zenith Tutorials on Google Maps
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Located on the 1st Floor of City Center Plaza, Sector 15. Conveniently accessible from metro and main market bus stops.
            </p>
          </div>

          <TuitionMap
            locationQuery={`${tier2Data.name} ${tier2Data.address}`}
            centerName={tier2Data.name}
            address={tier2Data.address}
            landmark="City Center Plaza, 1st Floor, Near Central Bank, Sector 15"
            phone={tier2Data.phone}
            timings={tier2Data.timings}
            height="h-[440px]"
            title="Zenith Tutorials Center Google Map"
          />
        </div>
      </section>

      <Tier2Footer />
    </div>
  );
}
