import { Button } from "antd";
import { menuItems } from "../../Configs/MenuItems";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { setActiveItemKey, setCollapse } from "../../Redux/Slices/SideMenuSlices";
import * as Styles from "./SideMenuStyles";
import ReMenu from "../../reusable-antd-components/ReMenu";
export default function SideMenu() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { collapse, activeItemKey } = useAppSelector((store) => store.sideMenu);
  return collapse ? (
    <Styles.Container>
      <div className="header">
        <FontAwesomeIcon
          className="text-xl"
          onClick={() => {
            dispatch(setCollapse(!collapse));
          }}
          icon={faXmark}
        />
      </div>
      <ReMenu
        selectedKeys={[activeItemKey]}
        className="re-menu"
        mode="inline"
        items={menuItems}
        onClick={({ item }: any) => {
          navigate(item?.props?.path);
          dispatch(setCollapse(!collapse));
        }}
        onSelect={(e: any) => {
          dispatch(setActiveItemKey(e.key));
        }}
      />
      <div className="login-btn">
        <Button type="primary">Log In</Button>
      </div>
    </Styles.Container>
  ) : (
    <></>
  );
}
