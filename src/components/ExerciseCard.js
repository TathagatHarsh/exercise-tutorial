import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setShowOverlay(true);
    }, 500); // 500ms delay before showing overlay
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowOverlay(false);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!exercise) return null;

  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="group relative block bg-white rounded-lg shadow-md hover:shadow-lg \
                transition-all duration-300 overflow-hidden exercise-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-[326px] overflow-hidden">
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Regular Content */}
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 bg-[#FFA9A9] text-white rounded-full text-sm font-medium capitalize">
            {exercise.bodyPart}
          </span>
          <span className="px-3 py-1 bg-[#FCC757] text-white rounded-full text-sm font-medium capitalize">
            {exercise.target}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 capitalize">
          {exercise.name}
        </h3>
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-black/80 p-6 flex flex-col justify-center items-center text-white
                   transition-opacity duration-300 ${
                     showOverlay
                       ? "opacity-100"
                       : "opacity-0 pointer-events-none"
                   }`}
      >
        <h4 className="text-2xl font-bold mb-4 text-center capitalize">
          {exercise.name}
        </h4>
        <div className="space-y-3 text-center">
          <p>
            <span className="font-semibold">Target Muscle:</span>{" "}
            <span className="capitalize">{exercise.target}</span>
          </p>
          <p>
            <span className="font-semibold">Body Part:</span>{" "}
            <span className="capitalize">{exercise.bodyPart}</span>
          </p>
          <p>
            <span className="font-semibold">Equipment:</span>{" "}
            <span className="capitalize">{exercise.equipment}</span>
          </p>
        </div>
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full \
                         hover:bg-blue-700 transition-colors duration-300"
        >
          View Details
        </button>
      </div>
    </Link>
  );
};

export default ExerciseCard;
