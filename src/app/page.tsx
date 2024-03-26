import Image from "next/image";
import Header from "@/components/header"
import WorldMap from "@/components/world-section";

export default function Home() {
  // className = "flex min-h-screen flex-col items-center justify-between p-24"
  return (
    <main >
      <Header />
      <WorldMap />
    </main>
  );
}
