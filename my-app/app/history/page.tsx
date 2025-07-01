"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-red-700 font-semibold">{children}</span>
);

const StRaymondsPUCollege = () => {
  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto text-justify space-y-8">
      <motion.h1
        className="text-4xl font-bold text-center text-red-800"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        {"St Raymond’s Pre-University College, Vamanjoor"}
      </motion.h1>

      <motion.p variants={sectionVariant} initial="hidden" animate="visible">
        <Highlight>
          A Beacon of Knowledge, Values, and Holistic Development
        </Highlight>
      </motion.p>

      <motion.div variants={sectionVariant} initial="hidden" animate="visible">
        <p>
          {`St Raymond’s Pre-University College, Vamanjoor is a
          government-recognized institution run by the Bethany Educational
          Society, Mangaluru. Founded by
          <Highlight>Msgr. R.F.C. Mascharenhas</Highlight>, the Servant of God,
          it serves the marginalized, especially rural communities and girls.`}
        </p>
        <p>
          Since 2001, it has grown from 36 students to over 500, offering{" "}
          <Highlight>Science, Commerce, and Arts</Highlight> streams, while
          emphasizing <Highlight>academic rigor</Highlight>,{" "}
          <Highlight>co-curricular activities</Highlight>, and{" "}
          <Highlight>value-based education</Highlight>.
        </p>
      </motion.div>

      <motion.div variants={sectionVariant} initial="hidden" animate="visible">
        <h2 className="text-2xl font-semibold text-red-800">
          Our Vision & Goal
        </h2>
        <p>
          <Highlight>Vision:</Highlight> To promote the glory of God through
          holiness and service.
        </p>
        <p>
          <Highlight>Goal:</Highlight> Transformative Education for Fullness of
          Life – nurturing intellectual growth, emotional balance, and purpose.
        </p>
      </motion.div>

      <motion.div variants={sectionVariant} initial="hidden" animate="visible">
        <h2 className="text-2xl font-semibold text-red-800">Legacy & Growth</h2>
        <p>
          Founded by <Highlight>Sr. Inviolatha BS</Highlight>,{" "}
          <Highlight>Sr. Cicilia Mendonca</Highlight>, and{" "}
          <Highlight>Sr. Sadhana</Highlight>, the college has thrived through
          dedicated leadership, including Correspondents like{" "}
          <Highlight>Sr. Shubha</Highlight> and Principals like{" "}
          <Highlight>Sr. Dr. Sadhana BS</Highlight>.
        </p>
      </motion.div>

      <motion.div variants={sectionVariant} initial="hidden" animate="visible">
        <h2 className="text-2xl font-semibold text-red-800">
          Academic Streams
        </h2>
        <ul className="list-disc pl-6">
          <li>PCMB</li>
          <li>PCMC</li>
          <li>HEBA</li>
          <li>EBAC</li>
          <li>EBAS</li>
          <li>HEPS</li>
        </ul>
        <p>Supported by 18 teaching and 5 non-teaching staff.</p>
      </motion.div>

      <motion.div variants={sectionVariant} initial="hidden" animate="visible">
        <h2 className="text-2xl font-semibold text-red-800">
          Achievements & Holistic Education
        </h2>
        <p>
          With a <Highlight>98% average result</Highlight> and numerous
          distinctions, students also excel in sports, cultural events, NSS,
          Rovers & Rangers, and value-based programs.
        </p>
      </motion.div>

      <motion.div variants={sectionVariant} initial="hidden" animate="visible">
        <h2 className="text-2xl font-semibold text-red-800">Facilities</h2>
        <ul className="list-disc pl-6">
          <li>Science & Computer Labs</li>
          <li>Rich Library</li>
          <li>Spacious Playground</li>
          <li>Modern Infrastructure</li>
        </ul>
        <p>Hosts official exams like SSLC, PUC, CET, and KSET.</p>
      </motion.div>

      <motion.div variants={sectionVariant} initial="hidden" animate="visible">
        <h2 className="text-2xl font-semibold text-red-800">
          Silver Jubilee 2025
        </h2>
        <ul className="list-disc pl-6">
          <li>Science Park</li>
          <li>{"Poor Students’ Fund"}</li>
          <li>Free Education for 90%+ scorers</li>
          <li>College Magazine, Documentary, Anthem</li>
          <li>Grand Celebrations</li>
        </ul>
      </motion.div>

      <motion.div variants={sectionVariant} initial="hidden" animate="visible">
        <h2 className="text-2xl font-semibold text-red-800">Contact Us</h2>
        <p>
          <Highlight>Phone:</Highlight> 9880603858, 6360508493, 9482801764
          <br />
          <Highlight>Email:</Highlight> srpucv2001@gmail.com
        </p>
        <p>
          Join us at St Raymond’s PU College – where excellence, values, and
          holistic growth come together.
        </p>
      </motion.div>
    </div>
  );
};

export default StRaymondsPUCollege;
