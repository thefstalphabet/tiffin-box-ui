import * as Styles from "./KitchenSignupFormStyle";
import ReForm from "../../reusable-antd-components/ReForm";
import { Form } from "antd";
import Steps from "./Steps/Steps";

export default function KitchenSignupForm() {
  const [form] = Form.useForm();

  function handleFormSubmit(values: any) {
    console.log(values);
  }
  return (
    <Styles.Container className="container">
      <ReForm formInstance={form} onSubmit={handleFormSubmit}>
        <Steps />
      </ReForm>
    </Styles.Container>
  );
}
