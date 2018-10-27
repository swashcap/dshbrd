// @flow
import * as React from "react";
import styled from "styled-components";

import { getHostname } from "../utils";
import Text from "./Text";

const CardWrapper = styled.article`
  overflow: hidden;
`;

const CardAnchor = styled.a`
  color: inherit;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
`;

const CardContent = styled.div`
  align-items: center;
  background: whitesmoke;
  display: flex;
  justify-content: center;
  flex: 2 2;
  margin-bottom: 0.5rem;
  overflow: hidden;

  > * {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }

  /*
  > * {
    height: auto;
    max-width: 100%;
  }
*/
`;

const CardText = styled(Text)`
  padding-left: 1rem;
  padding-right: 1rem;
`;

type Props = {
  children?: React.Node,
  href: string,
  title: string
};

const Card = ({ children, href, title }: Props) => (
  <CardWrapper>
    <CardAnchor href={href}>
      <CardContent>{children}</CardContent>
      <CardText>{title}</CardText>
      <CardText size="caption">{getHostname(href)}</CardText>
    </CardAnchor>
  </CardWrapper>
);

export default Card;
