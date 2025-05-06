import React from "react";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <button
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1200, left: 100, behavior: "smooth" });
      }}
      className={`
        px-4 py-2
        rounded-full
        text-sm font-semibold
        bg-white
        border border-gray-200
        shadow-sm
        min-w-[80px]
        ${
          bodyPart === item
            ? "bg-blue-50 border-blue-200 text-blue-800"
            : "text-gray-800"
        }
      `}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </button>
  );
};

export default BodyPart;
