"use client";
// import { Dialog } from "@headlessui/react";
import mapData from "@/data/map.json";
import greenifydata from "@/data/greenify.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export default function WorldMap() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8 z-10 py-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" />

        <div className="animate-fade-in-once lg:h-[67vh] absolute -z-50  left-0 top-0">
          <Lottie
            animationData={mapData}
            onComplete={() => console.log("try")}
          />
          ;
        </div>
        <div className="mx-auto max-w-2xl ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <a href="#" className="font-semibold text-primary">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Build Easily, Deploy Fast.
            </h1>

            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Streamline devops and deployment process of your business
              applications, services, and databases with artificial
              intelligence.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
