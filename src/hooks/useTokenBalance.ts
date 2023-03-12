import { useMemo, useState } from "react";
import { AccountLayout, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import {
  getTokenInfoByAddress,
  SUPPORTED_TOKEN_ADDRESSES,
} from "../constants/tokenInfo";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import BigNumber from "bignumber.js";

export interface TokenBalance {
  symbol: string;
  balance: string;
}

export const useTokenBalance = () => {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const [solBalance, setSolBalance] = useState({} as TokenBalance);
  const [splTokenBalances, setSplTokenBalances] = useState(
    [] as TokenBalance[]
  );

  useMemo(() => {
    if (publicKey) {
      connection.getBalance(publicKey).then((bal) => {
        setSolBalance({
          symbol: "SOL",
          balance: (bal / Math.pow(10, 9)).toFixed(2),
        });
      });
    }
  }, [publicKey]);

  useMemo(() => {
    if (publicKey) {
      connection
        .getTokenAccountsByOwner(publicKey, {
          programId: TOKEN_PROGRAM_ID,
        })
        .then((tokenAccounts) => {
          const res = tokenAccounts.value
            .filter((tokenAccount) => {
              const accountData = AccountLayout.decode(
                tokenAccount.account.data
              );
              const accountAddress = accountData.mint.toString();
              return SUPPORTED_TOKEN_ADDRESSES.includes(accountAddress);
            })
            .map((tokenAccount) => {
              const accountData = AccountLayout.decode(
                tokenAccount.account.data
              );
              const accountAddress = accountData.mint.toString();
              const tokenInfo = getTokenInfoByAddress(accountAddress);
              const formattedBalance = new BigNumber(
                accountData.amount.toString()
              )
                .div(new BigNumber(10).exponentiatedBy(tokenInfo.decimal))
                .toFixed(4);
              return {
                order: tokenInfo.order,
                symbol: tokenInfo.symbol,
                balance: formattedBalance,
              };
            })
            .sort((a: any, b: any) => {
              return a.order - b.order;
            });
          setSplTokenBalances(res);
        });
    }
  }, [publicKey]);
  return [solBalance, ...splTokenBalances];
};
