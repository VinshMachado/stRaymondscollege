"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function AboutStRaymonds() {
  const contentSections: [string, React.ReactNode][] = [
    [
      "Our Vision",
      "To promote the glory of God through the holiness of its members and the service of His Kingdom.",
    ],
    [
      "Our Goal",
      "Transformative Education for Fullness of Life – fostering intellectual growth, emotional balance, and a deep sense of purpose and service.",
    ],
    [
      "A Legacy of Commitment and Growth",
      "Established in 2001 in response to community needs, with 36 students and strong leadership from Rev. Sr. Inviolatha BS and team, the college has since flourished as a pillar of academic excellence and community development.",
    ],
    [
      "Support from the Bethany Educational Society",
      "Key contributors include Rev. Sr. Jyoti, Rev. Sr. Wilberta, Rev. Sr. Rose Celine, and Corporate Managers who guided the college’s strategic growth. Currently, the college is supported by Rev Sr Lilly Pereira.",
    ],
    [
      "Dedicated Correspondents",
      <ul className="list-disc ml-6">
        {[
          "Sr. Inviolatha",
          "Sr. Marie Lyta",
          "Sr. Christella",
          "Sr. Mariola",
          "Sr. Lilly Pereira",
          "Sr. Shubha",
          "Sr. Cicilia Mendonca (Current Correspondent)",
        ].map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>,
    ],
    [
      "Principals Who Shaped Us",
      <ul className="list-disc ml-6">
        {[
          "Sr. Dr Sadhana BS – Supervisor & Principal (2001–2004, 2015–2021, 2025– )",
          "Sr. Cicilia Mendonca – Principal (2002–2010)",
          "Sr. Cicilia D’Souza – Principal (2010–2015)",
          "Sr. Anita Lydia BS – Principal (2021–2025)",
        ].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>,
    ],
    [
      "Academic Streams Offered",
      <ul className="list-disc ml-6">
        {["PCMB", "PCMC", "HEBA", "EBAC", "EBAS", "HEPS"].map((stream, i) => (
          <li key={i}>{stream}</li>
        ))}
      </ul>,
    ],
    [
      "",
      "We serve over 500 students with 18 teaching and 5 non-teaching staff in a nurturing environment.",
    ],
    [
      "Academic Excellence",
      "Consistent results with an average of 98% and numerous distinctions – a testament to dedicated faculty and hardworking students.",
    ],
    [
      "Holistic Education",
      <ul className="list-disc ml-6">
        {[
          "State and national level sports and cultural activities",
          "NSS and Rovers & Rangers",
          "Value education, catechism, and monthly Eucharist",
          "Seminars, outreach, and excursions",
        ].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>,
    ],
    [
      "Facilities",
      <ul className="list-disc ml-6">
        {[
          "Science and Computer Labs",
          "Rich Library",
          "Spacious Playground",
          "Modern Infrastructure",
        ].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>,
    ],
    [
      "Silver Jubilee – 2025",
      <ul className="list-disc ml-6">
        {[
          "Science Park",
          "Poor Students' Fund",
          "Free education for 90%+ scorers",
          "College Magazine & Documentary",
          "Anthem & Celebration Events",
          "Boosted online presence",
        ].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>,
    ],
    [
      "Join Us",
      "If you seek academic excellence, holistic development, and moral values in a nurturing environment – St Raymond’s PU College is your destination.",
    ],
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-gray-800 space-y-10 overflow-hidden">
      <AnimatedSection>
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-red-800">
          {"St Raymond’s Pre-University College, Vamanjoor"}
        </h1>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          A Beacon of Knowledge, Values, and Holistic Development
        </h2>
      </AnimatedSection>

      {[
        "St Raymond’s Pre-University College, Vamanjoor is a government-recognized institution (Govt. Order No. ED52 SHH 2001, dated 21.06.2001) run by the Bethany Educational Society, Mangaluru. As a minority institution, it upholds the vision of its founder, Msgr. R.F.C. Mascharenhas, who dedicated his life to bringing education to the marginalized.",
        "From humble beginnings, our institution has grown into a thriving educational hub, lighting the path of success for generations of students.",
      ].map((text, idx) => (
        <AnimatedSection key={idx}>
          <p>{text}</p>
        </AnimatedSection>
      ))}

      {contentSections.map(([heading, content], i) => (
        <AnimatedSection key={i}>
          {heading && (
            <h3 className="text-xl font-semibold text-red-700">{heading}</h3>
          )}
          {typeof content === "string" ? <p>{content}</p> : content}
        </AnimatedSection>
      ))}

      <AnimatedSection>
        <p className="font-semibold text-center text-gray-700">
          Sr. Dr. Sadhana BS
          <br />
          Principal
        </p>
      </AnimatedSection>
    </div>
  );
}
