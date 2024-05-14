import { Menu, Button } from "antd";
import { menuItems } from "../../Configs/MenuItems";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { setCollapse } from "../../Redux/Slices/SideMenuSlices";
import * as Styles from "./SideMenuStyles";
export default function SideMenu() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { collapse } = useAppSelector((store) => store.sideMenu);
  return (
    <Styles.Container>
      {collapse && (
        <Styles.SideMenu>
          <div className="header">
            <FontAwesomeIcon
              className="text-xl"
              onClick={() => {
                dispatch(setCollapse(!collapse));
              }}
              icon={faXmark}
            />
          </div>
          <Menu
            className="ant-menu"
            mode="inline"
            items={menuItems}
            onClick={({ item }: any) => {
              navigate(item?.props?.path);
            }}
          />
          <div className="login-btn">
            <Button type="primary">Log In</Button>
          </div>
        </Styles.SideMenu>
      )}
    </Styles.Container>
  );
}
