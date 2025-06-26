"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const PTAAnnualMeeting = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
          PTA Annual General Body Meeting – Academic Year 2025–2026
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <p className="text-lg text-gray-800 leading-relaxed">
              The PTA Annual General Body Meeting was held in the auditorium of
              St. Raymond’s P.U. College, Vamanjoor, in a warm and vibrant
              atmosphere. The session began by invoking divine blessings.
            </p>
          </div>
          <Image
            src="/GalleryImages/annualbodymeet/1.jpeg"
            alt="PTA meeting image 1"
            width={500}
            height={300}
            className="rounded-md object-cover border shadow-md"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <Image
            src="/GalleryImages/annualbodymeet/12.jpeg"
            alt="PTA speaker"
            width={500}
            height={300}
            className="rounded-md object-cover"
          />
          <div>
            <p className="text-lg text-gray-800 leading-relaxed">
              Rev. Sr. Cicilia Mendonca, Correspondent, emphasized the
              importance of cultivating strong parent-child bonds. Mr.
              Raghavendra Holla, Chairman of Swastika Business School, inspired
              everyone with a talk on positive parenting.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <p className="text-lg text-gray-800 leading-relaxed">
              Sr. Dr. Sadhana BS, Principal, shared key updates. Sr. Lavita BS,
              Superior of St. Raymond’s Convent, added grace to the occasion.
              Students gave a joyful welcome dance.
            </p>
          </div>
          <Image
            src="/GalleryImages/annualbodymeet/4.jpeg"
            alt="Principal and students"
            width={500}
            height={300}
            className="rounded-md object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <Image
            src="/GalleryImages/annualbodymeet/3.jpeg"
            alt="Jubilee logo release"
            width={500}
            height={300}
            className="rounded-md object-cover"
          />
          <div>
            <p className="text-lg text-gray-800 leading-relaxed">
              A major highlight was the unveiling of the Silver Jubilee Logo,
              with an explanation by Mrs. Vinita Tauro. Other speakers included
              Mrs. Geetha, Mrs. Lidwin Crasta, Mrs. Harinakshi, and Mrs. Anitha
              Ferrao, who all played key roles.
            </p>
          </div>
        </div>

        <div className="text-lg text-gray-800 leading-relaxed mt-10 text-center">
          <p>
            Anchored by Ms. Savitha Menezes and concluded by Mr. Ravichandra,
            the event saw overwhelming participation from parents – a true
            reflection of the strong partnership between parents and the
            college.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PTAAnnualMeeting;
