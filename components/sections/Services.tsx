"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  Layers,
  Palette,
  Server,
  Rocket,
  LucideIcon,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/siteData";

const ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  Code2,
  Layers,
  Palette,
  Server,
  Rocket,
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative border-t border-white/5 bg-[#070b17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            End-to-end software engineering and product design tailored to turn
            ambitious concepts into reliable digital platforms.
          </p>
        </div>

        {/* 6 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group glass-card rounded-2xl p-7 transition-all duration-300 hover:border-blue-500/40 hover:shadow-blue-950/40"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}