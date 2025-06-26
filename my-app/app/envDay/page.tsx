import Image from "next/image";

export default function EnvironmentDay() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        {`“Sow sustainability, Reap a future” – Environment Day Celebration`}
      </h2>
      <p className="text-lg text-gray-800 leading-relaxed mb-8 text-center">
        {` St Raymond P U College celebrated World Environment Day with great
        enthusiasm and a renewed sense of purpose under the guidance of the
        Science Faculty and Mr. Jayaram, NSS Coordinator, on June 5, 2025. This
        year’s theme, `}
        <strong>{`“Sow sustainability, Reap a future,”`}</strong>{" "}
        {`served as a
        powerful call to action for students and staff alike.`}
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Image
          src="/GalleryImages/enviornment/1.jpeg"
          alt="Students planting saplings"
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover"
        />
        <div>
          <p className="text-gray-800 text-lg mb-4">
            The event began with a thoughtful assembly where the significance of
            environmental preservation was highlighted through speeches and
            reflections. Students actively participated in{" "}
            <strong>planting saplings</strong>,{" "}
            <strong>cleaning the campus</strong>, and taking an{" "}
            <strong>eco-pledge</strong> to live more sustainably and
            responsibly.
          </p>
          <p className="text-gray-800 text-lg">
            It was an eye-catching event focused on raising awareness about{" "}
            <strong>climate change</strong>, <strong>pollution</strong>, and{" "}
            <strong>sustainable living</strong>.
          </p>
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-800 text-lg mb-4">
            <strong>Dr. Sr. Sadhana</strong>, the Principal, commended the NSS
            and Rovers & Rangers team for their efforts and motivated students
            to be conscious stewards of the environment. She emphasized that{" "}
            <em>small consistent actions can lead to a lasting impact</em>.
          </p>
          <p className="text-gray-800 text-lg">
            <strong>Mevreesh</strong> anchored the event, and{" "}
            <strong>Raulathul Shazin</strong>
            {`'s speech inspired young minds. The`}{" "}
            <strong>vote of thanks</strong> was proposed by{" "}
            <strong>Sranvi</strong>.
          </p>
        </div>
        <Image
          src="/GalleryImages/enviornment/2.jpeg"
          alt="Speech and assembly"
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover"
        />
      </div>

      <p className="text-lg text-gray-800 leading-relaxed mt-10 text-center">
        The celebration was a perfect blend of learning, engagement, and
        environmental action, leaving everyone inspired to take better care of
        our one and only home—<strong>Earth</strong>.
      </p>
    </div>
  );
}
