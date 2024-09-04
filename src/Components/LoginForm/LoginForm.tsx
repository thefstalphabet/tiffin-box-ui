import { useState } from "react";
import * as Styles from "./LoginFormStyles";
import { Button, Form, Card } from "antd";
import ReForm from "../../reusable-antd-components/ReForm";
import ReInput from "../../reusable-antd-components/ReFormFields/ReInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalizeFirstLetter } from "../../Helper/Methods";
import { CardItem } from "../../Configs/CardItem";
import { ICardItem } from "../../Interfaces/Configs/CardItem.interface";
import { auth } from "../../Apis/Auth";
import { TLoginUserType } from "../../Interfaces/Apis/Auth.interface";
import { ReNotification } from "../../reusable-antd-components/ReNotification";
import { Icons } from "../../Assets/Icons/Icons";
export default function LoginForm() {
  const [loginUserType, setLoginloginUserType] =
    useState<TLoginUserType>("kitchen");
  const [form] = Form.useForm();

  async function handleFormSubmit(values: any) {
    const loginPersonId = await auth.login(values, loginUserType);
    let home;
    if (loginPersonId) {
      if (loginUserType === "kitchen") {
        home = "/dashboard";
      } else {
        home = "/";
      }
      ReNotification({
        header: "Login",
        description: "User Login Succesfully",
        duration: 2,
        placement: "topRight",
        type: "success",
      });
      window.location.href = home;
    }
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
            {CardItem.map((item: ICardItem) => {
              const { type, icon } = item;
              return (
                <Card
                  style={{
                    textAlign: "center",
                    boxShadow:
                      loginUserType === type
                        ? "rgba(0, 187, 6, 0.16) 0px 1px 4px"
                        : " rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    width: 190,
                  }}
                  onClick={() => {
                    setLoginloginUserType(type);
                  }}
                >
                  {icon}
                  <p>{capitalizeFirstLetter(type)}</p>
                  {loginUserType === type && (
                    <div className="customContextMenu">
                      <FontAwesomeIcon
                        icon={Icons?.faCircleCheck}
                        color="green"
                        size="2x"
                      />
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
