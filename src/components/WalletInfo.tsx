/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useMemo, useState } from "react";
import CardBackground from "../assets/pngs/img-background-sm.png";
import WalletIcon from "../assets/WalletIcon";
import CopyIcon from "../assets/CopyIcon";
import CheckIcon from "../assets/CheckIcon";
import Clipboard from "../utils/Clipboard";
import { useWallet } from "@solana/wallet-adapter-react";

enum connectionState {
  Connected = "connected",
  Disconnected = "disconnected",
}

const WalletInfo = () => {
  const [address, setAddress] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const { connected, publicKey } = useWallet();

  useMemo(() => {
    const addr = publicKey?.toString();
    setAddress(addr!);
  }, [publicKey]);

  const handleCopy = async (link: string) => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    await Clipboard.writeText(link);
  };
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
            {connected
              ? connectionState.Connected
              : connectionState.Disconnected}
          </div>
        </div>
        {true && (
          <div
            className="h-5 flex flex-row items-center gap-2 cursor-pointer"
            onClick={() => handleCopy(address!)}
          >
            <div className="w-full pr-4 truncate text-white text-sm font-semibold">
              {address}
            </div>
            {isCopied ? (
              <CheckIcon fill={"white"} />
            ) : (
              <CopyIcon fill={"white"} />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default WalletInfo;
