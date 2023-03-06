/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import svg from "../assets/svgs/icon-telegram.svg";
import { ReactSVG } from "react-svg";

function TelegramIcon(props: any) {
  const { src = svg, size = [], fill = "", ...rest } = props;
  const width = size[0] || "";
  const height = size.length === 2 ? size[1] || width : "";

  return (
    <ReactSVG
      {...rest}
      css={css`
        & > div > svg {
          width: calc(${width}px);
          height: calc(${height}px);
          > path {
            fill: ${fill};
            stroke: ${fill};
          }
        }
      `}
      src={src}
    />
  );
}

export default TelegramIcon;
