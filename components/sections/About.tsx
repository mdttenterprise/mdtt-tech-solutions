"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Box, Code, Cpu } from "lucide-react";

const PILLARS = [
  {
    title: "Innovation First",
    description: "Exploring modern engineering patterns to solve everyday digital challenges.",
    icon: Lightbulb,
  },
  {
    title: "Product Focused",
    description: "Building, scaling, and managing proprietary digital platforms from zero to launch.",
    icon: Box,
  },
  {
    title: "Practical Learning",
    description: "Bridging academic knowledge and real-world software engineering workflows.",
    icon: Code,
  },
  {
    title: "Technology Driven",
    description: "Clean code, responsive design, and reliable full-stack architecture at the core.",
    icon: Cpu,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400">
              About MDTT Tech Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Who We Are
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              MDTT Tech Solutions is an emerging technology company focused on
              building innovative digital products and delivering modern software
              solutions. We believe in transforming ideas into impactful products
              through technology, creativity, and continuous innovation.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Alongside product development, we provide aspiring developers with
              opportunities to learn, collaborate, and gain practical experience
              by working on real-world projects.
            </p>
          </motion.div>

          {/* Right 4 Highlight Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover:border-blue-500/40 transition-colors"
                >
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}