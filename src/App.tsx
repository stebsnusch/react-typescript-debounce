import { Fragment, useState } from "react";
import { Container, Grid, CssBaseline, Paper, Box } from "@material-ui/core";

import UserInput from "./UserInput";
import DbLike from "./DbLike";

function App() {
	const [savedValue, setSavedValue] = useState("");
	return (
		<Fragment>
			<CssBaseline />
			<Container>
				<Box height="50px" />
				<Paper square>
					<Grid justify="center" container>
						<Grid xs={12} sm={6} item>
							<UserInput setSavedValue={setSavedValue} />
						</Grid>
						<Grid xs={12} sm={6} item>
							<DbLike debouncedValue={savedValue} />
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</Fragment>
	);
}

export default App;
