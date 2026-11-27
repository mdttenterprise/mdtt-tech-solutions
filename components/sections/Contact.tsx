"use client";

import React, { useState } from "react";
import { Building2, MapPin, Mail, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 relative border-t border-white/10 bg-[#060913]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Company Details */}
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-block rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
              Contact Us
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Talk to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                MDTT Tech Solution
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Reach out for{" "}
              <span className="text-white font-semibold">mdtt.net</span>{" "}
              classifieds queries,{" "}
              <span className="text-white font-semibold">
                Training & IT Solutions
              </span>
              , or JS/MERN training and internship details.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="rounded-xl bg-slate-900/55 border border-white/10 p-3.5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Organization</p>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    MDTT Tech Solution
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-slate-900/55 border border-white/10 p-3.5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Direct Desk</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200">
                    Inquiry Form & Support
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-slate-900/55 border border-white/10 p-3.5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Region</p>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/55 border border-white/10 p-5 sm:p-6">
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/15 border border-emerald-400/25 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Message Sent
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thanks for contacting MDTT Tech Solution. We will review your
                    message and respond soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-2 rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/15 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Your name"
                        className="w-full rounded-xl bg-[#050914] border border-white/10 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="w-full rounded-xl bg-[#050914] border border-white/10 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-xl bg-[#050914] border border-white/10 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Topic *
                      </label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="mdtt.net / IT & Training / Internship"
                        className="w-full rounded-xl bg-[#050914] border border-white/10 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your query or requirement..."
                      className="w-full rounded-xl bg-[#050914] border border-white/10 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-md shadow-blue-600/20 hover:opacity-95 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}