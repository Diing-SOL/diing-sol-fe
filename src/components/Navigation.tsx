/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { ROUTES } from "../constants/routes";
import { useNavigate } from "react-router-dom";
import MenuIcon from "../assets/MenuIcon";
import BackIcon from "../assets/BackIcon";

const Navigation = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="h-full absolute right-0 top-0 z-40">
        {show ? (
          <div className="w-full h-full bg-white drop-shadow-lg pb-12 pt-12 flex flex-col justify-between items-center">
            <div
              className="w-full h-full px-8 flex flex-col gap-8 items-start cursor-pointer"
              onClick={() => {
                setShow(!show);
              }}
            >
              <BackIcon size={[16, 16]} fill={"black"} />
              <button
                className="mt-8"
                onClick={() => {
                  navigate(ROUTES.HOME);
                }}
              >
                Home
              </button>

              <button
                onClick={() => {
                  navigate(ROUTES.HISTORY);
                }}
              >
                Transfer History
              </button>
            </div>
            <button className="text-sm">Disconnect Wallet</button>
          </div>
        ) : (
          <div
            className="bg-none p-8 mt-4 cursor-pointer"
            onClick={() => {
              setShow(!show);
            }}
          >
            <MenuIcon size={[16, 16]} fill={"black"} />
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
