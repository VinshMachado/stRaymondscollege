import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function PrincipalsCarousel() {
  const principals = [
    {
      name: "Sr. Dr Sadhana BS",
      role: "Supervisor (June 2001 - June 2004), Principal (June 1, 2015 - June 30, 2021, June 1, 2025 - Present)",
      image: "/Principles/Sr Sadhana BS.jpeg",
    },
    {
      name: "Sr. Cicilia Mendonca",
      role: "Principal (2002 - May 31, 2010)",
      image: "/Principles/Sr  Cecilia DSouza BS.jpeg",
    },
    {
      name: "Sr. Cicilia D’Souza",
      role: "Principal (June 2010 - May 31, 2015)",
      image: "/Principles/Sr Cicilia Mendonca BS.jpg",
    },
    {
      name: "Sr. Anita Lydia BS",

      role: "Principal (July 1, 2021 - May 31, 2025)",
      image: "/Principles/Sr Anita Lydia BS.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
        Principals Who Shaped the Institution
      </h2>
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: true,
            stopOnMouseEnter: false,
          }),
        ]}
        className="w-full overflow-hidden"
      >
        <CarouselContent className="-ml-2 md:-ml-4 animate-marquee whitespace-nowrap">
          {principals.concat(principals).map((principal, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-1/1 sm:basis-1/2 md:basis-1/3"
            >
              <div className="bg-white rounded-xl shadow-md p-6 text-center h-full">
                <Image
                  src={principal.image}
                  alt={principal.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {principal.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{principal.role}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default function HomeContent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-5xl mx-auto px-4 py-12 text-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-4">
          A Beacon of Knowledge, Values, and Holistic Development
        </h1>
        <p className="text-lg leading-relaxed">
          St Raymond’s Pre-University College, Vamanjoor is a
          government-recognized institution (Govt. Order No. ED52 SHH 2001,
          dated 21.06.2001) run by the Bethany Educational Society, Mangaluru.
          As a minority institution, it upholds the vision of its founder, Msgr.
          R.F.C. Mascharenhas, the Servant of God, who dedicated his life to
          bringing education to the marginalized, especially the rural poor and
          girls.
        </p>
      </motion.div>
      <PrincipalsCarousel />
    </motion.section>
  );
}
