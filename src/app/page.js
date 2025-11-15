// src/app/page.js
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServiceGrid from "@/components/home/ServiceGrid"; // <-- New
import DiagnosticSection from "@/components/home/DiagnosticSection"; // <-- New
import StickyPanicBar from "@/components/layout/StickyPanicBar";
// import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-brand-light">
      {/* <Header /> */}

      {/* Phase 1 Components */}
      <HeroSection />
      <TrustBar />

      {/* Phase 2 Components */}
      <ServiceGrid />
      <DiagnosticSection />

      {/* Standard Footer */}
      <Footer />

      <StickyPanicBar />
    </main>
  );
}
