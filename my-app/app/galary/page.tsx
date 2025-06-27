"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const page = () => {
  const galleries = {
    "PTA Annual General Body Meeting – Academic Year 2025–2026": {
      path: "GalleryImages/annualbodymeet",
      images: [
        { image: "1.jpeg", width: 320, height: 230 },
        { image: "2.jpeg", width: 320, height: 230 },
        { image: "3.jpeg", width: 320, height: 230 },
        { image: "4.jpeg", width: 320, height: 230 },
        { image: "5.jpeg", width: 320, height: 230 },
        { image: "6.jpeg", width: 320, height: 230 },
        { image: "7.jpeg", width: 320, height: 230 },
        { image: "8.jpeg", width: 320, height: 230 },
        { image: "9.jpeg", width: 320, height: 230 },
        { image: "10.jpeg", width: 320, height: 230 },
        { image: "11.jpeg", width: 320, height: 230 },
        { image: "12.jpeg", width: 320, height: 230 },
        { image: "13.jpeg", width: 320, height: 230 },
        { image: "14.jpeg", width: 320, height: 230 },
        { image: "15.jpeg", width: 320, height: 230 },
        { image: "16.jpeg", width: 320, height: 230 },
        { image: "17.jpeg", width: 320, height: 230 },
        { image: "18.jpeg", width: 320, height: 230 },
      ],
    },
    "Environment Day Celebration at St Raymond PU College": {
      path: "GalleryImages/enviornment",
      images: [
        { image: "1.jpeg", width: 320, height: 230 },
        { image: "2.jpeg", width: 320, height: 230 },
        { image: "3.jpeg", width: 320, height: 230 },
        { image: "4.jpeg", width: 320, height: 230 },
        { image: "5.jpeg", width: 320, height: 230 },
        { image: "6.jpeg", width: 320, height: 230 },
        { image: "7.jpeg", width: 320, height: 230 },
      ],
    },
    
    "St Raymond’s P U College Inaugurates its Silver Jubilee Year with a Solemn Holy Eucharistic Celebration":
      {
        path: "GalleryImages/mass",
        images: [
          { image: "1.jpeg", width: 320, height: 230 },
          { image: "2.jpeg", width: 320, height: 230 },
          { image: "3.jpeg", width: 320, height: 230 },
          { image: "4.jpeg", width: 320, height: 230 },
          { image: "5.jpeg", width: 320, height: 230 },
          { image: "6.jpeg", width: 320, height: 230 },
          { image: "7.jpeg", width: 320, height: 230 },
          { image: "8.jpeg", width: 320, height: 230 },
        ],
      },
      "Investiture Ceremony ": {
      path: "GalleryImages/investiture",
      images: [
        { image: "1.jpeg", width: 320, height: 230 },
        { image: "2.jpeg", width: 320, height: 230 },
        { image: "3.jpeg", width: 320, height: 230 },
        { image: "4.jpeg", width: 320, height: 230 },
        { image: "5.jpeg", width: 320, height: 230 },
        { image: "6.jpeg", width: 320, height: 230 },
        { image: "7.jpeg", width: 320, height: 230 },
        { image: "8.jpeg", width: 320, height: 230 },
        { image: "9.jpeg", width: 320, height: 230 },
        { image: "10.jpeg", width: 320, height: 230 },
        { image: "12.jpeg", width: 320, height: 230 },
        { image: "13.jpeg", width: 320, height: 230 },
        { image: "14.jpeg", width: 320, height: 230 },
        { image: "15.jpeg", width: 320, height: 230 },
        { image: "16.jpeg", width: 320, height: 230 },
      ],
    },

  };

  return (
    <div className="w-full flex flex-col items-center mt-10 overflow-hidden">
      {Object.entries(galleries).map(([title, { path, images }]) => (
        <div key={title} className="w-full flex flex-col items-center mb-16">
          <h1 className="text-xl sm:text-2xl font-bold text-black mb-4 text-center">
            {title}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-10">
            {images.map((item, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, {
                once: true,
                margin: "0px 0px -100px 0px",
              });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, x: 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.03,
                  }}
                  className="bg-gray-100 p-4 rounded-2xl flex justify-center items-center"
                >
                  <Image
                    src={`/${path}/${item.image}`}
                    alt={`${title} Image ${index + 1}`}
                    width={item.width}
                    height={item.height}
                    className="rounded-lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
