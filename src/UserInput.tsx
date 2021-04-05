import { useCallback } from "react";
import debounce from "lodash.debounce";
import { TextField, Box } from "@material-ui/core";

const UserInput = (props: { setSavedValue: Function }) => {
	const debouncedSave = useCallback(
		debounce((newValue: any) => props.setSavedValue(newValue), 1000),
		[]
	);

	const saveMessage = (e: any) => {
		const newValue = e.target.value;
		debouncedSave(newValue);
	};

	return (
		<Box p={2} display="flex" flexDirection="column" height="100%">
			<h2>User realtime input</h2>
			<TextField
				multiline
				rows={4}
				fullWidth
				variant="outlined"
				label="Type message here"
				onChange={(e) => saveMessage(e)}
			/>
		</Box>
	);
};

export default UserInput;
