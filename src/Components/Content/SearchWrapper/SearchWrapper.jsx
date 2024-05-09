import React, { useState, useEffect } from "react";
import "./style.css";
import { SearchInput } from "../SearchInput/SearchInput";
import { apiKey_cryptoCompare } from "../../../globalVariables";
import { SavedCardWrapper } from "../SavedCardWrapper/SavedCardWrapper";
import cn from "classnames";
export function SearchWrapper({ border }) {
  const [value, setValue] = useState("");
  const [savedCoins, setSavedCoins] = useState(null);
  useEffect(() => {
    fetch(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${JSON.parse(
        localStorage.getItem("saved-coins")
      ).join(",")}&tsyms=USD`,
      {
        method: "GET",
        headers: {
          authorization: apiKey_cryptoCompare,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("!!!", data);
        setSavedCoins(data.RAW);
      });
  }, []);

  return (
    <>
      <div
        className={cn(
          "relative w-[80%] mx-auto flex flex-col justify-center",
          border
        )}
      >
        <SearchInput
          value={value}
          handleChange={(string) => setValue(string)}
        />
      </div>
      <div>
        {/* {savedCoins &&
          savedCoins.map((item) => (
            <SavedCardWrapper data={item}></SavedCardWrapper>
          ))
          } */}
      </div>
    </>
  );
}
