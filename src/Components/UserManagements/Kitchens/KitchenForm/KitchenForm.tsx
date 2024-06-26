import React from "react";
import ReForm from "../../../../reusable-antd-components/ReForm";
import ReInput from "../../../../reusable-antd-components/ReFormFields/ReInput";
import ReTimepicker from "../../../../reusable-antd-components/ReFormFields/ReTimepicker";
import ReSelect from "../../../../reusable-antd-components/ReFormFields/ReSelect";
import { mpCities } from "../../../../Configs/MadhyaPradeshCities";
import ReRadioGroup from "../../../../reusable-antd-components/ReFormFields/ReRadioGroup";
import ReCheckBox from "../../../../reusable-antd-components/ReFormFields/ReCheckbox";

export default function KitchenForm(props: {
  handleFormSubmit: Function;
  formInstance: any;
}) {
  const { handleFormSubmit, formInstance } = props;
  return (
    <ReForm
      formClassName="re-form"
      formInstance={formInstance}
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
      <ReInput label="Phone Number" name="phoneNumber" type="number" required />
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
      <ReCheckBox label="Status" name="status" />
    </ReForm>
  );
}
