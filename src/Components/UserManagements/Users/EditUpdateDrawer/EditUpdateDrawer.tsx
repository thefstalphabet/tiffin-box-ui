import React, { useEffect } from "react";
import * as Styles from "./EditUpdateDrawerStyle";
import ReForm from "../../../../reusable-antd-components/ReForm";
import ReInput from "../../../../reusable-antd-components/ReFormFields/ReInput";
import { Form, Button } from "antd";
import ReDrawer from "../../../../reusable-antd-components/ReDrawer";
import { capitalizeFirstLetter } from "../../../../Helper/Methods";
import { IComponentProps } from "../../../../Interfaces/Components/EditUpdateDrawer.interface";
import ReCheckBox from "../../../../reusable-antd-components/ReFormFields/ReCheckbox";
import { useAppDispatch } from "../../../../Redux/Hooks";
import {
  addUser,
  updateUser,
} from "../../../../Redux/Slices/UserManagementSlices";
import { ReNotification } from "../../../../reusable-antd-components/ReNotification";
import { user } from "../../../../Apis/User";
import { mpCities } from "../../../../Configs/MadhyaPradeshCities";
import ReSelect from "../../../../reusable-antd-components/ReFormFields/ReSelect";

export default function EditUpdateDrawer(props: IComponentProps) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { visibility, setVisibility, type, selectedKitchenData } = props;

  async function handleFormSubmit(values: any) {
    if (type === "create") {
      const res = await user.create(values);
      dispatch(addUser(res));
    } else {
      await user.update(selectedKitchenData?._id, values);
      dispatch(
        updateUser({ id: selectedKitchenData?._id, newUserData: values })
      );
    }
    ReNotification({
      header: "User Management Say's",
      description: `User ${capitalizeFirstLetter(type)} Successfully`,
      duration: 2,
      placement: "topRight",
      type: "success",
    });
    setVisibility(false);
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
          <ReSelect
            label="City"
            name="city"
            required
            searchable
            items={mpCities.map((city: string) => {
              return {
                title: city,
                value: city,
              };
            })}
          />
          <ReCheckBox label="Active" name="active" />
        </ReForm>
      </ReDrawer>
    </Styles.Container>
  );
}
