import React from "react";
import Image from "next/image";
const footer = () => {
  return (
    <div>
    <div className="bg-red-900 h-[20rem] text-white flex justify-center items-center py-10">
      <Image src="/Logo.png" alt="logo" width={120} height={50} className="hidden sm:block"/>
      <div className="border-l sm:border-white border-red-900 h- mx-10 px-5 pt-4">
        <p className="text-2xl font-bold mb-2">Contact Us</p>
        <p className="text-md">St. Raymond's PU College,</p>
        <p className="text-md">Vamanjoor,Kudupu,Thiruvail,Karnataka 575028</p>
        <p className="text-md">Phone: +91 948 280 1764</p>
        <p className="text-md">Email: srpucv2001@gmail.com</p>
      </div>
    </div>
    <div className="bg-red-900 text-white border-t border-white text-center font-semibold ">
      <p>Website developed by Sion and Vinish contact +91 95130 97816 for Website development.</p>
    </div>
    </div>
  );
};

export default footer;

