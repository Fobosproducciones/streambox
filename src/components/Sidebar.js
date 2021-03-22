import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../styles/Sidebarstyles.css";

const Sidebar = () => {
  return (
    <div>
      <ProSidebar collapsedWidth="0px">
        <Menu iconShape="square">
          <SubMenu title="Channels">
            <MenuItem active="true">
              E-Sports Channel <small className="live">Now Live!</small>
            </MenuItem>
            <MenuItem>
              Music Channel <small>Offline...</small>
            </MenuItem>
            <MenuItem>
              Nature Channel <small>Offline...</small>
            </MenuItem>
            <MenuItem>
              Comedy Channel <small>Offline...</small>
            </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      ;
    </div>
  );
};

export default Sidebar;
