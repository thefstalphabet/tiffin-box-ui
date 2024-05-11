import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { appName } from "../../Configs/GlobalText";
import { menuItems } from "../../Configs/MenuItems";
import { Link } from "react-router-dom";
import { IMenuItems } from "../../Interfaces/Configs/MenuItems.interface";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { setCollapse } from "../../Redux/Slices/SideMenuSlices";

export default function Header() {
  const dispatch = useAppDispatch();
  const { collapse } = useAppSelector((store) => store.sideMenu);
  return (
    <div className="flex justify-between items-center bg-white text-white p-6 px-32">
      <div className="items-center flex">
        <h1 className="font-bold text-black text-nowrap">{appName}</h1>
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
            dispatch(setCollapse(!collapse));
          }}
        />
      </div>
    </div>
  );
}
