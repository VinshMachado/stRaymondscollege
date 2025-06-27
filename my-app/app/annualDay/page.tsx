"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInFrom = ({
  children,
  from = "right",
  delay = 0,
}: {
  children: React.ReactNode;
  from?: "left" | "right";
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const direction = from === "left" ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      initial={{ x: direction, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

const PTAAnnualMeeting = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-16">
        <FadeInFrom>
          <h2 className="text-3xl font-bold text-red-800 text-center">
            PTA Annual General Body Meeting – Academic Year 2025–2026
          </h2>
        </FadeInFrom>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <FadeInFrom from="left">
            <p className="text-lg text-gray-800 leading-relaxed">
              The PTA Annual General Body Meeting was held in the auditorium of
              St. Raymond’s P.U. College, Vamanjoor, in a warm and vibrant
              atmosphere. The session began by invoking divine blessings.
            </p>
          </FadeInFrom>
          <FadeInFrom from="right">
            <Image
              src="/GalleryImages/annualbodymeet/1.jpeg"
              alt="PTA meeting image 1"
              width={500}
              height={300}
              className="rounded-md object-cover border shadow-md"
            />
          </FadeInFrom>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <FadeInFrom from="left">
            <Image
              src="/GalleryImages/annualbodymeet/12.jpeg"
              alt="PTA speaker"
              width={500}
              height={300}
              className="rounded-md object-cover"
            />
          </FadeInFrom>
          <FadeInFrom from="right">
            <p className="text-lg text-gray-800 leading-relaxed">
              Rev. Sr. Cicilia Mendonca, Correspondent, emphasized the
              importance of cultivating strong parent-child bonds. Mr.
              Raghavendra Holla, Chairman of Swastika Business School, inspired
              everyone with a talk on positive parenting.
            </p>
          </FadeInFrom>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <FadeInFrom from="left">
            <p className="text-lg text-gray-800 leading-relaxed">
              Sr. Dr. Sadhana BS, Principal, shared key updates. Sr. Lavita BS,
              Superior of St. Raymond’s Convent, added grace to the occasion.
              Students gave a joyful welcome dance.
            </p>
          </FadeInFrom>
          <FadeInFrom from="right">
            <Image
              src="/GalleryImages/annualbodymeet/4.jpeg"
              alt="Principal and students"
              width={500}
              height={300}
              className="rounded-md object-cover"
            />
          </FadeInFrom>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <FadeInFrom from="left">
            <Image
              src="/GalleryImages/annualbodymeet/3.jpeg"
              alt="Jubilee logo release"
              width={500}
              height={300}
              className="rounded-md object-cover"
            />
          </FadeInFrom>
          <FadeInFrom from="right">
            <p className="text-lg text-gray-800 leading-relaxed">
              A major highlight was the unveiling of the Silver Jubilee Logo,
              with an explanation by Mrs. Vinita Tauro. Other speakers included
              Mrs. Geetha, Mrs. Lidwin Crasta, Mrs. Harinakshi, and Mrs. Anitha
              Ferrao, who all played key roles.
            </p>
          </FadeInFrom>
        </div>

        <FadeInFrom>
          <div className="text-lg text-gray-800 leading-relaxed text-center">
            <p>
              Anchored by Ms. Savitha Menezes and concluded by Mr. Ravichandra,
              the event saw overwhelming participation from parents – a true
              reflection of the strong partnership between parents and the
              college.
            </p>
          </div>
        </FadeInFrom>
      </div>
    </section>
  );
};

export default PTAAnnualMeeting;
