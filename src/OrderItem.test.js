import React from "react";
import { create } from "react-test-renderer";
import OrderItem from "./OrderItem";
import { render } from "@testing-library/react";

describe("OrderItem component", () => {
  test("renders OrderItem w/o an error", () => {
    render(<OrderItem />);
  });

  test("Matches the snapshot", () => {
    const wrapper = create(<OrderItem />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});