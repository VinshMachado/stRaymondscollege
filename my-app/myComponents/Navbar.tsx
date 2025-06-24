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
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full bg-red-900 flex justify-between items-center h-32 px-4 sm:px-10">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center">
          <Image src="/Logo.png" alt="logo" width={100} height={40} />
          <span className="ml-2 text-xl sm:text-3xl font-bold text-white">
            St Raymonds PU College
          </span>
        </Link>
      </div>

      <div className="sm:block hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none text-white font-bold text-xl m-10 ">
            Open
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
