/** @jsxImportSource @emotion/react */
import React from "react";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  height: 16px;
  width: 16px;
  border: 1px solid #788ed8;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  animation: ${rotation} 1s linear infinite;
`;

export default Spinner;
