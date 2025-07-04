"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";

const correspondents = [
  {
    name: "Rev Sr Rose celine BS",
    image:
      "/Sisters/President - Rev Sr Roseceline BS - Superior General & President BES.jpeg",
    designation: "Superior General & President BES",
  },
  {
    name: "Rev Sr Sandhya BS",
    image: "/Sisters/Secretary - Rev Sr Sandhya BS .jpeg",
    designation: "Secretary",
  },
  {
    name: "Rev Sr Lilly Pereira",
    image:
      "/Sisters/Rev Sr  Lilly Pereira BS - Provincial Superior & Corporate Manager.jpeg",
    designation: "Provincial Superior & Corporate Manager",
  },
  {
    name: "Rev Sr Cicilia Mendonca",
    image: "/Sisters/Rev Sr Cicilia Mendonca BS - Correspondent .jpg",
    designation: "Correspondent",
  },
  {
    name: "Sr Lavita BS",
    image: "/Sisters/Sr Lavita BS - Superior .jpeg",
    designation: "Superior",
  },
  {
    name: "Sr Dr Sadhana",
    image: "/Sisters/Sr Dr Sadhana BS - Principal.jpeg",
    designation: "Principal",
  },
];

const FadeUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 overflow-hidden">
      <FadeUp>
        <h2 className="text-3xl font-bold text-red-800 text-center mb-10">
          Present Office Bearers
        </h2>
      </FadeUp>

      <div className="flex justify-center items-center flex-wrap">
        {correspondents.map((person, index) => (
          <FadeUp key={person.name} delay={index * 0.1}>
            <Card className="bg-white shadow-md w-56 m-5">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-40 h-40 rounded-full relative overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mt-3">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600 text-center mt-1">
                  {person.designation}
                </p>
              </CardContent>
            </Card>
          </FadeUp>
        ))}
      </div>
    </div>
  );
};

export default page;
