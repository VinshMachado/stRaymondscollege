"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavigationBlock } from "./NavigationBlock";
import Link from "next/link";

import Image from "next/image";
import MoblieNav from "./MoblieNav";

const Navbar = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full z-50 relative bg-red-900 flex justify-center items-center h-auto px-4 sm:px-10 flex-wrap">
        <div className="flex items-center mt-4 ">
          <Link href="/" className="flex items-center">
            <Image src="/Logo.png" alt="logo" width={117} height={46} />
            <span className="ml-2 text-3xl sm:text-6xl font-bold text-white">
              St Raymonds PU College
            </span>
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
