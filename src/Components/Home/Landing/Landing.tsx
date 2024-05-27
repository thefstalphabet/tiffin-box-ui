import React from "react";
import * as Styles from "./LandingStyle";
import { appName } from "../../../Configs/GlobalText";
import TopKitchens from "../TopKitchens/TopKitchens";
import Footer from "../../Footer/Footer";
import { kitchen } from "../../../Assets";
import { Input, Space } from "antd";
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
          placeholder="Search for restaurants,cuisine or a dish."
          onSearch={onSearch}
          enterButton
        />
        </Styles.Content>
        <Styles.Image>
          <img style={{ width: "25vw" }} src={kitchen} alt="Banner" />
        </Styles.Image>
      </Styles.Container>
      <TopKitchens />
      <Footer />
    </Styles.MainContainer>
  );
}
