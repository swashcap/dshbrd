// @flow
import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import VisuallyHidden from "../VisuallyHidden";

const ACTIVE_CLASS_NAME = "active";

type Props = {
  children?: React.Node,
  to: string
};

/**
 * Make react-router's `NavLink` play well with styled-components.
 */
const _NavigationLink = ({ children, to, ...rest }: Props) => (
  <NavLink activeClassName={ACTIVE_CLASS_NAME} exact to={to} {...rest}>
    <VisuallyHidden>{children}</VisuallyHidden>
  </NavLink>
);

const NavigationLink = styled(_NavigationLink)`
  cursor: pointer;
  display: block;
  padding: 1em 0.667em;

  &:focus::before,
  &:hover::before {
    background: rgba(0, 0, 0, 0.1);
  }
  &:active::before {
    background: rgba(0, 0, 0, 0.2);
  }

  &::before {
    background: transparent;
    border-color: rgba(0, 0, 0, 0.5);
    border-radius: 100%;
    border-style: solid;
    border-width: 1px;
    content: "";
    display: inline-block;
    height: 0.5em;
    line-height: 1;
    transition-duration: 200ms;
    duration-property: background border-color;
    vertical-align: middle;
    width: 0.5em;
  }

  &.${ACTIVE_CLASS_NAME}:focus::before, &.${ACTIVE_CLASS_NAME}:hover::before {
    background: black;
  }
  &.${ACTIVE_CLASS_NAME}:active::before {
    background: black;
  }
  &.${ACTIVE_CLASS_NAME}::before {
    background: black;
    border-color: black;
  }
`;

export default NavigationLink;
