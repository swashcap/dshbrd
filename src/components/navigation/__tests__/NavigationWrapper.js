// @flow
import * as React from "react";
import TestRenderer from "react-test-renderer";

import NavigationWrapper from "../NavigationWrapper";

test("renders correctly", () => {
  const testRenderer = TestRenderer.create(<NavigationWrapper />);

  expect(testRenderer).toMatchSnapshot();
});
