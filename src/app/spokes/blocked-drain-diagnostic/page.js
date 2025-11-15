// src/app/spokes/blocked-drain-diagnostic/page.js
import Link from "next/link";
import {
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import DiagnosticTool from "@/components/tools/DiagnosticTool";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyPanicBar from "@/components/layout/StickyPanicBar";

export const metadata = {
  title: "Blocked Drain Diagnostic Tool | ABC Plumbing",
  description:
    "How much does it cost to unblock a drain in Randburg? Use our 30-second tool to diagnose your blockage and get a free expert call-back.",
};

export default function BlockedDrainDiagnosticPage() {
  return (
    <div className="bg-brand-light animate-fade-in">
      <Header />

      {/* --- Section 1: Hero --- */}
      <section className="bg-brand-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-balance mb-6">
            How much does it cost to unblock a drain?
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto text-balance mb-10">
            The cost depends on the problem. Use our 30-second tool to
            <strong> diagnose the blockage</strong> and get a{" "}
            <strong>free 15-minute expert call-back</strong>.
          </p>
          <a
            href="#diagnostic-tool"
            className="bg-brand-yellow text-brand-dark font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-lg md:text-xl hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow transition-all duration-300 transform hover:scale-105"
          >
            Start Your 30-Second Diagnosis ↓
          </a>
        </div>
      </section>

      {/* --- Section 2: The Tool --- */}
      <section id="diagnostic-tool" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <DiagnosticTool />
        </div>
      </section>

      {/* --- Section 3: Authority / Why We Diagnose --- */}
      <section className="py-16 md:py-20 bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Why We Diagnose First
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We don't guess your price. We identify your problem, so we send
              the right plumber with the right tools, the first time.
            </p>
          </div>

          <div className="bg-brand-light p-8 rounded-2xl border border-slate-200">
            <blockquote className="text-center text-xl md:text-2xl text-brand-dark font-medium leading-relaxed">
              "A &quot;kitchen sink&quot; blockage (likely fats and grease) is a
              different job from a &"main line" blockage (often tree roots). Our
              tool ensures we are prepared for your specific problem.{" "}
              <span className="text-brand-blue font-bold">
                This saves you time and money.
              </span>
              "
            </blockquote>
            <p className="text-center mt-6 font-bold text-slate-700">
              - Mathew, Master Plumber
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 4: Guarantees --- */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl font-extrabold text-brand-dark text-balance mb-4">
            Our Guarantees
          </h2>
          <p className="text-lg text-gray-600 mt-4 text-balance mb-12">
            We're not just fast, we're professionals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
            {/* Guarantee 1 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <span className="bg-blue-100 p-4 rounded-full">
                  <ShieldCheckIcon className="h-10 w-10 text-brand-blue" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mt-4">
                Licensed & Insured
              </h3>
              <p className="text-gray-600 mt-2">
                All our plumbers are fully licensed, insured, and PIRB
                registered for your peace of mind.
              </p>
            </div>
            {/* Guarantee 2 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <span className="bg-red-100 p-4 rounded-full">
                  <ClockIcon className="h-10 w-10 text-brand-red" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mt-4">
                24/7 Emergency Service
              </h3>
              <p className="text-gray-600 mt-2">
                A blocked drain is an emergency. We're on call 24/7, 365 days a
                year, ready to help.
              </p>
            </div>
            {/* Guarantee 3 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <span className="bg-yellow-100 p-4 rounded-full">
                  <WrenchScrewdriverIcon className="h-10 w-10 text-yellow-600" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mt-4">
                Fixed-Price Guarantee
              </h3>
              <p className="text-gray-600 mt-2">
                Once our plumber confirms the diagnosis on-site, the price we
                give you is the price you pay. No surprises. IP/A:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer & Panic Bar --- */}
      <Footer />
      <StickyPanicBar />
    </div>
  );
}
