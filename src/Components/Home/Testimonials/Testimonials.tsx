import React from "react";
import * as Styles from "./TestimonialsStyle";
import { Card} from "antd";
import { TestimonialsItem } from "../../../Configs/TestimonialsItem";
import { ItestimonialsItem } from "../../../Interfaces/Configs/Testimonials.interface";

export default function Testimonials() {
  return (
    <Styles.Container>
      <h1>Testimonials</h1>
      <Styles.CardContainer>
        {TestimonialsItem.map((item: ItestimonialsItem) => {
          const { key, img, title, description } = item;
          return (
            <div key={key}>
              <img src={img} alt="logo  not found" />
              <Card style={{height:250 }} >
                <h3>{title}</h3>
                <p>{description}</p>
              </Card>
            </div>
          );
        })}
      </Styles.CardContainer>
    </Styles.Container>
  );
}
