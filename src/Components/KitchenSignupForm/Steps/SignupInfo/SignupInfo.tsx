import React from "react";
import * as Styles from "./SignupInfoStyle";
import ReForm from "../../../../reusable-antd-components/ReForm";
import ReInput from "../../../../reusable-antd-components/ReFormFields/ReInput";
import { Button, Form } from "antd";
export default function SignupInfo() {
  const [form] = Form.useForm();
  async function handleFormSubmit(values: any) {}
  return (
    <Styles.FormContainer>
      <ReForm formInstance={form} onSubmit={handleFormSubmit}>
        <div className="heading">
          <h1>Sign Up Info</h1>
        </div>
        <ReInput
          label="Name"
          placeholder="Enter your name"
          name="name"
          type="simple"
          required
        />
        <ReInput
          label="Email"
          placeholder="Enter your email"
          name="email"
          type="email"
          required
        />
        {/* <Styles.Action>
          <Button
            className="signup_btn"
            type="primary"
            onClick={() => {
              form.submit();
            }}
          >
            SignUp
          </Button>
        </Styles.Action> */}
      </ReForm>
    </Styles.FormContainer>
  );
}
