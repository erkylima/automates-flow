import "./App.css";
import './index.css'
import './flow.css'
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, IconButton, ThemeProvider } from "@mui/material";
import MySidebar from "./components/navbar/side";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Workflow from "./pages/workflow";


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
	
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="container_main">
					<div className="app">
						
						<div className="sidebar" >
							<div className="sidebar-collapser">
								<IconButton style={{width: "20px", height:"20px"}} onClick={handlerFunction}>{collapseIcon}</IconButton>
							</div>
							<MySidebar toggle={toogle} theme={theme}/>

						</div>						
						<Workflow></Workflow>

					</div>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
