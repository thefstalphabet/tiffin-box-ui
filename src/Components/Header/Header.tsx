import { Avatar, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRightFromBracket,
  faBars,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { menuItems } from "../../Configs/MenuItems";
import { Link, useNavigate } from "react-router-dom";
import { IMenuItems } from "../../Interfaces/Configs/MenuItems.interface";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { setCollapse } from "../../Redux/Slices/SideMenuSlices";
import * as Styles from "./HeaderStyles";
import { logo } from "../../Assets";
import { auth } from "../../Apis/Auth";
import ReDropdown from "../../reusable-antd-components/ReDropdown";
import { generateRandomColor } from "../../Helper/Methods";

export default function Header() {
  const { isUserLoggedIn, logout } = auth;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { collapse } = useAppSelector((store) => store.sideMenu);
  const user = useAppSelector((store) => store.user);

  return (
    <Styles.Container>
      <div className="content">
        <img style={{ width: "11rem" }} src={logo} alt="brand logo" />
        <Styles.MenuItems>
          {menuItems.map((item: IMenuItems) => {
            const { label, key, path } = item;
            return (
              <Link key={key} to={path}>
                {label}
              </Link>
            );
          })}
        </Styles.MenuItems>
      </div>
      <Styles.Actions>
        {isUserLoggedIn() ? (
          <>
            <Avatar style={{ backgroundColor: generateRandomColor() }}>
              {user?.data?.name?.slice(0, 2)}
            </Avatar>
            <ReDropdown
              child={<FontAwesomeIcon icon={faAngleDown} />}
              items={[
                {
                  key: "2",
                  label: "Bookmarks",
                  icon: <FontAwesomeIcon icon={faBookmark} />,
                },
                {
                  key: "3",
                  label: (
                    <span
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </span>
                  ),
                  icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
                },
              ]}
            />
          </>
        ) : (
          <>
            <Button
              className="login_btn"
              onClick={() => {
                navigate("/login");
              }}
              type="default"
              block
            >
              Log In
            </Button>
            <Button
              type="primary"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </Button>
          </>
        )}
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
