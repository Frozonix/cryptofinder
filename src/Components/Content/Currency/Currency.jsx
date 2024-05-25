import React from "react";
export function Currency({ name, value }) {
  return (
    <div className="w-[82px] flex flex-col gap-4 lg:flex-row sm:flex-col xxsm:w-[0px] xxsm:flex-row">
      <span className="text-mainOrange font-semibold textSm:text-xs">
        {name}
      </span>
      <span className="xxsm:text-xs">{value}</span>
    </div>
  );
}
