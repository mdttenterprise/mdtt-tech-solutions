"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  ShoppingBag,
  MapPin,
  Search,
  Tag,
  Building2,
  Compass,
} from "lucide-react";

interface ProductsProps {
  onSelectProduct: (productName: "MDTT" | "MDTT New") => void;
}

export default function Products({ onSelectProduct }: ProductsProps) {
  return (
    <section id="products" className="py-24 relative border-t border-white/5 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[720px] rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-400">
            Proprietary Platforms
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Digital Products
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Building products that solve real-world problems.
          </p>
        </div>

        {/* Two Distinct Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PRODUCT 1: MDTT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-7 sm:p-9 border border-blue-500/20 flex flex-col justify-between hover:border-blue-500/50 transition-all"
          >
            <div>
              {/* Badge & Brand Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">MDTT</h3>
                    <p className="text-xs font-medium text-blue-400">
                      Online Classified Marketplace
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300">
                  By MDTT Tech Solutions
                </span>
              </div>

              {/* Product UI Mockup Visual */}
              <div className="rounded-2xl bg-[#050914] border border-white/10 p-4 mb-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5 text-xs text-slate-400 flex-1">
                    <Search className="w-3.5 h-3.5 text-blue-400" />
                    <span>Search products, electronics, services...</span>
                  </div>
                  <span className="text-[11px] font-semibold bg-blue-600 text-white px-2.5 py-1.5 rounded-lg">
                    + Post Ad
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {["Electronics", "Vehicles", "Services"].map((cat) => (
                    <div
                      key={cat}
                      className="rounded-xl bg-white/[0.03] border border-white/5 p-2.5 text-center"
                    >
                      <Tag className="w-3.5 h-3.5 text-blue-400 mx-auto mb-1" />
                      <p className="text-[11px] font-medium text-slate-200">{cat}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                MDTT is a digital marketplace platform that connects buyers and
                sellers, allowing users to discover products, post advertisements,
                and explore services across multiple categories.
              </p>

              {/* Features Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Buy & Sell Listings",
                  "Multiple Categories",
                  "Product Discovery",
                  "User Accounts",
                  "Listing Management",
                  "Location-Based Marketplace Experience",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={() => onSelectProduct("MDTT")}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:from-blue-500 hover:to-cyan-500 transition-all"
            >
              Explore MDTT
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* PRODUCT 2: MDTT NEW */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-3xl p-7 sm:p-9 border border-violet-500/20 flex flex-col justify-between hover:border-violet-500/50 transition-all"
          >
            <div>
              {/* Badge & Brand Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/25">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">MDTT New</h3>
                    <p className="text-xs font-medium text-violet-400">
                      Local Business Discovery & Directory Platform
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300">
                  By MDTT Tech Solutions
                </span>
              </div>

              {/* Product UI Mockup Visual */}
              <div className="rounded-2xl bg-[#050914] border border-white/10 p-4 mb-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5 text-xs text-slate-400 flex-1">
                    <MapPin className="w-3.5 h-3.5 text-violet-400" />
                    <span>Discover verified local businesses near you...</span>
                  </div>
                  <span className="text-[11px] font-semibold bg-violet-600 text-white px-2.5 py-1.5 rounded-lg">
                    List Business
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {["Retail & Shops", "Clinics & Care", "Home Services"].map((dir) => (
                    <div
                      key={dir}
                      className="rounded-xl bg-white/[0.03] border border-white/5 p-2.5 text-center"
                    >
                      <Building2 className="w-3.5 h-3.5 text-violet-400 mx-auto mb-1" />
                      <p className="text-[11px] font-medium text-slate-200">{dir}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                MDTT New is a local business discovery platform designed to help
                users discover businesses, explore services, and connect with
                businesses in their area.
              </p>

              {/* Features Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Local Business Discovery",
                  "Business Listings",
                  "Business Profiles",
                  "Category-Based Search",
                  "Location-Based Discovery",
                  "Business Visibility",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={() => onSelectProduct("MDTT New")}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 hover:from-violet-500 hover:to-indigo-500 transition-all"
            >
              Explore MDTT New
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}