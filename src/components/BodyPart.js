import React from "react";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <div
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
    className={`flex flex-col items-center justify-center rounded-bl-[20px] w-[270px] h-[282px] cursor-pointer gap-[47px] ${
      bodyPart === item ? "border-t-4 border-blue-600 bg-white" : "bg-white"
    }`}
  >
    <img src={Icon} alt="dumbbell" className="w-10 h-10" />
    <p className="text-2xl font-bold font-['Alegreya'] text-[#3A1212] capitalize">
      {item}
    </p>
  </div>
);

export default BodyPart;
