import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { menuItems } from "../../Configs/MenuItems";
import { Link } from "react-router-dom";
import { IMenuItems } from "../../Interfaces/Configs/MenuItems.interface";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { setCollapse } from "../../Redux/Slices/SideMenuSlices";
import * as Styles from "./HeaderStyles";
import { logo } from "../../Assets";

export default function Header() {
  const dispatch = useAppDispatch();
  const { collapse } = useAppSelector((store) => store.sideMenu);
  return (
    <Styles.Container>
      <div className="content">
        <img style={{width: "11rem"}} src={logo} alt="brand logo"/>
        <Styles.MenuItems>
          {menuItems.map((item: IMenuItems) => {
            const { label, key, path } = item;
            return <Link key={key} to={path}>{label}</Link>;
          })}
        </Styles.MenuItems>
      </div>
      <Styles.Actions>
        <Button type="default" block>
          Log In
        </Button>
        <Button type="primary">Sign Up</Button>
        <FontAwesomeIcon
          icon={faBars}
          className="toggle-icon"
          onClick={() => {
            dispatch(setCollapse(!collapse));
          }}
        />
      </Styles.Actions>
    </Styles.Container>
  );
}
