// @flow
import * as React from "react";
import styled from "styled-components";

type Props = {
  initialIndex?: number,
  items: string[],
  onPress: (index: number, event: SyntheticEvent<HTMLAnchorElement>) => void
};

type State = {
  activeIndex: number
};

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavigationList = styled.ul`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0 1em;
`;

const NavigationListItem = styled.li``;

const NavigationAnchor = styled.a`
  cursor: pointer;
  display: block;
  padding: 1em 0.667em;

  &:focus::before,
  &:hover::before {
    background: ${({ active }) => (active ? "black" : "rgba(0, 0, 0, .1)")};
  }
  &:active::before {
    background: ${({ active }) => (active ? "black" : "rgba(0, 0, 0, .2)")};
  }

  ::before {
    background: ${({ active }) => (active ? "black" : "transparent")};
    border-color: ${({ active }) => (active ? "black" : "rgba(0, 0, 0, .5)")};
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
`;

export default class Navigation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeIndex: props.initialIndex ? props.initialIndex : 0
    };
  }

  handlePress = (index: number, event: SyntheticEvent<HTMLAnchorElement>) => {
    this.setState({ activeIndex: index });
    this.props.onPress(index, event);
  };

  render() {
    const { items, ...rest } = this.props;

    return (
      <NavigationWrapper {...rest}>
        <NavigationList>
          {items.map((item, index) => (
            <NavigationListItem key={item}>
              <NavigationAnchor
                active={index === this.state.activeIndex}
                onClick={event => this.handlePress(index, event)}
              />
            </NavigationListItem>
          ))}
        </NavigationList>
      </NavigationWrapper>
    );
  }
}
