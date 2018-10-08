// @flow
import * as React from "react";
import { Example, Library } from "@compositor/kit";

import Button from "./Button";
import Navigation from "./Navigation";
import Text from "./Text";

export default (props: {}) => (
  <Library>
    <Example name="Text">
      <Text />
    </Example>
    <Example name="Button">
      <Button />
    </Example>
    <Example name="Navigation">
      <Navigation />
    </Example>
  </Library>
);
