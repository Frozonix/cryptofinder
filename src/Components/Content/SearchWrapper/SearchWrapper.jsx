import React, { useState, useEffect } from "react";
import "./style.css";
import { SearchInput } from "../SearchInput/SearchInput";
import { apiKey_cryptoCompare } from "../../../globalVariables";
import { SavedCardWrapper } from "../SavedCardWrapper/SavedCardWrapper";
import cn from "classnames";
export function SearchWrapper({ currencyData }) {
  const [value, setValue] = useState("");
  const [savedCoins, setSavedCoins] = useState(null);

  const request = () => {
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
        setSavedCoins(data);
      });
  };
  useEffect(() => request(), []);

  return (
    <>
      <div
        className={cn("relative w-[100%] mx-auto flex flex-col justify-center")}
      >
        <SearchInput
          value={value}
          handleChange={(string) => setValue(string)}
          onAdd={() => request()}
        />
      </div>
      <div className="w-full">
        {savedCoins ? (
          <SavedCardWrapper
            data={savedCoins}
            currencyData={currencyData}
            handleNewData={(state) => setSavedCoins(state)}
          />
        ) : null}
      </div>
    </>
  );
}
