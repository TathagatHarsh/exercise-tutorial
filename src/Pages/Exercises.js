import React, { useState } from "react";
import SearchExercises from "../components/SearchExercises";
import ExercisesList from "../components/Exercises";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <div className="pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Exercise Library
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Discover exercises for every muscle group. Filter by body part,
          equipment, or search by name.
        </p>

        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />

        <ExercisesList
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
        />
      </div>
    </div>
  );
};

export default Exercises;
