import React from "react";
import * as Styles from "./LandingStyle";
import { appName } from "../../../Configs/GlobalText";
import TopKitchens from "../TopKitchens/TopKitchens";
export default function Landing() {
  return (
    <Styles.Container>
      <Styles.HeroSection>
        <div className="heading">
          <h1>{appName}</h1>
          <p>Discover the the best food.</p>
        </div>
      </Styles.HeroSection>
      <TopKitchens />
    </Styles.Container>
  );
}
