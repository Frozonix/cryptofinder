import React, { useState, useEffect } from "react";
import { Logo } from "./Logo/Logo";
import { Switcher } from "./Switcher/Switcher";
import { CardWrapper } from "./CardWrapper/CardWrapper";
import { SearchWrapper } from "./SearchWrapper/SearchWrapper";
import { apiKey } from "../../globalVariables";
import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import { currencyApiKey } from "../../globalVariables";

export function Content() {
  const [switcherId, setSwitcherId] = useState(0);
  const [coinsData, setCoinsData] = useState(null);
  const [currencyData, setCurrencyData] = useState(null);

  const apiRequest = () => {
    const url =
      "https://api.coingecko.com/api/v3/search/trending?x_cg_api_key=" + apiKey;

    const freecurrencyapi = new Freecurrencyapi(currencyApiKey);

    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setCoinsData(data.coins);

        freecurrencyapi
          .latest({ base_currency: "USD", currencies: "EUR,RUB" })
          .then((response) => {
            console.log("currency!!!", response);
            setCurrencyData(response.data);
          });
      })
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => apiRequest(), []);

  useEffect(() => {
    if (coinsData) {
      const timerId = setTimeout(() => apiRequest(), 120000);
      return () => clearTimeout(timerId);
    }
  }, [coinsData]);

  const handleSwitcherChange = (id) => {
    setSwitcherId(id);
  };

  return (
    <div className="w-[1040px] h-full bg-stone-700">
      <Logo />
      <div className="flex flex-col items-center border-[12px] border-solid border-transparent">
        <Switcher currentId={switcherId} handleChange={handleSwitcherChange} />
        {switcherId === 0 ? (
          <CardWrapper data={coinsData} currencyData={currencyData} />
        ) : (
          <SearchWrapper currencyData={currencyData} />
        )}
      </div>
    </div>
  );
}
