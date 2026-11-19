"use client";

import React from "react";
import { motion } from "framer-motion";
import { DEVELOPMENT_STEPS } from "@/data/siteData";

export default function Process() {
  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400">
            How We Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Development Approach
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A structured, transparent engineering workflow built for speed,
            reliability, and continuous product evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEVELOPMENT_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-7 relative overflow-hidden group hover:border-blue-500/40 transition-all"
            >
              <span className="text-4xl font-extrabold text-gradient block mb-4">
                {item.step}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}