import { Menu, Button } from "antd";
import { menuItems } from "../../Configs/MenuItems";
import { IProps } from "../../Interfaces/Components/SideMenu.interface";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
export default function SideMenu(props: IProps) {
  const navigate = useNavigate();
  const { visibility, setSideMenuVisibility } = props;
  return (
    <div className="flex md:hidden">
      {visibility && (
        <div className="fixed top-0 right-0 bg-white shadow-md  h-full">
          <header className="text-right p-4">
            <FontAwesomeIcon
              className="text-xl text-stone-400"
              onClick={() => {
                setSideMenuVisibility(false);
              }}
              icon={faXmark}
            />
          </header>
          <Menu
            className="w-64 h-3/4 text-stone-400"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={menuItems}
            onClick={({ item }: any) => {
              navigate(item?.props?.path);
            }}
          />
          <div className="p-4 my-10">
            <Button className="w-full" type="primary">
              Log In
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
