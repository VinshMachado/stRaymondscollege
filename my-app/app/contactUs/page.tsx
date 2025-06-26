import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="mt-16  p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-red-700 mb-4">
        Join Us and Be Part of Our Journey
      </h2>
      <p className="text-gray-800 text-lg text-center max-w-3xl mx-auto mb-6">
        St Raymond’s Pre-University College, Vamanjoor, offers more than just
        academic education – it offers a nurturing space where young minds can
        grow in knowledge, character, and purpose.
        <br />
        If you’re looking for a college that combines academic excellence with
        moral values and holistic development, St Raymond’s is the place for
        you. Come, be part of our legacy and build a brighter future with us!
      </p>
      <div className="text-center">
        <p className="font-semibold text-gray-900">Sr.Dr. Sadhana BS</p>
        <p className="text-gray-700">Principal</p>
        <p className="text-gray-700 mt-2">
          Email:{" "}
          <a
            href="mailto:straymondsPUcollege.com"
            className="text-blue-600 underline"
          >
            straymondspucollege@gmail.com
          </a>
        </p>
        <p className="text-gray-700 mt-2">Contact:</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link
            href="https://wa.me/919880603858"
            target="_blank"
            className="text-green-600 font-medium underline"
          >
            WhatsApp: 9880603858
          </Link>
          <Link
            href="https://wa.me/916360508493"
            target="_blank"
            className="text-green-600 font-medium underline"
          >
            WhatsApp: 6360508493
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
