// src/components/Header.js
"use client"; // ⚠️ Required for useState and hooks

import { PhoneIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-md sticky top-0 z-50 transition-all">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and brand */}
        <a
          href="/"
          className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-2 hover:opacity-90 transition"
        >
          <span className="font-extrabold text-2xl text-brand-blue tracking-wide">
            ABC Plumbing
          </span>
          <span className="text-xs md:text-sm font-semibold text-slate-500">
            Faerie Glen & Pretoria
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 ml-10">
          {["Services", "Reviews", "Service Area"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="relative text-brand-dark font-semibold hover:text-brand-blue transition"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Main CTA */}
        <a
          href="tel:+27123456789"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition transform text-sm md:text-base"
        >
          <PhoneIcon className="h-5 w-5" />
          Call Now
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden ml-4 p-2 rounded-lg hover:bg-slate-100 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Bars3Icon className="h-6 w-6 text-brand-dark" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-md">
          {["Services", "Reviews", "Service Area"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="text-brand-dark font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition"
            >
              {link}
            </a>
          ))}
          {/* Mobile CTA */}
          <a
            href="tel:+27123456789"
            className="inline-flex items-center gap-2 justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition transform mt-2"
          >
            <PhoneIcon className="h-5 w-5" />
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}
