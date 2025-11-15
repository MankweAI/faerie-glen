import {
  WrenchScrewdriverIcon,
  SparklesIcon,
  StopIcon,
} from "@heroicons/react/24/solid";

export default function ServiceGrid() {
  const services = [
    {
      title: "Blocked Drains",
      desc: "We clear stubborn sink, shower, toilet, & sewer blockages fast—using the right equipment every time.",
      icon: <WrenchScrewdriverIcon className="h-10 w-10 text-white" />,
      glow: "shadow-[0_8px_40px_0_#60a5fa55]", // Blue shadow
      gradient: "bg-gradient-to-tr from-blue-400 to-blue-600",
    },
    {
      title: "Leak Detection",
      desc: "Accurate electronic and pressure testing for hidden water leaks in pipes, walls, and floors.",
      icon: <StopIcon className="h-10 w-10 text-white" />,
      glow: "shadow-[0_8px_40px_0_#2563eb44]", // Slightly deeper blue
      gradient: "bg-gradient-to-tr from-blue-500 to-blue-700",
    },
    {
      title: "Leak Repairs",
      desc: "Detect, diagnose, and repair burst, leaking, or corroded pipes—indoors or outdoors.",
      icon: <SparklesIcon className="h-10 w-10 text-white" />,
      glow: "shadow-[0_8px_40px_0_#0ea5e944]", // Lighter/deeper blue for variety
      gradient: "bg-gradient-to-tr from-blue-300 to-blue-500",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-12 text-center">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`rounded-[2rem] bg-white border border-slate-100 p-8 flex flex-col items-center gap-6 transition-all duration-500 hover:scale-105 hover:shadow-xl ${service.glow}`}
            >
              <div
                className={`mb-4 rounded-full p-5 flex items-center justify-center ${service.gradient} shadow-lg`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center text-brand-dark">
                {service.title}
              </h3>
              <p className="text-center text-brand-dark/70 text-base md:text-lg leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
