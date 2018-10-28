// @flow
import * as React from "react";

import NavigationWrapper from "./NavigationWrapper";
import NavigationList from "./NavigationList";

type Props = {
  children?: React.Node
};

export default class Navigation extends React.Component<Props> {
  render() {
    const { children, ...rest } = this.props;

    return (
      <NavigationWrapper {...rest}>
        <NavigationList>
          {React.Children.map(children, child => (
            <li key={child.props.to}>{child}</li>
          ))}
        </NavigationList>
      </NavigationWrapper>
    );
  }
}
