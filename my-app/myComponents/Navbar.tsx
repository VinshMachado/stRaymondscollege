"use client";
import React from "react";

import { NavigationBlock } from "./NavigationBlock";
import Link from "next/link";

import Image from "next/image";
import MoblieNav from "./MoblieNav";

const Navbar = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full z-50 relative bg-red-900 flex justify-center items-center h-auto px-4 sm:px-10 flex-wrap">
        <div className="flex w-full items-center justify-evenly mt-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/collegelogo.png"
              alt="logo"
              width={100}
              height={100}
              className=" mr-5 w-12 sm:w-[117px] h-auto"
            />
            <span className="ml-2 text-center text-xs sm:text-3xl be-vietnam-pro-extrabold text-white">
              ST RAYMOND&apos;S PRE UNIVERSITY COLLEGE
            </span>
            <Image
              src="/Logo.png"
              alt="logo"
              width={100}
              height={100}
              className="ml-5 w-12 sm:w-[117px] h-auto"
            />
          </Link>
        </div>
        <div className="m-2 hidden sm:block">
          <NavigationBlock />
        </div>
      </div>
      <div className="w-full sm:hidden mt-5 flex justify-center items-center">
        <MoblieNav />
      </div>
    </div>
  );
};

export default Navbar;
