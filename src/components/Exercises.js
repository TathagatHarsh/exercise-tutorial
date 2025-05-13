import React, { useEffect, useState } from "react";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        let exercisesData = [];

        if (bodyPart === "all") {
          exercisesData = await fetchData(
            "https://exercisedb.p.rapidapi.com/exercises",
            exerciseOptions
          );
        } else {
          exercisesData = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            exerciseOptions
          );
        }

        if (!Array.isArray(exercisesData)) {
          throw new Error("Invalid data received from the server");
        }

        // Log the first exercise to check the data structure
        if (exercisesData.length > 0) {
          console.log("Sample exercise data:", exercisesData[0]);
        }

        setExercises(exercisesData);
      } catch (err) {
        setError(err.message || "Failed to fetch exercises");
        console.error("Error fetching exercises:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = Array.isArray(exercises)
    ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    : [];

  const paginate = (value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (isLoading) return <Loader />;

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  if (!currentExercises.length) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500 text-center">
          No exercises found. Try a different search or category.
        </div>
      </div>
    );
  }

  return (
    <div id="exercises" className="mt-8 lg:mt-12 p-5">
      <h2 className="text-3xl lg:text-[44px] font-bold mb-8 text-center">
        Showing Results
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
      {exercises?.length > exercisesPerPage && (
        <div className="flex justify-center mt-12 gap-2 flex-wrap">
          {Array.from(
            { length: Math.ceil(exercises.length / exercisesPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                } hover:bg-blue-500 transition-colors`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Exercises;
