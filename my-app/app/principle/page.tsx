"use client";

import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/Principles/Sr Sadhana BS.jpeg"
            alt="Sr.Dr. Sadhana BS"
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-red-700 mb-2">
            A Message from the Principal
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            St Raymond’s Pre-University College, Vamanjoor, offers more than
            just academic education – it offers a nurturing space where young
            minds can grow in knowledge, character, and purpose.
            <br />
            <br />
            If you’re looking for a college that combines academic excellence
            with moral values and holistic development, St Raymond’s is the
            place for you. Come, be part of our legacy and build a brighter
            future with us!
          </p>
          <p className="mt-4 font-semibold text-gray-900">
            - Sr.Dr. Sadhana BS, Principal
          </p>
        </div>
      </div>
    </div>
  );
}
