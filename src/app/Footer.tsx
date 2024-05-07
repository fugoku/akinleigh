export default function Footer() {
  return (
    <footer className="text-white-500 py-40 mt-10 bg-[#d2e1f7] dark:bg-gray-500">
      <svg
        width="1440"
        height="271"
        viewBox="0 0 1440 271"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1790.53 219.129C1790.53 219.129 1531.09 393.942 1344.61 390.187C1087.67 385.014 1042.56 80.3515 789.216 37.2076C498.446 -12.3098 349.112 336.574 65.8352 254.397C-154.033 190.615 -375.89 -131.001 -375.89 -131.001"
          stroke="#2C6FD9"
          stroke-opacity="0.12"
          stroke-width="50"
        />
      </svg>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white-500 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-white-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white-500 uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-white-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white-500 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-white-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white-500 uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-white-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
