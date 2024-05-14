import { kitchenImg } from "../../../Assets";
import { Button } from "antd";
import * as Styles from "./LandingStyles";
import { appName } from "../../../Configs/GlobalText";
export default function Landing() {
  return (
    <Styles.Container>
      <Styles.Content>
        <div className="taglines">
          <h1>{`Get Stared with ${appName}`}</h1>
          <p>
            Connecting busy students and professionals with convenient tiffin services for daily meals.
          </p>
        </div>
        <Button style={{ width: "7rem" }} type="primary" size="large">
          Start Today
        </Button>
      </Styles.Content>
      <Styles.Image>
        <img style={{ width: "35vw" }} src={kitchenImg} alt="Banner" />
      </Styles.Image>
    </Styles.Container>
  );
}
