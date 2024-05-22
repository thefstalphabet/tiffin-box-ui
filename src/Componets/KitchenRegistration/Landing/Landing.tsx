import { kitchenImg } from "../../../Assets";
import { Button } from "antd";
import * as Styles from "./LandingStyles";
import { appName } from "../../../Configs/GlobalText";
import { useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();

  return (
    <Styles.Container className="container">
      <Styles.Content>
        <div className="taglines">
          <h1>{`Get Stared with ${appName}`}</h1>
          <p>
            Expand Your Reach and Boost Your Revenue with Our Kitchen
            Subscription Platform!
          </p>
        </div>
        <Button
          style={{ width: "7rem" }}
          type="primary"
          size="large"
          onClick={() => {
            navigate("/kitchenSignUp");
          }}
        >
          Start Today
        </Button>
      </Styles.Content>
      <Styles.Image>
        <img style={{ width: "35vw" }} src={kitchenImg} alt="Banner" />
      </Styles.Image>
    </Styles.Container>
  );
}
