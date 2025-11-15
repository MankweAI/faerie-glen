// src/components/layout/StickyPanicBar.js
"use client";

import { PhoneIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyPanicBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar only after scrolling past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 pb-6 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] animate-fade-in">
      <div className="flex gap-3">
        {/* Panic Button */}
        <a
          href="tel:082-555-1234"
          className="flex-1 flex items-center justify-center gap-2 bg-brand-red text-white font-bold py-3 px-4 rounded-lg shadow-md active:scale-95 transition-transform"
        >
          <PhoneIcon className="h-5 w-5 animate-pulse" />
          Call Now
        </a>

        {/* Diagnostic Button */}
        <Link
          href="/spokes/blocked-drain-diagnostic"
          className="flex-1 flex items-center justify-center gap-2 bg-brand-dark text-white font-bold py-3 px-4 rounded-lg shadow-md active:scale-95 transition-transform"
        >
          Diagnose
        </Link>
      </div>
    </div>
  );
}
