import SidebarCustom from "../../components/common/sidebar/SidebarCustom";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Outlet } from "react-router-dom";

import { BarIcon } from "../../icons/Icons";

const DashBoardTutor = () => {
  document.title = "EduQuest | Tutor Dashboard";
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className={`flex h-[100vh] ${theme}`}>
        <SidebarCustom
          toggled={true}
          prevTheme={theme}
          onToggleTheme={toggleTheme}
          collapsed={collapsed}
          className=" dark:bg-gray-900 transition-all dark:shadow-danger-900 dark:text-white bg-[#EEEEEE] text-black"
        />
        <div className="w-[100%] bg-[#E0E0E0]  dark:bg-slate-800">
          <div className="navbar flex gap-6 p-4 border-1 rounded-xl border-foreground my-2 mx-4">
            <Button
              size="sm"
              isIconOnly
              className="dark:bg-slate-600"
              aria-label="Like"
              onClick={() => setCollapsed(!collapsed)}
            >
              <BarIcon className="size-5" />
            </Button>
          </div>
          <main>
            <div className="container mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashBoardTutor;
