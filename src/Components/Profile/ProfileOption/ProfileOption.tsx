import React, { useEffect, useState } from "react";
import * as Styles from "./ProfileOptionStyle";
import ReMenu from "../../../reusable-antd-components/ReMenu";
import { Orders, Payments, Favourites, Settings } from "../../../Routes";
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
    favourites: <Favourites />,
    settings: <Settings />,
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

  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

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
