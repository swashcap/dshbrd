// @flow
import * as React from "react";
import { Example, Library } from "@compositor/kit";

import Button from "./Button";
import Text from "./Text";

export default (props: {}) => (
  <Library>
    <Example name="Text">
      <Text />
    </Example>
    <Example name="Button">
      <Button />
    </Example>
  </Library>
);
