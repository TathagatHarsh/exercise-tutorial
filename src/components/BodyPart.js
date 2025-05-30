import React from "react";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const handleClick = () => {
    setBodyPart(item);
    const exercisesSection = document.querySelector("#exercises");
    if (exercisesSection) {
      exercisesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-full p-6
        rounded-xl
        flex flex-col items-center
        transition-all duration-300
        ${
          bodyPart === item
            ? "bg-blue-600 text-white shadow-lg scale-105"
            : "bg-white text-gray-800 hover:bg-blue-50 hover:shadow-md"
        }
      `}
    >
      <span className="text-lg font-semibold capitalize mb-2">{item}</span>
      <span className="text-sm opacity-75">
        {bodyPart === item ? "Selected" : "Click to filter"}
      </span>
    </button>
  );
};

export default BodyPart;
