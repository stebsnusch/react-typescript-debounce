import { render } from "@testing-library/react";
import App from "./App";

describe("components", () => {
	test("renders UserInput", () => {
		const { getByText } = render(<App />);
		const userInputHeadingText = getByText(/User realtime input/i);
		expect(userInputHeadingText).toBeInTheDocument();
	});
	test("renders DbLike", async () => {
		const { getByText } = render(<App />);
		const userInputHeadingText = getByText(/DB like saved output/i);
		expect(userInputHeadingText).toBeInTheDocument();
	});
});
