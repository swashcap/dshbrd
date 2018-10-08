// @flow
import * as React from "react";
import { Cartesian } from "@compositor/kit";

import Text from "../src/components/Text";

export default function(props: {}) {
  return (
    <Cartesian
      children="Sample text"
      component={Text}
      size={["heading", "subheading", "body", "caption"]}
    />
  );
}
