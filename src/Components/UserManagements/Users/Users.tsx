import React, { useState, useEffect } from "react";
import * as Styles from "./UsersStyle";
import ReTable from "../../../reusable-antd-components/ReTable/ReTable";
import ReDrawer from "../../../reusable-antd-components/ReDrawer";
import EditUpdateDrawer from "./EditUpdateDrawer/EditUpdateDrawer";
import { TDrawerType } from "../../../Interfaces/Components/EditUpdateDrawer.interface";
import { user } from "../../../Apis/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
export default function Users() {
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [drawerType, setDrawerType] = useState<TDrawerType>("create");
  const [users, setUsers] = useState<any>([]);
  const [selectedUsers, setSelectedUsers] = useState<any>({});
  const [tableLoading, setTableLoading] = useState<boolean>(false);

  async function fetchUserData() {
    setTableLoading(true);
    const Users = await user.findAll();
    setUsers(Users);
    setTableLoading(false);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  const columns = [
    {
      key: "",
      width: 40,
      render: (data: any) => {
        return (
          <FontAwesomeIcon
            icon={faPenToSquare}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDrawerVisible(true);
              setDrawerType("update");
              setSelectedUsers(data);
            }}
          />
        );
      },
    },
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
      title: "Password",
      dataIndex: "password",
      key: "password",
    },

    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Minium Order Price",
      dataIndex: "Minium Order Price",
      key: "Minium Order Price",
    },
    {
      title: "Opening Time",
      dataIndex: "Opening Time",
      key: "Opening Time",
    },
    {
      title: "Closing Time",
      dataIndex: "Closing Time",
      key: "Closing Time",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "vegan",
      dataIndex: "vegan",
      key: "vegan",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  return (
    <div>
      <ReTable
        header={{
          title: "Users",
          headerButtons: [
            {
              title: "Create New",
              type: "primary",
              onClick: () => {
                setDrawerVisible(true);
                setDrawerType("create");
              },
            },
          ],
        }}
        data={users}
        columns={columns}
        loading={tableLoading}
        scroll={{
          x: 300,
          y: 300,
        }}
        columnOptions={{
          sorting: {
            columnsKeys: ["email", "name","Password", "address","Phone","Minium Order Price","Opening Time","Closing Time","vegan","City", "status", "city"],
          },
          filter: {
            columnsKeys: ["email", "name","Password", "address","Phone","Minium Order Price","Opening Time","Closing Time","vegan","City", "status", "city"],
          },
        }}
      />
      <EditUpdateDrawer
        visibility={drawerVisible}
        setVisibility={setDrawerVisible}
        type={drawerType}
        selectedKitchenData={selectedUsers}
      />
    </div>
  );
}
