import SOL from "../assets/pngs/img-sol.png";
import ETH from "../assets/pngs/img-eth.png";
import USDC from "../assets/pngs/img-usdc.png";
import USDT from "../assets/pngs/img-usdt.png";
import MATIC from "../assets/pngs/img-polygon.png";

export interface TokenInfo {
  symbol: string;
  decimal: number;
  order: number;
}

export const SUPPORTED_TOKEN_ADDRESSES: string[] = [
  "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
  "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
  "Gz7VkD4MacbEB6yC5XD3HcumEiYx2EtDYYrfikGsvopG",
];

export const getTokenInfoByAddress = (address: string): TokenInfo => {
  switch (address) {
    case "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs":
      return { symbol: "ETH", decimal: 8, order: 1 };
    case "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v":
      return { symbol: "USDC", decimal: 6, order: 2 };
    case "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB":
      return { symbol: "USDT", decimal: 6, order: 3 };
    case "Gz7VkD4MacbEB6yC5XD3HcumEiYx2EtDYYrfikGsvopG":
      return { symbol: "MATIC", decimal: 8, order: 4 };
    default:
      throw new Error();
  }
};

export const getIconImage = (id: string) => {
  switch (id) {
    case "SOL":
      return SOL;
    case "ETH":
      return ETH;
    case "USDC":
      return USDC;
    case "USDT":
      return USDT;
    case "MATIC":
      return MATIC;
  }
};
