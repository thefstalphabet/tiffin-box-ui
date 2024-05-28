import * as Styles from "./LandingStyle";
import { appName } from "../../../Configs/GlobalText";
import TopKitchens from "../TopKitchens/TopKitchens";
import Footer from "../../Footer/Footer";
import { kitchen } from "../../../Assets";
import { Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
export default function Landing() {
  const { Search } = Input;
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <Styles.MainContainer>
      <Styles.Container className="container">
        <Styles.Content>
          <div className="taglines">
            <h1>{appName}</h1>
            <p>{`Discover the best food & drinks in your city`}</p>
          </div>
          <Search
          className="search-bar"
            size="large"
            placeholder="Search nearest kitchen"
            onSearch={onSearch}
            enterButton
          />
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
