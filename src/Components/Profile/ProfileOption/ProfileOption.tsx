import React, { useEffect, useState } from "react";
import * as Styles from "./ProfileOptionStyle";
import ReMenu from "../../../reusable-antd-components/ReMenu";
import {
  Orders,
  Payments,
  Bookmarks,
  Settings,
  Address,
} from "../../../Routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCreditCard,
  faHeart,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export default function ProfileOption() {
  const navigate = useNavigate();
  const componentMap: { [key: string]: React.ReactNode } = {
    orders: <Orders />,
    payments: <Payments />,
    Bookmarks: <Bookmarks />,
    settings: <Settings />,
    address: <Address />,
  };

  const [selectedComponent, setSelectedComponent] = useState<string>("orders");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleMenuClick = (key: string) => {
    if (screenWidth <= 768) {
      navigate(`/${key}`);
    } else {
      setSelectedComponent(key);
    }
  };
  const menuItems = [
    {
      key: "orders",
      label: "Orders",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      key: "payments",
      label: "Payments",
      icon: <FontAwesomeIcon icon={faCreditCard} />,
    },
    {
      key: "Bookmarks",
      label: "Bookmarks",
      icon: <FontAwesomeIcon icon={faHeart} />,
    },
    {
      key: "settings",
      label: "Settings",
      icon: <FontAwesomeIcon icon={faCog} />,
    },
    {
      key: "address",
      label: "Address",
      icon: <FontAwesomeIcon icon={faCog} />,
    },
  ];

  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <Styles.Container>
      <ReMenu
        selectedKeys={[selectedComponent]}
        className="re-menu"
        mode="inline"
        items={menuItems.map((item) => ({
          ...item,
          path: item.key,
        }))}
        onClick={({ key }: any) => handleMenuClick(key)}
        onSelect={(e: any) => {}}
      />
      <div className="menu-item-container">
        {componentMap[selectedComponent]}
      </div>
    </Styles.Container>
  );
}
