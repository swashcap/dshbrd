// @flow
import * as React from "react";
import TestRenderer from "react-test-renderer";
import { mount } from "enzyme";

import VisuallyHidden from "../VisuallyHidden";

test("renders correctly", () => {
  const testRenderer = TestRenderer.create(
    <VisuallyHidden>Sample text</VisuallyHidden>
  );
  expect(testRenderer).toMatchSnapshot();
});

test("emits span", () => {
  const wrapper = mount(<VisuallyHidden>Sample text</VisuallyHidden>);
  const span = wrapper.find("span");

  expect(span.length).toBe(1);
  expect(span.props().children).toBe("Sample text");
});

test("adds class to component", () => {
  const hiddenH1 = () => (
    <VisuallyHidden>
      <h1>Sample Text</h1>
    </VisuallyHidden>
  );
  const wrapper = mount(hiddenH1());
  const testRenderer = TestRenderer.create(hiddenH1());

  expect(wrapper.find("span").length).toBe(0);
  expect(testRenderer.toJSON()).toHaveStyleRule("overflow", "hidden");
});
