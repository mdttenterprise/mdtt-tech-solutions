"use client";

import React from "react";
import { motion } from "framer-motion";
import { DEVELOPMENT_STEPS } from "@/data/siteData";

export default function Process() {
  const steps = DEVELOPMENT_STEPS ?? [];

  return (
    <section
      id="process"
      className="py-16 sm:py-20 relative border-t border-white/10 bg-[#060913]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-10 space-y-2.5"
        >
          <span className="inline-block rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
            How We Work
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Execution Process
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            A practical workflow powering{" "}
            <span className="text-white font-semibold">mdtt.net</span> and{" "}
            <span className="text-white font-semibold">
              Training & IT Solutions
            </span>{" "}
            across web systems, IT support, and hands-on JS/MERN learning.
          </p>
        </motion.div>

        {/* Distinct Connected Step Track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              className="rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-400/35 p-4 sm:p-5 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-mono">
                    {item.step}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-white mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}