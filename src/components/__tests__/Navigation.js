// @flow
import * as React from "react";
import TestRenderer from "react-test-renderer";
import { mount } from "enzyme";

import Navigation from "../Navigation";

test("renders correctly", () => {
  const testRenderer = TestRenderer.create(
    <Navigation items={["one", "two", "three"]} onPress={jest.fn()} />
  );
  expect(testRenderer).toMatchSnapshot();
});

test("passes items", () => {
  const wrapper = mount(
    <Navigation items={["one", "two", "three"]} onPress={jest.fn()} />
  );

  expect(wrapper.find("a").length).toBe(3);
});

test("calls press handler", () => {
  const onPress = jest.fn();
  const wrapper = mount(
    <Navigation items={["one", "two", "three"]} onPress={onPress} />
  );

  wrapper
    .find("a")
    .get(1)
    .props.onClick();
  expect(onPress).toHaveBeenCalled();
  expect(onPress.mock.calls[0][0]).toBe(1);
});
