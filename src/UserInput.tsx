import { useCallback } from "react";
import debounce from "lodash.debounce";
import { TextField, Box, FormControl } from "@material-ui/core";

const UserInput = (props: { setSavedValue: Function; value: any }) => {
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
			<FormControl>
				<TextField
					multiline
					rows={4}
					fullWidth
					variant="outlined"
					label="Type message here"
					onChange={(e) => saveMessage(e)}
					data-testid="user-input"
					defaultValue={props.value}
				/>
			</FormControl>
		</Box>
	);
};

export default UserInput;
