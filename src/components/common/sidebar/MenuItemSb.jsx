import React from "react";
import { MenuItem } from "react-pro-sidebar";

function MenuItemSb({ props, children, className, icon}) {
  return (
    <MenuItem
      style={{
        backgroundColor: "transparent",
      }}
      icon={icon}
      {...props}
      className={className + " text-foreground/60 "}
    >
      {children}
    </MenuItem>
  );
}

export default MenuItemSb;
