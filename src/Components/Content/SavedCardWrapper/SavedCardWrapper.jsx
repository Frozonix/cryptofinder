import React, { useMemo } from "react";
import "./style.css";
import { Card } from "../Card/Card.jsx";
export function SavedCardWrapper({ data, currencyData, handleNewData }) {
  const memoData = useMemo(
    () => (data?.RAW ? Object.entries(data.RAW) : null),
    [data]
  );

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
            key={name}
            name={name}
            avatar={"https://www.cryptocompare.com" + item.IMAGEURL}
            mc={item.MKTCAP.toFixed(2)}
            price={item.PRICE}
            currencyData={currencyData}
            showDeleteBtn
            onDelete={(nameOnDelete) => {
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
      })}
    </div>
  );
}
