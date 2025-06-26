import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center mb-10">
        <Image
          src="/Logo.png"
          alt="College Logo"
          width={250}
          height={250}
          className="mb-4"
        />
        <h2 className="text-4xl font-bold text-red-800 text-center">
          {"St Raymond’s P.U. College"}
        </h2>
      </div>

      <Card className="bg-white shadow-none border-none">
        <CardContent className="p-0 text-gray-800 text-lg leading-relaxed space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-red-700 mb-2">
              Our Vision
            </h3>
            <p>
              To promote the glory of God through the holiness of its members
              and the service of His Kingdom.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-red-700 mb-2">
              Our Goal
            </h3>
            <p>
              Transformative Education for Fullness of Life – We aim to bring
              life in abundance to all, particularly the underprivileged, by
              fostering intellectual growth, emotional balance, and a deep sense
              of purpose and service.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-red-700 mb-2">
              A Legacy of Commitment and Growth
            </h3>
            <p>
              St. Raymond’s Pre-University College, established in the year
              2001, stands today as a beacon of educational excellence and
              community commitment. The foundation of this institution was laid
              in response to the aspirations and needs of the local community,
              who desired a center of quality education for their youth. Rising
              to this call, Rev. Sr. Inviolatha BS, Provincial Superior together
              with Sr. Cicilia Mendonca and Sr. Sadhana, sowed the seeds of what
              has grown into one of the region’s most respected institutions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-red-700 mb-2">
              Humble Beginnings with a Vision
            </h3>
            <p>
              With an initial enrolment of just 36 students in the Commerce and
              Arts streams, St. Raymond’s P.U. College began its journey rooted
              in strong values and a commitment to holistic education. From the
              very beginning, the college has not only prioritized academic
              rigor but also placed significant emphasis on co-curricular
              development, nurturing students into well-rounded individuals.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-red-700 mb-2">
              Support from the Bethany Educational Society
            </h3>
            <p>
              The growth and success of St. Raymond’s would not have been
              possible without the consistent support and encouragement of the
              Bethany Educational Society. We are especially grateful to Rev.
              Sr. Jyoti, Rev. Sr. Wilberta, and Rev. Sr. Rose Celine, the then
              President of the Bethany Educational Society and Superior General
              of the Bethany Congregation, whose unwavering interest and
              commitment significantly propelled the institution forward.
            </p>
            <p>
              A special mention must be made of our dedicated Corporate
              Managers—Rev. Sr. Inviolatha, Rev. Sr. Mariette, and Rev. Sr.
              Cicilia Mendonca—whose administrative guidance, strategic vision,
              and moral support have been instrumental in shaping the path of
              St. Raymond’s. Their collective wisdom and stewardship provided
              the necessary foundation for sustainable institutional growth. At
              present, the college is ably supported by Rev Sr Lilly Pereira,
              who brings with her a passion for education and a commitment to
              excellence, continuing the legacy of visionary leadership.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
