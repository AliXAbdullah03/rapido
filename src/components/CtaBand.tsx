import { useEffect, useState } from "react";
import { Reveal } from "../hooks/useReveal";

/** Always hits backend — serves newest Flutter release APK when available */
const APK_HREF = "/api/download/latest";
const APK_FILENAME = "RAPIDO.apk";

type ReleaseInfo = {
  versionHint: string;
  mtime: string;
  size: number;
};

export function CtaBand() {
  const [release, setRelease] = useState<ReleaseInfo | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/releases/latest")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data?.ok) return;
        setRelease({
          versionHint: data.versionHint,
          mtime: data.mtime,
          size: data.size,
        });
      })
      .catch(() => {
        /* Vite-only without backend: buttons still attempt /api via proxy */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const sizeMb = release ? (release.size / (1024 * 1024)).toFixed(1) : null;

  return (
    <section
      id="get-app"
      className="hero-gradient relative overflow-hidden py-[clamp(4.5rem,10vw,6.5rem)] text-center text-white"
      aria-labelledby="cta-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="grid-overlay absolute inset-0" />
        <div className="absolute -top-28 right-[10%] size-[380px] rounded-full bg-accent/30 blur-[70px]" />
      </div>

      <Reveal className="relative z-10 mx-auto w-[min(100%-2.5rem,70rem)]">
        <p className="mb-4 text-[0.95rem] font-extrabold tracking-[0.28em]">RAPIDO</p>
        <h2 id="cta-heading" className="mb-3 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold tracking-tight">
          Get RAPIDO before you need it
        </h2>
        <p className="mx-auto mb-8 max-w-[36ch] text-[1.05rem] text-white/90">
          Scan once. Help arrives faster. Put emergency readiness in your pocket.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <StoreButton label="Download latest" store="RAPIDO APK" variant="primary" />
          <StoreButton label="Direct install" store="Android APK" variant="android" />
        </div>
        <p className="mx-auto mt-4 max-w-[42ch] text-[0.8rem] text-white/65">
          {release
            ? `Latest release: ${release.versionHint}${sizeMb ? ` · ${sizeMb} MB` : ""}. Open the file and allow install from this source if Android asks.`
            : "Downloads the latest RAPIDO release APK. Open the file and allow install from this source if Android asks."}
        </p>
      </Reveal>
    </section>
  );
}

function StoreButton({
  label,
  store,
  variant,
}: {
  label: string;
  store: string;
  variant: "primary" | "android";
}) {
  return (
    <a
      href={APK_HREF}
      download={APK_FILENAME}
      type="application/vnd.android.package-archive"
      className="inline-flex min-w-[180px] items-center gap-3 rounded-xl bg-white px-4 py-3 text-surface-dark transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-nav-warm hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
      aria-label={`Download ${store}`}
    >
      <span className="grid size-6 place-items-center" aria-hidden>
        {variant === "android" ? <AndroidIcon /> : <DownloadIcon />}
      </span>
      <span className="flex flex-col items-start leading-tight">
        <small className="text-[0.68rem] font-semibold opacity-65">{label}</small>
        <span className="font-bold">{store}</span>
      </span>
    </a>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 3v12m0 0l4-4m-4 4l-4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24A11.46 11.46 0 0012 8.25c-1.53 0-2.98.29-4.47.91L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C4.12 11.17 2.5 13.84 2.5 16.9v.6c0 .83.67 1.5 1.5 1.5h16c.83 0 1.5-.67 1.5-1.5v-.6c0-3.06-1.62-5.73-3.9-7.42zM7.75 15.4a1 1 0 110-2 1 1 0 010 2zm8.5 0a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
  );
}
