import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    comment:
      "FitGuide transformed my workout routine. The exercise library is extensive, and the detailed instructions helped me perfect my form. I've seen incredible results in just 3 months!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Professional Trainer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    comment:
      "As a personal trainer, I recommend FitGuide to all my clients. The variety of exercises and the ability to filter by muscle groups makes creating workout plans effortless.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Yoga Instructor",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    comment:
      "The attention to detail in exercise descriptions and the smooth user interface make FitGuide stand out. It's become an essential tool in my fitness journey.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Trusted by Fitness Enthusiasts
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Join thousands of satisfied users who have transformed their fitness
            journey with FitGuide
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 overflow-hidden transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl group"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute text-blue-100 transition-transform transform -right-6 -top-6 rotate-12 group-hover:rotate-6">
                <Quote size={100} />
              </div>

              <div className="relative">
                {/* User Info */}
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-16 h-16 border-4 border-white rounded-full shadow-lg"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="relative z-10 text-gray-600">
                  "{testimonial.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="mb-8 text-2xl font-medium text-gray-900">
            Ready to Start Your Fitness Journey?
          </p>
          <button className="px-8 py-4 text-lg font-semibold text-white transition-colors transition-transform transform bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
