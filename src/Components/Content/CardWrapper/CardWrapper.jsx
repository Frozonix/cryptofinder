import React from "react";
import "./style.css";
import { MainLoader } from "../../MainLoader/MainLoader.jsx";
import { Card } from "../Card/Card.jsx";
export function CardWrapper({ data, currencyData }) {
  if (!data) {
    return <MainLoader />;
  }

  return (
    <div className={"w-full"}>
      {data.map((coinObj) => {
        const item = coinObj.item;
        return (
          <Card
            key={item.name}
            name={item.name}
            sparkline={item.data.sparkline}
            avatar={item.large}
            mc={item.data.market_cap}
            mcr={item.market_cap_rank}
            price={item.data.price}
            currencyData={currencyData}
          />
        );
      })}
    </div>
  );
}
