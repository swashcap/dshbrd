// @flow
import * as React from "react";
import TestRenderer from "react-test-renderer";
import { mount } from "enzyme";

import Button from "../Button";

test("renders correctly", () => {
  const testRenderer = TestRenderer.create(<Button>Press me</Button>);
  expect(testRenderer).toMatchSnapshot();
});

test("passes properties", () => {
  const children = "Hello, fellow kids";
  const onPress = jest.fn();

  const wrapper = mount(<Button onPress={onPress}>{children}</Button>);
  const button = wrapper.find("button");

  expect(button.props().children).toBe(children);
  expect(button.props().onClick).toBe(onPress);
});
