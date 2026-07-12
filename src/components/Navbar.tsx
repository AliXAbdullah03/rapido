import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#why", label: "Why it matters" },
  { href: "/#faq", label: "FAQ" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-nav-indicator/80 bg-nav-warm/90 backdrop-blur-md">
      <nav className="mx-auto flex min-h-[72px] w-[min(100%-2rem,70rem)] items-center justify-between gap-4">
        <Link to="/" className="z-20 inline-flex items-center gap-2.5 text-nav-fg">
          <img src="/Icon.png" alt="" className="size-7 animate-breathe rounded-full object-contain" />
          <span className="text-[1.05rem] font-extrabold tracking-[0.22em]">RAPIDO</span>
        </Link>

        <button
          type="button"
          className="z-20 grid size-11 place-items-center rounded-lg md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 rounded bg-nav-fg transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 rounded bg-nav-fg transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 rounded bg-nav-fg transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>

        <div
          className={`items-center gap-7 ${
            open
              ? "fixed inset-0 z-10 flex flex-col justify-center bg-nav-warm/97 backdrop-blur-lg"
              : "hidden md:flex"
          }`}
        >
          <ul className="flex flex-col items-center gap-2 md:flex-row md:gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-full px-3 py-2 text-[0.9rem] font-semibold text-nav-fg transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-nav-indicator"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#get-app"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-[42px] items-center rounded-full bg-primary px-4 text-sm font-bold text-white transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_10px_28px_rgba(209,59,59,0.28)]"
          >
            Get the app
          </a>
        </div>
      </nav>
    </header>
  );
}
