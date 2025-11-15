// src/components/FaerieGlenMap.js
export default function FaerieGlenMap() {
  return (
    <section className="my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-6 text-center">
          Serving Faerie Glen, Pretoria
        </h2>
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100">
          <iframe
            title="Faerie Glen, Pretoria Map"
            src="https://www.google.com/maps?q=Faerie+Glen,+Pretoria,+South+Africa&hl=en&z=14&output=embed"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[400px] border-0"
            style={{ minHeight: 300 }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

