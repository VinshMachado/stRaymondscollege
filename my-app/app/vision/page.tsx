'use client';

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center mb-10">
  <motion.div
    initial={{ scale: 1.3, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col items-center justify-center"
  >
    <Image
      src="/Logo.png"
      alt="College Logo"
      width={250}
      height={250}
      className="mb-4"
    />
    <h2 className="text-4xl font-bold text-red-800 text-center">
      St Raymond’s P.U. College
    </h2>
  </motion.div>
</div>

      <Card className="bg-white shadow-none border-none">
        <CardContent className="p-0 text-gray-800 text-lg leading-relaxed space-y-12">
          
          <AnimatedSection>
            <div>
              <h3 className="text-2xl font-semibold text-red-700 mb-2">Our Vision</h3>
              <p>
                To promote the glory of God through the holiness of its members
                and the service of His Kingdom.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 className="text-2xl font-semibold text-red-700 mb-2">Our Goal</h3>
              <p>
                Transformative Education for Fullness of Life – We aim to bring
                life in abundance to all, particularly the underprivileged, by
                fostering intellectual growth, emotional balance, and a deep sense
                of purpose and service.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 className="text-2xl font-semibold text-red-700 mb-2">A Legacy of Commitment and Growth</h3>
              <p>
                St. Raymond’s Pre-University College, established in 2001, stands today as a beacon of educational excellence and
                community commitment. The foundation of this institution was laid
                in response to the aspirations and needs of the local community,
                who desired a center of quality education for their youth.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 className="text-2xl font-semibold text-red-700 mb-2">Humble Beginnings with a Vision</h3>
              <p>
                With an initial enrolment of just 36 students in the Commerce and
                Arts streams, St. Raymond’s P.U. College began its journey rooted
                in strong values and a commitment to holistic education. From the
                very beginning, the college prioritized academic rigor along with co-curricular development.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 className="text-2xl font-semibold text-red-700 mb-2">Support from the Bethany Educational Society</h3>
              <p>
                The growth and success of St. Raymond’s would not have been
                possible without the consistent support and encouragement of the
                Bethany Educational Society.
              </p>
              <p>
                A special mention must be made of our dedicated Corporate
                Managers—Rev. Sr. Inviolatha, Rev. Sr. Mariette, and Rev. Sr.
                Cicilia Mendonca—whose administrative guidance and moral support
                shaped the path of St. Raymond’s.
              </p>
            </div>
          </AnimatedSection>

        </CardContent>
      </Card>
    </div>
  );
};

export default page;
