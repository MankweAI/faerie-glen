"use client"; 
import Link from "next/link";
import { ArrowRightIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import robotAnimation from "@/lotties/robot.json";

export default function DiagnosticSection() {
  return (
    <section className="py-20 bg-brand-yellow relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-3 font-bold px-5 py-2 rounded-full text-sm mb-6
      bg-white/80 text-black
      shadow-[0_2px_12px_0_#facc1533]
      hover:shadow-[0_4px_16px_0_#facc1555]
      transition-shadow duration-300"
              style={{ minHeight: 48 }}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <Lottie
                  animationData={robotAnimation}
                  loop={true}
                  style={{ width: 32, height: 32 }}
                />
              </div>
              <span>AI-Powered Tool</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
              Not Sure How Bad It Is?
            </h2>
            <p className="text-xl text-black/70 mb-8 text-balance">
              Don't pay for a jetter if you only need a plunger. Use our
              30-second diagnostic tool to identify your issue and get an
              instant price range.
            </p>
            <Link
              href="/spokes/blocked-drain-diagnostic"
              className="inline-flex items-center gap-3 bg-white text-brand-dark font-bold py-4 px-8 rounded-full text-lg hover:bg-brand-yellow/90 hover:scale-105 transition-all duration-300 shadow-[0_2px_12px_0_#facc1533]"
            >
              Start Diagnosis
              <ArrowRightIcon className="h-5 w-5 text-brand-blue" />
            </Link>
          </div>

          {/* Visual Representation, gentle glass and shadow styling */}
          <div className="lg:w-1/2 w-full max-w-md">
            <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 shadow-[0_2px_24px_0_#facc15aa] transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-4 pb-4 mb-5">
                <div className="w-12 h-12 bg-brand-yellow text-white rounded-full flex items-center justify-center font-bold text-lg shadow-[0_2px_10px_0_#facc1533]">
                  1
                </div>
                <div className="font-bold text-black text-lg">
                  Where is the blockage?
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-12 bg-white rounded-lg flex items-center px-4 text-brand-yellow text-sm shadow-[0_1px_5px_0_#facc1522]">
                  Kitchen Sink
                </div>
                <div className="h-12 bg-white rounded-lg flex items-center px-4 text-brand-blue font-bold justify-between shadow-[0_1px_8px_0_#3b82f622]">
                  <span>Toilet</span>
                  <span className="w-4 h-4 bg-brand-blue rounded-full animate-pulse shadow-[0_1px_8px_0_#3b82f633]"></span>
                </div>
                <div className="h-12 bg-white rounded-lg flex items-center px-4 text-brand-yellow text-sm shadow-[0_1px_5px_0_#facc1522]">
                  Main Sewer Line
                </div>
              </div>
              <div className="mt-7 flex justify-end">
                <span className="text-xs text-black/50 font-mono">
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
