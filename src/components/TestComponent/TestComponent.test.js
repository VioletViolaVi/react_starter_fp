/** @jest-environment jsdom */

import { screen } from '@testing-library/react';
import TestComponent from '.';

describe("TestComponent", () => {

    beforeEach(() => {
        render(<TestComponent />);
    })

    test("Displays a heading", () => {
        const heading = screen.getByRole("heading");
        expect(heading).toBeTruthy();
    })

    test("Displays a heading with specific text", () => {
        const heading = screen.getByRole("heading");
        expect(heading.textContent).toBe("Test");
    })

    test("Increments a value on click", async () => {

        const button = screen.getByRole("button");
        
        await userEvent.click(button);
        
        const countDiv = screen.getByRole("figure");

        expect(countDiv.textContent).toBe("1");
    })
})