/** @jsxImportSource @emotion/react */
import React from "react";
import { cx } from "@emotion/css";

import BalanceCard from "./BalanceCard";
import { TokenBalance, useTokenBalance } from "../hooks/useTokenBalance";

const BalanceList = () => {
  const balanceList: TokenBalance[] = useTokenBalance();

  return (
    <>
      <div className="w-full h-fit rounded-2xl p-4 mb-4 bg-white text-secondary flex flex-col items-center shadow-card">
        <div className="text-sm font-black mb-4"> TRANSFER</div>
        {balanceList.map((tokenBalance: TokenBalance, index: number) => {
          return (
            <div
              className={cx("w-full", {
                "border-b border-secondary border-opacity-10":
                  index !== balanceList.length - 1,
              })}
            >
              <BalanceCard tokenBalance={tokenBalance} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BalanceList;
// 공동창업자 점수 -> 일자리창출
// 공동창업자를 지정 -> 1달 정도라도 4대보험 주고 고용을 하면 +3
// 지승님한테 약간 불이익 -> 소득이 잡힌다...?
// 제가 세금이랑 다 내드릴게요
