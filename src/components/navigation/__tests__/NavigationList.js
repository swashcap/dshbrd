// @flow
import * as React from "react";
import TestRenderer from "react-test-renderer";

import NavigationList from "../NavigationList";

test("renders correctly", () => {
  const testRenderer = TestRenderer.create(
    <NavigationList>
      <li>item</li>
    </NavigationList>
  );
  expect(testRenderer).toMatchSnapshot();
});
