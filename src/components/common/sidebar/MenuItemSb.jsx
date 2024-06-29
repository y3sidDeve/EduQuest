import React from "react";
import { MenuItem } from "react-pro-sidebar";

function MenuItemSb({ props, children, className, icon, prefix, suffix, ...rest}) {
  return (
    <MenuItem
      style={{
        backgroundColor: "transparent",
      }}
      prefix={prefix}
      suffix={suffix}
      icon={icon}
      {...props}
      className={className + " text-foreground/60 "}
    >
      {children}
    </MenuItem>
  );
}

export default MenuItemSb;
