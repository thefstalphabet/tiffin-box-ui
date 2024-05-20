import { useState } from "react";
import * as Styles from "./LoginFormStyles";
import { Button, Form, Card } from "antd";
import ReForm from "../../reusable-antd-components/ReForm";
import ReInput from "../../reusable-antd-components/ReFormFields/ReInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { capitalizeFirstLetter } from "../../Helper/Methods";
export default function LoginForm() {
  const [userType, setUserType] = useState("");
  const [form] = Form.useForm();
  function handleFormSubmit(values: any) {
    console.log(values);
  }
  return (
    <Styles.Container>
      
      <Styles.FormContainer>
        <ReForm formInstance={form} onSubmit={handleFormSubmit}>
          <div className="heading">
            <h1>Login</h1>
            <h3>Choose Account type</h3>
          </div>
          <Styles.CardContainer>
            {[
              {
                type: "kitchen",
                icon: faUtensils,
              },
              {
                type: "user",
                icon: faCircleCheck,
              },
            ].map((item: any) => {
              const { type, icon } = item;
              return (
                <Card
                  style={{
                    textAlign: "center",
                    boxShadow:
                      userType === type
                        ? "rgba(0, 187, 6, 0.16) 0px 1px 4px"
                        : " rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    width: 190,
                  }}
                  onClick={() => {
                    setUserType(type);
                  }}
                >
                  <FontAwesomeIcon icon={icon} size="4x" />
                  <p>{capitalizeFirstLetter(type)}</p>
                  {userType === type && (
                    <div className="customContextMenu">
                      <FontAwesomeIcon icon={faCircleCheck} color="green" />
                    </div>
                  )}
                </Card>
              );
            })}
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
            <Button className="Forgot_btn" type="text">
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
