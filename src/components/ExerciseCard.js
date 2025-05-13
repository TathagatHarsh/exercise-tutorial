import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  // Add console log to debug the data
  console.log("Exercise data:", exercise);

  if (!exercise) return null;

  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden exercise-card"
    >
      <div className="w-full h-[326px] overflow-hidden">
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
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
    </Link>
  );
};

export default ExerciseCard;
