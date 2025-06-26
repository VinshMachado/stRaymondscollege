"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavigationBlock() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <div className=" flex-wrap flex justify-center items-center gap-4 ">
          <Link href="/" className="text-white text-xl m-3 hover:border-b-2">
            Home
          </Link>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-red-900 hover:border-b-2 text-white text-xl hover:bg-red-900">
              About Us
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="grid w-[200px] gap-4 bg-white">
                <li className="bg-white">
                  <NavigationMenuLink asChild className="bg-white">
                    <Link href="/vision">Vision and Mission</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild className="bg-white">
                    <Link href="#">History</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild className="bg-white">
                    <Link href="/silver" className="bg-white">
                      Silver jubilee
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild className="bg-white">
                    <Link href="#">Message from the Principal</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-red-900 hover:border-b-2 text-white text-xl hover:bg-red-900">
              Curricular
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="grid w-[200px] gap-4 bg-white">
                <li className="bg-white">
                  <NavigationMenuLink asChild className="bg-white">
                    <Link href="#">Environment Day</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild className="bg-white">
                    <Link href="#">Annual Day</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <Link
            href="/home"
            className="text-white text-xl m-3 hover:border-b-2"
          >
            Streams Offered
          </Link>

          <Link
            href="/home"
            className="text-white text-xl m-3 hover:border-b-2"
          >
            Contact Us
          </Link>

          <Link
            href="/home"
            className="text-white text-xl m-3 hover:border-b-2"
          >
            Join Us
          </Link>

          <Link
            href="\galary"
            className="text-white text-xl m-3 hover:border-b-2"
          >
            Gallery
          </Link>

          <Link
            href="/home"
            className="text-white text-xl m-3 hover:border-b-2   "
          >
            Committe Members
          </Link>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
