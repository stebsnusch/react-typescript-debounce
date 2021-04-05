import {
	render,
	fireEvent,
	screen,
	waitFor,
	getByText,
} from "@testing-library/react";

import UserInput from "../UserInput";
import DbLike from "../DbLike";

const userInputDefaultProps = {
	setSavedValue: jest.fn(),
	value: "test",
};

const dbLikeDefaultProps = {
	debouncedValue: "",
};

beforeEach(() => render(<DbLike {...dbLikeDefaultProps} />));

describe("DB like output", () => {
	test("renders do like heading", () => {
		const dbLikeHeading = screen.getByText(/DB like saved output/i);
		expect(dbLikeHeading).toBeInTheDocument();
	});

	test("should change one second after user typed", async () => {
		const { getByRole } = render(<UserInput {...userInputDefaultProps} />);
		const textArea = getByRole("textbox") as HTMLInputElement;
		fireEvent.change(textArea, { target: { value: "hello" } });
		const { container } = render(<DbLike debouncedValue={textArea.value} />);
		await waitFor(
			() => expect(getByText(container, "hello")).toBeInTheDocument(),
			{
				timeout: 2000,
			}
		);
	});
});
