import * as Styles from "./KitchenSignupFormStyle";
import ReForm from "../../reusable-antd-components/ReForm";
import { Form } from "antd";
import Steps from "./Steps/Steps";
import { useState } from "react";

export default function KitchenSignupForm() {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  function handleFormSubmit(values: any) {}
  function handleFormChanges(changedValues: any, allValues: any) {
    setFormValues((prev: any) => {
      setFormValues(allValues);
    });
  }
  console.log(formValues);

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
