import React from "react";
import * as Styles from "./PersonalInfoStyle";
import ReForm from "../../../../reusable-antd-components/ReForm";
import ReInput from "../../../../reusable-antd-components/ReFormFields/ReInput";
import { Button, Form } from "antd";
export default function PersonalInfo() {
  const [form] = Form.useForm();
  async function handleFormSubmit(values: any) {}
  return (
    <Styles.FormContainer>
      <ReForm formInstance={form} onSubmit={handleFormSubmit}>
        <ReInput
          label="Kitchen name"
          placeholder="Enter your Kitchen name"
          name="Kitchen name"
          type="simple"
          required
        />
        <ReInput
          label="phone number"
          placeholder="Enter your phone number"
          name="phone number"
          type="number"
          required
        />
        <ReInput
          label="phone number"
          placeholder="Enter your phone number"
          name="phone number"
          type="number"
          required
        />
        <ReInput
          label="city"
          placeholder="Enter your city"
          name="city"
          type="simple"
          required
        />
        <ReInput
          label="address"
          placeholder="Enter your address"
          name="address"
          type="simple"
          required
        />
      </ReForm>
    </Styles.FormContainer>
  );
}
