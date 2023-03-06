/** @jsxImportSource @emotion/react */
import React from "react";
import TemplatePage from "./TemplatePage";

const PageNotFoundPage = () => {
  window.location.replace("/");
  return (
    <>
      <TemplatePage>
        <div>Sorry, page not found</div>
      </TemplatePage>
    </>
  );
};

export default PageNotFoundPage;
