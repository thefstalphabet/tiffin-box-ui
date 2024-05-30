import React from "react";
import * as Styles from "./KitchenDrawerStyle";
import ReForm from "../../../../reusable-antd-components/ReForm";
import ReInput from "../../../../reusable-antd-components/ReFormFields/ReInput";
import { Form, Button } from "antd";
export default function KitchenDrawer() {
  const [form] = Form.useForm();

  async function handleFormSubmit(values: any) {}
  return (
    <Styles.FormContainer>
      <ReForm formInstance={form} onSubmit={handleFormSubmit}>
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
        <ReInput
          label="Status"
          placeholder="Enter your status"
          name="status"
          type="simple"
          required
        />
        <ReInput
          label="Address"
          placeholder="Enter your address"
          name="address"
          type="simple"
          required
        />
        <Button
          className="create-btn"
          type="primary"
          onClick={() => {
            form.submit();
          }}
        >
          Create
        </Button>
      </ReForm>
    </Styles.FormContainer>
  );
}
