// @flow
import * as React from "react";
import styled from "styled-components";

import { getHostname } from "../utils";
import Text from "./Text";

const CardAnchor = styled.a`
  color: inherit;
  display: block;
  text-decoration: none;
`;

const CardImage = styled.img`
  height: auto;
  margin-bottom: 0.5rem;
  width: 100%;
`;

const CardText = styled(Text)`
  padding-left: 1rem;
  padding-right: 1rem;
`;

type Props = {
  href: string,
  imageUri: string,
  title: string
};

const Card = ({ href, imageUri, title }: Props) => (
  <article>
    <CardAnchor href={href}>
      <CardImage src={imageUri} />
      <CardText>{title}</CardText>
      <CardText size="caption">{getHostname(href)}</CardText>
    </CardAnchor>
  </article>
);

export default Card;
