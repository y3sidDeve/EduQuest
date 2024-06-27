import React from "react";
import { Sidebar } from "react-pro-sidebar";

import { Avatar } from "@nextui-org/react";

import MenuSb from "./MenuSb";
import MenuItemSb from "./MenuItemSb";

function SidebarCustom({ backgroundColor, props, className }) {
  return (
    <Sidebar {...props} className={className} collapsed={false} toggled={true}>
      <div className="flex px-4 my-4 py-2 transition cursor-pointer  text-foreground rounded-lg">
        <Avatar name="JS" />
        <div className="px-4">
          <p className=" text-xs">Estudiante</p>
          <h3 className="text-sm font-semibold">Andrew Smith</h3>
        </div>
      </div>

      <MenuSb>
        <MenuItemSb className="hover:dark:bg-gray-700 transition hover:bg-gray-100 hover:text-teal-700">
          Dashboard
        </MenuItemSb>

        <MenuItemSb className="hover:dark:bg-gray-700 transition hover:bg-gray-100">
          Dashboard
        </MenuItemSb>
      </MenuSb>
    </Sidebar>
  );
}

export default SidebarCustom;
