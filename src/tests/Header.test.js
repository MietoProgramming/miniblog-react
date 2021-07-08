import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../components/Header.jsx";
import { expect, test } from "@jest/globals";
import { StaticRouter } from "react-router-dom";

afterEach(cleanup);

test('Header links exist', () => {
    const header = render(
        <StaticRouter>
            <Header />
        </StaticRouter>);

    const headerLinks = header.getAllByRole("li");
    //todo tests!
    expect(headerLinks.count()).toBe(3);
});