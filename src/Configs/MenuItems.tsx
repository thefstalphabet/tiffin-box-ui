import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../Assets/Icons/Icons";
import { IReMenuItems } from "../reusable-antd-components/Interfaces/ReComponents.interface";
import { auth } from "../Apis/Auth";
import { filterProtectedMenuItems } from "../Helper/Methods";

const items: Array<IReMenuItems> = [
  {
    key: "1",
    label: "Home",
    icon: <FontAwesomeIcon icon={Icons?.faHouse} />,
    path: "/",
  },
  {
    key: "2",
    label: "Profile",
    icon: <FontAwesomeIcon icon={Icons?.faUser} />,
    path: "/profile",
    protected: true,
  },
  {
    key: "3",
    label: "Be a Kitchen",
    icon: <FontAwesomeIcon icon={Icons?.faFireBurner} />,
    path: "/be-a-kitchen",
  },
  {
    key: "4",
    label: "About Us",
    icon: <FontAwesomeIcon icon={Icons?.faAddressCard} />,
    path: "/about-us",
  },
  {
    key: "5",
    label: "Contact Us",
    icon: <FontAwesomeIcon icon={Icons?.faPhone} />,
    path: "/contact-us",
  },
  {
    key: "6",
    label: "User Managements",
    icon: <FontAwesomeIcon icon={Icons?.faUsers} />,
    path: "/user-managements",
    children: [
      {
        key: "7",
        label: "Users",
        icon: <FontAwesomeIcon icon={Icons?.faUser} />,
        path: "/user-managements/users",
        protected: true,
      },
      {
        key: "8",
        label: "Kitchens",
        icon: <FontAwesomeIcon icon={Icons?.faFireBurner} />,
        path: "/user-managements/kitchens",
        protected: true,
      },
    ],
  },
];

export const menuItems = filterProtectedMenuItems(items, auth.isUserLoggedIn())
