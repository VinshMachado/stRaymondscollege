"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { AlignJustify } from "lucide-react";
import { useRouter } from "next/navigation"; // App Router hook

const MoblieNav = () => {
  const router = useRouter();

  const handleNavigation = (value: string) => {
    // Map values to routes
    const routes: Record<string, string> = {
      Home: "/",
      "Streams Offered": "/streams",
      "Contact Us": "/contactUs",
      Gallery: "/galary",
      "Commiitte Member": "/committe",
      "Vision and Mission": "/vision",
      History: "/history",
      "Silver jubilee": "/silver",
      "Message from the Principal": "/principle",
      "Environment Day": "/envDay",
      "Annual Day": "/annualDay",
    };

    const path = routes[value];
    if (path) router.push(path);
  };

  return (
    <Select onValueChange={handleNavigation}>
      <SelectTrigger className="w-[180px] text-black bg-white">
        <SelectValue placeholder="Select Page" />
        <AlignJustify />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectItem value="Home">Home</SelectItem>
          <SelectItem value="Streams Offered">Streams Offered</SelectItem>
          <SelectItem value="Contact Us">Contact Us</SelectItem>
          <SelectItem value="Gallery">Gallery</SelectItem>
          <SelectItem value="Commiitte Member">Committee Member</SelectItem>

          <SelectLabel>About Us</SelectLabel>
          <SelectItem value="Vision and Mission">Vision and Mission</SelectItem>
          <SelectItem value="History">History</SelectItem>
          <SelectItem value="Silver jubilee">Silver jubilee</SelectItem>
          <SelectItem value="Message from the Principal">
            Message from the Principal
          </SelectItem>

          <SelectLabel>Events</SelectLabel>
          <SelectItem value="Environment Day">Environment Day</SelectItem>
          <SelectItem value="Annual Day">Annual Day</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default MoblieNav;
