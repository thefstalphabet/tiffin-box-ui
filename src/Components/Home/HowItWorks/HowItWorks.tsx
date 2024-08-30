import React from "react";
import * as Styles from "./HowItWorksStyle";
import { HowItWorksItem } from "../../../Configs/HowItWorksItem";
import { IHowItWorks } from "../../../Interfaces/Configs/HowItWorks.interface";
import arrowImg from "../../../Assets/Images/arrow.svg";

export default function HowItWorks() {
  return (
    <Styles.Container>
      <h1>Three steps to smarter spending</h1>
      <Styles.ContentCard>
        {HowItWorksItem.map((item: IHowItWorks, index: number) => {
          const { key, img, title, description } = item;
          return (
            <div key={key} className="step-container">
              <img src={img} alt="step" className="step-image" />
              <h3>{title}</h3>
              <p>{description}</p>
              {index < HowItWorksItem.length - 1 && (
                <div className="arrow-container">
                  <img src={arrowImg} alt="arrow" className="arrow-image" />
                </div>
              )}
            </div>
          );
        })}
      </Styles.ContentCard>
    </Styles.Container>
  );
}
