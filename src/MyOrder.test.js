import React from "react";
import { create } from "react-test-renderer";
import MyOrder from "./MyOrder";
import { render } from "@testing-library/react";

describe("MyOrder component", () => {
  test("renders MyOrder w/o an error", () => {
    render(<MyOrder />);
  });

  test("Matches the snapshot", () => {
    const wrapper = create(<MyOrder />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
