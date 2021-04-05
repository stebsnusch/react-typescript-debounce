import { Typography, Box } from "@material-ui/core";

const DbLike = (props: { debouncedValue: string }) => {
	return (
		<Box
			p={2}
			bgcolor="primary.main"
			display="flex"
			flexDirection="column"
			color="white"
			height="100%"
		>
			<h2>DB like saved output</h2>
			<Typography component="p">{props.debouncedValue}</Typography>
		</Box>
	);
};

export default DbLike;
