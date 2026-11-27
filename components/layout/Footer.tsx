"use client";

import React from "react";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS, SERVICES_DATA } from "@/data/siteData";

interface FooterProps {
  onOpenLegal: (type: "privacy" | "terms") => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const navLinks = NAV_LINKS ?? [];
  const services = (SERVICES_DATA ?? []).filter(
    (item) => !item.title.toLowerCase().includes("mvp")
  );

  return (
    <footer className="bg-[#040710] border-t border-white/10 pt-12 lg:pt-14 pb-8 lg:pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/10">
          <div className="sm:col-span-2 lg:col-span-4 space-y-3">
            <Logo />
            <p className="text-xs lg:text-sm text-slate-400 max-w-sm leading-relaxed">
              Main hub for{" "}
              <span className="text-slate-200 font-semibold">mdtt.net</span>{" "}
              buy-and-sell classifieds and{" "}
              <span className="text-slate-200 font-semibold">
                Training & IT Solutions
              </span>
              , covering practical IT work and hands-on JavaScript, React,
              Next.js, Node.js, Express, and MongoDB training.
            </p>
            <p className="text-[11px] lg:text-xs text-slate-500">
              India • MDTT Tech Solution
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs lg:text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-xs lg:text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Products & Training
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm text-slate-400">
              <li>
                <a
                  href="https://mdtt.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  mdtt.net (Buy & Sell)
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Training & IT Solutions
                </a>
              </li>
              <li>
                <a
                  href="#internship"
                  className="hover:text-cyan-300 transition-colors"
                >
                  JS, Frontend, Backend & MERN
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Contact & Enquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 MDTT Tech Solution. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => onOpenLegal("privacy")}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal("terms")}
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}