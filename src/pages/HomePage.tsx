import { CtaBand } from "../components/CtaBand";
import { Faq } from "../components/Faq";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Problem } from "../components/Problem";
import { Trust } from "../components/Trust";

export function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Trust />
      <CtaBand />
      <Faq />
    </>
  );
}
