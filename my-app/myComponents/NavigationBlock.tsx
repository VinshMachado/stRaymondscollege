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
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-red-900 text-white text-xl hover:bg-red-900">
            Simple
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid w-[200px] gap-4 bg-white">
              <li className="bg-white">
                <NavigationMenuLink asChild className="bg-white">
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="bg-white">
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="bg-white">
                  <Link href="#" className="bg-white">
                    Blocks
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-red-900 text-white text-xl hover:bg-red-900">
            Simple
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid w-[200px] gap-4 bg-white">
              <li className="bg-white">
                <NavigationMenuLink asChild className="bg-white">
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="bg-white">
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="bg-white">
                  <Link href="#" className="bg-white">
                    Blocks
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-red-900 text-white text-xl hover:bg-red-900">
            Simple
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid w-[200px] gap-4 bg-white">
              <li className="bg-white">
                <NavigationMenuLink asChild className="bg-white">
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="bg-white">
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="bg-white">
                  <Link href="#" className="bg-white">
                    Blocks
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-red-900 text-white text-xl hover:bg-red-900">
            Simple
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid w-[200px] gap-4 bg-white">
              <li className="bg-white">
                <NavigationMenuLink asChild className="bg-white">
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="bg-white">
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="bg-white">
                  <Link href="#" className="bg-white">
                    Blocks
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
