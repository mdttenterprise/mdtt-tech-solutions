"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  CheckCircle2,
  Code2,
  Users,
  ArrowRight,
} from "lucide-react";
import { INTERNSHIP_DOMAINS, PROGRAM_HIGHLIGHTS } from "@/data/siteData";

interface InternshipProps {
  onApplyClick: (selectedDomain?: string) => void;
}

export default function Internship({ onApplyClick }: InternshipProps) {
  return (
    <section
      id="internship"
      className="py-24 relative border-t border-white/5 bg-[#070b17]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Collaborative Developer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl glass-card border border-blue-500/20 p-7 sm:p-10 lg:p-12 mb-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/15 border border-violet-500/30 px-3.5 py-1 text-xs font-semibold text-violet-300">
                <GraduationCap className="w-4 h-4" />
                <span>Internship & Training Programs</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Launch Your Tech Career With MDTT
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                At MDTT Tech Solutions, we believe in learning by building. Our
                internship programs provide students and aspiring developers
                with opportunities to work on real-world projects, improve
                technical skills, and understand professional software
                development workflows.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onApplyClick()}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-600/25 hover:from-blue-500 hover:to-violet-500 transition-all"
                >
                  Apply for Internship
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Collaborative Developers Illustration Graphic */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#050914] border border-white/10 p-6 relative">
                <svg
                  viewBox="0 0 360 220"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Illustration of young developers collaborating on code"
                >
                  <rect width="360" height="220" rx="16" fill="#080E21" />
                  {/* Code Screen */}
                  <rect x="40" y="26" width="280" height="125" rx="10" fill="#0F172A" stroke="#334155" />
                  <circle cx="56" cy="40" r="4" fill="#F43F5E" />
                  <circle cx="68" cy="40" r="4" fill="#FBBF24" />
                  <circle cx="80" cy="40" r="4" fill="#34D399" />
                  <rect x="56" y="58" width="110" height="8" rx="4" fill="#3B82F6" />
                  <rect x="56" y="74" width="175" height="8" rx="4" fill="#8B5CF6" />
                  <rect x="72" y="90" width="140" height="8" rx="4" fill="#38BDF8" />
                  <rect x="72" y="106" width="195" height="8" rx="4" fill="#475569" />
                  <rect x="56" y="122" width="90" height="8" rx="4" fill="#34D399" />

                  {/* Developer Avatars Collaborating */}
                  <circle cx="110" cy="176" r="20" fill="#2563EB" />
                  <circle cx="110" cy="171" r="7" fill="#DBEAFE" />
                  <path d="M97 190C100 183 120 183 123 190" stroke="#DBEAFE" strokeWidth="3" strokeLinecap="round" />

                  <circle cx="180" cy="176" r="20" fill="#7C3AED" />
                  <circle cx="180" cy="171" r="7" fill="#EDE9FE" />
                  <path d="M167 190C170 183 190 183 193 190" stroke="#EDE9FE" strokeWidth="3" strokeLinecap="round" />

                  <circle cx="250" cy="176" r="20" fill="#0EA5E9" />
                  <circle cx="250" cy="171" r="7" fill="#E0F2FE" />
                  <path d="M237 190C240 183 260 183 263 190" stroke="#E0F2FE" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-blue-400 font-medium">
                    <Users className="w-4 h-4" /> Team Sprints & Code Reviews
                  </span>
                  <span>Project-Based Learning</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Grid: Domains & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Internship Domains */}
          <div className="glass-card rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Internship Domains</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {INTERNSHIP_DOMAINS.map((domain) => (
                <button
                  key={domain}
                  type="button"
                  onClick={() => onApplyClick(domain)}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white transition-all text-left"
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          {/* Program Highlights */}
          <div className="glass-card rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Program Highlights</h3>
            </div>
            <ul className="space-y-3">
              {PROGRAM_HIGHLIGHTS.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm sm:text-base text-slate-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}