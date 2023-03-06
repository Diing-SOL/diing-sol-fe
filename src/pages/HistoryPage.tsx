/** @jsxImportSource @emotion/react */
import React from "react";
import HistoryCard from "../components/HistoryCard";
import TemplatePage from "./TemplatePage";

const HistoryPage = () => {
  return (
    <>
      <TemplatePage>
        <div className="w-full h-full flex flex-col gap-2 items-center px-6">
          <div className="w-full mt-11 mb-8 text-l text-center font-black">
            HISTORY
          </div>
          <HistoryCard />
          <div>Sorry! History page is on construction now</div>
        </div>
      </TemplatePage>
    </>
  );
};

export default HistoryPage;
