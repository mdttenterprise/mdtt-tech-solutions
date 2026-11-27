"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Cpu, ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 border-t border-white/10 bg-[#060913]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-cyan-400">
            About MDTT Tech Solution
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Built Around{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              mdtt.net & Training & IT Solutions
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            MDTT Tech Solution is the main hub behind two focused offerings:
            an easy buy-and-sell classifieds platform at{" "}
            <span className="text-white font-semibold">mdtt.net</span>, and{" "}
            <span className="text-white font-semibold">
              Training & IT Solutions
            </span>{" "}
            for practical IT services and hands-on skill learning.
          </p>
        </motion.div>

        {/* Distinct Two-Column Split Bar (Different from Hero & Previous About) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-white/10 bg-slate-900/40 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-5 sm:p-6 flex flex-col justify-between gap-4 hover:bg-white/[0.02] transition-colors"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-400">
                <ShoppingBag className="w-4 h-4 shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  01 • Marketplace
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                mdtt.net
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Straightforward buy-and-sell classifieds where users list items
                quickly, browse categories, and connect directly.
              </p>
            </div>

            <a
              href="https://mdtt.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-300 hover:text-cyan-200 w-fit"
            >
              <span>Open mdtt.net</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="p-5 sm:p-6 flex flex-col justify-between gap-4 hover:bg-white/[0.02] transition-colors"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-400">
                <Cpu className="w-4 h-4 shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  02 • Tech & Learning
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Training & IT Solutions
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Practical IT support and real-world training designed to solve
                technical needs and build job-ready skills.
              </p>
            </div>

            <a
              href="#products"
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-300 hover:text-blue-200 w-fit"
            >
              <span>Explore IT & Training</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}