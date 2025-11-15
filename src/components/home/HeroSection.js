// src/components/HeroSection.js
export default function HeroSection() {
  return (
    <section className="relative h-[480px] md:h-[560px] flex items-stretch overflow-hidden">
      {/* Background VIDEO */}
      <video
        src="/videos/plumber.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Blue Gradient overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(90deg, #1E4068 0%, #1E4068 10%, #1A3D60 30%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-6 md:px-12">
        <div className="max-w-2xl py-12">
          <h1 className="text-white font-extrabold text-4xl md:text-6xl mb-5 leading-tight drop-shadow-xl">
            Blocked Drain Specialists
            <br />
            <span className="text-blue-400">Faerie Glen & Pretoria</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 drop-shadow">
            Fast, friendly, and local plumbers trusted by your neighbors. Call
            for urgent service or book online.
          </p>
          <a
            href="tel:+27123456789"
            className="
  inline-block
  bg-blue-500
  text-white
  font-extrabold
  rounded-full
  px-8 md:px-40   /* smaller padding on mobile, large on medium+ screens */
  py-5
  text-lg md:text-xl
  shadow-2xl
  hover:bg-blue-400
  hover:scale-105
  transition
  duration-300
"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
