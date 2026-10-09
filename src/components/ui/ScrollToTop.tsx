"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when page is scrolled down past 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-navy-950/90 hover:bg-navy-900 text-gold-400 border border-gold-500/50 hover:border-gold-400 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 animate-fadeIn focus:outline-hidden focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-navy-950"
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 text-gold-400" />
      {/* Tooltip for desktop */}
      <span className="sr-only">Scroll to top</span>
    </button>
  );
}
