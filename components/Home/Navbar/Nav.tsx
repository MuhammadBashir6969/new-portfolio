"use client";
import { Navlinks } from "@/constants/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type NavProps = {
  openNav: () => void;
};

const Nav = ({ openNav }: NavProps) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-[#0f142ed9] shadow-md" : "fixed"
      }duration-200 h-[12vh] z-10000 fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo */}
        <Link href="#" className="inline-block">
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FaCode className="w-5 h-5 text-black" />
            </div>

            <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
              Bashir Muhammad
            </h1>
          </div>
        </Link>
        {/* Navigations */}
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200 no-underline"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        {/* Butttons */}
        <div className="flex items-center space-x-4">
          <a href="/PDF/IDRIS BASHIR MUHAMMAD CV 2026.pdf" download>
            <button
              className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2"
              title="Download CV"
            >
              <BiDownload className="w-5 h-5" />
              <span>Download CV</span>
            </button>
          </a>

          {/*Burger Menu*/}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
