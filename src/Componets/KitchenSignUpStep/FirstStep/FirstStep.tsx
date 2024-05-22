import * as Styles from "./FirstStepStyle";
import { Button, Form, Card } from "antd";
import ReInput from "../../../reusable-antd-components/ReFormFields/ReInput";
import ReForm from "../../..//reusable-antd-components/ReForm";

export default function FirstStep() {
  const [form] = Form.useForm();
  function handleFormSubmit(values: any) {
    console.log(values);
  }
  return (
    <Styles.FormContainer>
      <ReForm formInstance={form} onSubmit={handleFormSubmit}>
        <div className="heading">
          <h1>SignUp</h1>
        </div>
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
        <Styles.Action>
          <Button
            className="signup_btn"
            type="primary"
            onClick={() => {
              form.submit();
            }}
          >
            SignUp
          </Button>
        </Styles.Action>
      </ReForm>
    </Styles.FormContainer>
  );
}
