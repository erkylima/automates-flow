import { faCircleNodes, faGear, faKey, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Sidebar, Menu, MenuItem, menuClasses } from 'react-pro-sidebar';
import { Theme, Tooltip } from '@mui/material';

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
        <Sidebar collapsed={this.props.toggle} backgroundColor={this.props.theme.palette.background.default} style={{ height: '90vh', width: '50px'}}>
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
            <MenuItem icon={<FontAwesomeIcon icon={faCircleNodes}/>}> Workflows</MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faKey}/>}> Credentials</MenuItem>
            <Tooltip title="Settings" placement="top-end">
              <MenuItem aria-label='Settings' icon={<FontAwesomeIcon icon={faGear}/>}> Settings</MenuItem>
            </Tooltip>
            <MenuItem icon={<FontAwesomeIcon icon={faQuestion}/>}> Help</MenuItem>
          </Menu>
        </Sidebar>
    )
  }
  
}
