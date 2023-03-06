import sol from "../assets/pngs/img-sol.png";
import eth from "../assets/pngs/img-eth.png";
import usdc from "../assets/pngs/img-usdc.png";
import usdt from "../assets/pngs/img-usdt.png";
import polygon from "../assets/pngs/img-polygon.png";

export const getIcon = (id: string) => {
  switch (id) {
    case "SOL":
      return sol;
    case "ETH":
      return eth;
    case "USDC":
      return usdc;
    case "USDT":
      return usdt;
    case "POLYGON":
      return polygon;

    default:
      return "none";
  }
};
