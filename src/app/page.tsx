import Header from "@/components/header";
import Hero from "@/components/hero";
import Advantage from "@/components/advantage";
// import WorldMap from "@/components/world-section";
import Old from "@/components/oldpage";
// import Dust from "@/components/dust"
import { Suspense } from "react";
// import Bubble from "@/components/bubble";
import Beroll from "@/components/beroll";
import Consulting from "@/components/consulting";
import Manage from "@/components/manage";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Beroll/> */}
      <Advantage />
      <Services />
      <Consulting />
      <Manage />
      {/* <Old /> */}
      {/* <WorldMap /> */}
    </>
  );
}
