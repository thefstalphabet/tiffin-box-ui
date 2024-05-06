import React, { useState } from "react";
import { Button, Menu } from "antd";
import {
  RightOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import Dashboard from "../../Routes/Dashboard/Dashboard";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const items = [
    {
      key: "sub1",
      label: "Navigation One",
      icon: <MailOutlined />,
      children: [
        {
          key: "g1",
          label: "Item 1",
          type: "group",
          children: [
            {
              key: "1",
              label: "Option 1",
            },
            {
              key: "2",
              label: "Option 2",
            },
          ],
        },
        {
          key: "g2",
          label: "Item 2",
          type: "group",
          children: [
            {
              key: "3",
              label: "Option 3",
            },
            {
              key: "4",
              label: "Option 4",
            },
          ],
        },
      ],
    },
    {
      key: "sub2",
      label: "Navigation Two",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "5",
          label: "Option 5",
        },
        {
          key: "6",
          label: "Option 6",
        },
        {
          key: "sub3",
          label: "Submenu",
          children: [
            {
              key: "7",
              label: "Option 7",
            },
            {
              key: "8",
              label: "Option 8",
            },
          ],
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub4",
      label: "Navigation Three",
      icon: <SettingOutlined />,
      children: [
        {
          key: "9",
          label: "Option 9",
        },
        {
          key: "10",
          label: "Option 10",
        },
        {
          key: "11",
          label: "Option 11",
        },
        {
          key: "12",
          label: "Option 12",
        },
      ],
    },
    {
      key: "grp",
      label: "Group",
      type: "group",
      children: [
        {
          key: "13",
          label: "Option 13",
        },
        {
          key: "14",
          label: "Option 14",
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center bg-white text-white p-4 px-20">
        <div className="items-center">
          <h1 className="text-xl font-bold text-black">TiffinBox</h1>
        </div>
        <div className="flex items-center space-x-4">
          <h1 className="mr-4 text-black font-bold text-xl">Log In</h1>
          <Button
            className=" bg-blue-500 text-black rounded hover:bg-blue-600 focus:outline-none cursor-pointer  text-center"
            type="primary"
          >
            <span>Sign up</span>
            <RightOutlined className="items-center" />
          </Button>
          <button onClick={toggleMenu}>
            <UnorderedListOutlined className="text-xl text-black" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <Menu
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '256px',
          height: '100%',
          background: 'white',
          boxShadow: '-3px 0px 6px rgba(0, 0, 0, 0.1)',
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
      )}
      {/* <Dashboard /> */}
    </>
  );
};

export default Navbar;
