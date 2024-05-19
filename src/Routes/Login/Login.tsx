import * as Styles from "./LoginStyle";
import LoginForm from "../../Componets/LoginForm/LoginForm";
import { Space } from "antd";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <Styles.Container>
      <Space className="signup-text">
        <h3>Don't have an account?</h3>
        <Link to="/signup">Signup</Link>
      </Space>
      <div className="login-form">
        <LoginForm />
      </div>
    </Styles.Container>
  );
}
