/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import svg from "../assets/svgs/icon-expand.svg";
import { ReactSVG } from "react-svg";

function ExpandIcon(props: any) {
  const {
    src = svg,
    size = [],
    isOpen = false,
    className = "",
    fill = "",
    ...rest
  } = props;
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
      src={src}
    />
  );
}

export default ExpandIcon;
