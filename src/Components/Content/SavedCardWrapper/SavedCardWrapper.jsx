import React, { useMemo } from "react";
import "./style.css";
import cn from "classnames";
import { Currency } from "../Currency/Currency.jsx";
import { MainLoader } from "../../MainLoader/MainLoader.jsx";
import { Card } from "../Card/Card.jsx";
export function SavedCardWrapper({ data, currencyData, handleNewData }) {
  const memoData = useMemo(
    () => (data?.RAW ? Object.entries(data.RAW) : null),
    [data]
  );

  // console.log("111", Object.entries(data.RAW));

  if (!memoData) {
    return null;
  }

  return (
    <div className="w-full mt-8">
      {Object.values(memoData)?.map((coinObj) => {
        const name = coinObj[0];
        const item = coinObj[1].USD;
        console.log("111", coinObj);
        return (
          <Card
            name={name}
            avatar={"https://www.cryptocompare.com" + item.IMAGEURL}
            mc={item.MKTCAP.toFixed(2)}
            price={item.PRICE}
            currencyData={currencyData}
            showDeleteBtn
            onDelete={(nameOnDelete) => {
              const savedCoins = JSON.parse(
                localStorage.getItem("saved-coins")
              );
              // const newData = savedCoins.filter((item) => item !== name);
              const newDataLocalStorage = [];
              const newData = memoData.filter((array) => {
                nameOnDelete !== array[0] && newDataLocalStorage.push(array[0]);
                return nameOnDelete !== array[0];
              });
              localStorage.setItem(
                "saved-coins",
                JSON.stringify(newDataLocalStorage)
              );

              handleNewData({ RAW: Object.fromEntries(newData) });
            }}
          />
        );
        return (
          <div
            className="flex flex-row justify-between w-full mb-5 p-1 border-2 border-sand rounded-lg bg-midGrey2 min-h-[136px]"
            key={name}
          >
            <div
              className={cn(
                "flex justify-center items-center min-w-[330px] border border-[#162B2E] text-lightSand rounded-md",
                "graphic"
              )}
            >
              no data
            </div>

            <div className="flex flex-row items-center gap-x-5 text-lightSand text-center relative z-10">
              <div className="w-full h-[2px] bg-midGrey3 absolute" />
              <Currency
                name={"RUB"}
                value={(item.PRICE * currencyData?.RUB).toFixed(2)}
              />
              <Currency name={"USD"} value={item.PRICE.toFixed(2)} />
              <Currency
                name={"EUR"}
                value={(item.PRICE * currencyData?.EUR).toFixed(2)}
              />
            </div>

            <div className="flex flex-col min-w-[260px] text-lightSand">
              <div className="flex flex-row items-center justify-between">
                <h1 className="font-semibold">{name}</h1>
                <div>
                  <img
                    src={"https://www.cryptocompare.com" + item.IMAGEURL}
                    mainOrange
                    className="w-[60px] h-[60px] rounded-full border-4 border-brown"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div>Market cap: {item.MKTCAP.toFixed(2)}</div>
                <div>Актуальность: no data</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
