import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { IMenuItems } from "../Interfaces/Configs/MenuItems.interface";
export const menuItems: Array<IMenuItems> = [
  {
    key: "sub1",
    label: "About",
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    path: "/about",
  },
  {
    key: "sub2",
    label: "Contact Us",
    icon: <FontAwesomeIcon icon={faPhone} />,
    path: "contact-us",
  },
  {
    key: "sub3",
    label: "Profile",
    icon: <FontAwesomeIcon icon={faUser} />,
    path: "profile",
  },
];
