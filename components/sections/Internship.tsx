"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Layers,
  Server,
  Sparkles,
} from "lucide-react";
import { INTERNSHIP_DOMAINS, PROGRAM_HIGHLIGHTS } from "@/data/siteData";

interface InternshipProps {
  onApplyClick: (selectedDomain?: string) => void;
}

type CategoryFilter = "all" | "frontend" | "backend" | "mern";

const JS_TRACK_ITEMS: {
  title: string;
  stack: string;
  category: Exclude<CategoryFilter, "all">;
}[] = [
  {
    title: "MERN Stack Internship",
    stack: "MongoDB • Express • React • Node.js",
    category: "mern",
  },
  {
    title: "Frontend Engineering",
    stack: "JavaScript • TypeScript • React • Next.js • Tailwind",
    category: "frontend",
  },
  {
    title: "Backend & API Development",
    stack: "Node.js • Express • REST APIs • MongoDB",
    category: "backend",
  },
  {
    title: "Full-Stack JS Apps",
    stack: "Next.js App Router • State Management • APIs",
    category: "mern",
  },
];

export default function Internship({ onApplyClick }: InternshipProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("all");

  const filteredTracks =
    selectedCategory === "all"
      ? JS_TRACK_ITEMS
      : JS_TRACK_ITEMS.filter((item) => item.category === selectedCategory);

  const extraDomains = (INTERNSHIP_DOMAINS ?? []).filter(
    (domain) =>
      !JS_TRACK_ITEMS.some(
        (t) => t.title.toLowerCase() === domain.toLowerCase()
      )
  );

  return (
    <section
      id="internship"
      className="py-16 sm:py-20 relative border-t border-white/10 bg-[#060913]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto space-y-2.5"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Training & IT Solutions</span>
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            JavaScript, Frontend, Backend &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              MERN Internship Tracks
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Build practical skills across modern JavaScript—covering React,
            Next.js, Node.js, Express, MongoDB, and full MERN workflows with
            hands-on project guidance.
          </p>
        </motion.div>

        {/* Filter Pills + Quick Apply */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {(
              [
                { id: "all", label: "All JS Tracks" },
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend" },
                { id: "mern", label: "MERN & Full-Stack" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  selectedCategory === tab.id
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30"
                    : "bg-slate-900/70 text-slate-400 border border-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onApplyClick()}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-3.5 py-1.5 text-xs font-semibold text-white hover:opacity-95 transition-all"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2x2 Track Cards Grid */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {filteredTracks.map((track) => (
            <div
              key={track.title}
              className="rounded-2xl bg-slate-900/55 border border-white/10 hover:border-cyan-400/35 p-4 flex items-center justify-between gap-3 transition-all"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {track.category === "backend" ? (
                    <Server className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  ) : (
                    <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  )}
                  <h3 className="text-xs sm:text-sm font-bold text-white">
                    {track.title}
                  </h3>
                </div>
                <p className="text-[11px] text-slate-400">{track.stack}</p>
              </div>

              <button
                type="button"
                onClick={() => onApplyClick(track.title)}
                className="shrink-0 rounded-lg border border-white/10 bg-slate-950/80 hover:border-cyan-400/40 hover:text-cyan-300 px-2.5 py-1.5 text-[11px] font-semibold text-slate-200 transition-colors"
              >
                Select
              </button>
            </div>
          ))}
        </div>

        {/* Optional Additional Domains from siteData */}
        {extraDomains.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-[11px] text-slate-500">More tracks:</span>
            {extraDomains.map((domain) => (
              <button
                key={domain}
                type="button"
                onClick={() => onApplyClick(domain)}
                className="rounded-lg border border-white/10 bg-slate-900/40 px-2.5 py-1 text-[11px] text-slate-300 hover:border-cyan-400/40 hover:text-white transition-colors"
              >
                {domain}
              </button>
            ))}
          </div>
        )}

        {/* Compact Highlights Bar */}
        {(PROGRAM_HIGHLIGHTS ?? []).length > 0 && (
          <div className="mt-6 rounded-2xl bg-slate-900/40 border border-white/10 p-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Program Highlights</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {(PROGRAM_HIGHLIGHTS ?? []).map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-2 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}