import React from "react";

const HeroBanner = () => {
  return (
    <div className="mt-[180px] ml-[40px] bg-[#F4F9FF] rounded-[12px] p-[30px] max-w-[700px] relative md:mt-[60px] md:ml-0  ">
      <p className="text-[#007BFF] font-bold text-[30px]">
        Your Personal Trainer
      </p>

      <h1 className="font-extrabold text-[42px] mt-1 md:text-[36px] leading-tight">
        Train Smart. <br /> Stay Strong.
      </h1>

      <p className="text-[20px] leading-[32px] mt-4 text-[#555]">
        Welcome to FitGuide — your all-in-one platform for home workouts,
        training programs, and expert guidance tailored to your fitness level.
      </p>

      <p className="text-[18px] leading-[30px] mt-2 mb-4 text-[#666]">
        Whether you're a beginner or a seasoned athlete, we've got you covered
        with detailed tutorials, exercise plans, and progress tracking to help
        you achieve your goals.
      </p>

      <hr className="my-6 border-gray-300" />

      <p className="italic text-[17px] text-gray-600 mb-4">
        “Discipline is the bridge between goals and accomplishment.” – Jim Rohn
      </p>

      <button className="bg-[#007BFF] text-white py-[10px] px-[20px] text-[16px] rounded-[8px] hover:bg-[#0056b3] transition-colors">
        Browse Tutorials
      </button>
    </div>
  );
};

export default HeroBanner;
