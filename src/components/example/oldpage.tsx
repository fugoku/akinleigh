// import Image from "next/image";
// import "./globals.css";
import Image from "next/image";
import Header from "@/components/header";
import WorldMap from "@/components/example/world-section";

export default function Home() {
  // className = "flex min-h-screen flex-col items-center justify-between p-24"
  return (
    <main>
      {/* <Header />
      <WorldMap /> */}

      <div
        className=" mt-20 lg:mt-0 flex-col sm:flex-row mx-2 flex items-center my-10 justify-between"
        aria-label="Global"
      >
        <div className="sm:flex sm:gap-x-5 mx-auto max-w-2xl">
          <div className="">
            <h1 className="text-2xl font-bold text-gray-900 md:text-4xl leading-loose">
              Build, Deploy and Scale your Application on the Cloud
            </h1>
            <p className="mt-6 sm:text-lg  text-sm text-gray-600 leading-loose max-w-1xl">
              Run your application on a fully managened system. <br />
              Say bye to deployment Hassles.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#000435] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000435]"
              >
                Learn more
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className=" sm:flex sm:gap-x-5 mx-auto max-w-2xl  ">
          <Image
            width={600}
            height={600}
            src="/assets/fugoku-cloud1.jpeg"
            alt="side-image"
          />
        </div>
      </div>
      <div
        className="bg-[#000435] py-6 flex-col sm:flex-row gap-y-10 sm:gap-y-0 flex items-center justify-between"
        aria-label="Global"
      >
        <div className=" sm:flex sm:gap-x-5 mx-auto max-w-2xl ">
          <div className="text-start py-10">
            <h2 className="pb-10  text-1xl font-bold tracking-tight text-white sm:text-3xl leading-loose">
              Cloud Hosting made easy
            </h2>

            <p className="sm:text-lg text-sm leading-8 text-white leading-loose">
              Need more information or perhaps extra help? Send your message or
              request for a full documentation on fugoku.
            </p>
          </div>
        </div>
        <div className=" flex-col gap-y-10 sm:flex sm:gap-x-5 mx-auto max-w-2xl">
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-[#00d2ff] py-2">
              <input
                className="appearance-none bg-transparent w-full text-[white] mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Type your questions"
                aria-label="Full name"
              />
              <button
                className="flex-shrink-0 bg-[#00d2ff] hover:bg-[#00d2ff] border-[#00d2ff] hover:border-[#00d2ff] text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
          <form className="w-full max-w-sm">
            <div className="flex items-center py-2">
              <button
                className="flex-shrink-0 bg-[#00d2ff] hover:bg-[#00d2ff] border-[#00d2ff] hover:border-[#00d2ff] text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                Download Documentation
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* threes starts */}
      <h2 className="text-2xl font-bold tracking-tight text-center items-center py-10 pb-20 text-black sm:text-3xl">
        Our Offerings
      </h2>
      <div
        className="text-black gap-y-10 m-5 sm:gap-y-0 sm:gap-x-10 flex-wrap flex content-center items-center  justify-items-center sm:m-auto justify-center"
        aria-label="Global"
      >
        {/* <div className="flex-1 w-32 ..."> */}
        <div className="sm:flex-1 sm:w-32 max-w-sm border border-black-500 rounded rounded-1xl overflow-hidden shadow-lg">
          <div className="flex content-center justify-center items-center">
            <Image
              width={200}
              height={200}
              className=""
              src="/assets/cloud4.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Application Deployment and Managed Hosting
            </div>
            <p className="text-gray-700 text-base">
              Move your application from development to production to deployment
              in one breath. The easiest and fastest way to deploy your
              application. Application deployment made easy
            </p>
          </div>
          <a
            href="#"
            className="rounded-md bg-[#000435] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000435]"
          >
            Learn more
          </a>

          {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div> */}
        </div>
        {/* </div> */}
        {/* <div className="flex-1 w-32 ..."> */}
        <div className="sm:flex-1 sm:w-32 max-w-sm border border-black-500 rounded rounded-1xl overflow-hidden shadow-lg">
          <div className="flex content-center justify-center items-center">
            <Image
              width={200}
              height={200}
              className=""
              src="/assets/cloud3.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              IT Consultancy and Support
            </div>
            <p className="text-gray-700 text-base">
              Have software related issies? whether it is a problem that needs
              solutions or a bug or just a confusion that needs to be cleared,
              fugoku has got you 24/7 support at a snap of your finger{" "}
            </p>
          </div>
          <a
            href="#"
            className="rounded-md bg-[#000435] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000435]"
          >
            Learn more
          </a>
        </div>
        {/* </div> */}
        {/* <div className="flex-1 w-32 ..."> */}
        <div className="sm:flex-1 sm:w-32 max-w-sm border border-black-500 rounded rounded-1xl overflow-hidden shadow-lg">
          <div className="flex content-center justify-center items-center">
            <Image
              width={200}
              height={200}
              className=""
              src="/assets/cloud4.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              IT Services, Operations and Fixes
            </div>
            <p className="text-gray-700 text-base">
              Register now, deploy your first application on fugoku anytime,
              anywhere in just one step
            </p>
          </div>
          <a
            href="#"
            className="rounded-md bg-[#000435] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000435]"
          >
            Learn more
          </a>
          {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div> */}
        </div>
        {/* </div> */}
      </div>
      {/* threes ends */}
      {/* make starts */}
      <div
        className="flex-col sm:flex-row gap-y-10 sm:gap-y-0 flex items-center sm:gap-x-10 justify-between py-48 px-10"
        aria-label="Global"
      >
        <div className=" sm:flex sm:gap-x-5 mx-auto max-w-2xl">
          <div className="text-center w-55">
            <h4 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Applications using fugoku hosting
            </h4>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
        <div className=" shadow-lg border border-black-500 rounded rounded-1xl overflow-hidden  shadow-black sm:flex sm:gap-x-5 mx-auto max-w-2xl">
          <Image
            width={600}
            height={600}
            src="/assets/cloud1.jpeg"
            alt="side-image"
          />
        </div>
      </div>

      <div
        className="text-black m-auto sm:gap-x-10 gap-y-10 sm:m-5 sm:gap-y-0 flex-col sm:flex-row flex content-center items-center  justify-items-centersm:mx-10 justify-center"
        aria-label="Global"
      >
        {/* <div className="flex-1 w-32 ..."> */}
        <div className="sm:h-[50rem] w-110 content-center items-center justify-center sm:flex-1 sm:w-20 sm:max-w-sm border border-black-500 rounded rounded-1xl overflow-hidden shadow-lg">
          <Image
            width={500}
            height={500}
            className="w-full content-cent"
            src="/assets/cloud4.png"
            alt="Sunset in the mountains"
          />
        </div>
        {/* </div> */}
        {/* <div className="flex-1 w-32 ..."> */}
        <div className="flex-1 w-110 overflow-hidden shadow-sm">
          <div className="flex flex-wrap flex-row">
            <div className="text-gray-700 w-[18rem] max-h-[25rem] text-center px-4 py-2 m-2">
              <div className="flex-1 max-h-[25rem] w-[18rem] border border-black-500 rounded rounded-1xl overflow-hidden shadow-lg">
                <div className="flex content-center justify-center items-center">
                  <Image
                    width={200}
                    height={200}
                    className=""
                    src="/assets/cloud1.jpeg"
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Applications</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                {/* <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div> */}
              </div>
            </div>
            <div className="text-gray-700 w-[18rem] max-h-[25rem] text-center px-4 py-2 m-2">
              <div className="flex-1  max-h-[25rem] w-[18rem] border border-black-500 rounded rounded-1xl overflow-hidden shadow-lg">
                <div className="flex content-center justify-center items-center">
                  <Image
                    width={200}
                    height={200}
                    className=""
                    src="/assets/cloud1.jpeg"
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Database</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                {/* <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div> */}
              </div>
            </div>
            <div className="text-gray-700 w-[18rem] max-h-[25rem] text-center px-4 py-2 m-2">
              <div className="flex-1 max-h-[25rem] w-[18rem] border border-black-500 rounded rounded-1xl overflow-hidden shadow-lg">
                <div className="flex content-center justify-center items-center">
                  <Image
                    width={200}
                    height={200}
                    className=""
                    src="/assets/cloud2.png"
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Services</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                {/* <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div> */}
              </div>
            </div>
            <div className="text-gray-700 w-[18rem] max-h-[25rem] text-center px-4 py-2 m-2">
              <div className="flex-1 max-h-[25rem] w-[18rem] border border-black-500 rounded rounded-1xl overflow-hidden shadow-lg">
                <div className="flex content-center justify-center items-center">
                  <Image
                    width={200}
                    height={200}
                    className=""
                    src="/assets/cloud1.jpeg"
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Git Sources</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                {/* <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div> */}
              </div>
            </div>
            <div className="text-gray-700 w-[18rem] max-h-[25rem] text-center px-4 py-2 m-2">
              <div className="flex-1 max-h-[25rem] w-[18rem] border border-black-500 rounded rounded-1xl overflow-hidden shadow-lg">
                <div className="flex content-center justify-center items-center">
                  <Image
                    width={200}
                    height={200}
                    className=""
                    src="/assets/cloud1.jpeg"
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Destination</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                {/* <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div
        className="flex-col sm:flex-row gap-y-10 sm:gap-y-0 flex items-center sm:gap-x-5 shadow-lg shadow-black rounded rounded-1xl justify-between my-48 mx-5 sm:mx-24 sm:px-10"
        aria-label="Global"
      >
        <div className=" sm:flex sm:gap-x-5 mx-auto sm:max-w-2xl">
          <div className="text-center">
            <h4 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Fugoku
            </h4>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
        <div className="rounded-1xl rounded flex mx-auto max-w-2xl">
          <Image
            width={600}
            className=""
            height={600}
            src="/assets/cloud1.jpeg"
            alt="side-image"
          />
        </div>
      </div>
      <h4 className="text-2xl mx-2 py-10 text-center content-center font-bold tracking-tight text-gray-900 sm:text-3xl">
        See what others are saying about Fugoko, testimonials
      </h4>
      <div className="hidden mb-10 shadow-lg  shadow-black rounded-1xl sm:flex sm:gap-x-5 center mx-auto max-w-2xl">
        <Image
          width={500}
          height={500}
          className="rounded-1xl"
          src="/assets/cloud2.png"
          alt="side-image"
        />
      </div>
      <div
        className="bg-[#000435] py-6 flex-col sm:flex-row gap-y-10 sm:gap-y-0 flex items-center justify-between"
        aria-label="Global"
      >
        <div className=" sm:flex sm:gap-x-5 mx-auto max-w-2xl ">
          <div className="text-start py-10">
            <h2 className="pb-10  text-1xl font-bold tracking-tight text-white sm:text-3xl leading-loose">
              Cloud Hosting made easy
            </h2>

            <p className="sm:text-lg text-sm leading-8 text-white leading-loose">
              Need more information or perhaps extra help? Send your message or
              request for a full documentation on fugoku.
            </p>
          </div>
        </div>
        <div className=" flex-col gap-y-10 sm:flex sm:gap-x-5 mx-auto max-w-2xl">
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-[#00d2ff] py-2">
              <input
                className="appearance-none bg-transparent w-full text-[white] mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Type your questions"
                aria-label="Full name"
              />
              <button
                className="flex-shrink-0 bg-[#00d2ff] hover:bg-[#00d2ff] border-[#00d2ff] hover:border-[#00d2ff] text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
          <form className="w-full max-w-sm">
            <div className="flex items-center py-2">
              <button
                className="flex-shrink-0 bg-[#00d2ff] hover:bg-[#00d2ff] border-[#00d2ff] hover:border-[#00d2ff] text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                Download Documentation
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* get more value */}
      {/* <h2 className="text-2xl font-bold tracking-tight text-center items-center py-10 pb-20 text-black sm:text-3xl">News and Blogs</h2>
      <div className="text-black bg-[#daf0ff] py-10 mx-10 rounded rounded-1xl gap-y-10 sm:gap-y-0 sm:gap-x-10 flex-col sm:flex-row flex content-center items-center  justify-items-center m-auto justify-center" aria-label="Global">
        <div className="flex-1  mb-5 sm:mb-0 text-black sm:w-32 sm:max-w-sm overflow-hidden shadow-lg">

          <div className="px-6 py-4 
          ">
            <div className="font-bold text-xl mb-2 ">The Coldest Sunset</div>
            <p className=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>

        </div>
        <div className="flex-1 sm:w-32 sm:max-w-sm  mb-5 sm:mb-0 overflow-hidden shadow-lg">

          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>

        </div>
        <div className="flex-1 sm:w-32 mb-5 sm:mb-0 sm:max-w-sm overflow-hidden shadow-lg">
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>

        </div>
      </div> */}
      {/* get more value ends */}
      {/* <h4 className="text-2xl font-bold my-10 tracking-tight text-center items-center py-10 pb-20 text-black sm:text-3xl">See how customers are innovating</h4> */}
      {/* <div className="flex-col sm:flex-row gap-y-10 sm:gap-y-0 flex items-center sm:gap-x-5 shadow-lg shadow-black rounded rounded-1xl justify-between my-48 mx-5 sm:mx-24 sm:px-10" aria-label="Global">
        <div className=" sm:flex sm:gap-x-5 mx-auto sm:max-w-2xl">
          <div className="text-center">
            <h4 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">mimi solutions</h4>
            <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          </div>
        </div>
        <div className="rounded-1xl rounded flex mx-auto max-w-2xl">
          <Image width={600} className="" height={600} src="/assets/cloud1.jpeg" alt='side-image' />
        </div>
      </div> */}
      {/* threes2 starts */}
      {/* <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Take the next step</h2> */}
      {/* <div className="text-black mb-10 flex-col sm:flex-row sm:gap-y-0 gap-y-10 sm:gap-x-10 flex content-center items-center  justify-items-center m-auto justify-center" aria-label="Global">
        <div className="flex-1 sm:w-32 sm:max-w-sm border border-black-500 rounded rounded-1xl overflow-hidden shadow-lg">
          <div className="flex content-center justify-center items-center">
            <Image width={200} height={200} className="" src="/assets/cloud2.png" alt="Sunset in the mountains" />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
        <div className="flex-1 sm:w-32 sm:max-w-sm border border-black-500 rounded rounded-1xl overflow-hidden shadow-lg">
          <div className="flex content-center justify-center items-center">
            <Image width={200} height={200} className="" src="/assets/cloud1.jpeg" alt="Sunset in the mountains" />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
        <div className="flex-1 sm:w-32 sm:max-w-sm border border-black-500 rounded rounded-1xl overflow-hidden shadow-lg">
          <div className="flex content-center justify-center items-center">
            <Image width={200} height={200} className="" src="/assets/cloud2.png" alt="Sunset in the mountains" />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div> */}
    </main>
  );
}
