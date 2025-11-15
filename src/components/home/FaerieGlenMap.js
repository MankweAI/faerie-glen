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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28543.95489618326!2d28.3008517!3d-25.7764781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956d0c48b204d3%3A0x927f7212519d8cb7!2sFaerie%20Glen%2C%20Pretoria!5e0!3m2!1sen!2sza!4v1700000000000"
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

