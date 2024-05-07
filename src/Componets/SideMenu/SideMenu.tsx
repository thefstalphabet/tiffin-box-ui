import { Menu } from "antd";
import { items } from "../../Configs/MenuItems";
import { IProps } from "../../Interfaces/Components/SideMenu.interface";

export default function SideMenu(props: IProps) {
  const { visibility } = props;
  return (
    <div className="flex md:hidden">
      {visibility && (
        <Menu
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "256px",
            height: "100%",
            background: "white",
            boxShadow: "-3px 0px 6px rgba(0, 0, 0, 0.1)",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      )}
    </div>
  );
}
