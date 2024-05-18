import React, { useState } from "react";
import { Currency } from "../Currency/Currency";
import cn from "classnames";

export function Card({
  name,
  sparkline,
  avatar,
  mc,
  mcr,
  price,
  currencyData,
  showDeleteBtn,
  onDelete,
}) {
  const currencies = () => {
    return (
      <>
        <div className="w-full h-[2px] bg-midGrey3 absolute lg:hidden sm:block" />
        <Currency name={"RUB"} value={(price * currencyData?.RUB).toFixed(2)} />
        <Currency name={"USD"} value={price.toFixed(2)} />
        <Currency name={"EUR"} value={(price * currencyData?.EUR).toFixed(2)} />
      </>
    );
  };

  return (
    <div
      className="flex flex-row justify-between w-full mb-5 p-1 border-2 border-sand rounded-lg bg-midGrey2 min-h-[136px] relative"
      key={name}
    >
      <div
        className={cn(
          "flex justify-center items-center min-w-[330px] border border-[#162B2E] text-lightSand rounded-md xsm:min-w-[260px] sm:flex-col",
          "graphic"
        )}
      >
        {sparkline ? (
          <img
            src={sparkline}
            className="min-w-[330px] fill-sand text-sand filter md:min-w-[300px] xsm:min-w-[260px]"
            alt=""
          />
        ) : (
          "no data"
        )}

        <div className="flex flex-row justify-between items-center gap-x-5 text-lightSand text-center relative currenciesSm:hidden">
          {currencies()}
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-5 text-lightSand text-center relative lg:flex-col lg:gap-4 lg:self-center sm:hidden">
        {currencies()}
      </div>
      <div className="flex flex-col min-w-[260px] text-lightSand md:min-w-[220px] sm:min-w-[260px] xsm:justify-evenly xsm:ml-4 xsm:min-w-0 xsm:w-full">
        <div className="flex flex-row items-center justify-between xsm:flex-col-reverse">
          <h1 className="font-semibold textSm:text-sm">{name}</h1>
          <div>
            <img
              src={avatar}
              mainOrange
              className="w-[60px] h-[60px] rounded-full border-4 border-brown"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="textSm:text-xs">
            Market cap: {typeof mc === "number" ? mc?.toFixed(0) : mc}
          </div>
          <div className="textSm:text-xs">Актуальность: {mcr || "no data"}</div>
        </div>
      </div>
      {showDeleteBtn && (
        <button
          className="absolute right-2 bottom-2 font-bold bg-mainOrange rounded-full text-brown w-6 h-6"
          onClick={() => onDelete(name)}
        >
          X
        </button>
      )}
    </div>
  );
}
