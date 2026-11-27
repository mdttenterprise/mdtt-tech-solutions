"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  Layers,
  Palette,
  Server,
  ShoppingBag,
  LucideIcon,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/siteData";

const ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  Code2,
  Layers,
  Palette,
  Server,
  ShoppingBag,
};

export default function Services() {
  const services = (SERVICES_DATA ?? []).filter(
    (item) => !item.title.toLowerCase().includes("mvp")
  );

  return (
    <section
      id="services"
      className="py-16 sm:py-20 relative border-t border-white/10 bg-[#060913]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto space-y-2.5 mb-10"
        >
          <span className="inline-block rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
            Services & Solutions
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Practical IT Services &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Digital Capabilities
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Supporting{" "}
            <span className="text-white font-semibold">mdtt.net</span> and our{" "}
            <span className="text-white font-semibold">
              Training & IT Solutions
            </span>{" "}
            wing with clean web engineering, modern JavaScript stacks, and
            reliable technical execution.
          </p>
        </motion.div>

        {/* Distinct 2-Column Numbered Row Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {services.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Code2;
            const num = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-400/35 p-4 sm:p-5 flex items-start gap-3.5 transition-all"
              >
                <div className="flex flex-col items-center gap-1.5 shrink-0">
                  {/* <span className="text-[10px] font-mono text-slate-500">
                    {num}
                  </span> */}
                  <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}