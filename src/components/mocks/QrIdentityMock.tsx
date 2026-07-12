import { PhoneFrame } from "../PhoneFrame";

/** Mirrors Flutter `QrCodeScreen` / `EmergencyQrCard` */
export function QrIdentityMock({ className = "" }: { className?: string }) {
  return (
    <PhoneFrame className={className}>
      <div className="flex h-full flex-col bg-surface-light">
        <div className="flex items-center justify-between border-b border-black/5 px-3 py-2.5">
          <p className="text-[11px] font-extrabold tracking-tight">Your QR Code</p>
          <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[8px] font-bold text-primary">
            Aa
          </span>
        </div>

        <div className="flex-1 space-y-2.5 overflow-hidden p-3">
          <div className="flex items-center gap-2">
            <span className="h-5 w-1 rounded-full bg-gradient-to-b from-primary to-accent" />
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-extrabold tracking-tight">QR Identity</p>
              <p className="truncate text-[8px] text-[#6B7280]">Tap your QR to enlarge</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-1.5 py-0.5 text-[8px] font-bold text-primary">
              Scan ready
            </span>
          </div>

          <div className="animate-breathe rounded-2xl border border-primary/20 bg-gradient-to-br from-white to-[#FFF8F6] p-3 shadow-[0_8px_20px_rgba(209,59,59,0.12)]">
            <div className="mx-auto mb-2 grid aspect-square w-[72%] place-items-center rounded-xl bg-white p-2 shadow-sm">
              <MiniQr />
            </div>
            <div className="text-center">
              <p className="text-[11px] font-extrabold">Alex Morgan</p>
              <p className="text-[9px] font-semibold text-primary">O+ · Age 28</p>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-200/60 bg-emerald-50 px-2.5 py-1.5 text-[8px] font-semibold text-emerald-800">
            Offline ready — QR works without signal
          </div>

          <div className="flex gap-1.5 overflow-hidden">
            {[
              { label: "Download", from: "#1565C0", to: "#42A5F5" },
              { label: "Share", from: "#00897B", to: "#26A69A" },
              { label: "SOS view", from: "#B71C1C", to: "#E53935" },
            ].map((action) => (
              <div
                key={action.label}
                className="min-w-[64px] flex-1 rounded-xl p-2 text-white"
                style={{
                  background: `linear-gradient(135deg, ${action.from}, ${action.to})`,
                }}
              >
                <p className="text-[9px] font-extrabold">{action.label}</p>
                <p className="text-[7px] opacity-80">Action</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function MiniQr() {
  return (
    <svg viewBox="0 0 80 80" className="size-full text-surface-dark" aria-hidden>
      <rect x="4" y="4" width="22" height="22" rx="2" fill="currentColor" />
      <rect x="8" y="8" width="14" height="14" rx="1" fill="white" />
      <rect x="11" y="11" width="8" height="8" rx="1" fill="currentColor" />
      <rect x="54" y="4" width="22" height="22" rx="2" fill="currentColor" />
      <rect x="58" y="8" width="14" height="14" rx="1" fill="white" />
      <rect x="61" y="11" width="8" height="8" rx="1" fill="currentColor" />
      <rect x="4" y="54" width="22" height="22" rx="2" fill="currentColor" />
      <rect x="8" y="58" width="14" height="14" rx="1" fill="white" />
      <rect x="11" y="61" width="8" height="8" rx="1" fill="currentColor" />
      <rect x="32" y="8" width="6" height="6" fill="currentColor" />
      <rect x="42" y="8" width="6" height="6" fill="currentColor" />
      <rect x="32" y="18" width="6" height="6" fill="currentColor" />
      <rect x="8" y="32" width="6" height="6" fill="currentColor" />
      <rect x="18" y="32" width="6" height="6" fill="currentColor" />
      <rect x="32" y="32" width="6" height="6" fill="currentColor" />
      <rect x="42" y="32" width="6" height="6" fill="currentColor" />
      <rect x="54" y="32" width="6" height="6" fill="currentColor" />
      <rect x="64" y="32" width="6" height="6" fill="currentColor" />
      <rect x="32" y="42" width="6" height="6" fill="currentColor" />
      <rect x="54" y="42" width="6" height="6" fill="currentColor" />
      <rect x="64" y="54" width="6" height="6" fill="currentColor" />
      <rect x="42" y="54" width="6" height="6" fill="currentColor" />
      <rect x="32" y="64" width="6" height="6" fill="currentColor" />
      <rect x="54" y="64" width="12" height="6" fill="currentColor" />
      <rect x="42" y="64" width="6" height="6" fill="currentColor" />
    </svg>
  );
}
