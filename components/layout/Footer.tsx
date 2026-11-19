"use client";

import React from "react";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS, SERVICES_DATA } from "@/data/siteData";

interface FooterProps {
  onOpenLegal: (type: "privacy" | "terms") => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-[#040710] border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Building Digital Solutions. Empowering Future Innovators. An
              emerging Indian technology company crafting scalable software
              products and practical developer learning experiences.
            </p>
            <p className="text-xs text-slate-500">Location: India</p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Programs */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Products & Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  MDTT Marketplace
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  MDTT New Directory
                </a>
              </li>
              <li>
                <a href="#internship" className="hover:text-white transition-colors">
                  Internship Programs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Information
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 MDTT Tech Solutions. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
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