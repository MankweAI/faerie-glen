// src/components/HeroSection.js
export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[480px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Background VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/plumber.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/plumber.webm" type="video/webm" />
        <source src="/videos/plumber.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Responsive Gradient Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            background: `
              linear-gradient(90deg, #0e1c33 0%, #122643 10%, transparent 90%),
              linear-gradient(180deg, transparent 70%, #0e1c33 100%)
            `,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-12 flex flex-col justify-center py-8 sm:py-12">
        <div className="max-w-2xl mx-auto sm:mx-0">
          <h1 className="text-white font-extrabold text-5xl xs:text-5xl sm:text-6xl md:text-7xl leading-snug sm:leading-tight drop-shadow-xl text-center sm:text-left">
            Blocked Drain Specialists
            <br />
            <span className="text-blue-300 text-xl xs:text-2xl sm:text-3xl md:text-4xl">
              Faerie Glen & Pretoria
            </span>
          </h1>

          <p className="text-white/85 text-sm xs:text-base sm:text-lg md:text-xl mt-3 sm:mt-4 mb-6 sm:mb-10 drop-shadow-sm max-w-xl text-center sm:text-left">
            Fast, friendly, local plumbers trusted by your neighbors. Call for
            urgent service or book online.
          </p>

          <div className="flex justify-center sm:justify-start">
            <a
              href="tel:+27123456789"
              className="
                inline-block
                bg-blue-500
                text-white
                font-extrabold
                rounded-full
                px-6 sm:px-8 md:px-12
                py-3 sm:py-4 md:py-5
                text-base sm:text-lg md:text-xl
                shadow-2xl
                hover:bg-blue-400
                hover:scale-105
                active:scale-95
                transition
                duration-300
                w-full sm:w-auto
                text-center
                max-w-xs
              "
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
