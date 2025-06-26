import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const correspondents = [
  {
    name: "Rev Sr Roseceline  ",
    image:
      "/Sisters/President - Rev Sr Roseceline BS - Superior General & President BES.jpeg",
    designation: "Superior General & President BES",
  },
  {
    name: "Rev Sr  Lilly Pereira ",
    image:
      "/Sisters/Rev Sr  Lilly Pereira BS - Provincial Superior & Corporate Manager.jpeg",
    designation: "Provincial Superior & Corporate Manager",
  },
  {
    name: "Rev Sr Cicilia Mendonca  ",
    image: "/Sisters/Rev Sr Cicilia Mendonca BS - Correspondent .jpg",
    designation: " Correspondent",
  },
  {
    name: "Rev Sr Sandhya  ",
    image: "/Sisters/Secretary - Rev Sr Sandhya BS .jpeg",
    designation: "Secretary",
  },
  {
    name: "Sr Dr Sadhana  ",
    image: "/Sisters/Sr Dr Sadhana BS - Principal.jpeg",
    designation: "Principal",
  },
  {
    name: "Sr Lavita BS",
    image: "/Sisters/Sr Lavita BS - Superior .jpeg",
    designation: "Superior",
  },
];

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-red-800 text-center mb-10">
        Dedicated Correspondents
      </h2>
      <div className="  flex justify-center items-center flex-wrap ">
        {correspondents.map((person) => (
          <Card key={person.name} className="bg-white shadow-md m-5">
            <CardContent className="p-4  flex flex-col items-center">
              <div className="w-40 h-40 rounded-full  relative overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-xl text-wrap font-semibold text-gray-800 text-center">
                {person.name}
              </h3>
              <p className="text-sm text-wrap text-gray-600 text-center mt-1">
                {person.designation}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
