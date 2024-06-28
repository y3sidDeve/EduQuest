import React from "react";
import { Sidebar, MenuItem, Menu, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import { Avatar } from "@nextui-org/react";
import MenuItemSb from "./MenuItemSb";
import SubMenuSb from "./SubMenuSb";

import {
  DashboardIcon,
  BookIcon,
  TaskIcon,
  ClipIcon,
  MessageIcon,
} from "../../../icons/Icons";

function SidebarCustom({ backgroundColor, props, className }) {
  return (
    <Sidebar {...props} className={className} collapsed={false} toggled={true}>
      <div className="flex flex-col h-[100%] ">
        <Menu>
          <MenuItem className="py-6" icon={<Avatar name="JS" />}>
            <div className="px-4">
              <p className=" text-xs">Estudiante</p>
              <h3 className="text-sm font-semibold">Andrew Smith</h3>
            </div>
          </MenuItem>
        </Menu>

        <hr />

        <div className="flex-1 pb-32">
          <Menu>
            <MenuItemSb
              icon={<DashboardIcon />}
              component={<Link to="dashboard" />}
              className="text-foreground/70  hover:dark:text-white hover:dark:bg-gray-800/50 transition hover:bg-gray-200 hover:font-semibold  hover:dark:border-0 hover:text-purple-500"
            >
              Dashboard
            </MenuItemSb>

            <SubMenuSb
              className="text-foreground/60 hover:dark:bg-gray-800/50 hover:dark:text-white transition  hover:bg-gray-200 hover:font-semibold   hover:text-purple-500"
              icon={<TaskIcon />}
              label="Entregas"
            >
              <MenuItemSb className="dark:bg-background hover:dark:border-0  hover:dark:text-white hover:dark:bg-gray-800 transition  hover:text-purple-500">
                {" "}
                Tareas{" "}
              </MenuItemSb>
              <MenuItemSb className="dark:bg-background hover:dark:border-0  hover:dark:text-white hover:dark:bg-gray-800 transition  hover:text-purple-500">
                {" "}
                Proyectos{" "}
              </MenuItemSb>
            </SubMenuSb>

            <MenuItemSb
              icon={<BookIcon />}
              component={<Link to="dashboard" />}
              className="text-foreground/60 hover:dark:text-white hover:dark:bg-gray-800/50 transition hover:bg-gray-200 hover:font-semibold  hover:dark:border-0 hover:text-purple-500"
            >
              Mis clases
            </MenuItemSb>

            <MenuItemSb
              icon={<ClipIcon />}
              component={<Link to="dashboard" />}
              className="text-foreground/60 hover:dark:text-white hover:dark:bg-gray-800/50 transition hover:bg-gray-200 hover:font-semibold  hover:dark:border-0 hover:text-purple-500"
            >
              Material
            </MenuItemSb>

            <MenuItemSb
              icon={<MessageIcon />}
              component={<Link to="dashboard" />}
              className="text-foreground/60 hover:dark:text-white hover:dark:bg-gray-800/50 transition hover:bg-gray-200 hover:font-semibold  hover:dark:border-0 hover:text-purple-500"
            >
              Mensajes
            </MenuItemSb>

            <MenuItemSb
              icon={<DashboardIcon />}
              component={<Link to="dashboard" />}
              className="text-foreground/60 hover:dark:text-white hover:dark:bg-gray-800/50 transition hover:bg-gray-200 hover:font-semibold  hover:dark:border-0 hover:text-purple-500"
            >
              Entregas
            </MenuItemSb>
          </Menu>
        </div>

        <div className="flex  items-end pb-4">
          <Menu className="w-[100%] ">
            <MenuItemSb
              icon={<DashboardIcon />}
              component={<Link to="dashboard" />}
              className="text-foreground/60 hover:dark:bg-gray-700 transition hover:bg-gray-100 text-red-500 hover:text-red-400"
            >
              Cerrar sesión
            </MenuItemSb>
          </Menu>
        </div>
      </div>
    </Sidebar>
  );
}

export default SidebarCustom;
