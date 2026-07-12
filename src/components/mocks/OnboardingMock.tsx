import { PhoneFrame } from "../PhoneFrame";

type OnboardingMockProps = {
  page?: 0 | 1 | 2;
  className?: string;
};

const pages = [
  {
    title: "RAPIDO",
    brand: true,
    subtitle: "Your emergency identity — ready when every second counts.",
  },
  {
    title: "Scan once.\nHelp arrives faster.",
    brand: false,
    subtitle: "First responders open your critical details with a single QR scan.",
  },
  {
    title: "Medical info &\ncontacts, secured.",
    brand: false,
    subtitle: "Blood type, health notes, and people who need to know — always within reach.",
  },
] as const;

/** Mirrors Flutter `OnboardingScreen` visual language */
export function OnboardingMock({ page = 0, className = "" }: OnboardingMockProps) {
  const data = pages[page];

  return (
    <PhoneFrame className={className} dark>
      <div className="hero-gradient relative flex h-full flex-col px-4 pb-4 pt-3 text-white">
        <div className="grid-overlay pointer-events-none absolute inset-0 opacity-80" />
        <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-accent/30 blur-2xl" />
        <div className="pointer-events-none absolute -left-10 bottom-16 h-24 w-24 rounded-full bg-primary/30 blur-2xl" />

        <div className="relative flex items-center justify-between text-[10px] font-semibold text-white/70">
          <span>{page < 2 ? "Skip" : ""}</span>
          <span className="rounded-full bg-white/10 px-2 py-0.5">Aa</span>
        </div>

        <div className="relative flex flex-1 flex-col items-center justify-center">
          <div className="animate-breathe relative mb-5 grid size-[88px] place-items-center">
            <div className="absolute inset-[-18%] rounded-full bg-accent/35 blur-md" />
            <div className="absolute inset-[8%] rounded-full border border-white/15" />
            <div className="relative grid size-[58px] place-items-center overflow-hidden rounded-full border border-white/30 bg-white/15">
              <img src="/Icon.png" alt="" className="size-9 object-contain" />
            </div>
          </div>

          <h3
            className={`whitespace-pre-line text-center font-extrabold leading-tight text-white ${
              data.brand ? "text-[22px] tracking-[0.22em]" : "text-[15px] tracking-tight"
            }`}
          >
            {data.title}
          </h3>
          <p className="mt-2 max-w-[18ch] text-center text-[10px] leading-relaxed text-white/75">
            {data.subtitle}
          </p>
        </div>

        <div className="relative mt-auto space-y-2.5">
          <div className="flex items-center justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page ? "w-6 bg-white" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
          <div className="flex h-9 items-center justify-center rounded-[14px] bg-white text-[11px] font-bold text-primary-dark">
            {page === 2 ? "Get Started →" : "Continue ›"}
          </div>
          {page === 2 && (
            <p className="text-center text-[9px] text-white/50">Your data stays on your device</p>
          )}
        </div>
      </div>
    </PhoneFrame>
  );
}
