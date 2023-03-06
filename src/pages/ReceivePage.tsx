/** @jsxImportSource @emotion/react */
import React, { useEffect, useMemo, useState } from "react";
import TemplatePage from "./TemplatePage";
import ReceivedCard from "../components/ReceivedCard";
import Logo from "../assets/Logo";

const ReceivePage = () => {
  return (
    <TemplatePage>
      <div className="w-full h-full flex flex-col gap-2 items-center px-6">
        <div className="w-full mt-36 flex flex-col items-center">
          <Logo size={[150, 70]} />
        </div>
        <div className="w-full py-12">
          <div className="w-full flex flex-col gap-4">
            <ReceivedCard />
          </div>
        </div>
        <button className="w-full rounded-full bg-secondary py-4 mt-4 text-sm text-white">
          RECEIVE
        </button>
      </div>
    </TemplatePage>
  );
};

export default ReceivePage;
