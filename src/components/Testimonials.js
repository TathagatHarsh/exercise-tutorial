import React from "react";

const testimonials = [
  {
    name: "Riya S.",
    comment:
      "This app completely changed how I approach workouts. It's like having a personal trainer in my pocket.",
  },
  {
    name: "Aman T.",
    comment:
      "The ability to search exercises by body part is super helpful. Love the clean layout too!",
  },
  {
    name: "Nina K.",
    comment:
      "I use FitGuide daily to plan my workouts. It's simple, powerful, and just what I needed!",
  },
];

const Testimonials = () => {
  return (
    <div className="px-4 py-20 bg-[#f4f9ff]">
      <h2 className="mb-12 text-4xl font-bold text-center">
        What Our Users Say
      </h2>
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 text-center bg-white shadow-lg rounded-2xl"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 text-xl font-bold text-white bg-blue-200 rounded-full">
              {testimonial.name.charAt(0)}
            </div>
            <p className="mb-2 italic text-gray-700">"{testimonial.comment}"</p>
            <p className="font-semibold text-gray-900">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
