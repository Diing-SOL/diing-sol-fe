/** @jsxImportSource @emotion/react */
import React from "react";
import {
  EmailShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import ShareIcon from "../assets/ShareIcon";
import TelegramIcon from "../assets/TelegramIcon";
import WhatsappIcon from "../assets/WhatsappIcon";
import MailIcon from "../assets/MailIcon";

type Props = {
  link: string;
};

const handleClick = ({ link }: Props) => {
  if (navigator.share) {
    navigator
      .share({
        title: "TO BE MODIFIED",
        text: link,
        url: link,
      })
      .then(() => console.log("succeed sharing"))
      .catch((error) => console.log("failed to share the link: ", error));
  }
};

const ShareOptions = ({ link }: Props) => {
  return (
    <>
      <div className="w-full flex flex-row gap-2 justify-center">
        <EmailShareButton url={link}>
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <MailIcon size={[14, 14]} />
          </div>
        </EmailShareButton>
        <WhatsappShareButton url={link}>
          <div className="w-7 h-7 bg-white rounded-full flex items-center pl-1.5">
            <WhatsappIcon size={[16, 16]} />
          </div>
        </WhatsappShareButton>
        <TelegramShareButton url={link}>
          <div className="w-7 h-7 bg-white rounded-full flex items-center pl-1">
            <TelegramIcon size={[16, 16]} />
          </div>
        </TelegramShareButton>
        <button onClick={() => handleClick({ link })}>
          <div className="w-7 h-7 bg-white rounded-full flex pt-1.5 justify-center">
            <ShareIcon size={[16, 16]} />
          </div>
        </button>
      </div>
    </>
  );
};

export default ShareOptions;
