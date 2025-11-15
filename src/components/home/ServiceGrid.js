// src/components/home/ServiceGrid.js
import {
  BeakerIcon,
  HomeModernIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    title: "Blocked Toilets",
    description:
      "Overflowing or gurgling? We remove obstructions instantly without damaging your seals.",
    icon: HomeModernIcon,
    color: "bg-blue-100 text-brand-blue",
  },
  {
    title: "Kitchen Sinks",
    description:
      "Slow draining water? We clear stubborn fat, oil, and grease (FOG) build-ups.",
    icon: BeakerIcon,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Shower Drains",
    description:
      "Standing in soapy water? We extract hair and soap scum to restore flow immediately.",
    icon: SparklesIcon,
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    title: "Main Sewer Lines",
    description:
      "Tree roots crushing your pipes? We use high-pressure jetting to cut them out.",
    icon: WrenchScrewdriverIcon,
    color: "bg-red-100 text-brand-red",
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            What's Blocking Your Flow?
          </h2>
          <p className="text-lg text-slate-600 text-balance">
            From minor clogs to major sewer emergencies, we have the specific
            tool for your specific problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 bg-white"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
