import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const Jublee = () => {
  return (
    
    <div className=" w-[98%] mb-4 sm:w-[90%] h-auto mt-10 border shadow-xl p-3 rounded-2xl flex flex-col justify-center items-center bg-white">
      <h2 className=" text-xl sm:text-3xl font-bold text-red-800 w-1/2 mb-4 text-center">
        Silver Jubilee Year – 2025: A Year of Milestones and New Beginnings
      </h2>
      <div className="max-w-6xl mx-auto  flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full">
          <Image
            src="/Logo.png"
            alt="Silver Jubilee Celebration"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className=" w-full">
          <Card className="white shadow-none border-none">
            <CardContent className="p-0 text-gray-800 text-lg leading-relaxed space-y-4">
              <p>
                As we celebrate 25 years of educational excellence, we are proud
                to announce several new initiatives:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  A Science Park to inspire scientific exploration and
                  innovation
                </li>
                <li>
                  A Poor Students' Fund to support financially disadvantaged
                  learners
                </li>
                <li>
                  Free education for students who score above 90%, academic year
                </li>
                <li>Publication of the College Magazine</li>
                <li>Production of a Documentary film</li>
                <li>College Anthem</li>
                <li>
                  Silver Jubilee celebration events and valedictory ceremony
                </li>
              </ul>
              <p>
                We are also expanding our digital presence through our official
                website, Facebook, YouTube, and other media platforms, sharing
                updates, student achievements, and campus activities with the
                wider community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
