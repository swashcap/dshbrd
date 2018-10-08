/* @flow */
import * as React from "react";

import Navigation from "../src/components/Navigation";

export default (props: {}) => (
  <Navigation
    activeIndex={0}
    items={["Screen 1", "Screen 2", "Screen 3"]}
    onPress={console.log}
  />
);
