// src/components/ReviewsSection.js
export default function ReviewsSection() {
  const reviews = [
    {
      name: "Thandi Mahlangu",
      location: "Faerie Glen, Pretoria",
      rating: 5,
      img: "/images/clients/thandi.png",
      glow: "shadow-[0_0_32px_10px_#FFD60033]", // Subtle yellow glow
      content:
        "Absolutely fantastic service! Arrived within the hour, diagnosed the issue and sorted it immediately. Highly recommend to all my neighbors.",
    },
    {
      name: "Grant Smit",
      location: "Pretoria East",
      rating: 5,
      img: "/images/clients/grant.png",
      glow: "shadow-[0_0_32px_10px_#0052FF33]", // Subtle blue glow
      content:
        "Quick, professional, and affordable. The team explained everything clearly. It’s rare to find such reliable tradesmen!",
    },
    {
      name: "Nolwazi Khumalo",
      location: "Faerie Glen",
      rating: 5,
      img: "/images/clients/nolwazi.png",
      glow: "shadow-[0_0_32px_10px_#22c55e33]", // Subtle green glow
      content:
        "Booking was easy online and the plumber was friendly and efficient. Will call again for future jobs.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-10 text-center">
          What your neighbors are saying about us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white border border-slate-100 shadow-xl p-8 flex flex-col gap-4 items-center"
            >
              <div
                className={`w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center border-4 border-white bg-white ${review.glow} transition-transform duration-300 group-hover:scale-105 mb-3`}
              >
                <img
                  src={review.img}
                  alt={`${review.name} headshot`}
                  className="object-cover rounded-full w-20 h-20 md:w-24 md:h-24"
                />
              </div>
              <div className="flex items-center gap-3 mb-1 flex-col">
                <div className="font-bold text-brand-dark">{review.name}</div>
                <div className="text-xs text-slate-400">{review.location}</div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(review.rating)].map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <div className="text-brand-dark font-semibold text-base leading-relaxed flex-1 text-center">
                “{review.content}”
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
