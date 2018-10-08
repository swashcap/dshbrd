// @flow
import * as React from "react";
import styled, { type ReactComponentStyled } from "styled-components";

type Props = {
  children: React.Node,
  onPress?: (event: any) => void
};

const Button: ReactComponentStyled<Props> = styled(
  ({ children, onPress, ...rest }) => (
    <button {...rest} onClick={onPress}>
      {children}
    </button>
  )
)`
  background: none;
  border-radius: 6px;
  border: 1px solid;
  color: black;
  cursor: pointer;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 100%;
  line-height: 1.5;
  text-decoration: underline;
  margin: 0;
  padding: calc(0.75em - 1px) 1.25em;

  &:focus,
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export default Button;
