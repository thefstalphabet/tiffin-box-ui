import {
  SettingOutlined,
  MailOutlined,
  AppstoreOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  ContactsOutlined
} from "@ant-design/icons";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";

export const items: ItemType<MenuItemType>[] = [
  {
    key: "sub1",
    label: "Home",
    icon: <HomeOutlined />
    
  },
  {
    key: "sub1",
    label: "About",
    icon: <UsergroupAddOutlined />,
    
  },
  {
    key: "sub1",
    label: "CntactUs",
    icon: <ContactsOutlined />
    
  },
  
  
];
