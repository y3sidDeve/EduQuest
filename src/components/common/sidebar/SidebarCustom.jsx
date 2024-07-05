import React, { useState } from "react";
import { Sidebar, Menu } from "react-pro-sidebar";

import { Link, useLocation } from "react-router-dom";

import { Avatar, Chip } from "@nextui-org/react";
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
  AvatarImage,
} from "../../../icons/Icons";

function SidebarCustom({
  backgroundColor,
  props,
  className,
  collapsed,
  toggled,
  onToggleTheme,
  prevTheme,
}) {
  const location = useLocation();

  
  

  return (
    <Sidebar
      {...props}
      toggled={toggled}
      collapsed={collapsed}
      className={className}
    >
      <div className="flex flex-col h-[100%]">
        <Menu>
          <MenuItemSb
            className="py-3 hover:bg-gray-200 hover:dark:bg-gray-800/50 transition   hover:dark:border-0 hover:text-purple-500"
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

        <div className=" flex justify-center mb-6">
          <hr className="w-[60%] bg-foreground/60 dark:bg-indigo-500 rounded-2xl border-0 h-0.5" />
        </div>

        <div className="flex-1 pb-32 w-[auto] ">
          <Menu>
            <div
              className={`title-group px-7 font-semibold ${collapsed && "hidden"
                } `}
            >
              <p className="text-foreground/60 text-[0.6rem]">MAIN</p>
            </div>
            <MenuItemSb
              suffix={
                <Chip size="sm" radius="full" color="secondary" variant="flat">
                  New
                </Chip>
              }
              active={location.pathname === "/dashboard-student/info"}
              icon={<DashboardIcon />}
              component={<Link to="/dashboard-student/info" />}
              className="text-foreground/60 hover:dark:text-white hover:dark:bg-gray-800/50 transition hover:bg-gray-200   hover:dark:border-0 hover:text-purple-500"
            >
              Dashboard
            </MenuItemSb>

            <MenuItemSb
              suffix={
                <Chip size="sm" radius="full" color="secondary" variant="flat">
                  New
                </Chip>
              }
              active={location.pathname === "/dashboard-student/search-tutores"}
              icon={<DashboardIcon />}
              component={<Link to="/dashboard-student/info" />}
              className="text-foreground/60 hover:dark:text-white hover:dark:bg-gray-800/50 transition hover:bg-gray-200   hover:dark:border-0 hover:text-purple-500"
            >
              Buscar Tutores
            </MenuItemSb>


            <SubMenuSb
              className="text-foreground/60 hover:dark:bg-gray-800/50 hover:dark:text-white transition  hover:bg-gray-200    hover:text-purple-500"
              icon={<TaskIcon />}
              label="Entregas"
            >
              <MenuItemSb className="dark:bg-gray-800  hover:dark:text-white hover:dark:bg-slate-900/90 transition  hover:text-purple-500 bg-gray-200 hover:bg-gray-300">
                {" "}
                Tareas{" "}
              </MenuItemSb>
              <MenuItemSb className="dark:bg-gray-800  hover:dark:border-0  hover:dark:text-white hover:dark:bg-slate-900/90 transition hover:text-purple-500 bg-gray-200 hover:bg-gray-300">
                {" "}
                Proyectos{" "}
              </MenuItemSb>
            </SubMenuSb>

            <MenuItemSb
              icon={<BookIcon />}
              component={<Link to="/login" />}
              className="text-foreground/60 hover:dark:text-white hover:dark:bg-gray-800/50 transition hover:bg-gray-200   hover:dark:border-0 hover:text-purple-500"
            >
              Mis clases
            </MenuItemSb>

            <MenuItemSb
              icon={<ClipIcon />}
              component={<Link to="dashboard" />}
              className="text-foreground/60 hover:dark:text-white hover:dark:bg-gray-800/50 transition hover:bg-gray-200   hover:dark:border-0 hover:text-purple-500"
            >
              Material
            </MenuItemSb>

            <MenuItemSb
              suffix={
                <Chip size="sm" radius="full" color="danger" variant="shadow">
                  10
                </Chip>
              }
              icon={<MessageIcon />}
              component={<Link to="mensajes/" />}
              className="text-foreground/60 hover:dark:text-white hover:dark:bg-gray-800/50 transition hover:bg-gray-200   hover:dark:border-0 hover:text-purple-500"
            >
              Mensajes
            </MenuItemSb>
          </Menu>
        </div>

        <div className="flex  items-end pb-4">
          <Menu className="w-[100%] ">
            <MenuItemSb
              icon={<ThemeSwitch color="warning" onClick={onToggleTheme} />}
            >
              <p className="text-gray-400 font-semibold text-sm">
                {prevTheme === "light" ? "Dark Mode" : "Light Mode"}
              </p>
            </MenuItemSb>
            <MenuItemSb
              icon={<ExitIcon />}
              component={<Link to="/" />}
              className="text-pink-500 font-semibold transition hover:bg-gray-200  hover:text-fuchsia-500 dark:text-pink-800 hover:dark:text-pink-600  hover:dark:bg-slate-800/70"
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
