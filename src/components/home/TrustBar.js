import Lottie from "lottie-react";
// Example: Place animation JSON files in /src/lotties/
import licenseAnimation from "@/lotties/license.json";
import starsAnimation from "@/lotties/stars.json";
import guaranteeAnimation from "@/lotties/guarantee.json";
import expertAnimation from "@/lotties/expert.json";

export default function TrustBar() {
  const trustItems = [
    {
      animation: licenseAnimation,
      text: "Licensed & Insured",
      sub: "PIRB Registered",
      glow: "shadow-[0_0_32px_10px_#0052FF33]", // Electric Blue, subtle
    },
    {
      animation: starsAnimation,
      text: "5-Star Rated",
      sub: "500+ Reviews",
      glow: "shadow-[0_0_32px_10px_#FFD60033]", // Yellow, subtle
    },
    {
      animation: guaranteeAnimation,
      text: "Work Guaranteed",
      sub: "6-Month Warranty",
      glow: "shadow-[0_0_32px_10px_#FF3B3033]", // Red, subtle
    },
    {
      animation: expertAnimation,
      text: "Local Experts",
      sub: "Randburg Based",
      glow: "shadow-[0_0_32px_10px_#22c55e33]", // Green, subtle
    },
  ];

  return (
    <section className="py-10 border-b border-slate-200 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 place-items-center">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Glowing round Lottie animation */}
              <div
                className={`w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center border-4 border-white bg-white ${item.glow} transition-transform duration-300 group-hover:scale-105`}
              >
                <Lottie
                  animationData={item.animation}
                  loop={true}
                  style={{ width: 84, height: 84 }}
                />
              </div>
              <div className="mt-4 text-brand-dark text-base font-bold leading-tight text-center">
                {item.text}
              </div>
              <div className="text-brand-blue text-xs md:text-sm font-semibold tracking-wide text-center">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
