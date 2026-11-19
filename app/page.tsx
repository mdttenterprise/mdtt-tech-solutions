"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Internship from "@/components/sections/Internship";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Careers from "@/components/sections/Careers";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Modals from "@/components/ui/Modals";

export default function HomePage() {
  const [internshipModal, setInternshipModal] = useState<{
    open: boolean;
    domain?: string;
  }>({ open: false });

  const [productModal, setProductModal] = useState<"MDTT" | "MDTT New" | null>(
    null
  );

  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(
    null
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#060913] text-slate-100">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Products onSelectProduct={(prod) => setProductModal(prod)} />
        <Internship
          onApplyClick={(domain) => setInternshipModal({ open: true, domain })}
        />
        <Process />
        <WhyChooseUs />
        <Careers
          onExploreClick={() => setInternshipModal({ open: true })}
        />
        <Contact />
      </main>

      <Footer onOpenLegal={(type) => setLegalModal(type)} />

      <Modals
        internshipModal={internshipModal}
        onCloseInternship={() => setInternshipModal({ open: false })}
        productModal={productModal}
        onCloseProduct={() => setProductModal(null)}
        legalModal={legalModal}
        onCloseLegal={() => setLegalModal(null)}
      />
    </div>
  );
}