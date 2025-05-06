import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import ExerciseCard from "./ExerciseCard.js";
import BodyPart from "./BodyPart.js";

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <div className="relative flex justify-center w-full mt-4">
    <div className="w-full max-w-4xl">
      <ScrollMenu>
        {data.map((item) => (
          <div
            key={item.id || item}
            title={item.id || item}
            className="inline-block mx-1"
          >
            {bodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </div>
        ))}
      </ScrollMenu>
    </div>
  </div>
);

export default HorizontalScrollbar;
