import SidebarCustom from "../../components/common/sidebar/SidebarCustom";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";

import { BarIcon } from "../../icons/Icons";

const Dashboard = () => {
  document.title = "EduQuest | Estudent Dashboard";
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
          <div className="navbar flex gap-6 py-2  my-2 mx-4">
            <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
