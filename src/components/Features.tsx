import type { ReactNode } from "react";
import { Reveal } from "../hooks/useReveal";

const features: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Instant QR access",
    body: "Scan once. Essentials appear in seconds — no accounts, no delay.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="size-11 text-primary" aria-hidden>
        <rect x="8" y="8" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <rect x="22" y="8" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <rect x="8" y="22" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M22 24h4v4h-4v-4zm6 0h4v4h-4v-4zm-6 6h4v4h-4v-4zm6 0h4v2M28 30h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Medical essentials",
    body: "Blood type, age, allergies, and health notes — clear at a glance.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="size-11 text-primary" aria-hidden>
        <path d="M20 8c-2 4-8 6-8 12a8 8 0 0016 0c0-6-6-8-8-12z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Emergency contacts",
    body: "The right people, ready to reach — prioritized for responders.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="size-11 text-primary" aria-hidden>
        <circle cx="20" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M10 30c1.5-5 5-7 10-7s8.5 2 10 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Works offline",
    body: "Your QR carries the info. No signal required to read what matters.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="size-11 text-primary" aria-hidden>
        <rect x="9" y="12" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M15 12V10a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Privacy-first",
    body: "Your data stays with you. You choose what responders can see.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="size-11 text-primary" aria-hidden>
        <path
          d="M20 8l10 4v8c0 7-4.5 11.5-10 13-5.5-1.5-10-6-10-13v-8l10-4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M16 20l3 3 5-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="bg-surface-light py-[clamp(4.5rem,10vw,7rem)]"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto w-[min(100%-2.5rem,70rem)]">
        <Reveal className="mb-10 max-w-xl">
          <h2
            id="features-heading"
            className="mb-3 text-[clamp(1.85rem,3.6vw,2.65rem)] font-extrabold tracking-tight"
          >
            Built for the moment that matters
          </h2>
          <p className="max-w-[42ch] text-[1.05rem] text-[#5a6068]">
            Everything a responder needs. Nothing they don’t.
          </p>
        </Reveal>

        <ul className="grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <li key={f.title}>
              <Reveal delayMs={i * 100}>
                <div className="mb-4">{f.icon}</div>
                <h3 className="mb-1.5 text-lg font-bold tracking-tight">{f.title}</h3>
                <p className="max-w-[28ch] text-[0.98rem] text-[#5a6068]">{f.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
