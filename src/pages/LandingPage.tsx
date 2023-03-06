/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import Logo from "../assets/Logo";

const LandingPage = () => {

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center pb-24 px-4 bg-tertiary">
        <div className="w-full my-20 flex flex-col items-center">
          <Logo size={[150, 70]} />
          <div className="w-full px-8 text-xs text-secondary mt-4 text-center">
            Diing provides three “Ding” services, <br />
            Wallet onboarding, credit building, and lending.
          </div>
        </div>
        <div className="mt-8">Please reload after connect wallet</div>
      </div>
    </>
  );
};

export default LandingPage;
