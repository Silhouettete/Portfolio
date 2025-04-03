// import { Component } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
export default function Navbar() {
  return (
    <header className="bg-black-300 md-sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="title-font font-mono font-medium text-green-400 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-mono text-xl">
            About
          </a>
        </p>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-100 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-6 font-mono hover:text-blue-300">
            Works
          </a>
          <a href="#skills" className="mr-6 font-mono hover:text-blue-300">
            Skills
          </a>
          <a href="#experiences" className="mr-6 hover:text-blue-300 font-mono">
            Experiences
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-green-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          <p className="title-font font-mono font-medium text-white-400 mb-4 md:mb-0">
            Contact Me!
          </p>

          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
