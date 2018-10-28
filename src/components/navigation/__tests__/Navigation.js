// @flow
import * as React from "react";
import TestRenderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";

import Navigation from "../Navigation";
import NavigationLink from "../NavigationLink";

test("renders correctly", () => {
  const testRenderer = TestRenderer.create(<Navigation />);
  expect(testRenderer).toMatchSnapshot();
});

test("passes items", () => {
  const wrapper = mount(
    <MemoryRouter>
      <Navigation>
        <NavigationLink to="/one">one</NavigationLink>
        <NavigationLink to="/two">two</NavigationLink>
        <NavigationLink to="/three">three</NavigationLink>
      </Navigation>
    </MemoryRouter>
  );

  expect(wrapper.find("a").length).toBe(3);
});
