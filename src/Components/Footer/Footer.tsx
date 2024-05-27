import * as Styles from "./FooterStyle";
import { Link } from "react-router-dom";
import { IMenuItems } from "../../Interfaces/Configs/MenuItems.interface";
import { menuItems } from "../../Configs/MenuItems";
import { socialMediaIcon } from "../../Configs/SocialMediaIcon";
import { ISocialMedia } from "../../Interfaces/Configs/SocialMediaIcon.interface";
export default function Footer() {
  return (
    <Styles.Container>
      <div className="sub_container">
        <Styles.SocialMedia>
          {socialMediaIcon.map((item: ISocialMedia) => {
            const { label, key, path, icon } = item;
            return <div key={key}>{icon}</div>;
          })}
        </Styles.SocialMedia>{" "}
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
