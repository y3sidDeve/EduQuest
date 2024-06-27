import React from "react";
import { MenuItem } from "react-pro-sidebar";

function MenuItemSb({ props, children, className }) {
  return (
    <MenuItem
      style={{
        backgroundColor: "transparent",
      }}
      {...props}
      className={className + " text-foreground/60 "}
    >
      {children}
    </MenuItem>
  );
}

export default MenuItemSb;
