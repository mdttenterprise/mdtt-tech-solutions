"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/siteData";

export default function WhyChooseUs() {
  const items = (WHY_CHOOSE_US ?? []).filter(
    (entry) => !entry.title.toLowerCase().includes("mvp")
  );

  return (
    <section
      id="why-choose-us"
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
            Why MDTT Tech Solution
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Clarity, Speed & Real Value
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Whether using{" "}
            <span className="text-white font-semibold">mdtt.net</span> for buy
            and sell listings or joining{" "}
            <span className="text-white font-semibold">
              Training & IT Solutions
            </span>
            , everything is designed around practical results.
          </p>
        </motion.div>

        {/* Compact 3-Column Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-400/35 p-4 sm:p-5 transition-all"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="h-8 w-8 rounded-lg bg-blue-500/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}