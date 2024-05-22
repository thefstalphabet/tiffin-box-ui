import * as Styles from "./UserSignupStyle";
import ReInput from "../../reusable-antd-components/ReFormFields/ReInput";
import ReForm from "../../reusable-antd-components/ReForm";
import ReCheckBox from "../../reusable-antd-components/ReFormFields/ReCheckbox";
import { Button, Form, Card } from "antd";
import { appName } from "../../Configs/GlobalText";
import { primaryColor } from "../../Configs/GlobalColour";
export default function UserSignup() {
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
        <ReInput
          label="Number"
          placeholder="Enter your number"
          name="number"
          type="number"
          required
        />
        <ReCheckBox label="Remember me" name="agree" disable={false} />
        <p>
          By continuing the "Sign up" button, you are creating a {appName}
          account, and you agree to {appName}'s
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: primaryColor }}
          >
            Terms and Conditions
          </a>
          and
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: primaryColor }}
          >
            Privacy Policy
          </a>
          .
        </p>
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
