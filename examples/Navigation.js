/* @flow */
import * as React from "react";

import Navigation from "../src/components/navigation/Navigation";
import NavigationLink from "../src/components/navigation/NavigationLink";

export default (props: {}) => (
  <Navigation>
    <NavigationLink className="active" to="#screen-1">
      Screen 1
    </NavigationLink>
    <NavigationLink to="#screen-2">Screen 2</NavigationLink>
    <NavigationLink to="#screen-3">Screen 3</NavigationLink>
  </Navigation>
);
