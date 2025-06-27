'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4 py-8 overflow-hidden">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Image
          src="/WhatsApp Image 2025-06-27 at 3.31.21 PM.jpeg"
          alt="WhatsApp Image"
          width={500}
          height={500}
          className="rounded-lg shadow-md object-cover"
        />
      </motion.div>
    </div>
  );
};

export default page;
