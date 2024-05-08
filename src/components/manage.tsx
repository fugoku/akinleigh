import Image from "next/image";

export default function Manage() {
  return (
    <div className=" bg-white rounded-t-xl bg-gradient-to-b from-white from-10% via-slate-50 via-30% to-fill to-90% ">
      <div className="px-6 lg:px-8 rounded-t-xl ">
        <div className="mx-auto py-32">
          <div className="">
            <div className=" flex leading-8 pb-10 mx-auto max-w-7xl gap-x-5">
              <p className="flex-1 font-semibold tracking-wide text-gray-900 text-6xl">
                Take <span className="text-primary">advantage</span> of our
                dashboard
              </p>
              <p className="flex-1 mt-6 text-lg leading-8 text-gray-600">
                Effortlessly manage your web applications, monitor your
                website&apos;s performance in real-time, and make data-driven
                decisions with our intuitive and user-friendly dashboard
              </p>
            </div>
          </div>
          <div className="bg-[url('/effort.svg')]">
            <div className="mx-auto pt-32 px-48">
              <Image
                src="/dashboard.svg"
                alt="dashboard"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className=" flex leading-8 mx-auto max-w-7xl pt-32 gap-x-5">
            <div className="flex-1">
              <p className=" font-semibold tracking-wide text-white text-6xl">
                We <span className="text-primary">have</span> been waiting for
                you
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
                   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Schedule Appointment <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mx-auto ">
              <Image
                src="/dashboard.svg"
                alt="dashboard"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
