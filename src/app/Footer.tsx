import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[url('/footer.svg')] text-white-500 bg-[#d2e1f7] dark:bg-gray-500">
      {/* <Image
        src="/footer.svg"
        alt="footerfkdksdklsdlk"
        width={2000}
        height={2000}
      /> */}
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <Image src="/v2/fgu.svg" alt="logo" width={200} height={200} />
            <div className="text-gray-500 font-medium dark:text-white">
              Fugoku is a cloud-based web hosting platform that leverages AI to
              streamline the deployment process of web applications, websites,
              and databases.
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white-500 uppercase dark:text-white">
              Product
            </h2>
            <ul className="text-gray-500 dark:text-white font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Docs
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white-500 uppercase dark:text-white">
              Socials
            </h2>
            <ul className="text-gray-500 font-medium dark:text-white">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white-500 uppercase dark:text-white">
              Contact
            </h2>
            <ul className="text-gray-500 dark:text-white-400 font-medium dark:text-white">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  +2348169391259
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  fugoku@gmail.com
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  No 6, Lekki, Lagos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
