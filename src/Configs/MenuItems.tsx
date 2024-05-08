import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faPhone,faAddressCard } from "@fortawesome/free-solid-svg-icons";
export const items: ItemType<MenuItemType>[] = [
  {
    key: "sub1",
    label: "About",
    icon: <FontAwesomeIcon icon={faAddressCard}/>,
  },
  {
    key: "sub2",
    label: "Contact Us",
    icon: <FontAwesomeIcon icon={faPhone} />,
  },
  {
    key: "sub3",
    label: "Profile",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
];
