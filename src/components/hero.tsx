import DotPattern from "@/components/magicui/dot-pattern";
import TextReveal from "@/components/magicui/text-reveal";
import { DockDemo } from "./atoms/dock";
import { DotPatternDemo } from "./atoms/dot-pattern";
import Bubble from "./example/bubble";
import { Suspense } from "react";
import WorldMap from "./example/world-section";

export async function TextRevealDemo() {
  const text = "Managed Cloud Services Expert Marketplace";
  return <TextReveal text={text} />;
}

export default function Hero() {
  return (
    <div className="bg-fill rounded-b-xl">
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <span className="pt-12 pb-6 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Managed Cloud Service
        </span>
      </div>
      <TextRevealDemo />
      <DotPatternDemo />
    </div>
  );
}
