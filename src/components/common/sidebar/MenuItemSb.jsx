import React from "react";
import { MenuItem } from "react-pro-sidebar";

function MenuItemSb({ props, component, children, className, icon, prefix, suffix, ...rest}) {
  return (
    <MenuItem
      style={{
        backgroundColor: "transparent",
      }}
      component={component}
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
