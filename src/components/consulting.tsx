// import WorldMap from "@/components/world-section";
// import Dust from "@/components/dust"
// import Bubble from "@/components/bubble"
// import { Suspense } from "react";
import Image from "next/image";

export default function Consulting() {
  return (
    <div className="bg-fill">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:py-48 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <span className="text-primary">Build Easy</span> Deploy Fast
              <span className="text-primary"></span>
            </h1>
            <p className="mt-6 text-md leading-8 text-white font-Montserrat">
              We offer a comprehensive suite of cloud services, including
              infrastructure as a Service (IaaS), Platform as a Service (PaaS),
              and Software as a Service (SaaS) to meet your specific needs. Our
              expert cloud consultants will guide you through every step of your
              cloud journey, from strategy and migration to ongoing optimization
              and support.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/consutancy"
                className="rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Get started
              </a>
              <a
                href="/consultancy"
                className="text-sm font-semibold leading-6 text-white"
              >
                Schedule Appointment <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
      </div>
      <section className="pb-14 ">
        <div className="mx-auto max-w-7xl bg-fade rounded-lg">
          <Image
            src="/rectangle.svg"
            alt="rectangle"
            width={1300}
            height={600}
          />
          {/* <WorldMap/> */}
          {/* <Suspense fallback="null">
                  <Bubble></Bubble>
              </Suspense> */}
          {/* <Dust/> */}
        </div>
      </section>
    </div>
  );
}
