import React from "react";

const ExerciseOverlay = ({ exercise, onClose, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl p-8 mx-4 bg-white rounded-lg">
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
        >
          ✕
        </button>

        <div className="flex flex-col items-center">
          <img
            src={exercise.gifUrl}
            alt={exercise.name}
            className="w-full max-w-md mb-6 rounded-lg"
          />

          <h2 className="mb-4 text-2xl font-bold capitalize">
            {exercise.name}
          </h2>

          <div className="flex gap-4 mb-4">
            <span className="px-4 py-1 bg-[#FFA9A9] text-white rounded-full">
              {exercise.bodyPart}
            </span>
            <span className="px-4 py-1 bg-[#FCC757] text-white rounded-full">
              {exercise.target}
            </span>
          </div>

          <div className="text-gray-700">
            <p className="mb-2">
              <strong>Equipment:</strong> {exercise.equipment}
            </p>
            <p>
              <strong>Target Muscle:</strong> {exercise.target}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseOverlay;
