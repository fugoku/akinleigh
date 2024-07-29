import Header from "@/components/header";
import Advantage from "@/components/advantage";
// import WorldMap from "@/components/world-section";
import Old from "@/components/oldpage";
// import Dust from "@/components/dust"
import { Suspense } from "react";
import Bubble from "@/components/bubble";
import Beroll from "@/components/beroll";
import Consulting from "@/components/consulting";
import Manage from "@/components/manage";
import Hero from "@/components/hero";
import HeroA from "@/components/hero-alt";

import Managed from "@/components/managed";



export default function Home() {
  return (
    <>
      <HeroA />

      <Hero />
      <Managed/>
      <Bubble/>
      {/* <Beroll/> */}
      {/* <Advantage /> */}
      {/* <Consulting /> */}
      {/* <Manage /> */}
      {/* <Old /> */}
      {/* <Header /> */}
      {/* <Hero2/> */}

      {/* <Old/> */}
      {/* <WorldMap /> */}
    </>
  );
}
