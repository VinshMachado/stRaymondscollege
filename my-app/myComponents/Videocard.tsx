import React from "react";

const Videocard = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome to Our College
      </h1>
      <p className="text-gray-700 mb-6">
        St. Raymond’s PU College stands as a pillar of education and values,
        nurturing students in all aspects of life. Watch the video below to get
        a glimpse of our vibrant campus and student life.
      </p>
      <div className="aspect-w-16 aspect-h-9">
        <video controls className="w-full rounded-lg shadow-md">
          <source
            src="https://drive.google.com/file/d/1wVe3IhL4T5WZruBjTE3gZlD6TYPDA78H/view?usp=sharing"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Videocard;
