import * as Styles from "./LandingStyle";
import { appName } from "../../../Configs/GlobalText";
import TopKitchens from "../TopKitchens/TopKitchens";
import Footer from "../../Footer/Footer";
import { kitchen } from "../../../Assets";
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
export default function Landing() {
  return (
    <Styles.MainContainer>
      <Styles.Container className="container">
        <Styles.Content>
          <div className="taglines">
            <h1>{appName}</h1>
            <p>{`Discover the best food & drinks in your city`}</p>
          </div>
          <Input prefix={<SearchOutlined/>} placeholder="Search from restourants cuisine or a dish"/>
        </Styles.Content>
        <Styles.Image>
          <img style={{ width: "28vw" }} src={kitchen} alt="Banner" />
        </Styles.Image>
      </Styles.Container>
      <TopKitchens />
      <Footer />
    </Styles.MainContainer>
  );
}
