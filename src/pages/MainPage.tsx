/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import BalanceList from "../components/BalanceList";
import WalletInfo from "../components/WalletInfo";
import TemplatePage from "./TemplatePage";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";

const MainPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  return (
    <>
      <TemplatePage>
        <div className="w-full h-full py-11 flex flex-col items-center px-4 overflow-y-auto">
          <Logo className="mb-11 mx-auto" />
          <WalletInfo />
          <BalanceList />
        </div>
      </TemplatePage>
    </>
  );
};

export default MainPage;
