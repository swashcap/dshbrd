// @flow
import * as React from "react";
import styled from "styled-components";

type Props = {
  children?: React.Node,
  tag: string,
  size: "body" | "caption" | "heading" | "subheading"
};

const TextBase = styled(({ children, tag, ...props }) =>
  React.createElement(tag, props, children)
)`
  font-family: "Avenir Next", "Helvetica Neue", Arial, sans-serif;
  font-size: 100%;
  line-height: 1.5;
`;

const TextBody = TextBase;

const TextCaption = styled(TextBase)`
  font-size: 75%;
  line-height: 1.25;
`;

const TextHeading = styled(TextBase)`
  font-size: 150%;
  font-weight: 700;
  line-height: 1.25;
`;

const TextSubheading = styled(TextBase)`
  font-size: 112.5%;
  font-weight: 700;
  line-height: 1.333;
`;

export default class Text extends React.Component<Props> {
  static defaultProps = {
    size: "body",
    tag: "div"
  };

  render() {
    const { children, size, tag, ...rest } = this.props;

    if (size === "heading") {
      return (
        <TextHeading tag={tag} {...rest}>
          {children}
        </TextHeading>
      );
    } else if (size === "subheading") {
      return (
        <TextSubheading tag={tag} {...rest}>
          {children}
        </TextSubheading>
      );
    } else if (size === "caption") {
      return (
        <TextCaption tag={tag} {...rest}>
          {children}
        </TextCaption>
      );
    }

    return (
      <TextBody tag={tag} {...rest}>
        {children}
      </TextBody>
    );
  }
}
