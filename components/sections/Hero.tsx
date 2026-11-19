"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Layers,
  Sparkles,
  BookOpenCheck,
  Terminal,
  Activity,
  ShoppingBag,
  MapPin,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Radial Glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[480px] w-[480px] rounded-full bg-blue-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-[460px] w-[460px] rounded-full bg-violet-600/20 blur-[130px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Company Tagline Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-300">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Building Digital Solutions. Empowering Future Innovators.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Transforming Ideas Into{" "}
              <span className="text-gradient">Powerful Digital Solutions.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              We build innovative software, scalable digital products, and
              real-world technology solutions while empowering the next generation
              of developers through practical learning and internship opportunities.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-xl shadow-blue-600/25 hover:from-blue-500 hover:to-violet-500 transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Our Products
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#internship"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-white/10 transition-all duration-200"
              >
                <GraduationCap className="w-4 h-4 text-violet-400" />
                Join Our Internship
              </a>
            </div>

            {/* Small Trust Indicators */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                  <Layers className="w-4 h-4" />
                </div>
                <span>Product-Based Technology Company</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>Innovation Driven</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-400">
                  <BookOpenCheck className="w-4 h-4" />
                </div>
                <span>Learning & Development Focused</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Tech & Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl glass-card p-5 sm:p-6 border border-white/15 shadow-2xl">
              {/* Top Window Controls */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">
                  mdtt-ecosystem.workspace
                </span>
              </div>

              {/* Code & Architecture Card */}
              <div className="rounded-xl bg-[#050811] border border-white/10 p-4 font-mono text-xs text-slate-300 space-y-2 mb-4">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <Terminal className="w-3.5 h-3.5" />
                    platform.config.ts
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                    Active Build
                  </span>
                </div>
                <pre className="overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-slate-300">
                  <code>{`export const mdttEcosystem = {
  company: "MDTT Tech Solutions",
  products: ["MDTT", "MDTT New"],
  focus: ["Scalable Apps", "Real-World Learning"]
};`}</code>
                </pre>
              </div>

              {/* Product Mini Cards Preview */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                      <ShoppingBag className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-blue-300 font-semibold">
                      Marketplace
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white">MDTT</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Classifieds & Listings
                  </p>
                </div>

                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-1.5 rounded-lg bg-violet-500/20 text-violet-400">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-violet-300 font-semibold">
                      Directory
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white">MDTT New</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Local Business Discovery
                  </p>
                </div>
              </div>

              {/* Engineering Workflow Bar */}
              <div className="rounded-xl bg-gradient-to-r from-blue-600/15 to-violet-600/15 border border-blue-500/20 p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Product Engineering & Mentorship
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Full-Stack Architecture • UI/UX • Cloud APIs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}