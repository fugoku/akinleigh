import DotPattern from "@/components/magicui/dot-pattern";
import TextReveal from "@/components/magicui/text-reveal";
import { DockDemo } from "./atoms/dock";
import { DotPatternDemo } from "./atoms/dot-pattern";
import { ParticlesDemo } from "./atoms/particles";
import Bubble from "./example/bubble";
import { Suspense } from "react";
import WorldMap from "./example/world-section";

export async function TextRevealDemo() {
  const text = "Managed Cloud Services Expert Marketplace";
  return <TextReveal text={text} />;
}

export default async function Hero() {
  return (
    <div className="bg-fill rounded-b-xl">

      <ParticlesDemo/>
      <Suspense fallback={<div>...fugoku...</div>}>
        {await TextRevealDemo()}
      </Suspense>
      {/* <DotPatternDemo /> */}
    </div>
  );
}
