import { useState } from "react";
import { Reveal } from "../hooks/useReveal";

const faqs = [
  {
    q: "Who is RAPIDO for?",
    a: "Everyday people, families, and caregivers who want responders to see medical essentials and contacts without unlocking a phone. First responders and awareness partners use it to advocate for faster, clearer care.",
  },
  {
    q: "Does it work without internet?",
    a: "Yes. Your QR is designed so critical info can be read even when networks are weak or unavailable — when help cannot wait for a signal.",
  },
  {
    q: "What information do responders see?",
    a: "Only what you put in your emergency profile — typically blood type, age, health notes, and emergency contacts. You stay in control of what is shared.",
  },
  {
    q: "Is my data private?",
    a: "Privacy-first by design. Your data stays with you. RAPIDO is not built to sell medical details or track you for advertising.",
  },
  {
    q: "Where should I keep my QR?",
    a: "On your lock screen wallpaper, in a wallet card, on a bag tag, or a sticker responders will find quickly — wherever help would look first.",
  },
] as const;

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-[clamp(4.5rem,10vw,7rem)]" aria-labelledby="faq-heading">
      <div className="mx-auto w-[min(100%-2.5rem,45rem)]">
        <Reveal className="mb-10 max-w-xl">
          <h2 id="faq-heading" className="mb-3 text-[clamp(1.85rem,3.6vw,2.65rem)] font-extrabold tracking-tight">
            Questions, answered
          </h2>
          <p className="max-w-[42ch] text-[1.05rem] text-[#5a6068]">
            Short answers for people getting ready — and partners spreading the word.
          </p>
        </Reveal>

        <Reveal className="flex flex-col gap-2.5">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-[10px] border transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen
                    ? "border-primary/35 bg-nav-warm"
                    : "border-nav-indicator bg-surface-light"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold tracking-tight"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.q}
                  <span
                    className={`size-2.5 shrink-0 border-r-2 border-b-2 border-primary transition ${
                      isOpen ? "mt-1 rotate-[225deg]" : "rotate-45"
                    }`}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <p className="max-w-[58ch] px-5 pb-4 text-[0.98rem] text-[#5a6068]">{item.a}</p>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
