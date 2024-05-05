import Header from "@/components/header"
import Hero from "@/components/hero"
import WorldMap from "@/components/world-section";
import Old from  "@/components/oldpage";
import Dust from "@/components/dust"
import { Suspense } from "react";
import Bubble from "@/components/bubble";
import Beroll from "@/components/beroll";


export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <Beroll/>
      <Old/>
      {/* <WorldMap /> */}
    
    </ >
  );
}
