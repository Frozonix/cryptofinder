import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

export function SearchList({ coinsData, handleFocus }) {
  const itemClassname = "w-full p-2 hover:bg-midGrey3 overflow-hidden";
  return (
    // <OutsideClickHandler
    //   onOutsideClick={() => {
    //     alert("You clicked outside of this component!!!");
    //   }}
    // >
    <div className="w-full bg-midGrey rounded-md mt-3 text-lightSand border border-lightSand cursor-pointer">
      <ul className="overflow-hidden rounded-md">
        {coinsData.map((coin) => (
          <li
            className={itemClassname}
            onClick={(e) => {
              const key = "saved-coins";
              const savedCoins = JSON.parse(localStorage.getItem(key));
              !savedCoins.includes(coin.symbol) && savedCoins.push(coin.symbol);
              localStorage.setItem(key, JSON.stringify(savedCoins));
            }}
          >
            {coin.name}
          </li>
        ))}
      </ul>
    </div>
    // </OutsideClickHandler>
  );
}
