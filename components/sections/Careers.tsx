"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Mail, ArrowUpRight } from "lucide-react";

interface CareersProps {
  onExploreClick: () => void;
}

export default function Careers({ onExploreClick }: CareersProps) {
  return (
    <section
      id="careers"
      className="py-16 sm:py-20 relative border-t border-white/10 bg-[#060913]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-950/60 via-slate-900/80 to-cyan-950/50 border border-cyan-400/20 p-6 sm:p-8 text-center space-y-3.5 shadow-xl"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Careers • MDTT Tech Solution</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Build With{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              mdtt.net & Our Tech Team
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Looking for developers and builders who enjoy clean JavaScript,
            React, Next.js, Node.js, and practical product work across{" "}
            <span className="text-white font-semibold">mdtt.net</span> and{" "}
            <span className="text-white font-semibold">
              Training & IT Solutions
            </span>
            .
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
            <button
              type="button"
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-blue-600/20 hover:opacity-95 transition-all"
            >
              <span>Explore Roles</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Contact Team</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}