import { useState } from "react";
import * as Styles from "./LoginFormStyles";
import { Button, Form, Card } from "antd";
import ReForm from "../../reusable-antd-components/ReForm";
import ReInput from "../../reusable-antd-components/ReFormFields/ReInput";
import { chef } from "../../Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faUsers,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
export default function LoginForm() {
  const [userType, setUserType] = useState("");
  const [form] = Form.useForm();
  function handleFormSubmit(values: any) {
    console.log(values);
  }
  return (
    <Styles.Container>
      <div className="signup_account">
        <h2>Don't have an account?</h2>
        <Button className="Signup_btn" type="text" color="green">
          Signup
        </Button>
      </div>
      <Styles.FormContainer>
        <ReForm formInstance={form} onSubmit={handleFormSubmit}>
          <div className="Heading">
            <h1>Login</h1>
            <h3>Choose Account type</h3>
          </div>
          <Styles.CardContainer>
            <Card
              style={{
                textAlign: "center",
                boxShadow:
                  userType === "Kitchen"
                    ? "rgba(0, 187, 6, 0.16) 0px 1px 4px"
                    : " rgba(0, 0, 0, 0.16) 0px 1px 4px",
                width: 190,
              }}
              onClick={() => {
                setUserType("Kitchen");
              }}
            >
              <FontAwesomeIcon icon={faUtensils} size="4x" />
              <p>Kitchen</p>
              {userType == "Kitchen" && (
                <div className="customContextMenu">
                  <FontAwesomeIcon icon={faCircleCheck} color="green" />
                </div>
              )}
            </Card>
            <Card
              style={{
                textAlign: "center",
                boxShadow:
                  userType === "User"
                    ? "rgba(0, 187, 6, 0.16) 0px 2px 4px"
                    : " rgba(0, 0, 0, 0.16) 0px 1px 4px",
                width: 190,
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                setUserType("User");
              }}
            >
              <FontAwesomeIcon icon={faUsers} size="4x" />
              <p>User</p>
              {userType == "User" && (
                <div className="customContextMenu">
                  <FontAwesomeIcon icon={faCircleCheck} color="green" />
                </div>
              )}
            </Card>
          </Styles.CardContainer>
          <ReInput
            label="Email"
            placeholder="Enter your email"
            name="email"
            type="email"
            required
          />
          <ReInput
            label="Password"
            placeholder="Enter your password"
            name="password"
            type="password"
            required
          />
          <Styles.Action>
            <Button className="Forgot_btn" type="text" color="green">
              Forgot Password
            </Button>
            <Button
              className="Login_btn"
              type="primary"
              onClick={() => {
                form.submit();
              }}
            >
              Login
            </Button>
          </Styles.Action>
        </ReForm>
      </Styles.FormContainer>
    </Styles.Container>
  );
}
