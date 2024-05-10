import React from "react";
export function Currency({ name, value }) {
  return (
    <div className="w-[82px] flex flex-col gap-4 lg:flex-row sm:flex-col">
      <p className="text-mainOrange font-semibold">{name}</p>
      <p className="textSm:text-xs">{value}</p>
    </div>
  );
}
