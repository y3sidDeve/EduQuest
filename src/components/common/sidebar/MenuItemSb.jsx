import React from "react";
import { MenuItem } from "react-pro-sidebar";

function MenuItemSb({
  props,
  component,
  active,
  children,
  className,
  icon,
  prefix,
  suffix,
  disabled,
}) {
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
      className={className + `${active==true ? " active" : ""}`}
    >
      {children}
    </MenuItem>
  );
}

export default MenuItemSb;
