"use client";

import React from "react";
import { Briefcase, Mail } from "lucide-react";

interface CareersProps {
  onExploreClick: () => void;
}

export default function Careers({ onExploreClick }: CareersProps) {
  return (
    <section id="careers" className="py-24 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-950/70 via-[#0d142c] to-violet-950/70 border border-white/15 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-blue-300">
            <Briefcase className="w-4 h-4" />
            <span>Careers at MDTT Tech Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Grow Your Career With Us
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We are always interested in connecting with passionate developers,
            designers, and technology enthusiasts who want to build meaningful
            digital products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-7 py-3.5 text-sm font-semibold hover:bg-slate-200 transition-colors"
            >
              Explore Opportunities
            </button>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}