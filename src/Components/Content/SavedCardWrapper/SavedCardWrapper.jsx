import React from "react";
import "./style.css";
import cn from "classnames";
import { Currency } from "../Currency/Currency.jsx";
import { MainLoader } from "../../MainLoader/MainLoader.jsx";
export function SavedCardWrapper({ data, currencyData }) {
  if (!data) {
    return <MainLoader />;
  }

  return (
    <div className="w-full">
      {data.map((coinObj) => {
        const item = coinObj.item;
        return (
          <div
            className="flex flex-row justify-between w-full mb-5 p-1 border-2 border-sand rounded-lg bg-midGrey2"
            key={item.name}
          >
            <div
              className={cn(
                "min-w-[330px] border border-[#162B2E] rounded-md",
                "graphic"
              )}
            >
              <img
                src={item.data.sparkline}
                className="min-w-[330px] fill-sand text-sand filter"
                alt=""
              />
            </div>
            <div className="flex flex-row items-center gap-x-5 text-lightSand text-center relative">
              <div className="w-full h-[2px] bg-midGrey3 absolute" />
              <Currency
                name={"RUB"}
                value={(item.data.price * currencyData?.RUB).toFixed(2)}
              />
              <Currency name={"USD"} value={item.data.price.toFixed(2)} />
              <Currency
                name={"EUR"}
                value={(item.data.price * currencyData?.EUR).toFixed(2)}
              />
            </div>
            <div className="flex flex-col min-w-[260px] text-lightSand">
              <div className="flex flex-row items-center justify-between">
                <h1 className="font-semibold">{item.name}</h1>
                <div>
                  <img
                    src={item.large}
                    mainOrange
                    className="w-[60px] h-[60px] rounded-full border-4 border-brown"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div>Market cap: {item.data.market_cap}</div>
                <div>Актуальность: {item.market_cap_rank}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
