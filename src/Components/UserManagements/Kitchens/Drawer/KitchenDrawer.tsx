import React, { useEffect, useState } from "react";
import * as Styles from "./KitchenDrawerStyle";
import ReForm from "../../../../reusable-antd-components/ReForm";
import ReInput from "../../../../reusable-antd-components/ReFormFields/ReInput";
import { Form, Button } from "antd";
import ReDrawer from "../../../../reusable-antd-components/ReDrawer";
import { capitalizeFirstLetter } from "../../../../Helper/Methods";
import { IComponentProps } from "../../../../Interfaces/Components/EditUpdateDrawer.interface";
import { kitchen } from "../../../../Apis/Kitchen";
import ReCheckBox from "../../../../reusable-antd-components/ReFormFields/ReCheckbox";
import ReTimepicker from "../../../../reusable-antd-components/ReFormFields/ReTimepicker";
import ReRadioGroup from "../../../../reusable-antd-components/ReFormFields/ReRadioGroup";

export default function KitchenDrawer(props: IComponentProps) {
  const [form] = Form.useForm();
  const { visibility, setVisibility, type, selectedKitchenData } = props;

  async function handleFormSubmit(values: any) {
    values["openingTime"] = values?.availability[0].$d;
    values["closingTime"] = values?.availability[1].$d;
    delete values?.availability;
    let res;
    if (type === "create") {
      res = await kitchen.create(values);
    } else {
      // update api is coming soon
    }
  }

  useEffect(() => {
    if (type === "update") {
      form.setFieldsValue(selectedKitchenData);
    } else {
      form.resetFields();
    }
  }, [type]);

  return (
    <Styles.Container>
      <ReDrawer
        title={`${capitalizeFirstLetter(type)} User`}
        visibility={visibility}
        onCancel={() => {
          setVisibility(false);
        }}
        width={400}
        closable={true}
        extraContent={
          <Button
            className="create-btn"
            type="primary"
            onClick={() => {
              form.submit();
            }}
          >
            {capitalizeFirstLetter(type)}
          </Button>
        }
      >
        <ReForm
          formClassName="re-form"
          formInstance={form}
          onSubmit={handleFormSubmit}
        >
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
            label="Password"
            placeholder="Enter your password"
            name="password"
            type="password"
            required
          />

          <ReInput
            label="Address"
            placeholder="Enter your address"
            name="address"
            type="simple"
            required
          />
          <ReInput
            label="Phone Number"
            name="phoneNumber"
            type="number"
            required
          />
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
          <ReInput label="City" name="city" type="simple" required />

          <ReRadioGroup
            label=""
            name="vegan"
            defaultValue={true}
            items={[
              { title: "Vegan", value: true },
              { title: "Not Vegan", value: false },
            ]}
          />
          <ReCheckBox label="Status" name="status" />
        </ReForm>
      </ReDrawer>
    </Styles.Container>
  );
}
