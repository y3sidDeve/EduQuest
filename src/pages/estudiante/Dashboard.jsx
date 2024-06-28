import SidebarCustom from "../../components/common/sidebar/SidebarCustom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

import { BarIcon } from "../../icons/Icons";

const Dashboard = () => {
  document.title = "EduQuest | Estudent Dashboard";
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <div className="flex h-[100vh]">
        <SidebarCustom
          collapsed={collapsed}
          className=" dark:bg-gray-900 dark:text-white bg-[#EEEEEE] text-black "
        />
        <div className="w-[100%] bg-gray-200">
          <div className="navbar border-1 flex gap-6 py-2 my-2 mx-4 rounded border-green-600">
            <Button size="sm"  isIconOnly color="default" aria-label="Like" onClick={() => setCollapsed(!collapsed)}>
              <BarIcon className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
