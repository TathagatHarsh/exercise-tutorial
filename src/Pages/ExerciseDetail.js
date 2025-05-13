import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import Loader from "../components/Loader";
import ExerciseCard from "../components/ExerciseCard";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const [similarExercises, setSimilarExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch exercise detail
        const exerciseDetailData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);

        // Fetch similar exercises based on target muscle
        const targetMuscleExercises = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`,
          exerciseOptions
        );
        setSimilarExercises(targetMuscleExercises);
      } catch (err) {
        setError("Failed to load exercise details. Please try again later.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExerciseData();
  }, [id]);

  if (isLoading) return <Loader />;

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="p-4 text-center text-red-500 rounded-lg bg-red-50">
          {error}
        </div>
      </div>
    );
  }

  if (!exerciseDetail) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center text-gray-500">Exercise not found.</div>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 md:px-8 lg:px-16">
      {/* Exercise Detail Section */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 overflow-hidden bg-white shadow-lg rounded-2xl">
          <div className="p-6 md:p-8">
            <h1 className="mb-4 text-3xl font-bold capitalize md:text-4xl">
              {exerciseDetail.name}
            </h1>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
                {exerciseDetail.bodyPart}
              </span>
              <span className="px-4 py-1 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
                {exerciseDetail.target}
              </span>
              <span className="px-4 py-1 text-sm font-semibold text-purple-800 bg-purple-100 rounded-full">
                {exerciseDetail.equipment}
              </span>
            </div>

            <div className="flex justify-center mb-8">
              <img
                src={exerciseDetail.gifUrl}
                alt={exerciseDetail.name}
                className="h-auto max-w-full rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Similar Exercises Section */}
        <div className="mt-12">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            Similar Exercises Targeting {exerciseDetail.target}
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {similarExercises.slice(0, 6).map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
