import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import ExerciseCard from "../components/ExerciseCard";

const Favorites = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      const favs =
        JSON.parse(localStorage.getItem(`favorites_${user.username}`)) || [];
      setFavorites(favs);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[400px] pt-24 px-4">
        <div className="text-center text-gray-500">
          Please log in to view your favorites.
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 md:px-8 lg:px-16 pt-24 min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-8 text-3xl font-bold">My Favorite Exercises</h1>
        {favorites.length === 0 ? (
          <div className="text-gray-500">No favorites yet.</div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
