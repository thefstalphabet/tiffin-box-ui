import * as Styles from "./KitchenSignupFormStyle";
import ReForm from "../../reusable-antd-components/ReForm";
import { Form } from "antd";
import Steps from "./Steps/Steps";
import { useState } from "react";
import { kitchen } from "../../Apis/Kitchen";
import { ReNotification } from "../../reusable-antd-components/ReNotification";
import { useNavigate } from "react-router-dom";

export default function KitchenSignupForm() {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});
  const navigate = useNavigate();

  async function handleFormSubmit() {
    formValues["openingTime"] = formValues?.availability[0].$d;
    formValues["closingTime"] = formValues?.availability[1].$d;
    delete formValues?.availability;
    const kitchenInfo = await kitchen.create(formValues);
    if (kitchenInfo) {
      ReNotification({
        header: "Kitchen signup",
        description: "Kitchen Created Succesfully",
        duration: 2,
        placement: "topRight",
        type: "success",
      });
      navigate("/login");
    }
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
