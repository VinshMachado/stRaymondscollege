import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
        Academic Excellence & Offerings
      </h2>
      <Card className="bg-white shadow-none border-0">
        <CardContent className="p-6 space-y-6 text-gray-800">
          <section>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              Academic Streams Offered
            </h3>
            <p>
              We now serve over 500 students across three streams – Science,
              Commerce, and Arts – offering combinations such as:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>PCMB (Physics, Chemistry, Mathematics, Biology)</li>
              <li>PCMC (Physics, Chemistry, Mathematics, Computer Science)</li>
              <li>HEBA (History, Economics, Business Studies, Accountancy)</li>
              <li>
                EBAC (Economics, Business Studies, Accountancy, Computer
                Science)
              </li>
              <li>
                EBAS (Economics, Business Studies, Accountancy, Statistics)
              </li>
              <li>HEPS (History, Economics, Political Science, Sociology)</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              Academic Excellence
            </h3>
            <p>
              From the first batch in 2001 to the latest II PUC results in March
              2025, our students have consistently excelled. Our college boasts
              an average result of 98%, with many students achieving
              distinctions. This success reflects the dedication of both
              students and faculty.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              Holistic Education: Beyond the Classroom
            </h3>
            <p>
              At St Raymond’s, we believe in shaping well-rounded individuals.
              Our students participate in:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>
                Cultural and sports activities at state and national levels
                (Volleyball, Throwball, etc.)
              </li>
              <li>
                NSS and Rovers & Rangers, developing leadership and
                service-mindedness
              </li>
              <li>
                Value education, catechism classes, and monthly Eucharistic
                celebrations for Catholic students
              </li>
              <li>Seminars, workshops, outreach programs, and excursions</li>
              <li>Excellent counselling services</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              Facilities and Infrastructure
            </h3>
            <p>To support student success, we provide:</p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Well-equipped science and computer laboratories</li>
              <li>A rich library</li>
              <li>A spacious playground</li>
              <li>Enhanced infrastructure for modern learning</li>
            </ul>
            <p className="mt-2">
              Since 2015, St Raymond’s PU College has hosted official exams such
              as Board Exams, SSLC, PUC Final Practical, UGCET, and KSET.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
