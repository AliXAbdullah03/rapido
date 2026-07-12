import { PhoneFrame } from "../PhoneFrame";

/** Mirrors Flutter `DashboardHomeScreen` welcome + profile chips */
export function DashboardMock({ className = "" }: { className?: string }) {
  return (
    <PhoneFrame className={className}>
      <div className="flex h-full flex-col bg-surface-light">
        <div className="flex items-center justify-between px-3 py-2.5">
          <div className="flex items-center gap-1.5">
            <img src="/Icon.png" alt="" className="size-5 rounded-md object-contain" />
            <p className="text-[10px] font-extrabold tracking-[0.18em] text-nav-fg">RAPIDO</p>
          </div>
          <span className="rounded-full bg-nav-indicator px-1.5 py-0.5 text-[8px] font-bold text-nav-fg">
            🇬🇧 GB
          </span>
        </div>

        <div className="flex-1 space-y-2 overflow-hidden px-2.5 pb-2.5">
          <div className="rounded-xl border border-[#EEF0F3] bg-white p-2.5 shadow-sm">
            <p className="text-[12px] font-extrabold leading-tight">Welcome, Alex</p>
            <p className="mt-1 text-[8px] leading-relaxed text-[#6B7280]">
              Your full medical profile is active. Emergency tools match United Kingdom.
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {["Blood: O+", "Contacts: 2", "Age: 28", "Medical complete"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-nav-warm px-1.5 py-0.5 text-[7px] font-bold text-nav-fg"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#EEF0F3] bg-gradient-to-br from-[#1E2430] to-[#2A1218] p-2.5 text-white shadow-sm">
            <p className="text-[9px] font-extrabold">Live location</p>
            <div className="mt-1.5 h-16 rounded-lg bg-white/10">
              <div className="grid h-full place-items-center text-[8px] text-white/50">Map preview</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {["Emergency QR", "Stickers", "Share location", "Assistant"].map((tool) => (
              <div
                key={tool}
                className="rounded-xl border border-nav-indicator bg-white px-2 py-2 text-[8px] font-bold text-nav-fg shadow-sm"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-around border-t border-nav-indicator bg-nav-warm px-2 py-2">
          {["Home", "QR", "Map", "Chat"].map((tab, i) => (
            <span
              key={tab}
              className={`rounded-full px-2 py-1 text-[8px] font-bold ${
                i === 0 ? "bg-nav-indicator text-nav-fg" : "text-nav-fg/60"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
