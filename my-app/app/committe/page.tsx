import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const correspondents = [
  {
    name: "Sr. Inviolatha",
    image: "/correspondents/inviolatha.jpg",
    designation: "Former Correspondent",
  },
  {
    name: "Sr. Marie Lyta",
    image: "/correspondents/marie-lyta.jpg",
    designation: "Former Correspondent",
  },
  {
    name: "Sr. Christella",
    image: "/correspondents/christella.jpg",
    designation: "Former Correspondent",
  },
  {
    name: "Sr. Mariola",
    image: "/correspondents/mariola.jpg",
    designation: "Former Correspondent",
  },
  {
    name: "Sr. Lilly Pereira",
    image: "/correspondents/lilly-pereira.jpg",
    designation: "Former Correspondent",
  },
  {
    name: "Sr. Shubha",
    image: "/correspondents/shubha.jpg",
    designation: "Former Correspondent",
  },
  {
    name: "Sr. Cicilia Mendonca",
    image: "/correspondents/cicilia-mendonca.jpg",
    designation: "Current Correspondent",
  },
];

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-red-800 text-center mb-10">
        Dedicated Correspondents
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {correspondents.map((person) => (
          <Card key={person.name} className="bg-white shadow-md">
            <CardContent className="p-4 flex flex-col items-center">
              <Image
                src={person.image}
                alt={person.name}
                width={180}
                height={180}
                className="rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {person.name}
              </h3>
              <p className="text-sm text-gray-600 text-center mt-1">
                {person.designation}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-lg text-gray-800 leading-relaxed mt-10 text-center max-w-3xl mx-auto">
        Currently, <strong>Sr. Cicilia Mendonca</strong> serves as the
        Correspondent, providing consistent and wise leadership, and ensuring
        the institution’s continued alignment with its mission and values.
      </p>
    </div>
  );
};

export default page;
