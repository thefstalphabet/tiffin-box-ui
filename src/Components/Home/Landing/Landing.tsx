import React from "react";
import * as Styles from "./LandingStyle";
import { appName } from "../../../Configs/GlobalText";
import TopKitchen from "../TopKitchen/TopKitchen";
export default function Landing() {
  return (
    <Styles.Container>
      <Styles.HeroSection>
        <div className="heading">
          <h1>{appName}</h1>
          <p>Discover the the best food.</p>
        </div>
      </Styles.HeroSection>
      <TopKitchen />
    </Styles.Container>
  );
}
