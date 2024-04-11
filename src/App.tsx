import "./App.css";
import { listEdges } from "./services/api/edges";
import { listNodes } from "./services/api/nodes";
import './index.css'
import { ColorModeContext, useMode } from "./theme";
import { Box, CircularProgress, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/navbar/top";
import MySidebar from "./components/navbar/side";
import React, { Suspense, useState } from "react";
const Flow = React.lazy(() => import('./components/flow'));

function App() {		
	const [theme, colorMode] = useMode();
	const [toogle, setToggled] = useState(false);
	const handlerFunction = () => {
		setToggled(!toogle)
	}
	
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />					
				<Box component="section" display="flex" height="100vh" width="100vw" >
					<Box display="block" height="100vh" width="10vw">
						<MySidebar setToggled={handlerFunction} toggle={toogle} theme={theme}>

						</MySidebar>

					</Box>

					<Box height="100vh" width="90vw" display="block">
						<Box height="8vh">
							<Topbar />
						</Box>
						<Box>
							<Suspense fallback={<CircularProgress />}>										
								<Flow theme={theme} initialNodes={listNodes()} initialEdges={listEdges()} />					
							</Suspense>
						</Box>
					</Box>

				</Box>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
