import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <article className="bg-white py-[clamp(3.5rem,8vw,5.5rem)]">
      <div className="mx-auto w-[min(100%-2.5rem,44rem)]">
        <p className="mb-3 text-xs font-extrabold tracking-[0.22em] text-primary">RAPIDO</p>
        <h1 className="mb-3 text-[clamp(1.85rem,4vw,2.75rem)] font-extrabold tracking-tight text-[#1a1c1f]">
          {title}
        </h1>
        <p className="mb-10 text-sm font-semibold text-[#5a6068]">Last updated: {updated}</p>

        <div className="legal-prose space-y-8 text-[1.02rem] leading-relaxed text-[#3a3f46]">{children}</div>

        <p className="mt-12 border-t border-nav-indicator pt-8 text-sm text-[#5a6068]">
          Questions? Contact{" "}
          <a href="mailto:ceo@bushratech.com" className="font-semibold text-primary hover:underline">
            ceo@bushratech.com
          </a>
          {" · "}
          <Link to="/" className="font-semibold text-primary hover:underline">
            Back to home
          </Link>
        </p>
      </div>
    </article>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-extrabold tracking-tight text-[#1a1c1f]">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
