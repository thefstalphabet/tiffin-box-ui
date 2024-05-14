import React from "react";
import { StartItem } from "../../../Configs/StatsItem";
import { IStats } from "../../../Interfaces/Configs/Stats.interface";
import * as Styles from "./StatsStyle";
export default function Stats() {
  return (
    <Styles.Container>
      {StartItem.map((item: IStats) => {
        const { key, heading, desc } = item;
        return (
          <Styles.subContainer key={key}>
            <h1 className="heading_text">{heading}</h1>
            <p className="desc_text">{desc}</p>
          </Styles.subContainer>
        );
      })}
    </Styles.Container>
  );
}
