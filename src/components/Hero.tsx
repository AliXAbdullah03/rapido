import { useEffect, useState } from "react";
import { Reveal } from "../hooks/useReveal";
import { OnboardingMock } from "./mocks/OnboardingMock";

export function Hero() {
  const [page, setPage] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPage((p) => ((p + 1) % 3) as 0 | 1 | 2);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="hero-gradient relative grid min-h-[calc(100svh-72px)] items-center overflow-hidden text-white"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="grid-overlay absolute inset-0 mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -right-20 -top-28 size-[420px] rounded-full bg-accent/35 blur-[60px]" />
        <div className="absolute -bottom-20 -left-16 size-[320px] rounded-full bg-primary/45 blur-[60px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-[min(100%-2.5rem,70rem)] items-center gap-8 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-20">
        <Reveal className="text-center lg:text-left">
          <p className="mb-5 text-[clamp(1.15rem,2.2vw,1.35rem)] font-extrabold tracking-[0.28em]">
            RAPIDO
          </p>
          <h1
            id="hero-heading"
            className="mb-4 max-w-[12ch] text-[clamp(2.35rem,5.2vw,3.75rem)] font-extrabold leading-[1.12] tracking-tight lg:mx-0 mx-auto"
          >
            Emergency info always within reach
          </h1>
          <p className="mx-auto mb-8 max-w-[34ch] text-[clamp(1.05rem,1.6vw,1.2rem)] leading-relaxed text-white/90 lg:mx-0">
            First responders scan your QR once — medical essentials and contacts, in seconds.
          </p>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#get-app"
              className="inline-flex min-h-12 items-center rounded-full bg-white px-5 font-bold text-primary-dark transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-nav-warm hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
            >
              Get the app
            </a>
            <a
              href="#how-it-works"
              className="inline-flex min-h-12 items-center rounded-full border-[1.5px] border-white/45 px-5 font-bold text-white transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-white/75 hover:bg-white/10"
            >
              Learn more
            </a>
          </div>
        </Reveal>

        <Reveal className="order-first flex justify-center lg:order-none" delayMs={120}>
          <OnboardingMock page={page} />
        </Reveal>
      </div>
    </section>
  );
}
