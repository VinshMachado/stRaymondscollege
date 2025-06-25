import React from "react";
import Image from "next/image";
const footer = () => {
  return (
    <div className="bg-red-900 text-white flex justify-center items-center py-10">
      <Image src="/Logo.png" alt="logo" width={120} height={50} />
      <div className="border-l border-white h-36 mx-10 px-5 pt-4">
        <p className="text-2xl font-bold mb-2">Contact Us</p>
        <p className="text-md">St. Raymond's PU College,</p>
        <p className="text-md">Bangalore, Karnataka, India</p>
        <p className="text-md">Phone: +91 123 456 7890</p>
        <p className="text-md">Email: info@straymonds.edu.in</p>
      </div>
    </div>
  );
};

export default footer;
