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

const Navbar = () => {
  return (
    <div className="w-full bg-red-900 flex justify-between items-center h-auto px-4 sm:px-10 flex-wrap">
      <div className="flex items-center gap-4 m-10">
        <Link href="/" className="flex items-center">
          <Image src="/Logo.png" alt="logo" width={100} height={40} />
          <span className="ml-2 text-xl sm:text-3xl font-bold text-white">
            St Raymonds PU College
          </span>
        </Link>
      </div>
      <div className="m-10 hidden sm:block">
        <NavigationBlock />
      </div>
    </div>
  );
};

export default Navbar;
