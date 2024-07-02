"use client";

import Link from "next/link";
import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section
      className="px-4  py-6 md:px-14 bg-mainDark text-mainLight fixed  top-0 w-full z-50 font-Quicksand ease-in duration-300 shadow-lg shadow-slate-600"
      id="navbar"
    >
      <nav className="flex flex-col justify-between container mx-auto md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <div id="#navbar-logo">
            <Link href="/">
              <h2 className="text-2xl font-semibold  hover:text-gray-400 ease-in duration-200 ">
                Serkan Safran
              </h2>
            </Link>
          </div>
          <div className="md:hidden">
            {!isMobileMenuOpen && (
              <div
                className="cursor-pointer hover:text-gray-400"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                <FaBars className="text-3xl" />
              </div>
            )}

            {isMobileMenuOpen && (
              <div
                className="cursor-pointer hover:text-gray-400"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                <FaTimes className="text-3xl" />
              </div>
            )}
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="hidden md:block">
          <ul className="flex justify-evenly items-center gap-10">
            <li className="text-xl  font-semibold  hover:bg-blue-700 rounded-md p-2 ease-in duration-200">
              <Link href="/">Home</Link>
            </li>
            <li className="text-xl font-semibold  hover:bg-blue-700 rounded-md p-2 ease-in duration-200">
              <Link href="#about">About</Link>
            </li>
            <li className="text-lg font-semibold  hover:bg-blue-700 rounded-md p-2 ease-in duration-200">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="text-lg font-semibold  hover:bg-blue-700 rounded-md p-2 ease-in duration-200">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* MOBILE NAVBAR */}

        {isMobileMenuOpen && (
          <ul className="flex flex-col gap-6 my-6">
            <li
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="text-xl font-semibold hover:bg-blue-700 rounded-md p-2 ease-in duration-300"
            >
              <Link href="#home">Home</Link>
            </li>
            <li
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="text-xl font-semibold hover:bg-blue-700 rounded-md p-2 ease-in duration-300"
            >
              <Link href="#about">About</Link>
            </li>
            <li
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="text-xl font-semibold hover:bg-blue-700 rounded-md p-2 ease-in duration-300"
            >
              <Link href="#projects">Projects</Link>
            </li>
            <li
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="text-xl font-semibold hover:bg-blue-700 rounded-md p-2 ease-in duration-300"
            >
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
