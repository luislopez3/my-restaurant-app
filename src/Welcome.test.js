import React from "react";
import { MemoryRouter } from "react-router-dom";
import { create } from "react-test-renderer";
import Welcome from "./Welcome";
import { render } from "@testing-library/react";

describe("Welcome component", () => {
  test("renders Welcome w/o an error", () => {
    render(
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
    );
  });

  test("Matches the snapshot", () => {
    const wrapper = create(
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
