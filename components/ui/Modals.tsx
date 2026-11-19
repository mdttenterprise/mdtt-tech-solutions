"use client";

import React, { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { INTERNSHIP_DOMAINS } from "@/data/siteData";

interface ModalsProps {
  internshipModal: { open: boolean; domain?: string };
  onCloseInternship: () => void;
  productModal: "MDTT" | "MDTT New" | null;
  onCloseProduct: () => void;
  legalModal: "privacy" | "terms" | null;
  onCloseLegal: () => void;
}

export default function Modals({
  internshipModal,
  onCloseInternship,
  productModal,
  onCloseProduct,
  legalModal,
  onCloseLegal,
}: ModalsProps) {
  const [applied, setApplied] = useState(false);

  return (
    <>
      {/* 1. Internship Application Modal */}
      {internshipModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="glass-card rounded-3xl max-w-lg w-full p-6 sm:p-8 relative border border-white/15">
            <button
              type="button"
              onClick={() => {
                setApplied(false);
                onCloseInternship();
              }}
              aria-label="Close modal"
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {applied ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">
                  Application Submitted
                </h3>
                <p className="text-sm text-slate-300">
                  Thank you for applying to the MDTT Tech Solutions Internship
                  Program. Our team will review your details and reach out.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Apply for Internship
                </h3>
                <p className="text-xs text-slate-400 mb-5">
                  Gain real-world software engineering experience with MDTT Tech Solutions.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setApplied(true);
                  }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    className="w-full rounded-xl bg-[#050914] border border-white/10 px-4 py-3 text-sm text-white"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="w-full rounded-xl bg-[#050914] border border-white/10 px-4 py-3 text-sm text-white"
                  />
                  <select
                    defaultValue={internshipModal.domain || INTERNSHIP_DOMAINS[0]}
                    className="w-full rounded-xl bg-[#050914] border border-white/10 px-4 py-3 text-sm text-white"
                  >
                    {INTERNSHIP_DOMAINS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <input
                    type="url"
                    placeholder="GitHub / Portfolio Link (Optional)"
                    className="w-full rounded-xl bg-[#050914] border border-white/10 px-4 py-3 text-sm text-white"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 text-sm font-semibold text-white"
                  >
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* 2. Product Preview Modal */}
      {productModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="glass-card rounded-3xl max-w-lg w-full p-6 sm:p-8 relative border border-white/15 space-y-4">
            <button
              type="button"
              onClick={onCloseProduct}
              aria-label="Close product modal"
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              MDTT Tech Solutions Product Ecosystem
            </span>
            <h3 className="text-2xl font-bold text-white">{productModal}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {productModal === "MDTT"
                ? "MDTT connects buyers and sellers across categories with seamless listing management, product discovery, and location-aware classified experiences."
                : "MDTT New empowers local communities to discover verified businesses, explore services, and connect directly with neighborhood enterprises."}
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={onCloseProduct}
                className="inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 text-sm font-semibold text-white"
              >
                Inquire About {productModal}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 3. Privacy & Terms Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="glass-card rounded-3xl max-w-xl w-full p-6 sm:p-8 relative border border-white/15 space-y-4">
            <button
              type="button"
              onClick={onCloseLegal}
              aria-label="Close legal modal"
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-white">
              {legalModal === "privacy" ? "Privacy Policy" : "Terms & Conditions"}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {legalModal === "privacy"
                ? "MDTT Tech Solutions respects your privacy. Information submitted through our contact or internship forms is used solely to respond to inquiries and evaluate program applications."
                : "All content, product branding (MDTT and MDTT New), and software assets showcased on this website are the intellectual property of MDTT Tech Solutions."}
            </p>
          </div>
        </div>
      )}
    </>
  );
}