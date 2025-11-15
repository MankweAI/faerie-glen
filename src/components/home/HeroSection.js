// src/components/home/HeroSection.js
"use client";

import Link from "next/link";
import { PhoneIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* --- Video Background --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/plumbing-hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text is readable */}
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* --- Content Container --- */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        {/* Trust Badge */}
        <div className="inline-block bg-brand-blue/90 backdrop-blur-sm border border-blue-400/30 text-white text-xs md:text-sm font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-wider animate-fade-in">
          24/7 Emergency Response • Randburg & Sandton
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight text-balance drop-shadow-md">
          Your Drains Cleared.
          <br />
          <span className="text-brand-yellow">Fast. Guaranteed.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-slate-100 mb-10 max-w-2xl text-balance drop-shadow-sm font-medium">
          The #1 rated specialists. We don't guess—we diagnose, quote, and fix
          it right the first time.
        </p>

        {/* Dual Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center">
          {/* 1. Emergency Call (Primary - Red) */}
          <a
            href="tel:082-555-1234"
            className="group flex items-center justify-center gap-3 bg-brand-red text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-red-900/20 hover:bg-red-600 hover:scale-105 transition-all duration-300"
          >
            <PhoneIcon className="h-6 w-6 animate-pulse-slow" />
            <span>Emergency Call</span>
          </a>

          {/* 2. Diagnostic Tool (Secondary - Ghost) */}
          <Link
            href="/spokes/blocked-drain-diagnostic"
            className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-brand-blue transition-all duration-300"
          >
            <WrenchScrewdriverIcon className="h-6 w-6" />
            <span>Diagnose Online</span>
          </Link>
        </div>

        {/* No-Risk Guarantee */}
        <p className="mt-6 text-sm text-slate-300 font-medium">
          <span className="text-brand-yellow">✓</span> No Call-Out Fee if we do
          the job
        </p>
      </div>
    </section>
  );
}
