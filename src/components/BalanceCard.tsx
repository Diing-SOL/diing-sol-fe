import React, { useState } from "react";
import ExpandIcon from "../assets/ExpandIcon";
import { TokenBalance } from "../hooks/useTokenBalance";
import { getIconImage } from "../constants/tokenInfo";

const BalanceCard = (props: { tokenBalance: TokenBalance }) => {
  return (
    <>
      <div className="w-full px-2 py-4 rounded-xl flex flex-row justify-between items-center text-black bg-white bg-opacity-10">
        <div className="flex flex-row gap-2 justify-start">
          <img
            className="w-6 h-6"
            src={getIconImage(props.tokenBalance.symbol)}
          />
          {props.tokenBalance.symbol}
          {props.tokenBalance.symbol === "SOL" ? (
            <></>
          ) : (
            <>
              <button className="px-2 border border-primary rounded-full text-xs text-primary font-medium disabled:hidden">
                get
              </button>
            </>
          )}
        </div>
        <div className="flex flex-row cursor-pointer items-center">
          <div className="flex flex-col items-end mr-4">
            <div>
              <div>{props.tokenBalance.balance}</div>
            </div>
            <div className="text-sm text-secondary opacity-60 z-0">
              233.44 USD
            </div>
          </div>
          <ExpandIcon fill={"black"} size={[12, 12]} />
        </div>
      </div>
    </>
  );
};

export default BalanceCard;
