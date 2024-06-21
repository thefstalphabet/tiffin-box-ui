import React, { useState } from "react";
import * as Styles from "./ProfileOptionStyle";
import ReMenu from "../../../reusable-antd-components/ReMenu";
import { Orders,Payments,Favourites,Settings } from "../../../Routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCreditCard,
  faHeart,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../../Redux/Hooks";
export default function ProfileOption() {
  const componentMap: { [key: string]: React.ReactNode } = {
    orders: <Orders />,
    payments: <Payments />,
    favourites: <Favourites />,
    settings: <Settings />,
  };

  const { collapse } = useAppSelector((store) => store.sideMenu);
  const [selectedComponent, setSelectedComponent] = useState<string>("orders");

  const handleMenuClick = (key: string) => {
    setSelectedComponent(key);
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
      key: "favourites",
      label: "Favourites",
      icon: <FontAwesomeIcon icon={faHeart} />,
    },
    {
      key: "settings",
      label: "Settings",
      icon: <FontAwesomeIcon icon={faCog} />,
    },
  ];
  return (
    <Styles.MenuContainer>
      <div className="menu-buttons">
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
      </div>
      <div className="component-container">
        {componentMap[selectedComponent]}
      </div>
    </Styles.MenuContainer>
  );
}
