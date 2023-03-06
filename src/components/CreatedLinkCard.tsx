/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import CheckIcon from "../assets/CheckIcon";
import CopyIcon from "../assets/CopyIcon";
import CardBackground from "../assets/pngs/img-background-lg.png";
import Clipboard from "../utils/Clipboard";
import ShareOptions from "./ShareOptions";

const CreatedLinkCard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const formattedLink = "https://www.diing.xyz.receive/link";

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
        className="w-full h-40 px-8 py-5 flex flex-col gap-4 rounded-2xl"
        css={css`
          background-image: url(${CardBackground});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        `}
      >
        <div className="text-sm text-white text-center">
          Send the link and the recipient will do sth.
        </div>
        <div
          className="w-full rounded-full h-10 px-4 flex flex-row bg-tertiary bg-opacity-90 items-center justify-between"
          onClick={() => handleCopy(formattedLink)}
        >
          <div className="w-3/4 truncate text-xs font-medium">
            {formattedLink}
          </div>
          {isCopied ? <CheckIcon /> : <CopyIcon fill={"black"} />}
        </div>
        <ShareOptions link={formattedLink} />
      </div>
    </>
  );
};

export default CreatedLinkCard;
