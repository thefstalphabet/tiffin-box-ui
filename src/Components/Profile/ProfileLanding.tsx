import React, { useState } from "react";
import * as Styles from "./ProfileLandingStyle";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Redux/Hooks";
import ReMenu from "../../reusable-antd-components/ReMenu";
import { menuItems } from "../../Configs/MenuItems";
import ProfileMenu from "../../Configs/ProfileItems";
export default function ProfileLanding() {
  const navigate = useNavigate();
  const { collapse, activeItemKey } = useAppSelector((store) => store.sideMenu);
  return (
    <Styles.Container>
      <div className="header">
        <div>
          <h3>DEEPENDRA JHARIYA</h3>
          <div className="email_container">
            <h3>8719989752</h3>
            <p>deependrajhariya@gmail.com</p>
          </div>
        </div>
        <div className="primary-button-container">
          <Button type="primary" className="primary-button">
            Primary Button
          </Button>
        </div>
      </div>
      <Styles.MenuConatiner>
        <div>
          <ReMenu
            selectedKeys={[activeItemKey]}
            className="re-menu"
            mode="inline"
            items={menuItems}
            onClick={({ item }: any) => {
              navigate(item?.props?.path);
            }}
            onSelect={(e: any) => {}}
          />
        </div>
        <div>
          dhjjfk
        </div>
      </Styles.MenuConatiner>
    </Styles.Container>
  );
}
