import ReInput from "../../../../reusable-antd-components/ReFormFields/ReInput";
import ReForm from "../../../../reusable-antd-components/ReForm";
import ReDatePicker from "../../../../reusable-antd-components/ReFormFields/ReDatePicker";
import ReSelect from "../../../../reusable-antd-components/ReFormFields/ReSelect";
import { mpCities } from "../../../../Configs/MadhyaPradeshCities";
import ReCheckBox from "../../../../reusable-antd-components/ReFormFields/ReCheckbox";

export default function UsersForm(props: {
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
      />
      <ReDatePicker
        label="Date of Birth"
        name="dateOfBirth"
        disableUpcomingDates
      />
      <ReInput label="Phone Number" name="phoneNumber" type="number" />
      <ReSelect
        label="City"
        name="city"
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
  );
}
