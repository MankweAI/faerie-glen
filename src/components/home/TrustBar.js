// src/components/home/TrustBar.js
import {
  ShieldCheckIcon,
  StarIcon,
  UserGroupIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

export default function TrustBar() {
  const trustItems = [
    {
      icon: ShieldCheckIcon,
      text: "Licensed & Insured",
      sub: "PIRB Registered",
    },
    {
      icon: StarIcon,
      text: "5-Star Rated",
      sub: "500+ Reviews",
    },
    {
      icon: CheckBadgeIcon,
      text: "Work Guaranteed",
      sub: "6-Month Warranty",
    },
    {
      icon: UserGroupIcon,
      text: "Local Experts",
      sub: "Randburg Based",
    },
  ];

  return (
    <section className="bg-brand-dark py-8 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 text-center sm:text-left"
            >
              <div className="p-2 bg-slate-800 rounded-lg text-brand-blue">
                <item.icon className="h-8 w-8" />
              </div>
              <div>
                <div className="text-white font-bold text-sm md:text-base leading-tight">
                  {item.text}
                </div>
                <div className="text-slate-400 text-xs md:text-sm">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
