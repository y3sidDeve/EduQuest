import SidebarCustom from "../../components/common/sidebar/SidebarCustom";

const Dashboard = () => {
  document.title = "EduQuest | Estudent Dashboard";
  return (
    <>
      <div className="flex">
        <SidebarCustom className="dark:bg-gray-800 dark:text-white bg-background text-black" />
        <div className=" w-[90vw] ">
          <div className=" dark:bg-gray-800 dark:text-white bg-gray-200 text-black">
            ...
            <div>Text color changes based on theme</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
