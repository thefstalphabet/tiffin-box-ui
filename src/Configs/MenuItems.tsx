import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faAddressCard,
  faFireBurner
} from "@fortawesome/free-solid-svg-icons";
import { IMenuItems } from "../Interfaces/Configs/MenuItems.interface";
export const menuItems: Array<IMenuItems> = [
  {
    key: "1",
    label: "Home",
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    path: "/",
  },
  {
    key: "2",
    label: "Profile",
    icon: <FontAwesomeIcon icon={faUser} />,
    path: "/profile",
  },
  {
    key: "3",
    label: "Be a Kitchen",
    icon: <FontAwesomeIcon icon={faFireBurner} />,
    path: "/be-a-kitchen",
  },
  {
    key: "4",
    label: "About Us",
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    path: "/about",
  },
  {
    key: "5",
    label: "Contact Us",
    icon: <FontAwesomeIcon icon={faPhone} />,
    path: "/contactus",
  },
];
