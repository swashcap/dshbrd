// @flow
import * as React from "react";
import styled from "styled-components";

/**
 * A visually hidden but accessible element.
 *
 * Taken from H5BP:
 *
 * {@link https://github.com/h5bp/html5-boilerplate/blob/570a5ef6acc24c659b808a6ec7c1ca7b79974028/dist/css/main.css#L132-L168}
 */
const VisuallyHidden = styled(({ children, ...props }) => {
  if (typeof children === "string") {
    return <span {...props}>{children}</span>;
  }
  return React.cloneElement(children, props);
})`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

export default VisuallyHidden;
