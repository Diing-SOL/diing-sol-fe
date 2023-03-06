/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import CardBackground from "../assets/pngs/img-background-sm.png";
import WalletIcon from "../assets/WalletIcon";
import CopyIcon from "../assets/CopyIcon";
import CheckIcon from "../assets/CheckIcon";

enum connectionState {
  Connected = "connected",
  Disconnected = "disconnected",
}

const WalletInfo = () => {
  return (
    <>
      <div
        className="w-full h-32 rounded-2xl p-8 mb-3 flex flex-col justify-between"
        css={css`
          background-image: url(${CardBackground});
          background-size: cover;
          background-repeat: no-repeat;
        `}
      >
        <div className="flex flex-row items-center gap-4">
          <WalletIcon />
          <div className="text-white text-sm font-medium">
            {connectionState.Connected}
          </div>
        </div>
        {true && (
          <div className="h-5 flex flex-row items-center gap-2 cursor-pointer">
            <div className="w-full pr-4 truncate text-white text-sm font-semibold">
              6ARSYR2B1aPWSjK11ZXDPmApgLgar3bCrm2BTYGS2jBK
            </div>
            {true ? <CheckIcon fill={"white"} /> : <CopyIcon fill={"white"} />}
          </div>
        )}
      </div>
    </>
  );
};

export default WalletInfo;
