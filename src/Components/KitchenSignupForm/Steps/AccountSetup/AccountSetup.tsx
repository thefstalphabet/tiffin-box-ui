import React from "react";
import ReForm from "../../../../reusable-antd-components/ReForm";
import ReInput from "../../../../reusable-antd-components/ReFormFields/ReInput";
import { Form, TimePicker, Space, MenuProps, Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import * as Styles from "./AccontSetupStyle";
import ReCheckBox from "../../../../reusable-antd-components/ReFormFields/ReCheckbox";
const onClick: MenuProps["onClick"] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

export default function AccountSetup() {
  const [form] = Form.useForm();
  async function handleFormSubmit(values: any) {}
  return (
    <Styles.FormContainer>
      <ReForm formInstance={form} onSubmit={handleFormSubmit}>
        <div className="heading">
          <h1>Account Setup</h1>
        </div>

        <ReInput
          label="Min order price"
          placeholder="Enter your price"
          name="order price"
          type="number"
          required
        />
        <ReInput
          label="Email"
          placeholder="Enter your email"
          name="email"
          type="email"
          required
        />

        <Space direction="vertical">
          <TimePicker.RangePicker
            size="large"
            placeholder={["Opening time", "Closing time"]}
          />
        </Space>
        <ReCheckBox label="Vegan" name="agree" disable={false} />
        <Dropdown menu={{ items, onClick }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
            dishes
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </ReForm>
    </Styles.FormContainer>
  );
}
