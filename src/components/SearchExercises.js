import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <div className="flex flex-col items-center px-5 py-6 mt-10">
      <h2 className="font-extrabold text-center text-[30px] md:text-[44px] mb-12">
        Awesome Exercises You <br className="hidden md:block" /> Should Know
      </h2>
      <div className="relative mb-20 w-full max-w-[1170px]">
        <input
          type="text"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className="w-full h-[76px] pl-6 pr-[180px] bg-white text-black font-bold rounded-full shadow-md focus:outline-none text-base md:text-lg"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-5 md:px-10 h-[56px] rounded-full text-sm md:text-lg hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>
      <div className="w-full px-5">
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </div>
    </div>
  );
};

export default SearchExercises;
