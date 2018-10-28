// @flow
import * as React from "react";
import TestRenderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import NavigationLink from "../NavigationLink";

test("renders correctly", () => {
  const testRenderer = TestRenderer.create(
    <MemoryRouter>
      <NavigationLink to="/">Home</NavigationLink>
    </MemoryRouter>
  );
  expect(testRenderer).toMatchSnapshot();
});
