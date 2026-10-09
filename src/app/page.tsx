import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import LegacyIntro from "@/components/home/LegacyIntro";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ResultsPreview from "@/components/home/ResultsPreview";
import BranchesBar from "@/components/home/BranchesBar";
import FacultyPreview from "@/components/home/FacultyPreview";
import Testimonials from "@/components/home/Testimonials";
import LifeAtAcademyPreview from "@/components/home/LifeAtAcademyPreview";
import CtaBanner from "@/components/home/CtaBanner";
import Link from "next/link";
import { faqs } from "@/data/faqs";
import { HelpCircle, ChevronRight, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <LegacyIntro />
      <ProgramsPreview />
      <WhyChooseUs />
      <ResultsPreview />
      <BranchesBar />
      <FacultyPreview />
      <LifeAtAcademyPreview />
      <Testimonials />

      {/* FAQs Snapshot on Home */}
      <section className="py-20 bg-ivory-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-widest mb-1">
              Clear Guidance
            </span>
            <h2 className="text-3xl font-bold font-display text-navy-900 mt-1">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.slice(0, 4).map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
              >
                <h3 className="text-base font-bold text-navy-900 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-slate-600 mt-2.5 ml-8 leading-relaxed font-sans">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact#faqs"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-900 hover:text-gold-600"
            >
              <span>Have more questions? Read all FAQs & Contact us</span>
              <ChevronRight className="w-4 h-4 text-gold-600" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
