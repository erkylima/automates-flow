import React, { useContext } from "react";
import { useTheme, Box, IconButton, InputBase } from "@mui/material";

import { ColorModeContext, tokens } from "../../../theme";
import { faBars, faBell, faGear, faMoon, faPerson, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  children?: React.ReactNode,
  toggle: boolean,
  setToggled: any;
};

const Topbar: React.FC<Props> = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">        
        <Box
          display="flex"
          bgcolor={theme.palette.mode === "dark" ? theme.palette.primary.dark : theme.palette.secondary.main}
          p={0.2}
          borderRadius={1}
        >      
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <IconButton type="button">
            <FontAwesomeIcon icon={faSearch}  /> 
          </IconButton>
        </Box>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? 
            <FontAwesomeIcon icon={faSun} color={theme.palette.background.paper}/> 
           : 
            <FontAwesomeIcon icon={faMoon} color={theme.palette.background.paper} /> 
          }
        </IconButton>
        <IconButton>
          <FontAwesomeIcon icon={faBell} color={theme.palette.background.paper} /> 
        </IconButton>
        <IconButton>
          <FontAwesomeIcon icon={faGear} color={theme.palette.background.paper} /> 
        </IconButton>
        <IconButton>
          <FontAwesomeIcon icon={faPerson} color={theme.palette.background.paper} /> 
        </IconButton>
        
      </Box>
    </Box>
  );
};

export default Topbar;

