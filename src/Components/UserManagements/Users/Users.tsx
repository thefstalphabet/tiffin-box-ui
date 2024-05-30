import React, { useState } from "react";
import * as Styles from "./UsersStyle";
import ReTable from "../../../reusable-antd-components/ReTable/ReTable";
import ReDrawer from "../../../reusable-antd-components/ReDrawer";
import USerDrawer from "./Drawer/UserDrawer";
export default function Users() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const dataSource = [
    {
      key: "1",
      name: "John Brown",
      email: "johnbrown@example.com",
      status: "active",
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      email: "jimgreen@example.com",
      status: "inactive",
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Team",
      email: "team@example.com",
      status: "active",
      address: "Abc",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const handleCreateNewClick = () => {
    setDrawerVisible(true);
  };

  const handleDrawerClose = () => {
    setDrawerVisible(false);
  };

  return (
    <div>
      <ReTable
        header={{
          title: "Users",
          headerButtons: [
            {
              title: "Create New",
              type: "primary",
              onClick: handleCreateNewClick,
            },
          ],
        }}
        data={dataSource}
        columns={columns}
        scroll={{
          x: 300,
          y: 300,
        }}
        columnOptions={{
          sorting: {
            columnsKeys: ["email", "name", "address", "status"],
          },
          filter: {
            columnsKeys: ["email", "name", "address", "status"],
          },
        }}
      />
      <ReDrawer
        title="Create New User"
        visibility={drawerVisible}
        onCancel={handleDrawerClose}
        width={400}
        closable={true}
      >
        <USerDrawer/>
      </ReDrawer>
    </div>
  );
}
