import React, { useState } from "react";
import * as Styles from "./ProfileLandingStyle";
import { useAppSelector } from "../../Redux/Hooks";
import { Orders, Payments, Favourites, Settings } from "../index";
import ReMenu from "../../reusable-antd-components/ReMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCreditCard, faHeart, faCog } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";

// const componentMap: { [key: string]: React.ReactNode } = {
//   orders: <Orders />,
//   payments: <Payments />,
//   favourites: <Favourites />,
//   settings: <Settings />,
// };

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

export default function ProfileLanding() {
  const { collapse } = useAppSelector((store) => store.sideMenu);
  const [selectedComponent, setSelectedComponent] = useState<string>("orders");

  const handleMenuClick = (key: string) => {
    setSelectedComponent(key);
  };

  return (
    <Styles.Container>
      <div className="header">
        <div>
          <h3>DEEPENDRA JHARIYA</h3>
          <div className="email_container">
            <h3>8719989752</h3>
            <p>deependrajhariya@gmail.com</p>
          </div>
        </div>
        <div className="primary-button-container">
          <Button type="primary" className="primary-button">
            Edit profile
          </Button>
        </div>
      </div>
      <Styles.MenuContainer>
        <div className="menu-buttons">
          <ReMenu
            selectedKeys={[selectedComponent]}
            className="re-menu"
            mode="inline"
            items={menuItems.map(item => ({
              ...item,
              path: item.key, 
            }))}
            onClick={({ key }: any) => handleMenuClick(key)}
            onSelect={(e: any) => {}}
          />
        </div>
        <div className="component-container">
          {/* {componentMap[selectedComponent]} */}
        </div>
      </Styles.MenuContainer>
    </Styles.Container>
  );
}
