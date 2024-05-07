import {
  HomeOutlined,
  UsergroupAddOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";

export const items: ItemType<MenuItemType>[] = [
  {
    key: "sub1",
    label: "Home",
    icon: <HomeOutlined />,
  },
  {
    key: "sub2",
    label: "About",
    icon: <UsergroupAddOutlined />,
  },
  {
    key: "sub3",
    label: "CntactUs",
    icon: <ContactsOutlined />,
  },
];
