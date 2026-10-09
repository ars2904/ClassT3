import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t-2 border-gold-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-navy-900 border border-gold-500/50 flex items-center justify-center text-gold-400 shadow">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xl font-bold font-display tracking-tight text-white block leading-tight">
                  {siteConfig.name}
                </span>
                <span className="text-[11px] font-bold text-gold-400 uppercase tracking-widest">
                  Academic Legacy Since {siteConfig.foundedYear}
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {siteConfig.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900 border border-navy-800 text-[11px] text-slate-300 font-medium"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Award className="w-4 h-4" /> Programmes
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/courses#class-10" className="hover:text-gold-400 transition-colors">
                  Class 10 Board Excellence
                </Link>
              </li>
              <li>
                <Link href="/courses#jee" className="hover:text-gold-400 transition-colors">
                  JEE (Main & Adv) 2-Yr Prep
                </Link>
              </li>
              <li>
                <Link href="/courses#neet" className="hover:text-gold-400 transition-colors">
                  NEET Medical Achievers
                </Link>
              </li>
              <li>
                <Link href="/courses#class-9" className="hover:text-gold-400 transition-colors">
                  Class 9 STEM Foundation
                </Link>
              </li>
              <li>
                <Link href="/courses#middle-school" className="hover:text-gold-400 transition-colors">
                  Class 6–8 Junior Genius
                </Link>
              </li>
              <li>
                <Link href="/courses#crash-course" className="hover:text-gold-400 transition-colors">
                  90-Day Exam Crash Course
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/results" className="hover:text-gold-400 transition-colors">
                  Hall of Fame & Results
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-gold-400 transition-colors">
                  Our Star Faculty
                </Link>
              </li>
              <li>
                <Link href="/life-at-academy" className="hover:text-gold-400 transition-colors">
                  Life at Academy (Memories)
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-gold-400 transition-colors">
                  Parent & Student Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">
                  Admission Enquiry & FAQs
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    siteConfig.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1 font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Admissions Desk</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Physical Centres */}
          <div>
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Teaching Centres
            </h4>
            <div className="space-y-3 text-slate-400">
              {siteConfig.branches.map((b, idx) => (
                <div key={idx} className="p-2.5 rounded bg-navy-900 border border-navy-800">
                  <p className="font-bold text-white text-xs">{b.name}</p>
                  <p className="mt-0.5 text-[11px] text-slate-400 line-clamp-2">{b.address}</p>
                  <p className="mt-1 text-gold-400 font-mono font-semibold">{b.phone}</p>
                </div>
              ))}

              <div className="pt-1 flex items-center gap-1.5 text-slate-400 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <span>{siteConfig.officeHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Designed for premier coaching excellence.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-400">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-400">
              Terms of Admission
            </Link>
            <Link href="/contact" className="hover:text-slate-400">
              Scholarship Rules
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
