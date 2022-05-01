/** @jest-environment jsdom */

import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/app';

describe("App", () => {

    beforeEach(() => {
        render(<App />);
    })

    test("Displays a heading", () => {
        const heading = screen.getByRole("heading");
        expect(heading).toBeTruthy();
    })

    test("Displays a heading with specific text", () => {
        const heading = screen.getByRole("heading");
        expect(heading.textContent).toBe("React");
    })
})