import { Reveal } from "../hooks/useReveal";
import { EmergencyViewMock } from "./mocks/EmergencyViewMock";

export function Trust() {
  return (
    <section
      id="privacy"
      className="hero-dark-gradient relative overflow-hidden py-[clamp(4.5rem,10vw,7rem)] text-white"
      aria-labelledby="trust-heading"
    >
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-80" aria-hidden />
      <div className="relative mx-auto grid w-[min(100%-2.5rem,70rem)] items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="text-center lg:text-left">
          <h2 id="trust-heading" className="mb-4 text-[clamp(1.85rem,3.4vw,2.5rem)] font-extrabold tracking-tight">
            Your data stays with you
          </h2>
          <p className="mx-auto mb-6 max-w-[44ch] text-white/80 lg:mx-0">
            RAPIDO is built so emergency readiness does not mean giving up control. You decide what goes on your
            profile. Nothing is sold. When someone scans, they see only what you chose to make available for help.
          </p>
          <ul className="mx-auto flex max-w-md flex-col gap-3 lg:mx-0">
            {[
              "You own your emergency profile",
              "No ad tracking on your medical details",
              "Designed for clarity under pressure — not data harvest",
            ].map((item) => (
              <li key={item} className="relative pl-5 text-left font-semibold text-white/92">
                <span className="absolute left-0 top-[0.55em] size-2 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="order-first flex justify-center lg:order-none" delayMs={120}>
          <EmergencyViewMock />
        </Reveal>
      </div>
    </section>
  );
}
