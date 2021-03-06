import React from "react";
import { create } from "react-test-renderer";
import App from "./App";
import { render } from "@testing-library/react";

describe("App component", () => {
  test("renders App w/o an error", () => {
    render(<App />);
  });

  test("Matches the snapshot", () => {
    const wrapper = create(<App />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
