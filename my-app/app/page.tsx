"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import HomeContent from "@/myComponents/HomeContent";

const images = [
  "/heros/heros1.jpeg",
  "/heros/heros2.jpeg",
  "/heros/heros3.jpeg",
  "/heros/heros4.jpeg",
];

const Carosel = () => {
  return (
    <div className="w-full mt-16 max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[450px]">
                <Image
                  src={img}
                  alt={`${index}`}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="bg-white/30 hover:bg-white/60 text-black" />
        <CarouselPrevious className="bg-white/30 hover:bg-white/60 text-black" />
      </Carousel>
    </div>
  );
};
export default function Home() {
  return (
    <div>
      <Carosel />
      <HomeContent />
    </div>
  );
}
