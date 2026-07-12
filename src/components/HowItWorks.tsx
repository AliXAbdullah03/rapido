import { useState } from "react";
import { Reveal } from "../hooks/useReveal";
import { DashboardMock } from "./mocks/DashboardMock";
import { EmergencyViewMock } from "./mocks/EmergencyViewMock";
import { QrIdentityMock } from "./mocks/QrIdentityMock";

const steps = [
  {
    id: "1",
    label: "Create profile",
    title: "Create your emergency profile",
    body: "Add blood type, age, health notes, and the people who should be reached first — in language responders understand.",
    screen: "dashboard" as const,
  },
  {
    id: "2",
    label: "Generate QR",
    title: "Generate your RAPIDO QR",
    body: "One code carries what matters. Keep it on your phone lock screen, wallet, or a sticker where responders will look.",
    screen: "qr" as const,
  },
  {
    id: "3",
    label: "Share & scan",
    title: "Share, stick, and scan",
    body: "When help arrives, they scan once and see essentials instantly — even when networks are unreliable.",
    screen: "emergency" as const,
  },
] as const;

export function HowItWorks() {
  const [step, setStep] = useState(0);
  const active = steps[step];

  return (
    <section id="how-it-works" className="bg-nav-warm py-[clamp(4.5rem,10vw,7rem)]" aria-labelledby="how-heading">
      <div className="mx-auto w-[min(100%-2.5rem,70rem)]">
        <Reveal className="mb-10 max-w-xl">
          <h2 id="how-heading" className="mb-3 text-[clamp(1.85rem,3.6vw,2.65rem)] font-extrabold tracking-tight">
            How it works
          </h2>
          <p className="max-w-[42ch] text-[1.05rem] text-[#5a6068]">
            Three steps from the RAPIDO app. Ready before you need it.
          </p>
        </Reveal>

        <div
          role="tablist"
          aria-label="How RAPIDO works"
          className="mb-7 grid grid-cols-3 gap-2 rounded-2xl border border-nav-indicator bg-white/55 p-1.5 sm:rounded-full"
        >
          {steps.map((s, i) => {
            const selected = i === step;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setStep(i)}
                className={`flex min-h-[52px] items-center justify-center gap-2 rounded-full px-3 text-sm font-bold transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  selected
                    ? "bg-primary text-white shadow-[0_8px_22px_rgba(209,59,59,0.25)]"
                    : "text-nav-fg hover:bg-nav-indicator/65"
                }`}
              >
                <span
                  className={`grid size-[26px] place-items-center rounded-full text-xs ${
                    selected ? "bg-white/20" : "bg-nav-indicator text-nav-fg"
                  }`}
                >
                  {s.id}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-[20px] border border-nav-indicator bg-white">
          <div className="grid items-center gap-6 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex justify-center" key={active.screen}>
              {active.screen === "dashboard" && <DashboardMock />}
              {active.screen === "qr" && <QrIdentityMock />}
              {active.screen === "emergency" && <EmergencyViewMock />}
            </div>
            <div className="text-center lg:text-left">
              <h3 className="mb-3 text-[clamp(1.35rem,2.4vw,1.75rem)] font-extrabold tracking-tight">
                {active.title}
              </h3>
              <p className="mx-auto max-w-[38ch] text-[1.02rem] text-[#5a6068] lg:mx-0">{active.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
