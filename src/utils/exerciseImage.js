import { EXERCISE_DB_API_KEY } from "./fetchData";

const DEFAULT_EXERCISE_IMAGE = "https://via.placeholder.com/600x400?text=No+Image+Available";

/**
 * Generates the URL for an exercise GIF using the ExerciseDB /image endpoint.
 * 
 * @param {Object} exercise - The exercise object.
 * @param {string} resolution - The desired resolution (180, 360, 720, 1080). Defaults to "360".
 * @returns {string} - The constructed image URL.
 */
export const getExerciseImageUrl = (exercise, resolution = "360") => {
  if (!exercise || !exercise.id) {
    // Fallback to existing URLs if exercise ID is missing (for safety)
    return exercise?.gifUrl || exercise?.image || exercise?.imageUrl || exercise?.url || DEFAULT_EXERCISE_IMAGE;
  }

  // Use the new endpoint as recommended by the documentation
  return `https://exercisedb.p.rapidapi.com/image?exerciseId=${exercise.id}&resolution=${resolution}&rapidapi-key=${EXERCISE_DB_API_KEY}`;
};
