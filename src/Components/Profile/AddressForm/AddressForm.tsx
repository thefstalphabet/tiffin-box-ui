import ReForm from "../../../reusable-antd-components/ReForm";
import ReInput from "../../../reusable-antd-components/ReFormFields/ReInput";
export default function AddressForm(props: {
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
      <ReInput
        label="PinCode"
        placeholder="Enter your pinCode"
        name="pinCode"
        type="number"
        required
      />
      <ReInput
        label="State"
        placeholder="Enter your state"
        name="state"
        type="simple"
        required
      />
    </ReForm>
  );
}
