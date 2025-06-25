"use client";
import { Jublee } from "@/myComponents/Jublee";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import HomeContent from "@/myComponents/HomeContent";
import Autoplay from "embla-carousel-autoplay";
const images = [
  "/heros/heros1.jpeg",
  "/heros/heros2.jpeg",
  "/heros/heros3.jpeg",
  "/heros/heros4.jpeg",
];

const Carosel = () => {
  return (
    <div className="w-full mt-16 max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
      >
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
    <div className="w-full">
      <Carosel /> <HomeContent />
      <div className="relative w-full mb-5   flex justify-center items-center overflow-hidden">
        <Image
          src="/background image.avif"
          alt="background"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative flex justify-center items-center z-10 w-full max-w-6xl px-4">
          <Jublee />
        </div>
      </div>
    </div>
  );
}
