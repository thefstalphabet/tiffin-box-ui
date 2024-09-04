import { useEffect, useState } from "react";
import ReTable from "../../../reusable-antd-components/ReTable/ReTable";
import CreateUpdateKitchensDrawer from "./CreateUpdateKitchensDrawer/CreateUpdateKitchensDrawer";
import { TDrawerType } from "../../../Interfaces/Components/EditUpdateDrawer.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../../Assets/Icons/Icons";
import { kitchen } from "../../../Apis/Kitchen";
import { Popconfirm, Space, Tag } from "antd";
import { formatTime } from "../../../Helper/Methods";
import * as Styles from "./KitchensStyle";
import { ReNotification } from "../../../reusable-antd-components/ReNotification";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import {
  deleteKitchen,
  setKitchens,
} from "../../../Redux/Slices/UserManagementSlices";

export default function Kitchens() {
  const { kitchens } = useAppSelector((store) => store.userManagement);
  const dispatch = useAppDispatch();

  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [drawerType, setDrawerType] = useState<TDrawerType>("create");
  const [selectedKitchen, setSelectedKitchen] = useState<any>({});
  const [tableLoading, setTableLoading] = useState<boolean>(false);

  async function fetchKitchenData() {
    setTableLoading(true);
    const kitchens = await kitchen.findAll();
    dispatch(setKitchens(kitchens));
    setTableLoading(false);
  }

  async function handleKitchenDelete(id: string) {
    const res = await kitchen.delete(id);
    if (res) {
      dispatch(deleteKitchen(id));
      return ReNotification({
        header: "User Management Say's",
        description: "Kitchen Deleted Sucessfully",
        duration: 2,
        placement: "topRight",
        type: "success",
      });
    }
  }

  useEffect(() => {
    fetchKitchenData();
  }, []);

  const columns = [
    {
      width: 60,
      render: (data: any) => {
        return (
          <Space>
            <FontAwesomeIcon
              icon={Icons?.faPenToSquare}
              className="icon"
              onClick={() => {
                setDrawerVisible(true);
                setDrawerType("update");
                setSelectedKitchen(data);
              }}
            />
            <Popconfirm
              title="Delete the Kitchen"
              description="Are you sure to delete this Kitchen?"
              onConfirm={() => {
                handleKitchenDelete(data?._id);
              }}
              okText="Yes"
              cancelText="No"
            >
              <FontAwesomeIcon icon={Icons?.faTrashCan} className="icon" />
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
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Minium Order Price",
      dataIndex: "minOrderPrice",
      key: "minOrderPrice",
    },
    {
      title: "Opening Time",
      dataIndex: "openingTime",
      key: "openingTime",
      render: (date: Date) => {
        return formatTime(date);
      },
    },
    {
      title: "Closing Time",
      dataIndex: "closingTime",
      key: "closingTime",
      render: (date: Date) => {
        return formatTime(date);
      },
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
      render: (vegan: boolean) => {
        let text, color;
        if (vegan) {
          text = "Yes";
          color = "green";
        } else {
          text = "No";
          color = "red";
        }
        return <Tag color={color}>{text}</Tag>;
      },
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
          title: "Kitchens",
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
        data={kitchens}
        columns={columns}
        loading={tableLoading}
        scroll={{
          x: 2200,
          y: 300,
        }}
        columnOptions={{
          sorting: {
            columnsKeys: [
              "email",
              "name",
              "address",
              "phoneNumber",
              "openingTime",
              "closingTime",
              "vegan",
              "active",
              "city",
              "minOrderPrice",
            ],
          },
          filter: {
            columnsKeys: [
              "email",
              "name",
              "address",
              "phoneNumber",
              "minOrderPrice",
              "openingTime",
              "closingTime",
              "vegan",
              "city",
              "active",
              "city",
            ],
          },
        }}
      />
      <CreateUpdateKitchensDrawer
        visibility={drawerVisible}
        setVisibility={setDrawerVisible}
        type={drawerType}
        selectedRecordData={selectedKitchen}
      />
    </Styles.Container>
  );
}
