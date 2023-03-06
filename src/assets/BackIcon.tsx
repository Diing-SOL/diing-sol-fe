/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import svg from "../assets/svgs/icon-back.svg";
import { ReactSVG } from "react-svg";

function BackIcon(props: any) {
  const { src = svg, size = [], fill = "", className = "", ...rest } = props;
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
            stroke: ${fill};
          }
        }
      `}
      className={className}
      src={src}
    />
  );
}

export default BackIcon;
