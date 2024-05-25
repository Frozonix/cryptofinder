import React from "react";
import cn from "classnames";
import "./Switcher.css";

export function Switcher({ currentId, handleChange }) {
  const background = (id) => {
    if (id === currentId) {
      return "bg-mainOrange w-[300px]";
    }

    return "bg-notActive w-[300px]";
  };
  return (
    <div className="flex flex-row justify-center text-center w-[600px] h-9 bg-white rounded-lg border-2 border-brown mb-[60px] swResizeLg:w-[450px] swResizeMd:w-[380px] swResizeSm:w-[300px] swResizeSm:text-[13px]">
      <label
        htmlFor="actual-id"
        className={cn(
          background(0),
          "flex justify-center items-center rounded-l-lg"
        )}
      >
        <input
          type="radio"
          id="actual-id"
          name="switcher"
          checked={0 === currentId}
          onChange={() => handleChange(0)}
          className="hidden"
        />
        <span className={cn("font-switcher", "text-brown")}>
          Актуальньные валюты
        </span>
      </label>

      <label
        htmlFor="search-id"
        className={cn(
          background(1),
          "flex justify-center items-center rounded-r-lg"
        )}
      >
        <input
          type="radio"
          id="search-id"
          name="switcher"
          checked={1 === currentId}
          onChange={() => handleChange(1)}
          className="hidden"
        />
        <span className={cn("font-switcher", "text-brown")}>Поиск</span>
      </label>
    </div>
  );
}
