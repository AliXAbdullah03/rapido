import type { ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

/** Device chrome for app screen mockups */
export function PhoneFrame({ children, className = "", dark = false }: PhoneFrameProps) {
  return (
    <div
      className={`relative mx-auto w-[220px] sm:w-[248px] overflow-hidden rounded-[2rem] border border-black/20 shadow-[0_24px_48px_rgba(20,10,12,0.28)] ${className}`}
      style={{
        background: dark
          ? "linear-gradient(160deg,#2a1218,#140a0c)"
          : "linear-gradient(160deg,#1c1c1e,#0a0a0a)",
      }}
    >
      <div className="px-2.5 pb-2.5 pt-2">
        <div className="mx-auto mb-2 h-1.5 w-[38%] rounded-full bg-white/15" />
        <div
          className={`relative aspect-[9/17] overflow-hidden rounded-[1.35rem] ${
            dark ? "bg-surface-dark text-white" : "bg-surface-light text-[#1a1c1f]"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
