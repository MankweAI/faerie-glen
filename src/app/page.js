// src/app/page.js
 "use client";  
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServiceGrid from "@/components/home/ServiceGrid"; // <-- New
import DiagnosticSection from "@/components/home/DiagnosticSection"; // <-- New
import StickyPanicBar from "@/components/layout/StickyPanicBar";
import FaerieGlenMap from "@/components/home/FaerieGlenMap";
import ReviewsSection from "@/components/home/ReviewsSection";
import Header from "@/components/layout/Header";
// import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-brand-light">
      <Header />

      {/* Phase 1 Components */}
      <HeroSection />
      <TrustBar />

      {/* Phase 2 Components */}
      <ServiceGrid />
      <DiagnosticSection />

      <ReviewsSection />

      <FaerieGlenMap />

      {/* Standard Footer */}
      <Footer />

      <StickyPanicBar />
    </main>
  );
}
