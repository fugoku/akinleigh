const posts = [
  {
    title: "Database Deployment",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
  },
  {
    title: "Freelance needed",
    href: "#",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
  },
  {
    title: "Server management",
    href: "#",
    description:
      "Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.",
    date: "Jan 29, 2020",
    datetime: "2020-01-29",
  },
];

export default function Services() {
  return (
    <div className="bg-fill pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl">
            <span className="text-primary">Other</span> Services
            <span className="text-primary">.</span>
          </h1>

          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p className="mt-6 text-md leading-8 text-white font-Montserrat">
              Our expert cloud consultants will guide you through every step of
              your cloud journey, from strategy and migration to ongoing
              optimization and support.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-white bg-white placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary lg:max-w-xs"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                <button
                  type="button"
                  className="w-full bg-primary px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:w-auto sm:inline-flex"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              {/* <p className="text-sm text-slate-100">
                <time dateTime={post.datetime}>{post.date}</time>
              </p> */}
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-white">{post.title}</p>
                <p className="mt-3 text-base text-white">{post.description}</p>
              </a>
              <div className="mt-3">
                <a
                  href={post.href}
                  className="text-base font-semibold text-white hover:text-white"
                >
                  Get started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
