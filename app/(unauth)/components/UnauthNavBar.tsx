"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function UnauthNavBar() {
  const pathName = usePathname();
  return (
    <nav
      id="navbar"
      className="sticky w-full z-50 transition-all duration-300 bg-darker/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D9FF] via-[#C77DFF] to-[#FF6B9D] flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <i className="text-white text-xl" data-fa-i2svg="">
                <svg
                  className="svg-inline--fa fa-chart-pie"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="chart-pie"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"
                  ></path>
                </svg>
              </i>
            </div>
            <Link href="/">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              KnitPocket<span className="text-[#00D9FF]">.io</span>
            </span>
            </Link>
          </div>
          { pathName === "/" &&
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          }
          <div>
            <Link
              href={pathName === "/sign-in" ? "/sign-up" : "/sign-in"}
              className="
    btn btn-glow btn-secondary 
    relative inline-flex items-center justify-center gap-2
    px-6 py-2.5 rounded-full text-sm font-medium text-white
    transition-all duration-500 ease-out select-none cursor-pointer

    hover:scale-[1.06] active:scale-[0.96]
    outline-none focus:outline-none focus-visible:ring-0
  "
            >
              {pathName === "/sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
