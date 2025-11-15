// src/components/home/DiagnosticSection.js
import Link from "next/link";
import { ArrowRightIcon, CpuChipIcon } from "@heroicons/react/24/solid";

export default function DiagnosticSection() {
  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-blue/20 text-brand-blue font-bold px-3 py-1 rounded-full text-sm mb-6 border border-brand-blue/30">
              <CpuChipIcon className="h-4 w-4" />
              <span>AI-Powered Tool</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Not Sure How Bad It Is?
            </h2>
            <p className="text-xl text-slate-300 mb-8 text-balance">
              Don't pay for a jetter if you only need a plunger. Use our
              30-second diagnostic tool to identify your issue and get an
              instant price range.
            </p>
            <Link
              href="/spokes/blocked-drain-diagnostic"
              className="inline-flex items-center gap-3 bg-brand-yellow text-brand-dark font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20"
            >
              Start Diagnosis
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>

          {/* Visual Representation (Abstract UI Card) */}
          <div className="lg:w-1/2 w-full max-w-md">
            <div className="bg-white rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4 mb-4">
                <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="font-bold text-brand-dark">
                  Where is the blockage?
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-12 bg-slate-50 rounded-lg border border-slate-200 flex items-center px-4 text-slate-400 text-sm">
                  Kitchen Sink
                </div>
                <div className="h-12 bg-blue-50 rounded-lg border border-brand-blue flex items-center px-4 text-brand-blue font-bold justify-between shadow-sm">
                  <span>Toilet</span>
                  <span className="w-3 h-3 bg-brand-blue rounded-full"></span>
                </div>
                <div className="h-12 bg-slate-50 rounded-lg border border-slate-200 flex items-center px-4 text-slate-400 text-sm">
                  Main Sewer Line
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <span className="text-xs text-slate-400 font-mono">
                  Analysis pending...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

