"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Sparkles,
  ShoppingBag,
  Cpu,
  CheckCircle2,
  ExternalLink,
  Layers,
  Code2,
} from "lucide-react";

type ProductKey = "mdtt" | "training";

const PRODUCT_DATA: Record<
  ProductKey,
  {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    accentColor: string;
    borderGlow: string;
    highlights: string[];
    metrics: { label: string; value: string }[];
    ctaText: string;
    ctaHref: string;
  }
> = {
  mdtt: {
    badge: "01 • Buy & Sell Platform",
    title: "mdtt.net",
    subtitle: "Smart Classifieds & Second-Hand Marketplace",
    description:
      "Post items in minutes, explore deals across categories, and chat directly with real buyers and sellers—built for simple, fast everyday trading.",
    accentColor: "from-blue-500 to-cyan-400",
    borderGlow: "border-cyan-500/30 shadow-cyan-500/10",
    highlights: [
      "Quick Ad Posting & Instant Category Filters",
      "Direct Buyer-to-Seller Deals Without Middlemen",
      "Clean Mobile & Desktop Browsing Experience",
    ],
    metrics: [
      { label: "Access", value: "Web & Mobile" },
      { label: "Experience", value: "Fast & Direct" },
    ],
    ctaText: "Visit mdtt.net",
    ctaHref: "https://mdtt.net",
  },
  training: {
    badge: "02 • Tech & Skill Wing",
    title: "Training & IT Solutions",
    subtitle: "Practical Software Training, Internships & IT Support",
    description:
      "We help businesses solve day-to-day technical challenges while guiding learners through real projects, structured training, and hands-on internships.",
    accentColor: "from-blue-600 to-indigo-400",
    borderGlow: "border-blue-500/30 shadow-blue-500/10",
    highlights: [
      "Practical IT Solutions & Technical Problem Solving",
      "Project-Based Training With Real Codebases",
      "Guided Internship Tracks for Career Growth",
    ],
    metrics: [
      { label: "Approach", value: "Project-First" },
      { label: "Support", value: "Mentor-Led" },
    ],
    ctaText: "See IT & Training",
    ctaHref: "#products",
  },
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState<ProductKey>("mdtt");
  const current = PRODUCT_DATA[activeTab];

  return (
    <section
      id="home"
      className="relative  flex items-center py-10 md:py-20 mt-20 md:mt-16 overflow-hidden bg-[#060913]"
    >
      {/* Subtle Spotlight & Mesh Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.22),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Clean Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-4 sm:space-y-5"
          >
            {/* Brand Pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-cyan-300">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>MDTT TECH SOLUTION</span>
            </div>

            {/* Compact Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
              Where Everyday Deals Meet{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Real Tech Skills.
              </span>
            </h1>

            {/* Compact Description */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-300 leading-relaxed max-w-lg">
              At <span className="text-white font-semibold">MDTT Tech Solution</span>,
              we run <span className="text-white font-semibold">mdtt.net</span> as
              an easy-to-use buy and sell marketplace alongside{" "}
              <span className="text-white font-semibold">
                Training & IT Solutions
              </span>{" "}
              focused on practical IT services and career-ready training.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#products"
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
              >
                Browse Products
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#internship"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-slate-200 transition-all"
              >
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                Start Training
              </a>
            </div>

            {/* Bottom 2 Core Product Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-800/80">
              <div className="rounded-xl bg-white/[0.02] border border-white/10 p-3 flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">mdtt.net</p>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Buy, Sell & Classified Listings
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-white/[0.02] border border-white/10 p-3 flex items-start gap-2.5">
                <Code2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">
                    Training & IT Solutions
                  </p>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    IT Support, Skill Training & Internships
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Product Switcher Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl sm:rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-white/10 p-3.5 sm:p-5 shadow-2xl">
              {/* Interactive Product Tabs */}
              <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-slate-950/90 border border-white/5 mb-4 sm:mb-5">
                <button
                  type="button"
                  onClick={() => setActiveTab("mdtt")}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all ${
                    activeTab === "mdtt"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>01. mdtt.net</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("training")}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all ${
                    activeTab === "training"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>02. Training & IT</span>
                </button>
              </div>

              {/* Animated Active Product Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-xl sm:rounded-2xl bg-slate-950/80 border p-4 sm:p-5 shadow-xl ${current.borderGlow}`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span
                      className={`inline-block rounded-full bg-gradient-to-r ${current.accentColor} px-2.5 py-0.5 text-[10px] font-bold text-slate-950`}
                    >
                      {current.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {activeTab === "mdtt" ? "01 / 02" : "02 / 02"}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {current.title}
                  </h2>
                  <p className="text-xs font-medium text-cyan-300 mt-0.5">
                    {current.subtitle}
                  </p>

                  <p className="text-xs sm:text-[13px] text-slate-300 mt-2.5 leading-relaxed">
                    {current.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mt-4 pt-3.5 border-t border-white/10">
                    {current.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Metrics & Direct Link */}
                  <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      {current.metrics.map((m, idx) => (
                        <div key={idx}>
                          <p className="text-[10px] uppercase tracking-wider text-slate-500">
                            {m.label}
                          </p>
                          <p className="text-xs font-bold text-white">
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <a
                      href={current.ctaHref}
                      target={activeTab === "mdtt" ? "_blank" : undefined}
                      rel={
                        activeTab === "mdtt" ? "noopener noreferrer" : undefined
                      }
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/15 px-3 py-1.5 text-xs font-semibold text-white transition-colors"
                    >
                      <span>{current.ctaText}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}