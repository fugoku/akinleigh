"use client";
import { useState } from "react";
import Image from "next/image";
// import { ModeToggle } from "@/components/atoms/theme-toggle";
import { DockDemo } from "./atoms/dock";
import { MiddleNav } from "./atoms/navdock";
import ShinyButton from "@/components/magicui/shiny-button";
import Link from "next/link";

const links = [
  { label: "Cloud", href: "/cloud" },
  { label: "Mentor", href: "/mentor" },
];

const logo = "/v2/fgu.svg";

export function ShinyButtonDemo() {
  return <ShinyButton text="Shiny Button" className="" />;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <>
      <header className="bg-fill absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Fugoku</span>
              <Image src={logo} height={144} width={144} alt="Fugoku logo" />
            </Link>
          </div>
          <div className={`flex lg:hidden ${mobileMenuOpen ? "hidden" : ""}`}>
            <button
              type="button"
              onClick={toggleMenu}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <MiddleNav />

          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-5 pt-4">
            <Link href="/">
              <ShinyButton text="Login" className="" />
            </Link>
          </div>
        </nav>

        <div
          className={`lg:hidden ${mobileMenuOpen ? "" : "hidden"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Fugoku</span>
                <img className="h-8 w-auto" src={logo} alt="Fugoku logo" />
              </Link>
              <button
                onClick={toggleMenu}
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-fade hover:bg-gray-50"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-fade hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
