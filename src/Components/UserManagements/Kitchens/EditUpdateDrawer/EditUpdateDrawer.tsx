import React, { useEffect } from "react";
import * as Styles from "./EditUpdateDrawerStyle";
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
import moment from "moment";
import ReSelect from "../../../../reusable-antd-components/ReFormFields/ReSelect";
import { mpCities } from "../../../../Configs/MadhyaPradeshCities";
import { useAppDispatch } from "../../../../Redux/Hooks";
import {
  addKitchen,
  updateKitchen,
} from "../../../../Redux/Slices/UserManagementSlices";
import { ReNotification } from "../../../../reusable-antd-components/ReNotification";

export default function EditUpdateDrawer(props: IComponentProps) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { visibility, setVisibility, type, selectedKitchenData } = props;

  async function handleFormSubmit(values: any) {
    values["openingTime"] = values?.availability[0].$d;
    values["closingTime"] = values?.availability[1].$d;
    delete values?.availability;
    if (type === "create") {
      const res = await kitchen.create(values);
      dispatch(addKitchen(res));
    } else {
      await kitchen.update(selectedKitchenData?._id, values);
      dispatch(
        updateKitchen({ id: selectedKitchenData?._id, newKitchenData: values })
      );
    }
    ReNotification({
      header: "User Management Say's",
      description: `Kitchen ${capitalizeFirstLetter(type)} Sucessfully`,
      duration: 2,
      placement: "topRight",
      type: "success",
    });
    setVisibility(false);
  }

  useEffect(() => {
    if (type === "update") {
      const newData = {
        ...selectedKitchenData,
        availability: [
          moment(selectedKitchenData?.openingTime),
          moment(selectedKitchenData?.closingTime),
        ],
      };
      form.setFieldsValue(newData);
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
        width={600}
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

          <ReRadioGroup
            label=""
            name="vegan"
            defaultValue={true}
            items={[
              { title: "Vegan", value: true },
              { title: "Not Vegan", value: false },
            ]}
          />
          <ReCheckBox label="Active" name="active" />
        </ReForm>
      </ReDrawer>
    </Styles.Container>
  );
}
