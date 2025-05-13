import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState(["all"]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );

        if (Array.isArray(bodyPartsData) && bodyPartsData.length > 0) {
          setBodyParts(["all", ...bodyPartsData]);
        } else {
          setError("Failed to load body parts data");
        }
      } catch (err) {
        setError(err.message || "Error fetching body parts data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        setIsLoading(true);
        setError(null);
        const exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );

        if (Array.isArray(exercisesData)) {
          const searchedExercises = exercisesData.filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.target.toLowerCase().includes(search.toLowerCase()) ||
              item.equipment.toLowerCase().includes(search.toLowerCase()) ||
              item.bodyPart.toLowerCase().includes(search.toLowerCase())
          );

          setSearch("");
          setExercises(searchedExercises);
          window.scrollTo({ top: 1800, behavior: "smooth" });

          if (searchedExercises.length === 0) {
            setError("No exercises found matching your search");
          }
        } else {
          setError("Failed to load exercises data");
        }
      } catch (err) {
        setError(err.message || "Error searching exercises");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-[600px] bg-gradient-to-b from-blue-50 to-white">
      <div className="flex flex-col items-center px-5 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Awesome Exercises You <br className="hidden md:block" />
            Should Know
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover thousands of exercises to help you achieve your fitness
            goals
          </p>
        </div>

        <div className="relative w-full max-w-[1170px] mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Exercises, Target Muscles, or Equipment..."
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              onKeyPress={handleKeyPress}
              className="w-full h-[76px] pl-8 pr-[180px] bg-white text-gray-800 
                       rounded-full shadow-lg focus:outline-none focus:ring-2 
                       focus:ring-blue-500 text-lg font-medium transition-all
                       border border-gray-200"
            />
            <button
              onClick={handleSearch}
              disabled={isLoading || !search.trim()}
              className={`absolute right-2 top-1/2 -translate-y-1/2 
                       px-8 h-[56px] rounded-full text-lg font-semibold
                       transition-all duration-300 ${
                         isLoading || !search.trim()
                           ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                           : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
                       }`}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <span className="animate-spin mr-2">⚪</span>
                  Searching
                </div>
              ) : (
                "Search"
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="w-full max-w-[1170px] mb-6">
            <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg border border-red-100">
              {error}
            </div>
          </div>
        )}

        <div className="w-full max-w-[1170px]">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Explore by Body Part
          </h3>
          <div className="px-2">
            {!isLoading && !error && (
              <HorizontalScrollbar
                data={bodyParts}
                bodyParts
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchExercises;
