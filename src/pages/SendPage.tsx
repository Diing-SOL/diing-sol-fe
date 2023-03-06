/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import TemplatePage from "./TemplatePage";
import { cx } from "@emotion/css";
import ArrowIcon from "../assets/ArrowIcon";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import Logo from "../assets/Logo";
import CardBackground from "../assets/pngs/img-background-lg.png";
import CreatedLinkCard from "../components/CreatedLinkCard";
import BackIcon from "../assets/BackIcon";

const SendPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <TemplatePage>
        <div className="w-full h-full flex flex-col gap-2 items-center px-6">
          <BackIcon
            className="absolute left-0 top-4 m-8 rotate-180"
            onClick={() => {
              navigate(ROUTES.HOME);
            }}
          />

          <>
            <div className="w-full mt-36 flex flex-col items-center">
              <Logo size={[150, 70]} />
            </div>
            <div className="w-full h-full py-12 flex flex-col items-center justify-between">
              <div className="w-full flex flex-col gap-4">
                <div className="text-base text-center uppercase font-extrabold">
                  link successfully created!
                </div>
                <CreatedLinkCard />
              </div>
              <div
                className="flex flex-row items-center gap-2 text-sm text-quaternary font-medium uppercase"
                onClick={() => {
                  navigate(ROUTES.HOME);
                }}
              >
                <ArrowIcon fill="#2653C5" />
                create another link
              </div>
            </div>
          </>
          <>
            <div className="w-full mt-11 mb-8 text-l text-center font-black">
              TRANSFER
            </div>
            <div className="w-full">
              <div
                className="w-full rounded-2xl flex flex-col p-8 items-center justify-between text-white"
                css={css`
                  background-image: url(${CardBackground});
                  background-size: cover;
                  background-repeat: no-repeat;
                `}
              >
                <div className="w-full flex justify-between items-center">
                  <div>Your balance</div>
                  <div className="w-3/5 truncate text-sm font-light opacity-80">
                    ddd
                  </div>
                </div>

                <div className="w-full mt-14 flex justify-between items-center">
                  <div className="font-light opacity-80">dfdf</div>
                  <div className="text-2xl font-bold">ddddd</div>
                </div>
              </div>
              <form className="w-full px-2 pt-6 flex flex-col gap-6">
                <div className="w-full flex flex-col gap-2 text-sm font-bold">
                  Amount
                  <input
                    type="number"
                    placeholder={"Amount to send"}
                    value={0.01}
                    disabled={true}
                    className={cx(
                      "w-full h-11 px-2 bg-pale outline-none rounded-md",
                      "focus:border focus:border-zinc-300",
                      "placeholder:font-light"
                    )}
                  />
                </div>
                <div>Currently transfer amount is fixed.</div>
                <button className="w-full rounded-full bg-secondary py-4 mt-4 text-sm text-white">
                  CREATE LINK
                </button>
              </form>
            </div>
          </>
        </div>
      </TemplatePage>
    </>
  );
};

export default SendPage;
