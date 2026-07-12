import { PhoneFrame } from "../PhoneFrame";

/** Mirrors Flutter `EmergencyViewScreen` — what responders see after scan */
export function EmergencyViewMock({ className = "" }: { className?: string }) {
  return (
    <PhoneFrame className={className}>
      <div className="flex h-full flex-col bg-surface-light">
        <div className="flex items-center justify-between border-b border-black/5 px-3 py-2.5">
          <p className="text-[11px] font-extrabold tracking-tight">Emergency View</p>
          <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[8px] font-bold text-primary">
            Aa
          </span>
        </div>

        <div className="flex-1 space-y-2 overflow-y-auto p-2.5">
          <div className="rounded-xl border border-[#EEF0F3] bg-white p-2.5 shadow-sm">
            <p className="text-center text-[13px] font-extrabold">Alex Morgan</p>
            <div className="mt-1.5 rounded-lg bg-red-50 px-2 py-1.5 text-center text-[9px] font-bold text-red-700">
              Blood group: O+ · Age 28
            </div>
            <div className="mt-1.5 flex justify-center gap-1">
              <span className="rounded-full bg-nav-warm px-2 py-0.5 text-[7px] font-bold text-nav-fg">
                Organ donor
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-[#EEF0F3] bg-white p-2.5 shadow-sm">
            <p className="mb-1.5 text-[9px] font-extrabold text-[#374151]">Emergency contacts</p>
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[10px] font-bold">Jordan Morgan</p>
                <p className="text-[8px] text-[#6B7280]">Spouse · Primary</p>
              </div>
              <div className="flex gap-1">
                <span className="grid size-6 place-items-center rounded-full bg-primary text-[9px] text-white">
                  ☎
                </span>
                <span className="grid size-6 place-items-center rounded-full bg-emerald-500 text-[8px] text-white">
                  W
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#EEF0F3] bg-white p-2.5 shadow-sm">
            <p className="mb-1.5 text-[9px] font-extrabold text-[#374151]">Medical information</p>
            <Row label="Allergies" value="Penicillin" />
            <Row label="Conditions" value="Asthma" />
            <Row label="Medications" value="Inhaler" />
          </div>

          <div className="rounded-xl border border-[#EEF0F3] bg-white p-2.5 shadow-sm">
            <p className="mb-1 text-[9px] font-extrabold text-[#374151]">Local emergency</p>
            <p className="text-[9px] font-bold">🇬🇧 United Kingdom</p>
            <div className="mt-1 flex gap-1">
              {["999", "112"].map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[8px] font-bold text-red-700"
                >
                  ☎ {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-1 last:mb-0">
      <p className="text-[7px] font-semibold uppercase tracking-wide text-[#9CA3AF]">{label}</p>
      <p className="text-[9px] font-semibold text-[#1F2937]">{value}</p>
    </div>
  );
}
