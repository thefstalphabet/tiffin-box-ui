import React from "react";
import * as Styles from "./HowItWorksStyle";
import { HowItWorksItem } from "../../../Configs/HowItWorksItem";
import { IHowItWorks } from "../../../Interfaces/Configs/HowItWorks.interface";

export default function HowItWorks() {
  return (
    <Styles.Container>
      <h1>Three steps to smarter spending</h1>
      <Styles.ContentCard>
        {HowItWorksItem.map((item: IHowItWorks) => {
          const { key, step, title, description } = item;
          return (
            <div key={key}>
              <h2>{step}</h2>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </Styles.ContentCard>
    </Styles.Container>
  );
}
