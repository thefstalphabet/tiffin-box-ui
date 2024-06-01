import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faAddressCard,
  faFireBurner,
  faUsers,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { IReMenuItems } from "../reusable-antd-components/Interfaces/ReComponents.interface";
import { auth } from "../Apis/Auth";
import { filterProtectedMenuItems } from "../Helper/Methods";

const items: Array<IReMenuItems> = [
  {
    key: "1",
    label: "Home",
    icon: <FontAwesomeIcon icon={faHouse} />,
    path: "/",
  },
  {
    key: "2",
    label: "Profile",
    icon: <FontAwesomeIcon icon={faUser} />,
    path: "/profile",
    protected: true,
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
    path: "/about-us",
  },
  {
    key: "5",
    label: "Contact Us",
    icon: <FontAwesomeIcon icon={faPhone} />,
    path: "/contact-us",
  },
  {
    key: "6",
    label: "User Managements",
    icon: <FontAwesomeIcon icon={faUsers} />,
    path: "/user-managements",
    children: [
      {
        key: "7",
        label: "Users",
        icon: <FontAwesomeIcon icon={faUser} />,
        path: "/user-managements/users",
        protected: true,
      },
      {
        key: "8",
        label: "Kitchens",
        icon: <FontAwesomeIcon icon={faFireBurner} />,
        path: "/user-managements/kitchens",
        protected: true,
      },
    ],
  },
];

export const menuItems = filterProtectedMenuItems(items, auth.isUserLoggedIn())
