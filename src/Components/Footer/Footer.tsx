import * as Styles from "./FooterStyle";
import { Link } from "react-router-dom";
import { menuItems } from "../../Configs/MenuItems";
import { socialMediaIcon } from "../../Configs/SocialMediaIcon";
import { ISocialMedia } from "../../Interfaces/Configs/SocialMediaIcon.interface";
import { IReMenuItems } from "../../reusable-antd-components/Interfaces/ReComponents.interface";
export default function Footer() {
  return (
    <Styles.Container>
      <div className="sub_container">
        <Styles.SocialMedia>
          {socialMediaIcon.map((item: ISocialMedia) => {
            const { key, icon } = item;
            return <div key={key}>{icon}</div>;
          })}
        </Styles.SocialMedia>
        <Styles.MenuItems>
          {menuItems.map((item: IReMenuItems) => {
            const { label, key, path } = item;
            return (
              <Link key={key} to={path}>
                {label}
              </Link>
            );
          })}
        </Styles.MenuItems>
        <p>Copyright@2024 all right reserved</p>
      </div>
    </Styles.Container>
  );
}
