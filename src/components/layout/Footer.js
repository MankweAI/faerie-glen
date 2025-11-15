export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 py-12 text-center text-sm border-t border-slate-800">
      <div className="container mx-auto px-4">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} ABC Plumbing. Licensed & Insured.
        </p>
        <p>Serving Randburg, Sandton, and surrounding areas.</p>
      </div>
    </footer>
  );
}
