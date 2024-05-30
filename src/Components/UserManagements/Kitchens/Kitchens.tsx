import React, { useEffect, useState } from "react";
import ReTable from "../../../reusable-antd-components/ReTable/ReTable";
import KitchenDrawer from "./EditUpdateDrawer/EditUpdateDrawer";
import { TDrawerType } from "../../../Interfaces/Components/EditUpdateDrawer.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { kitchen } from "../../../Apis/Kitchen";
export default function Kitchens() {
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [drawerType, setDrawerType] = useState<TDrawerType>("create");
  const [kitchens, setKitchens] = useState<any>([]);
  const [selectedKitchen, setSelectedKitchen] = useState<any>({});
  const [tableLoading, setTableLoading] = useState<boolean>(false);

  async function fetchKitchenData() {
    setTableLoading(true);
    const kitchens = await kitchen.findAll();
    setKitchens(kitchens);
    setTableLoading(false);
  }

  useEffect(() => {
    fetchKitchenData();
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
              setSelectedKitchen(data);
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
      title: "Availability",
      dataIndex: "Availability",
      key: "Availability",
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
          x: 300,
          y: 300,
        }}
        columnOptions={{
          sorting: {
            columnsKeys: ["email", "name","Password", "address","Phone","Minium Order Price","Availability","vegan","City", "status", "city"],
          },
          filter: {
            columnsKeys: ["email", "name","Password", "address","Phone","Minium Order Price","Availability","vegan","City", "status", "city"],
          },
        }}
      />
      <KitchenDrawer
        visibility={drawerVisible}
        setVisibility={setDrawerVisible}
        type={drawerType}
        selectedKitchenData={selectedKitchen}
      />
    </div>
  );
}
