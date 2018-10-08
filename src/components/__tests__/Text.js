// @flow
import * as React from "react";
import { mount, shallow } from "enzyme";
import TestRenderer from "react-test-renderer";

import Text from "../Text";

test("renders correctly", () => {
  const testRenderer = TestRenderer.create(<Text>Sample text</Text>);
  expect(testRenderer).toMatchSnapshot();
});

test("renders div by default", () => {
  const wrapper = mount(<Text>Hi</Text>);
  const div = wrapper.find("div");

  expect(div.exists()).toBe(true);
  expect(div.text()).toBe("Hi");
});

test("renders custom tag", () => {
  const wrapper = mount(<Text tag="h1">Sample text</Text>);
  expect(wrapper.find("div").exists()).toBe(false);
  expect(wrapper.find("h1").text()).toBe("Sample text");
});

// test("it renders", () => {
//   const testRenderer = TestRenderer.create(<Text>Sample text</Text>);
//
//   expect(testRenderer).toMatchSnapshot();
// });

// test("passes tag", () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<Text>Sample text</Text>);
//   const result = renderer.getRenderOutput();
//   debugger;
//
//   expect(result.type).toBe("div");
// });
