import * as Styles from "./FooterStyle";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { IMenuItems } from "../../Interfaces/Configs/MenuItems.interface";
import { menuItems } from "../../Configs/MenuItems";
import { socialMediaIcon } from "../../Configs/SocialMediaIcon";
import { ISocialMedia } from "../../Interfaces/Configs/SocailMediaIcon.interface";
export default function Footer() {
  return (
    <Styles.Container>
      <div className="sub_container">
        <Styles.SocailMedia>
          {socialMediaIcon.map((item: ISocialMedia) => {
            const { label, key, path, icon } = item;
            return (
              <div key={key}>
                <h1>{icon}</h1>
              </div>
            );
          })}
        </Styles.SocailMedia>{" "}
        <Styles.MenuItems>
          {menuItems.map((item: IMenuItems) => {
            const { label, key, path } = item;
            return (
              <Link key={key} to={path}>
                {label}
              </Link>
            );
          })}
        </Styles.MenuItems>{" "}
      </div>
      <div className="footer_text">
        <p>Copyright@2024 Designed by Deependra</p>
      </div>
    </Styles.Container>
  );
}
