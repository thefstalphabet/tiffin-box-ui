import * as Styles from "./KitchenSignupFormStyle";
import ReForm from "../../reusable-antd-components/ReForm";
import { Form } from "antd";
import Steps from "./Steps/Steps";
import { useState } from "react";

export default function KitchenSignupForm() {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  function handleFormSubmit() {
    console.log(formValues);
    // call signup api
  }
  function handleFormChanges(changedValues: any, allValues: any) {
    setFormValues({ ...formValues, ...allValues });
  }
  return (
    <Styles.Container className="container">
      <ReForm
        formInstance={form}
        onSubmit={handleFormSubmit}
        onChange={handleFormChanges}
      >
        <Steps formInstance={form} />
      </ReForm>
    </Styles.Container>
  );
}
