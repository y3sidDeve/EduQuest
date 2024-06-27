import React from "react";
import { Menu } from "react-pro-sidebar";

function MenuSb({ menuItemStyles, props, children }) {
  return <Menu {...props}>
    {children}
  </Menu>;
}

export default MenuSb;
