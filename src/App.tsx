import "./App.css";
import { listEdges } from "./services/api/edges";
import { listNodes } from "./services/api/nodes";
import './index.css'
import { ColorModeContext, useMode } from "./theme";
import { Box, CircularProgress, CssBaseline, Grid, IconButton, ListItem, Paper, ThemeProvider, styled } from "@mui/material";
import Topbar from "./components/navbar/top";
import MySidebar from "./components/navbar/side";
import React, { Suspense, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Flow from "./components/flow";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


function App() {		
	const [theme, colorMode] = useMode();
	const [toogle, setToggled] = useState(false);
	const handlerFunction = () => {		
		setToggled(!toogle)
		if (toogle) {
			setCollapsedIcon(<FontAwesomeIcon icon={faArrowLeft} />)
		} else {
			setCollapsedIcon(<FontAwesomeIcon icon={faArrowRight} />)
		}
	}
	const [collapseIcon, setCollapsedIcon] = useState(<FontAwesomeIcon icon={faArrowLeft} />);
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	  }));
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="container_main">
					<div className="app">
						<IconButton className="sidebar-collapser" onClick={handlerFunction}>{collapseIcon}</IconButton>

						<div className="sidebar" >

							<MySidebar toggle={toogle} theme={theme}>

							</MySidebar>

						</div>
						<div className="content">
							<Topbar></Topbar>
							<Flow theme={theme} initialNodes={listNodes()} initialEdges={listEdges()} />							
						</div>

					</div>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
