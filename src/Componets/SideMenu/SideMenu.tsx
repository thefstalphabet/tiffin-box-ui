import { Menu } from "antd";
import { items } from "../../Configs/MenuItems";
import { IProps } from "../../Interfaces/Components/SideMenu.interface";
import { CloseOutlined } from "@ant-design/icons";

export default function SideMenu(props: IProps) {
  const { visibility, setSideMenuVisibility } = props;
  return (
    <div className="flex md:hidden">
      {visibility && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            background: "white",
            boxShadow: "-3px 0px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <header style={{ textAlign: "right", padding: "16px" }}>
            <CloseOutlined
              onClick={() => {
                setSideMenuVisibility(false);
              }}
            />
          </header>
          <Menu
            style={{
              width: "256px",
              height: "100vh",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </div>
      )}
    </div>
  );
}
