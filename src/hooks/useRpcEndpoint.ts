import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";

export const useRpcEndpoint = () => {
  const network = WalletAdapterNetwork.Mainnet;

  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const endpoint = useMemo(
    () =>
      "https://purple-cold-daylight.solana-mainnet.discover.quiknode.pro/4a37a9eb2184f3173397da829935e0aeb5562d0d/",
    [network]
  );
  return { network, endpoint };
};
/***
 * 1.Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr 이토큰을 쓸 거고
 * 2.위 토큰의 잔고/Balance 불러올 수 있으면 된다
 * 3.그리고 그걸 메인에 띄워준다
 */
