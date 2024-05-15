import React, { useState } from "react";
import * as Styles from "./LoginStyle";
import { chef } from "../../Assets";
import ReForm from "../../reusable-antd-components/ReForm";
import { user } from "../../Apis/User";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
export default function Login() {
  const [userType, setUserType] = useState("");
  return (
    <Styles.Container>
      <div className="centered">
        <h1>Choose Account type</h1>
        <Styles.userType>
          <div
            style={{
              boxShadow:
                userType === "Kitchen"
                  ? "rgba(0, 187, 6, 0.16) 0px 1px 4px"
                  : " rgba(0, 0, 0, 0.16) 0px 1px 4px",
            }}
            className="image_box"
            onClick={() => {
              setUserType("Kitchen");
            }}
          >
            <img src={chef} alt="chef image" />
            <h2>Kitchen</h2>
          </div>
          <div
            style={{
              boxShadow:
                userType === "Kitchen"
                  ? "rgba(0, 187, 6, 0.16) 0px 1px 4px"
                  : " rgba(0, 0, 0, 0.16) 0px 1px 4px",
            }}
            className="image_box"
            onClick={() => {
              setUserType("User");
            }}
          >
            <img src={chef} alt="chef image" />
            <h2>User</h2>
          </div>
          {/* <div className="check_Icon">
          <FontAwesomeIcon icon={faCircleCheck} color="green" />
        </div> */}
        </Styles.userType>
        <Styles.tittle>
          <h3>Hello chef</h3>
          <p>Please fill out the form below to get started</p>
        </Styles.tittle>
        <Styles.signView>
          <div className="account_container">
            <h3>No account?</h3>
            <p> Signup</p>
          </div>
          <Button type="primary">Login</Button>
        </Styles.signView>
      </div>
    </Styles.Container>
  );
}
