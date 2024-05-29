import * as Styles from "./LoginStyle";
import { Space } from "antd";
import { Link } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
export default function Login() {
  return (
    <Styles.Container>
      <Space className="signup-text">
        <h3>Don't have an account?</h3>
        <Link to="/user-signup">Signup</Link>
      </Space>
      <div className="login-form">
        <LoginForm />
      </div>
    </Styles.Container>
  );
}
