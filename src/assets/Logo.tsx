/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import svg from "../assets/svgs/logo-diing.svg";
import { ReactSVG } from "react-svg";

function Logo(props: any) {
  const { src = svg, size = [], className = "", ...rest } = props;
  const width = size[0] || "";
  const height = size.length === 2 ? size[1] || width : "";

  return (
    <ReactSVG
      {...rest}
      css={css`
        & > div > svg {
          width: calc(${width}px);
          height: calc(${height}px);
        }
      `}
      src={src}
      className={className}
    />
  );
}

export default Logo;
