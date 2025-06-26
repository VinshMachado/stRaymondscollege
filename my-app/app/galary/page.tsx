import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col mt-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
        Headding
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-10">
        <div className="bg-gray-100 p-4 rounded-2xl flex justify-center items-center">
          <Image
            src="/WhatsApp Image 2025-06-20 at 1.20.03 PM.jpeg"
            alt="Gallery Image"
            width={320}
            height={230}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
