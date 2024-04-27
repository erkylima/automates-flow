import { faArrowLeft, faArrowRight, faCircleNodes, faGear, faKey, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, menuClasses } from 'react-pro-sidebar';
import { Box, IconButton, Theme, Tooltip } from '@mui/material';
import logo_dark from '../../../../public/assets/logo_dark.png'

interface Props {
  children?: React.ReactNode,
  toggle: boolean,
  theme: Theme
};

export default class MySidebar extends React.Component<Props> {  

  
  constructor(props: Props) {
    super(props)

  }
  
  render() {

    return (
        <Sidebar style={{height:"100vh"}} collapsed={this.props.toggle} backgroundColor={this.props.theme.palette.background.default} >
          {this.props.children}
          <Menu  style={{height:"100vh"}} rootStyles={{
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
          <Box display="inline" >
            
            <img src={logo_dark} alt="logo" style={{marginTop:"10px"}} width="190px" />            
          </Box>
          <MenuItem icon={<FontAwesomeIcon icon={faCircleNodes}/>}> Workflows</MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faKey}/>}> Credentials</MenuItem>
          <Box display="block" bottom="0">
            <Tooltip title="Settings" placement="top-end">
              <MenuItem icon={<FontAwesomeIcon icon={faGear}/>}> Settings</MenuItem>
            </Tooltip>

            <MenuItem icon={<FontAwesomeIcon icon={faQuestion}/>}> Help</MenuItem>
          </Box>
        </Menu>
      </Sidebar>
    )
  }
  
}
