import React from "react";
import className from "classnames";
import "./Logo.css";
export function Logo() {
  return (
    <p
      className={className(
        "flex justify-center items-center w-full max-h-28 my-14 text-yellow-400",
        "logo-font"
      )}
    >
      Cryptofinder
    </p>
  );
}
