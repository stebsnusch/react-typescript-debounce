import { render, fireEvent, screen } from "@testing-library/react";

import UserInput from "../UserInput";

const defaultProps = {
	setSavedValue: jest.fn(),
	value: "test",
};

beforeEach(() => render(<UserInput {...defaultProps} />));

describe("user input", () => {
	test("renders user input heading", () => {
		const userInputHeading = screen.getByText(/User realtime input/i);
		expect(userInputHeading).toBeInTheDocument();
	});

	test("should be able to type", async () => {
		const textArea = screen.getByRole("textbox") as HTMLInputElement;
		fireEvent.change(textArea, { target: { value: "hello" } });
		expect(textArea.value).toBe("hello");
	});
});
