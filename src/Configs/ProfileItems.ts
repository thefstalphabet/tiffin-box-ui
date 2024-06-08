import React from "react";
import { IProfileItem } from "../Interfaces/Configs/ProfileItems.interface";
import { Orders, Payments, Favourites, Settings } from "../Components";

const ProfileMenu: IProfileItem[] = [
    { label: "Orders",  path: "/orders" },
    { label: "Favourites",  path: "/favourites" },
    { label: "Payments",  path: "/payments" },
    { label: "Settings",  path: "/settings" },
  ];

export default ProfileMenu;
