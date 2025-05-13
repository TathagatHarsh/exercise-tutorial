import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ExerciseCard from "./ExerciseCard.js";
import BodyPart from "./BodyPart.js";

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 
                bg-white p-3 rounded-full shadow-lg
                transition-all duration-300 focus:outline-none
                ${
                  isFirstItemVisible
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-50"
                }`}
    >
      <svg
        className="w-6 h-6 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 
                bg-white p-3 rounded-full shadow-lg
                transition-all duration-300 focus:outline-none
                ${
                  isLastItemVisible
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-50"
                }`}
    >
      <svg
        className="w-6 h-6 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return (
    <div className="relative w-full">
      <div className="overflow-hidden px-12">
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onWheel={({ deltaY }) => {
            if (deltaY < 0) {
              // Scroll left on negative delta
              document.querySelector(".horizontal-scroll")?.scrollBy(-100, 0);
            } else {
              // Scroll right on positive delta
              document.querySelector(".horizontal-scroll")?.scrollBy(100, 0);
            }
          }}
        >
          <div className="flex gap-4 py-4 horizontal-scroll">
            {data.map((item) => (
              <div
                key={item.id || item}
                itemId={item.id || item}
                className="mx-2 min-w-[270px] transition-transform duration-300 hover:scale-105"
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
          </div>
        </ScrollMenu>
      </div>
    </div>
  );
};

export default HorizontalScrollbar;
