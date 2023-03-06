/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import Navigation from "../components/Navigation";

type Props = {
  children: ReactNode;
  className?: string;
};

const TemplatePage = ({ children, className = "" }: Props) => {
  return (
    <div className="w-full max-h-screen h-full flex flex-cols bg-tertiary">
      <Navigation />

      <div
        className={
          "w-full max-w-[475px] min-w-[300px] h-full mx-auto bg-tertiary"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default TemplatePage;
