/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import CardBackground from "../assets/pngs/img-background-xl.png";

const ReceivedCard = () => {
  return (
    <>
      <div
        className="w-full rounded-3xl p-10 flex flex-col justify-between"
        css={css`
          background-image: url(${CardBackground});
          background-size: cover;
          background-repeat: no-repeat;
        `}
      >
        <div className="flex justify-between text-white ">
          <div className="text-2xl font-bold">{0.01}</div>
          <div>{"SOL"}</div>
        </div>
        <div className="mt-20 text-white">
          <div className="font-light opacity-80">from</div>
          <div className="w-full pr-4 truncate text-white text-sm font-semibold">
            {"6ARSYR2B1aPWSjK11ZXDPmApgLgar3bCrm2BTYGS2jBK"}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceivedCard;
