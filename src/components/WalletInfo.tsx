/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useMemo, useState } from "react";
import CardBackground from "../assets/pngs/img-background-sm.png";
import WalletIcon from "../assets/WalletIcon";
import CopyIcon from "../assets/CopyIcon";
import CheckIcon from "../assets/CheckIcon";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

enum connectionState {
  Connected = "connected",
  Disconnected = "disconnected",
}

const WalletInfo = () => {
  const [address, setAddress] = useState("");
  const { publicKey } = useWallet();
  useMemo(() => {
    const addr = publicKey?.toString();
    setAddress(addr!);
  }, [publicKey]);
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
              {address}
            </div>
            {true ? <CheckIcon fill={"white"} /> : <CopyIcon fill={"white"} />}
          </div>
        )}
      </div>
    </>
  );
};

export default WalletInfo;
