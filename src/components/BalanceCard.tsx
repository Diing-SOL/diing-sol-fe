import React from "react";
import sol from "../assets/pngs/img-sol.png";
import ExpandIcon from "../assets/ExpandIcon";
import { useTokenBalance } from "../hooks/useTokenBalance";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

type Props = {
  symbol: string;
};

const BalanceCard = ({ symbol }: Props) => {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const { tokenName, tokenBalance, tokenDecimal } = useTokenBalance(
    connection,
    publicKey,
    symbol
  );

  return (
    <>
      <div className="w-full px-2 py-4 rounded-xl flex flex-row justify-between items-center text-black bg-white bg-opacity-10">
        <div className="flex flex-row gap-2 justify-start">
          <img className="w-6 h-6" src={sol} />
          {tokenName}
          <button className="px-2 border border-primary rounded-full text-xs text-primary font-medium disabled:hidden">
            get
          </button>
        </div>
        <div className="flex flex-row cursor-pointer items-center">
          <div className="flex flex-col items-end mr-4">
            <div>
              <div>
                {(tokenBalance / Math.pow(10, tokenDecimal)).toFixed(2)}
              </div>
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
