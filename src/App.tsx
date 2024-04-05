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
				<Box component="section" display="block"  style={{ height: '100%', width:"100vw" }}>
					<Topbar setToggled={handlerFunction} toggle={toogle}/>
				</Box>
				<Box component="section" display="flex" style={{ height: '100%', width:"100vw" }}>
					<MySidebar toggle={toogle} theme={theme}>
					</MySidebar>	
					<Suspense fallback={<CircularProgress />}>										
						<Flow  initialNodes={listNodes()} initialEdges={listEdges()} />					
					</Suspense>

				</Box>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
