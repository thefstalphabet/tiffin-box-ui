import React, { useState, useEffect } from "react";
import * as Styles from "./UsersStyle";
import ReTable from "../../../reusable-antd-components/ReTable/ReTable";
import EditUpdateDrawer from "./EditUpdateDrawer/EditUpdateDrawer";
import { TDrawerType } from "../../../Interfaces/Components/EditUpdateDrawer.interface";
import { user } from "../../../Apis/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { Popconfirm, Space, Tag } from "antd";
import {
  deleteUser,
  setUsers,
} from "../../../Redux/Slices/UserManagementSlices";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { ReNotification } from "../../../reusable-antd-components/ReNotification";
export default function Users() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((store) => store.userManagement);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [drawerType, setDrawerType] = useState<TDrawerType>("create");
  const [selectedUsers, setSelectedUsers] = useState<any>({});
  const [tableLoading, setTableLoading] = useState<boolean>(false);

  async function fetchUserData() {
    setTableLoading(true);
    const Users = await user.findAll();
    dispatch(setUsers(Users));
    setTableLoading(false);
  }

  async function handleUsersDelete(id: string) {
    const res = await user.delete(id);
    if (res) {
      dispatch(deleteUser(id));
      return ReNotification({
        header: "User Management Say's",
        description: "User Deleted Sucessfully",
        duration: 2,
        placement: "topRight",
        type: "success",
      });
    }
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  const columns = [
    {
      key: "",
      width: 60,
      render: (data: any) => {
        return (
          <Space>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="icon"
              onClick={() => {
                setDrawerVisible(true);
                setDrawerType("update");
                setSelectedUsers(data);
              }}
            />
            <Popconfirm
              title="Delete the User"
              description="Are you sure to delete this User?"
              onConfirm={() => {
                handleUsersDelete(data?._id);
              }}
              okText="Yes"
              cancelText="No"
            >
              <FontAwesomeIcon icon={faTrashCan} className="icon" />
            </Popconfirm>
          </Space>
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
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (name: string) =>
        name ? name : <FontAwesomeIcon icon={faMinus} />,
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (name: string) =>
        name ? name : <FontAwesomeIcon icon={faMinus} />,
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      render: (name: string) =>
        name ? name : <FontAwesomeIcon icon={faMinus} />,
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      render: (name: string) =>
        name ? name : <FontAwesomeIcon icon={faMinus} />,
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (active: boolean) => {
        let text, color;
        if (active) {
          text = "Active";
          color = "green";
        } else {
          text = "Inactive";
          color = "red";
        }
        return <Tag color={color}>{text}</Tag>;
      },
    },
  ];
  return (
    <Styles.Container>
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
          x: 1500,
          y: 300,
        }}
        columnOptions={{
          sorting: {
            columnsKeys: [
              "email",
              "name",
              "address",
              "phoneNumber",
              "city",
              "dateOfBirth",
              "active",
            ],
          },
          filter: {
            columnsKeys: [
              "email",
              "name",
              "address",
              "phoneNumber",
              "city",
              "dateOfBirth",
              "active",
            ],
          },
        }}
      />
      <EditUpdateDrawer
        visibility={drawerVisible}
        setVisibility={setDrawerVisible}
        type={drawerType}
        selectedRecordData={selectedUsers}
      />
    </Styles.Container>
  );
}
