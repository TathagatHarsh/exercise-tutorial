import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <div className="flex flex-row">
      <button
        style={{
          marginLeft: "21px",
          color: "#fff",
          backgroundColor: "#FFA9A9",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
        className="px-4 py-1"
      >
        {exercise.bodyPart}
      </button>
      <button
        style={{
          marginLeft: "21px",
          color: "#fff",
          backgroundColor: "#FCC757",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
        className="px-4 py-1"
      >
        {exercise.target}
      </button>
    </div>
    <p
      style={{
        marginLeft: "21px",
        color: "#000",
        fontWeight: "bold",
        marginTop: "11px",
        paddingBottom: "10px",
        textTransform: "capitalize",
        fontSize: "24px",
      }}
      className="text-lg md:text-xl"
    >
      {exercise.name}
    </p>
  </Link>
);

export default ExerciseCard;
