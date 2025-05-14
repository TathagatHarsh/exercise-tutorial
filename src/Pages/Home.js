import React, { useState } from "react";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <div className="space-y-0">
      <HeroBanner />
      <section id="workouts" className="-mt-4">
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </section>
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
      <Testimonials />
    </div>
  );
};

export default Home;
