import * as Styles from "./UserSignupFormStyle";
import ReInput from "../../reusable-antd-components/ReFormFields/ReInput";
import ReForm from "../../reusable-antd-components/ReForm";
import ReCheckBox from "../../reusable-antd-components/ReFormFields/ReCheckbox";
import { Button, Form } from "antd";
import { appName } from "../../Configs/GlobalText";
import { primaryColor } from "../../Configs/GlobalColour";
import { user } from "../../Apis/User";
import { useNavigate } from "react-router-dom";
import { ReNotification } from "../../reusable-antd-components/ReNotification";

export default function UserSignup() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  async function handleFormSubmit(values: any) {
    const userInfo = await user.create(values);
    if (userInfo) {
      ReNotification({
        header: "Signup",
        description: "User Created Succesfully",
        duration: 2,
        placement: "topRight",
        type: "success",
      });
      navigate("/login");
    }
  }
  return (
    <Styles.FormContainer>
      <ReForm formInstance={form} onSubmit={handleFormSubmit}>
        <div className="heading">
          <h1>SignUp</h1>
        </div>
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
