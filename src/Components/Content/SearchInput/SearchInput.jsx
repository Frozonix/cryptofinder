import React, { useState, useEffect, useCallback } from "react";
import cn from "classnames";
import { SearchList } from "./SearchList/SearchList";
import throttle from "lodash.throttle";
import { Loader } from "../../LoaderSearch/LoaderSearch";
import OutsideClickHandler from "react-outside-click-handler";

export function SearchInput({ value, handleChange }) {
  const [isFocused, setIsFocused] = useState(false);
  const [coinsData, setCoinsData] = useState([]);
  const [status, setStatus] = useState("ok");

  const request = useCallback(
    throttle((val) => {
      setStatus("loading");
      fetch(`https://api.coingecko.com/api/v3/search?query=${val}`, {
        method: "GET",
      })
        .then((response) => {
          console.log("1111111111", response);
          if (response.status === 200) {
            setStatus("ok");
            return response.json();
          }

          const error = `Error code: ${response.status}. ${
            response.statusText ? response.statusText : null
          }`;
          setStatus(error);
          return null;
        })
        .then((data) => {
          data && setCoinsData(data.coins);
        });
    }, 2000),
    []
  );

  useEffect(() => {
    if (value) {
      request(value);
    }
  }, [value]);

  useEffect(() => {
    console.log(status);
  }, [status]);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsFocused(false);
      }}
    >
      <input
        type="text"
        className={cn(
          "flex w-full h-12 border-2 bg-lightSand rounded-md px-4 outline-none",
          isFocused ? "border-mainOrange" : "border-midGrey2"
        )}
        onFocus={() => setIsFocused(true)}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      />
      <div className="absolute right-2 top-1.5">
        {status === "loading" ? <Loader /> : null}
      </div>

      {/* value && isFocused && coinsData.length && status !== "loading" ? */}

      {value && isFocused && coinsData.length && status !== "loading" ? (
        <SearchList
          coinsData={coinsData.slice(0, 12)}
          handleFocus={(bool) => setIsFocused(bool)}
        />
      ) : null}
    </OutsideClickHandler>
  );
}
