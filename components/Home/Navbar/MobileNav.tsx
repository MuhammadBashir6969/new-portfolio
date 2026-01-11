import React from "react";
import Link from "next/link";
import { Navlinks } from "@/constants/constants";
import { CgClose } from "react-icons/cg";

type NavProps = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: NavProps) => {
  return (
    <div>
      {/* Overlay */}
      <div
        onClick={closeNav}
        className={`
          fixed inset-0 bg-black transition-all duration-500 ease-in-out
          ${showNav ? "opacity-70 visible" : "opacity-0 invisible"}
          z-100002
        `}
      />

      {/* Nav panel */}
      <div
        className={`
          fixed right-0 top-0 h-full w-[80%] sm:w-[60%]
          bg-cyan-800 text-white flex flex-col justify-center space-y-6
          transition-all duration-500 ease-in-out
          ${
            showNav ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }
          z-100050
        `}
      >
        {Navlinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p className="w-fit ml-12 text-xl sm:text-[30px] border-b-[1.5px] border-white pb-1">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
