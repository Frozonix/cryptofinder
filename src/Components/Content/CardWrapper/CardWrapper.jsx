import React from "react";
import "./style.css";
import cn from "classnames";
import { Currency } from "../Currency/Currency.jsx";
import { MainLoader } from "../../MainLoader/MainLoader.jsx";
import { Card } from "../Card/Card.jsx";
export function CardWrapper({ data, currencyData }) {
  const currencies = (item) => {
    return (
      <>
        <div className="w-full h-[2px] bg-midGrey3 absolute lg:hidden sm:block" />
        <Currency
          name={"RUB"}
          value={(item.data.price * currencyData?.RUB).toFixed(2)}
        />
        <Currency name={"USD"} value={item.data.price.toFixed(2)} />
        <Currency
          name={"EUR"}
          value={(item.data.price * currencyData?.EUR).toFixed(2)}
        />
      </>
    );
  };

  if (!data) {
    return <MainLoader />;
  }

  return (
    <div className={"w-full"}>
      {data.map((coinObj) => {
        const item = coinObj.item;
        return (
          <Card
            name={item.name}
            sparkline={item.data.sparkline}
            avatar={item.large}
            mc={item.data.market_cap}
            mcr={item.market_cap_rank}
            price={item.data.price}
            currencyData={currencyData}
          />
        );
        return (
          <div
            className="flex flex-row justify-between w-full mb-5 p-1 border-2 border-sand rounded-lg bg-midGrey2"
            key={item.name}
          >
            <div
              className={cn(
                "min-w-[330px] border border-[#162B2E] rounded-md md:min-w-[300px] xsm:min-w-[260px]",
                "graphic"
              )}
            >
              <img
                src={item.data.sparkline}
                className="min-w-[330px] fill-sand text-sand filter md:min-w-[300px] xsm:min-w-[260px]"
                alt=""
              />
              <div className="flex flex-row justify-between items-center gap-x-5 text-lightSand text-center relative currenciesSm:hidden">
                {currencies(item)}
              </div>
            </div>
            <div className="flex flex-row items-center gap-x-5 text-lightSand text-center relative lg:flex-col lg:gap-4 lg:self-center sm:hidden">
              {currencies(item)}
            </div>
            <div className="flex flex-col min-w-[260px] text-lightSand md:min-w-[220px] sm:min-w-[260px] xsm:justify-evenly xsm:ml-4 xsm:min-w-0 xsm:w-full">
              <div className="flex flex-row items-center justify-between xsm:flex-col-reverse">
                <h1 className="font-semibold textSm:text-sm">{item.name}</h1>
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
                <div className="textSm:text-xs">
                  Market cap: {item.data.market_cap}
                </div>
                <div className="textSm:text-xs">
                  Актуальность: {item.market_cap_rank}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
