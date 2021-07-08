import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

// test("starting test", () => {
//     const { getByText } = render(<App />);
//     expect(getByText("Icons from fontawesome.com")).toBeInTheDocument();
// });

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});