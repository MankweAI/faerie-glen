// src/components/tools/DiagnosticTool.js
"use client";

import { useState } from "react";
import {
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

// --- Reusable Button Component for the Tool ---
const ToolButton = ({ onClick, text }) => (
  <button
    onClick={onClick}
    className="w-full text-left p-4 md:p-5 bg-white border-2 border-slate-200 rounded-lg shadow-sm 
               hover:shadow-md hover:border-brand-blue hover:bg-blue-50
               focus:outline-none focus:ring-2 focus:ring-brand-blue
               transition-all duration-200 active:scale-[0.98]"
  >
    <span className="text-brand-dark font-medium text-lg">{text}</span>
  </button>
);

// --- Main Diagnostic Tool ---
export default function DiagnosticTool() {
  const [step, setStep] = useState(1);
  const [diagnosis, setDiagnosis] = useState({
    location: "",
    symptoms: "",
    scope: "",
  });
  const [showResult, setShowResult] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Progress bar logic
  const progressPct =
    showResult || submitted ? 100 : Math.round(((step - 1) / 3) * 100);

  const handleSelect = (field, value) => {
    setDiagnosis((prev) => ({ ...prev, [field]: value }));
    const nextStep = step + 1;

    if (nextStep > 3) {
      setShowResult(true);
    } else {
      setStep(nextStep);
    }
  };

  // --- Diagnosis Logic ---
  const getDiagnosisText = () => {
    if (diagnosis.scope === "whole_house") {
      return "Probable Main Line Blockage";
    }
    if (diagnosis.location === "kitchen_sink") {
      return "Probable FOG (Fat/Oil/Grease) Blockage";
    }
    return "Localized Fixture Blockage";
  };

  const getDiagnosisDescription = () => {
    if (diagnosis.scope === "whole_house") {
      return "This is a high-priority issue that often requires a high-pressure jetter. Water may come up in other drains.";
    }
    return "This is a common blockage that can typically be cleared quickly by our technicians.";
  };

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    setSubmitted(true);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key={1}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-brand-dark mb-1">
              1. Where is the blockage?
            </h3>
            <ToolButton
              onClick={() => handleSelect("location", "kitchen_sink")}
              text="Kitchen Sink"
            />
            <ToolButton
              onClick={() => handleSelect("location", "toilet")}
              text="Toilet"
            />
            <ToolButton
              onClick={() => handleSelect("location", "shower_bath")}
              text="Shower / Bath"
            />
            <ToolButton
              onClick={() => handleSelect("location", "outside_drain")}
              text="Outside Drain"
            />
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key={2}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-brand-dark mb-1">
              2. What are the symptoms?
            </h3>
            <ToolButton
              onClick={() => handleSelect("symptoms", "slow_draining")}
              text="Slow Draining"
            />
            <ToolButton
              onClick={() => handleSelect("symptoms", "gurgling_sounds")}
              text="Gurgling Sounds"
            />
            <ToolButton
              onClick={() => handleSelect("symptoms", "fully_blocked")}
              text="Fully Blocked (Water not going down)"
            />
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key={3}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-brand-dark mb-1">
              3. Is it affecting other areas?
            </h3>
            <ToolButton
              onClick={() => handleSelect("scope", "one_spot")}
              text="Just this one spot"
            />
            <ToolButton
              onClick={() => handleSelect("scope", "whole_house")}
              text="The whole house is affected"
            />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl border border-gray-100 max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!showResult && !submitted && (
          <motion.div
            key="tool"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-3">
              Start Your 30-Second Diagnosis
            </h2>
            <p className="text-gray-600 mb-6 text-base">
              Answer 3 quick questions — results immediately.
            </p>

            {/* Progress bar */}
            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden mb-8">
              <div
                className="h-full bg-gradient-to-r from-brand-blue to-cyan-400 transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            {/* Step content container */}
            <div className="relative min-h-[340px]">
              <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
            </div>
          </motion.div>
        )}

        {showResult && !submitted && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Your Diagnosis:
            </h2>
            <h3 className="text-3xl font-bold text-brand-red mb-4">
              {getDiagnosisText()}
            </h3>
            <p className="text-slate-600 bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
              {getDiagnosisDescription()}
            </p>

            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg mb-6 border border-brand-blue/20">
              <ClockIcon className="h-6 w-6 text-brand-blue flex-shrink-0" />
              <p className="text-brand-dark text-sm font-medium">
                Our average emergency response time in your area is{" "}
                <strong>45 minutes</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <a
                href="tel:082-555-1234"
                className="w-full flex items-center justify-center gap-3 bg-brand-red text-white font-bold py-4 px-4 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red transition-all duration-300 transform hover:scale-105 text-center text-lg"
              >
                <PhoneIcon className="h-6 w-6" />
                Call for Immediate Dispatch
              </a>

              <div className="text-center text-sm text-gray-500 mt-3">or</div>

              <h4 className="text-center text-base font-semibold text-brand-dark mt-1">
                Let Mathew call you back
              </h4>

              <input
                type="tel"
                placeholder="Your mobile number (e.g., 082...)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-2 block w-full px-4 py-3 font-mono bg-slate-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />

              <button
                type="submit"
                className="mt-3 w-full flex items-center justify-center bg-brand-yellow text-brand-dark font-bold py-4 px-4 rounded-full hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow transition-all duration-300 transform hover:scale-105"
              >
                Get My Free Call-Back
              </button>
            </form>
          </motion.div>
        )}

        {submitted && (
          <motion.div
            key="submitted"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center py-8"
          >
            <ShieldCheckIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-dark mb-3">
              Thank You!
            </h2>
            <p className="text-lg text-slate-600">
              A master plumber will call you back at{" "}
              <span className="text-brand-dark font-bold">{phone}</span> in the
              next 15 minutes.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}