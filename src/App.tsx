/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactNode } from "react";
import "./App.css";
import Routes from "./routes/Routes";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="w-screen max-w-screen h-screen flex overflow-hidden bg-blue-30"
      css={css`
        font-family: "SUIT", sans-serif;
      `}
    >
      {children}
    </div>
  );
};

function App() {
  return (
    <Container>
      <Routes />
    </Container>
  );
}

export default App;
