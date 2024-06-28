import React from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import { Avatar, Switch } from "@nextui-org/react";
import MenuItemSb from "./MenuItemSb";
import SubMenuSb from "./SubMenuSb";

import ThemeSwitch from "../ThemeSwitch";

import {
  DashboardIcon,
  BookIcon,
  TaskIcon,
  ClipIcon,
  MessageIcon,
  ExitIcon,
  SunIcon,
  MoonIcon,
} from "../../../icons/Icons";

function SidebarCustom({ backgroundColor, props, className, collapsed }) {
  return (
    <Sidebar
      {...props}
      collapsed={collapsed}
      className={className}
      toggled={true}
    >
      <div className="flex flex-col h-[100%] ">
        <Menu>
          <MenuItemSb
            className="py-3 hover:bg-gray-200 "
            icon={
              <Avatar
                src={"https://i.pravatar.cc/150?u=a04258a2462d826712d"}
                name="JS"
                size="sm"
              />
            }
          >
            <div className="px-4">
              <p className=" text-xs">Estudiante</p>
              <h3 className="text-sm font-semibold">Andrew Smith</h3>
            </div>
          </MenuItemSb>
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
              <MenuItemSb className="dark:bg-background hover:dark:border-0  hover:dark:text-white hover:dark:bg-gray-800 transition  hover:text-purple-500 bg-gray-200 hover:bg-gray-300">
                {" "}
                Tareas{" "}
              </MenuItemSb>
              <MenuItemSb className="dark:bg-background hover:dark:border-0  hover:dark:text-white hover:dark:bg-gray-800 transition hover:text-purple-500 bg-gray-200 hover:bg-gray-300">
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
            <MenuItemSb icon={<SunIcon />} >
              <ThemeSwitch />
            </MenuItemSb>
            <MenuItemSb
              icon={<ExitIcon />}
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
