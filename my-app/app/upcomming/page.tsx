import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex gap-4 p-4 bg-gray-100 flex-wrap">
      {/* Image Box 1 */}
      <div className="w-full h-[500px] relative">
        <Image
          src="/WhatsApp Image 2025-07-24 at 2.43.44 PM.jpeg"
          alt="image"
          fill
          className="object-contain"
        />
      </div>

      {/* Image Box 2 */}
    </div>
  );
};

export default page;
