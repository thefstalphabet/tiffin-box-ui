import { Button, Steps as AntdStep, Space } from "antd";
import { useState } from "react";
import * as Styles from "./StepsStyles";
import { IStepsProps } from "../../../Interfaces/Components/Steps.interface";
import ReInput from "../../../reusable-antd-components/ReFormFields/ReInput";
import ReCheckBox from "../../../reusable-antd-components/ReFormFields/ReCheckbox";

export default function Steps(props: IStepsProps) {
  const { formInstance } = props;
  const [current, setCurrent] = useState<number>(0);

  const stepsItems = [
    {
      title: "Signup Info",
      content: (
        <Styles.Fields>
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
        </Styles.Fields>
      ),
    },
    {
      title: "Personal Info",
      content: (
        <Styles.Fields>
          <ReInput
            label="Phone number"
            placeholder="Enter your phone number"
            name="phone number"
            type="number"
            required
          />
          <ReInput
            label="City"
            placeholder="Enter your city"
            name="city"
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
        </Styles.Fields>
      ),
    },
    {
      title: "Kitchen Info",
      content: (
        <Styles.Fields>
          <ReInput
            label="Kitchen name"
            placeholder="Enter your Kitchen name"
            name="Kitchen name"
            type="simple"
            required
          />
          <ReInput
            label="Minium order price"
            placeholder="Enter your price"
            name="order price"
            type="number"
            required
          />
          <ReCheckBox label="Vegan" name="agree" disable={false} />
        </Styles.Fields>
      ),
    },
    {
      title: "Account Info",
      content: (
        <Styles.Fields>
          <ReInput
            disable
            label="Account number"
            placeholder="Enter your account number"
            name="accountNumber"
            type="simple"
          />
        </Styles.Fields>
      ),
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <Styles.Container>
      <AntdStep current={current} items={stepsItems} />
      <div className="content" key={current}>
        {stepsItems[current].content}
      </div>
      <Space className="action">
        {current > 0 && <Button onClick={() => prev()}>Previous</Button>}
        {current < stepsItems.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === stepsItems.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
              formInstance.submit();
            }}
          >
            Done
          </Button>
        )}
      </Space>
    </Styles.Container>
  );
}
