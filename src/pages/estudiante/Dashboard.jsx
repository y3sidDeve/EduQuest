import SidebarCustom from "../../components/common/sidebar/SidebarCustom";

const Dashboard = () => {
  document.title = "EduQuest | Estudent Dashboard";
  return (
    <>
      <div className="flex h-[100vh]">
        <SidebarCustom className=" dark:bg-gray-900 dark:text-white bg-[#EEEEEE] text-black " />
        <div className="w-[100%] bg-gray-200">
          <div className="navbar border-4 rounded border-green-600">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
