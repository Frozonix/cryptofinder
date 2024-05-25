import React from "react";
export function SearchList({ coinsData, handleFocus, onAdd }) {
  const itemClassname = "w-full p-2 hover:bg-midGrey3 overflow-hidden";
  return (
    <div className="absolute z-50 w-full bg-midGrey rounded-md mt-3 text-lightSand border border-lightSand cursor-pointer">
      <ul className="overflow-hidden rounded-md">
        {coinsData.map((coin) => (
          <li
            key={coin.symbol}
            className={itemClassname}
            onClick={(e) => {
              const key = "saved-coins";
              let savedCoins;
              try {
                savedCoins = JSON.parse(localStorage.getItem(key));
              } catch {
                localStorage.setItem("saved-coins", JSON.parse([]));
                return null;
              }

              if (!savedCoins.includes(coin.symbol)) {
                savedCoins.push(coin.symbol);
                localStorage.setItem(key, JSON.stringify(savedCoins));
                onAdd();
              }

              handleFocus(false);
            }}
          >
            {coin.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
