import React from "react";
import { MemoryRouter } from "react-router-dom";
import { create } from "react-test-renderer";
import Menu from "./Menu";
import { render } from "@testing-library/react";

describe("Menu component", () => {
  test("renders Menu w/o an error", () => {
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );
  });

  test("Matches the snapshot", () => {
    const wrapper = create(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
