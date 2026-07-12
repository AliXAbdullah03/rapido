import { Reveal } from "../hooks/useReveal";

const points = [
  {
    num: "01",
    title: "Unlocked phones fail",
    body: "Medical IDs buried in settings or locked behind a passcode help no one when every minute matters.",
  },
  {
    num: "02",
    title: "Families left guessing",
    body: "Caregivers and loved ones scramble for numbers and notes that should already be in the responder’s hands.",
  },
  {
    num: "03",
    title: "Help arrives slower",
    body: "Without essentials at a glance, treatment and contact decisions take longer than they need to.",
  },
] as const;

export function Problem() {
  return (
    <section id="why" className="bg-white py-[clamp(4.5rem,10vw,7rem)]" aria-labelledby="why-heading">
      <div className="mx-auto w-[min(100%-2.5rem,70rem)]">
        <Reveal className="mb-10 max-w-xl">
          <h2 id="why-heading" className="mb-3 text-[clamp(1.85rem,3.6vw,2.65rem)] font-extrabold tracking-tight">
            When seconds count, blank screens cost lives
          </h2>
          <p className="max-w-[42ch] text-[1.05rem] text-[#5a6068]">
            In an emergency, responders often meet you without your story — no blood type, no allergies, no one to
            call. Critical details stay locked in a phone they cannot unlock.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.num} delayMs={i * 110} className="border-t-2 border-nav-indicator pt-1">
              <span className="mb-3 mt-4 block text-xs font-extrabold tracking-[0.16em] text-primary">
                {p.num}
              </span>
              <h3 className="mb-2 text-xl font-bold tracking-tight">{p.title}</h3>
              <p className="text-[0.98rem] text-[#5a6068]">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
