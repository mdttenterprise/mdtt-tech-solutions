"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  ShoppingBag,
  Cpu,
  Search,
  Tag,
  Code2,
  Layers,
} from "lucide-react";

interface ProductsProps {
  onSelectProduct: (productName: "mdtt.net" | "Training & IT Solutions") => void;
}

export default function Products({ onSelectProduct }: ProductsProps) {
  return (
    <section
      id="products"
      className="py-16 sm:py-20 relative border-t border-white/10 bg-[#060913] overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[580px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-10 space-y-2.5"
        >
          <span className="inline-block rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
            Main Products
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Two Core Products
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            MDTT Tech Solution runs on two focused pillars:{" "}
            <span className="text-white font-semibold">mdtt.net</span> for buy
            and sell classifieds, and{" "}
            <span className="text-white font-semibold">
              Training & IT Solutions
            </span>{" "}
            for technical services and practical JS/MERN training.
          </p>
        </motion.div>

        {/* Two Core Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* PRODUCT 01: mdtt.net */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-slate-900/55 border border-white/10 hover:border-cyan-400/40 p-5 sm:p-6 flex flex-col justify-between transition-all"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-slate-950 shrink-0">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      mdtt.net
                    </h3>
                    <p className="text-[11px] font-medium text-cyan-300">
                      OLX-Style Buy & Sell Classifieds
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                  Product 01
                </span>
              </div>

              {/* Compact Marketplace Preview Strip */}
              <div className="rounded-xl bg-[#050914] border border-white/10 p-3 mb-4">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-1.5 bg-white/[0.04] rounded-lg px-2.5 py-1 text-[11px] text-slate-400 flex-1">
                    <Search className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span className="truncate">
                      Buy & sell mobiles, bikes, electronics...
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold bg-blue-600 text-white px-2.5 py-1 rounded-lg shrink-0">
                    Post Ad
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["Electronics", "Vehicles", "Home & More"].map((cat) => (
                    <div
                      key={cat}
                      className="rounded-lg bg-white/[0.03] border border-white/5 py-1.5 px-2 text-center"
                    >
                      <Tag className="w-3 h-3 text-cyan-400 mx-auto mb-0.5" />
                      <p className="text-[10px] font-medium text-slate-200 truncate">
                        {cat}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                A simple, fast buy-and-sell classifieds marketplace where users
                can list products, filter categories, and connect directly with
                buyers and sellers.
              </p>

              {/* Features Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {[
                  "Quick Buy & Sell Listings",
                  "Category-Wise Browsing",
                  "Direct Buyer-Seller Chat",
                  "Manage Active & Sold Ads",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="flex items-center gap-2.5 pt-3 border-t border-white/10">
              <a
                href="https://mdtt.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-xs font-semibold text-white hover:opacity-95 transition-all"
              >
                <span>Visit mdtt.net</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => onSelectProduct("mdtt.net")}
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] px-3.5 py-2.5 text-xs font-semibold text-slate-200 transition-colors"
              >
                Details
              </button>
            </div>
          </motion.div>

          {/* PRODUCT 02: Training & IT Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="rounded-2xl bg-slate-900/55 border border-white/10 hover:border-blue-400/40 p-5 sm:p-6 flex flex-col justify-between transition-all"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center text-white shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Training & IT Solutions
                    </h3>
                    <p className="text-[11px] font-medium text-blue-300">
                      IT Services & Practical JS / MERN Training
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300">
                  Product 02
                </span>
              </div>

              {/* Compact Stack & IT Preview Strip */}
              <div className="rounded-xl bg-[#050914] border border-white/10 p-3 mb-4">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-1.5 bg-white/[0.04] rounded-lg px-2.5 py-1 text-[11px] text-slate-300 flex-1">
                    <Code2 className="w-3 h-3 text-blue-400 shrink-0" />
                    <span className="truncate">
                      React • Next.js • Node • Express • MongoDB
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold bg-blue-600/20 border border-blue-400/30 text-blue-300 px-2.5 py-1 rounded-lg shrink-0">
                    JS & IT
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["Frontend", "Backend APIs", "MERN Stack"].map((track) => (
                    <div
                      key={track}
                      className="rounded-lg bg-white/[0.03] border border-white/5 py-1.5 px-2 text-center"
                    >
                      <Layers className="w-3 h-3 text-blue-400 mx-auto mb-0.5" />
                      <p className="text-[10px] font-medium text-slate-200 truncate">
                        {track}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Practical IT solutions for technical and web needs paired with
                hands-on JavaScript training across frontend, backend, and MERN
                stack development.
              </p>

              {/* Features Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {[
                  "Practical IT & Web Solutions",
                  "MERN, React & Next.js Tracks",
                  "Node.js, Express & MongoDB",
                  "Hands-On Project Guidance",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="flex items-center gap-2.5 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => onSelectProduct("Training & IT Solutions")}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-2.5 text-xs font-semibold text-white hover:opacity-95 transition-all"
              >
                <span>Explore Training & IT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="#internship"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] px-3.5 py-2.5 text-xs font-semibold text-slate-200 transition-colors"
              >
                Tracks
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}