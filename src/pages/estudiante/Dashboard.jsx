import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

 const Dashboard = () => {




  return (
    <>

    
      <Sidebar className=" dark bg-background" collapsed={false} >
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>


      <div>
        <input type="checkbox" />
      </div>
    </>
  );
};

export default Dashboard;
