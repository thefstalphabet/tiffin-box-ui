import { Button, Steps as AntdStep, Space } from "antd";
import { useState } from "react";
import * as Styles from "./StepsStyles";
import { IStepsProps } from "../../../Interfaces/Components/Steps.interface";
import ReInput from "../../../reusable-antd-components/ReFormFields/ReInput";
import ReTimepicker from "../../../reusable-antd-components/ReFormFields/ReTimepicker";
import ReRadioGroup from "../../../reusable-antd-components/ReFormFields/ReRadioGroup";

export default function Steps(props: IStepsProps) {
  const { formInstance } = props;
  const [current, setCurrent] = useState<number>(0);

  const stepsItems = [
    {
      title: "Signup Info",
      content: (
        <Styles.Fields>
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
        </Styles.Fields>
      ),
    },
    {
      title: "Personal Info",
      content: (
        <Styles.Fields>
          <ReInput
            label="Phone Number"
            name="phoneNumber"
            type="number"
            required
          />
          <ReInput label="City" name="city" type="simple" required />
          <ReInput label="Address" name="address" type="simple" required />
        </Styles.Fields>
      ),
    },
    {
      title: "Kitchen Info",
      content: (
        <Styles.Fields>
          <ReInput label="Kitchen Name" name="name" type="simple" required />
          <ReInput
            label="Minium Order Price"
            name="minOrderPrice"
            type="number"
            required
          />
          <ReTimepicker
            placeholder={["Opening Time", "Closing Time"]}
            label="Availability"
            name="availability"
            format="HH:mm a"
            required
          />
          <ReRadioGroup
            label=""
            name="vegan"
            defaultValue={true}
            items={[
              { title: "Vegan", value: true },
              { title: "Not Vegan", value: false },
            ]}
          />
          {/* <ReCheckBox label="Vegan" name="vegan" /> */}
        </Styles.Fields>
      ),
    },
    {
      title: "Account Info",
      content: (
        <Styles.Fields>
          <ReInput
            disable
            label="Account Number"
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
