import React from "react";

const About = () => {
  return (
    <div className="container px-6 py-16 mx-auto">
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-blue-700">
        About <span className="text-gray-900">FitGuide</span>
      </h1>

      <p className="max-w-3xl mb-6 text-lg leading-relaxed text-gray-700">
        FitGuide is your personal companion on the journey to better health and
        fitness. Our platform provides{" "}
        <strong className="text-blue-600">personalized workout plans</strong>,
        progress tracking, and expert fitness guidance — all in one place.
      </p>

      <p className="max-w-3xl mb-6 text-lg leading-relaxed text-gray-700">
        Whether you're just starting out or looking to enhance your current
        routine, FitGuide adapts to your goals and helps you stay consistent,
        motivated, and on track.
      </p>

      <h2 className="mt-12 mb-4 text-2xl font-semibold text-blue-600">
        Our Mission
      </h2>

      <p className="max-w-3xl text-base leading-relaxed text-gray-700">
        To empower individuals with accessible, customizable, and engaging
        fitness tools so they can live healthier, stronger, and more confident
        lives. At FitGuide, we believe fitness should be simple, supportive, and
        sustainable.
      </p>
    </div>
  );
};

export default About;
