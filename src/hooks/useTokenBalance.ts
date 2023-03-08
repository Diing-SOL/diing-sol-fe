import { Connection, PublicKey } from "@solana/web3.js";
import { useMemo, useState } from "react";

export const useTokenBalance = (
  connection: Connection,
  publicKey: PublicKey | null,
  symbol: string
) => {
  const [balance, setBalance] = useState(0);

  useMemo(() => {
    if (publicKey) {
      connection.getBalance(publicKey).then((bal) => {
        setBalance(bal);
      });
    }
  }, [publicKey]);
  const tokenName = "SOL";
  const tokenBalance = balance;
  const tokenDecimal = 9;
  return {
    tokenName,
    tokenBalance,
    tokenDecimal,
  };
};
