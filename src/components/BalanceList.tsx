/** @jsxImportSource @emotion/react */
import React from "react";
import { cx } from "@emotion/css";

import BalanceCard from "./BalanceCard";

const BalanceList = () => {
  const currencyList = ["SOL", "USDC", "USDT", "ETH", "POLYGON"];

  return (
    <>
      <div className="w-full h-fit rounded-2xl p-4 mb-4 bg-white text-secondary flex flex-col items-center shadow-card">
        <div className="text-sm font-black mb-4"> TRANSFER</div>
        {currencyList.map((symbol: string, index) => {
          return (
            <div
              className={cx("w-full", {
                "border-b border-secondary border-opacity-10":
                  index !== currencyList.length - 1,
              })}
            >
              <BalanceCard symbol={"SOL"} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BalanceList;
