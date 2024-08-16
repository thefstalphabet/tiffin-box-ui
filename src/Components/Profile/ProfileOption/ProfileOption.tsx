import React, { useState } from "react";
import * as Styles from "./ProfileOptionStyle";
import ReMenu from "../../../reusable-antd-components/ReMenu";
import { Orders, Payments, Settings, Address } from "../../../Routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCreditCard,
  faBookmark,
  faCog,
  faLocationDot,
  faFireBurner,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../Redux/Hooks";
import { IReMenuItems } from "../../../reusable-antd-components/Interfaces/ReComponents.interface";
import BookMarksKitchen from "../../BookMarksTab/BookMarksKitchens/BookMarksKitchen";
import BookMarksDishes from "../../BookMarksTab/BookMarksDishes/BookMarksDishes";
export default function ProfileOption() {
  const navigate = useNavigate();
  const { screenWidth } = useAppSelector((store) => store.screenResolution);
  const componentMap: { [key: string]: React.ReactNode } = {
    "1": <Orders />,
    "2": <Address />,
    "4": <BookMarksKitchen />,
    "5": <BookMarksDishes />,
    "6": <Payments />,
    "7": <Settings />,
  };

  const [selectedComponent, setSelectedComponent] = useState<string>("1");

  function findMenuItemByKey(key: string, items: any) {
    for (let item of items) {
      if (item.key === key) {
        return item;
      }
      if (item.children) {
        const found: any = findMenuItemByKey(key, item.children);
        if (found) {
          return found;
        }
      }
    }
    return null; // Return null if the item is not found
  }

  const handleMenuClick = (key: string) => {
    const selectedItem = findMenuItemByKey(key, menuItems);
    console.log(selectedItem);

    if (screenWidth <= 768) {
      navigate(`/${selectedItem?.path}`);
    } else {
      setSelectedComponent(key);
    }
  };

  const menuItems: IReMenuItems[] = [
    {
      key: "1",
      path: "orders",
      label: "Orders",
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
    },
    {
      key: "2",
      path: "address",
      label: "Address",
      icon: <FontAwesomeIcon icon={faLocationDot} />,
    },
    {
      key: "3",
      path: "bookmarks",
      label: "Bookmarks",
      icon: <FontAwesomeIcon icon={faBookmark} />,
      children: [
        {
          key: "4",
          path: "bookmarks/kitchen",
          label: "Kitchens",
          icon: <FontAwesomeIcon icon={faFireBurner} />,
          protected: true,
        },
        {
          key: "5",
          path: "bookmarks/dish",
          label: "Dishes",
          icon: <FontAwesomeIcon icon={faBowlFood} />,
          protected: true,
        },
      ],
    },
    {
      key: "6",
      path: "payments",
      label: "Payments",
      icon: <FontAwesomeIcon icon={faCreditCard} />,
    },
    {
      key: "7",
      path: "settings",
      label: "Settings",
      icon: <FontAwesomeIcon icon={faCog} />,
    },
    
  ];

  return (
    <Styles.Container>
      <ReMenu
        selectedKeys={[selectedComponent]}
        className="re-menu"
        mode="inline"
        items={menuItems}
        onClick={({ key }: any) => handleMenuClick(key)}
      />
      <div className="menu-item-container">
        {componentMap[selectedComponent]}
      </div>
    </Styles.Container>
  );
}
