import { Button } from "antd";
import { IProps } from "../../Interfaces/Components/Header.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { appName } from "../../Configs/GlobalText";
import { menuItems } from "../../Configs/MenuItems";
import { Link } from "react-router-dom";
import { IMenuItems } from "../../Interfaces/Configs/MenuItems.interface";

export default function Header(props: IProps) {
  const { setSideMenuVisibility } = props;
  return (
    <div className="flex justify-between items-center bg-white text-white p-6 px-32">
      <div className="items-center flex">
        <h1 className="text-xl font-bold text-black text-nowrap">{appName}</h1>
        <div className="items-center space-x-4 md:flex hidden mx-8">
          {menuItems.map((item: IMenuItems) => {
            const { label, key, path } = item;
            return (
              <li
                key={key}
                className=" text-sm text-end list-none font-semibold text-stone-400"
              >
                <Link to={path}>{label}</Link>
              </li>
            );
          })}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button type="default" block>
          Log In
        </Button>
        <Button type="primary">Sign Up</Button>
        <FontAwesomeIcon
          icon={faBars}
          className="text-xl text-black flex md:hidden "
          onClick={() => {
            setSideMenuVisibility(true);
          }}
        />
      </div>
    </div>
  );
}
