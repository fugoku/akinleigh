import features from "../../public/features.svg";
import Image from "next/image";

export default function Manage() {
  return (
    <div className="bg-white">
      <div className="px-6 lg:px-8">
        <div className="mx-auto py-32">
          <div className="text-center leading-8 pb-10 mx-auto max-w-4xl ">
            <h2 className="text-4xl leading-[100px] font-bold tracking-wide text-gray-900 sm:text-6xl">
              Fugoku&apos;s <span className="text-primary">Features</span> are
              everything you need for easy work
            </h2>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Effortlessly manage your web applications, monitor your
              website&apos;s performance in real-time, and make data-driven
              decisions with our intuitive and user-friendly dashboard
            </p> */}
          </div>
          <div className="flex flex-col gap-y-5 max-w-6xl mx-auto my-2">
            <div className=" w-full max-w-full lg:flex gap-x-5">
              {/* start */}
              <div className="py-5 gap-x-5 border rounded-lg border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded p-2  leading-normal">
                <div className="flex">
                  <div className="text-gray-900 flex-col font-bold text-xl">
                    <Image
                      src="/features.svg"
                      alt="sdjdsjds"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold flex gap-x-5">
                      <h3>Cloud Consulting</h3>
                      <div className="flex items-center justify-start gap-x-6">
                        <a
                          href="#"
                          className="rounded-md text-sm font-semibold text-primary shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base p-0">
                      Fugoku provides tools for managing databases, making it
                      easy to deploy and manage databases for web applications
                      and websites.
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-5 gap-x-5 border rounded-lg border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded p-2 flex leading-normal">
                <div className="text-gray-900 flex-col font-bold text-xl mb-2">
                  <Image
                    src="/features.svg"
                    alt="sdjdsjds"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-1">
                  <div className="font-bold flex gap-x-5">
                    <h3>Database Deployment</h3>
                    <div className="flex items-center justify-start gap-x-6">
                      <a
                        href="#"
                        className="rounded-md text-sm font-semibold text-primary shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base p-0">
                    Our cloud hosting provides secure, scalable, and reliable
                    hosting solutions that allow businesses to manage their
                    resources and deploy applications.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full max-w-full lg:flex gap-x-5">
              <div className="py-5 gap-x-5 border rounded-lg border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded p-2 flex leading-normal">
                <div className="text-gray-900 flex-col font-bold text-xl mb-2">
                  <Image
                    src="/features.svg"
                    alt="sdjdsjds"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-1">
                  <div className="font-bold flex gap-x-5">
                    <h3>Cloud Hosting</h3>
                    <div className="flex items-center justify-start gap-x-6">
                      <a
                        href="#"
                        className="rounded-md text-sm font-semibold text-primary shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base p-0">
                    Fugoku provides tools for managing databases, making it easy
                    to deploy and manage databases for web applications and
                    websites.
                  </p>
                </div>
              </div>
              <div className="py-5 gap-x-5 border rounded-lg border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded p-2 flex leading-normal">
                <div className="text-gray-900 flex-col font-bold text-xl mb-2">
                  <Image
                    src="/features.svg"
                    alt="sdjdsjds"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-1">
                  <div className="font-bold flex gap-x-5">
                    <h3>Cloud Consulting</h3>
                    <div className="flex items-center justify-start gap-x-6">
                      <a
                        href="#"
                        className="rounded-md text-sm font-semibold text-primary shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base p-0">
                    Our cloud hosting provides secure, scalable, and reliable
                    hosting solutions that allow businesses to manage their
                    resources and deploy applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </div>
  );
}
