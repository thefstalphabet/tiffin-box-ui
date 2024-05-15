import { useState } from "react";
import * as Styles from "./LoginFormStyles";
import { Button, Form } from "antd";
import ReForm from "../../reusable-antd-components/ReForm";
import ReInput from "../../reusable-antd-components/ReFormFields/ReInput";
import { chef } from "../../Assets";

export default function LoginForm() {
  const [userType, setUserType] = useState("");
  const [form] = Form.useForm();
  function handleFormSubmit(values: any) {
    console.log(values);
  }
  return (
    <Styles.Container>
      <ReForm formInstance={form} onSubmit={handleFormSubmit}>
        <h1>Choose Account type</h1>
        <Styles.UserType>
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
        </Styles.UserType>
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
        <Styles.SignView>
          <div className="account_container">
            <h3>No account?</h3>
            <p> Signup</p>
          </div>
          <Button type="primary" onClick={()=> {form.submit()}}>Login</Button>
        </Styles.SignView>
      </ReForm>
    </Styles.Container>
  );
}
