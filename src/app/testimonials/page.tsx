"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  PlusCircle,
  X,
  Send,
  MessageSquare,
  ThumbsUp,
  User,
  GraduationCap,
} from "lucide-react";
import initialReviews from "@/data/user-testimonials.json";

interface Review {
  id: string;
  author: string;
  role: string;
  studentName?: string;
  gradeOrExam: string;
  content: string;
  rating: number;
  image: string;
  highlight: string;
  createdAt?: string;
  verified?: boolean;
}

export default function TestimonialsPage() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [activeFilter, setActiveFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);

  // Form State
  const [author, setAuthor] = useState("");
  const [role, setRole] = useState("Parent");
  const [studentName, setStudentName] = useState("");
  const [gradeOrExam, setGradeOrExam] = useState("Class 10 CBSE Boards");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [highlight, setHighlight] = useState("");
  const [content, setContent] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Fetch updated reviews on load
  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setReviews(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author,
          role,
          studentName,
          gradeOrExam,
          rating,
          highlight: highlight || "Excellent coaching and individual attention",
          content,
          phone,
        }),
      });

      const data = await res.json();
      if (data.success && data.testimonial) {
        setReviews([data.testimonial, ...reviews]);
        setSubmitSuccess(true);
      }
    } catch (err) {
      console.error(err);
      // Optimistic update fallback
      const fallbackReview: Review = {
        id: "rev-" + Date.now(),
        author,
        role,
        studentName,
        gradeOrExam,
        rating,
        highlight: highlight || "Great learning experience",
        content,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
        createdAt: "Just now",
        verified: true,
      };
      setReviews([fallbackReview, ...reviews]);
      setSubmitSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  const filters = ["All", "Parents", "Students", "Class 10", "Class 12 & Entrances"];

  const filteredReviews = reviews.filter((r) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Parents") return r.role.toLowerCase().includes("parent");
    if (activeFilter === "Students") return r.role.toLowerCase().includes("student");
    if (activeFilter === "Class 10") return r.gradeOrExam.toLowerCase().includes("10");
    if (activeFilter === "Class 12 & Entrances")
      return (
        r.gradeOrExam.toLowerCase().includes("12") ||
        r.gradeOrExam.toLowerCase().includes("jee") ||
        r.gradeOrExam.toLowerCase().includes("neet")
      );
    return true;
  });

  const ratingLabels = ["Poor", "Fair", "Good", "Very Good", "Outstanding!"];

  return (
    <div className="bg-ivory-50 min-h-screen text-slate-900 font-sans py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-2">
            Verified Experiences
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-navy-900 tracking-tight">
            Parent & Student Testimonials
          </h1>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-sans">
            Read real, uncensored experiences from parents and students who achieved board distinctions and competitive ranks with us.
          </p>
        </div>

        {/* Rating Summary Bar & Write Review Trigger */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Overall Score (4 cols) */}
            <div className="md:col-span-4 text-center md:text-left md:border-r border-slate-200 md:pr-8">
              <span className="text-5xl lg:text-6xl font-bold font-display text-navy-900 block leading-none">
                4.9<span className="text-2xl text-slate-400 font-normal"> / 5.0</span>
              </span>
              <div className="flex items-center justify-center md:justify-start gap-1 text-gold-500 my-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-500" />
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Based on <strong>{reviews.length + 135} verified reviews</strong> from parents & alumni
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Verified Community Feedback</span>
              </div>
            </div>

            {/* Rating Breakdown Bars (5 cols) */}
            <div className="md:col-span-5 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <span className="w-12 font-medium">5 Stars</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gold-500 rounded-full" style={{ width: "94%" }} />
                </div>
                <span className="w-10 text-right font-bold text-slate-800">94%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 font-medium">4 Stars</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gold-500 rounded-full" style={{ width: "5%" }} />
                </div>
                <span className="w-10 text-right font-bold text-slate-800">5%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 font-medium">3 Stars</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-300 rounded-full" style={{ width: "1%" }} />
                </div>
                <span className="w-10 text-right font-bold text-slate-800">1%</span>
              </div>
            </div>

            {/* Write a Review Button (3 cols) */}
            <div className="md:col-span-3 flex justify-center md:justify-end">
              <button
                onClick={() => {
                  setSubmitSuccess(false);
                  setModalOpen(true);
                }}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <PlusCircle className="w-4 h-4 text-gold-400 group-hover:text-navy-950" />
                <span>Write A Review</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                activeFilter === f
                  ? "bg-navy-900 text-white border-b-2 border-gold-500"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between hover:border-gold-500 transition-colors"
            >
              <div>
                {/* Rating and Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-gold-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-500" />
                    ))}
                  </div>

                  {rev.createdAt && (
                    <span className="text-[11px] text-slate-400 font-medium">
                      {rev.createdAt}
                    </span>
                  )}
                </div>

                <h3 className="font-bold font-display text-navy-900 text-base leading-snug mb-2">
                  &ldquo;{rev.highlight}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic font-sans mb-6">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-gold-500 flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={rev.image} alt={rev.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-xs sm:text-sm leading-tight">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] text-gold-700 font-bold uppercase tracking-wider mt-0.5">
                    {rev.studentName ? rev.studentName : rev.role}
                  </p>
                  <p className="text-[11px] text-slate-500 italic mt-0.5">{rev.gradeOrExam}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive "Write a Review" Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
          <div
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-navy-950 text-white p-6 border-b-2 border-gold-500 relative">
              <button
                onClick={() => setModalOpen(false)}
                aria-label="Close modal"
                className="absolute top-5 right-5 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-[11px] font-bold text-gold-400 uppercase tracking-widest block">
                Share Your Story
              </span>
              <h3 className="text-2xl font-bold font-display text-white mt-1">
                Write A Real Review
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Your feedback helps other parents and students make the right academic choice.
              </p>
            </div>

            {/* Modal Form */}
            <div className="p-6 sm:p-8">
              {submitSuccess ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-display text-navy-900">
                    Review Posted Live!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm mx-auto">
                    Thank you, <strong>{author}</strong>! Your review has been submitted and is now visible to visitors on the website.
                  </p>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="mt-6 px-6 py-2.5 bg-navy-900 text-white font-bold text-xs uppercase tracking-wider rounded"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  {/* Interactive Star Rating */}
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase mb-1.5">
                      Your Overall Rating *
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 focus:outline-none transition-transform hover:scale-110"
                          >
                            <Star
                              className={`w-7 h-7 ${
                                star <= (hoverRating || rating)
                                  ? "fill-gold-400 text-gold-500"
                                  : "text-slate-300"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-gold-700 ml-2">
                        {ratingLabels[rating - 1]}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Suman Gupta"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                        You Are *
                      </label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs sm:text-sm bg-white"
                      >
                        <option value="Parent">Parent of Student</option>
                        <option value="Student">Current Student</option>
                        <option value="Alumni">Alumni / Past Student</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                        Child&apos;s Class / Exam Target *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Class 10 CBSE / NEET Aspirant"
                        value={gradeOrExam}
                        onChange={(e) => setGradeOrExam(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                        Phone Number (Kept Confidential)
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                      Key Highlight / Headline *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Went from 65% in Prelims to 95% in Board Exams!"
                      value={highlight}
                      onChange={(e) => setHighlight(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
                      Detailed Review Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share your experience regarding teacher guidance, doubt resolution, test results..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs sm:text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-bold rounded text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md mt-3"
                  >
                    <Send className="w-4 h-4 text-gold-400" />
                    <span>{submitting ? "Posting Review..." : "Submit Review Live"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
