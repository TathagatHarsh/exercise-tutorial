import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your Body,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Your Workout
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover the perfect workout routine tailored to your goals. Access
            over 1000+ exercises with detailed instructions and professional
            guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="#exercises"
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full 
                       hover:bg-blue-700 transition-all duration-300 shadow-lg 
                       hover:shadow-xl hover:scale-105 transform"
              onClick={() => {
                const exercisesSection = document.querySelector("#exercises");
                exercisesSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Exercises
            </Link>
            <a
              href="#workouts"
              className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-full 
                       border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300
                       shadow-lg hover:shadow-xl hover:scale-105 transform"
              onClick={(e) => {
                e.preventDefault();
                const workoutsSection = document.querySelector("#workouts");
                workoutsSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">1000+</h3>
              <p className="text-gray-600">Exercises</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Categories</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-600">Access</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative">
          <img
            src="https://intowellness.in/wp-content/uploads/2024/05/product-detail-banner.webp"
            alt="fitness banner"
            className="w-full max-w-2xl mx-auto lg:max-w-none object-cover rounded-3xl 
                     shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />

          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;
