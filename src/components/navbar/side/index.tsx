import { faCircleNodes, faGear, faKey, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Sidebar, Menu, MenuItem, menuClasses } from 'react-pro-sidebar';
import { Box, Theme, Tooltip } from '@mui/material';
import logo from '../../../assets/logo.png'

interface Props {
  children?: React.ReactNode,
  toggle: boolean,
  setToggled: any;
  theme: Theme
};
export default class MySidebar extends React.Component<Props> {  
  
  constructor(props: Props) {
    super(props)
  }
  render() {
    
    return (
        <Sidebar width='10vw' style={{height:"100vh"}} collapsed={this.props.toggle} backgroundColor={this.props.theme.palette.background.default} >
          <button className="sidebar-collapser" onClick={this.props.setToggled}>&lt;</button>

          <Menu rootStyles={{
          [`.${menuClasses.icon}`]: {
            backgroundColor: this.props.theme.palette.background.paper,
            borderRadius: '50px',
            color: '#344cff',
          },
          [`.${menuClasses.menuItemRoot}:hover`]: {
            backgroundColor: this.props.theme.palette.background.default,
            borderRadius: '50px',
            color: '#344cff',
          }
          ,
          [`.${menuClasses.menuItemRoot}`]: {
            backgroundColor: this.props.theme.palette.background.default,
            borderRadius: '50px',
            color: this.props.theme.palette.background.paper,
          }
        }}>
          <Box display="flex">
            <img src={logo} alt="logo" width="200px" />
          </Box>
          <MenuItem icon={<FontAwesomeIcon icon={faCircleNodes}/>}> Workflows</MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faKey}/>}> Credentials</MenuItem>
          <Tooltip title="Settings" placement="top-end">
            <MenuItem icon={<FontAwesomeIcon icon={faGear}/>}> Settings</MenuItem>
          </Tooltip>

          <MenuItem icon={<FontAwesomeIcon icon={faQuestion}/>}> Help</MenuItem>
        </Menu>
      </Sidebar>
    )
  }
  
}
