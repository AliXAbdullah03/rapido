import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark pb-9 pt-12 text-white/80">
      <div className="mx-auto grid w-[min(100%-2.5rem,70rem)] gap-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link to="/" className="mb-2 block text-base font-extrabold tracking-[0.28em] text-white">
              RAPIDO
            </Link>
            <p className="max-w-[28ch] text-[0.95rem]">Emergency info always within reach.</p>
          </div>
          <div className="flex flex-col gap-1.5 text-[0.95rem]">
            <p>
              A product by <strong className="font-bold text-white">Bushra Tech</strong>
            </p>
            <a
              href="mailto:ceo@bushratech.com"
              className="w-fit font-semibold text-accent transition hover:opacity-80"
            >
              ceo@bushratech.com
            </a>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              <Link to="/privacy" className="font-semibold text-white/75 transition hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="font-semibold text-white/75 transition hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-2 border-t border-white/10 pt-6 text-sm text-white/45">
          © {year} Bushra Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
