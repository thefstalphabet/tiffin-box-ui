import React from "react";
import * as Styles from "./TopKitchenStyle";
import { HomeCardItem } from "../../../Configs/HomeCardItem/HomeCardItem";
import { IHomeCardItem } from "../../../Interfaces/Configs/HomeInterface/HomeCardItem.interface";
import { Card } from "antd";
const { Meta } = Card;

export default function TopKitchen() {
  return (
    <Styles.CardSection>
      {HomeCardItem.map((item: IHomeCardItem) => {
        const { key, img, title, description } = item;
        return (
          <Card
            hoverable
            style={{ width: 280 }}
            cover={<img alt="example" src={img} />}
          >
            <Meta title={title} description={description} />
          </Card>
        );
      })}
    </Styles.CardSection>
  );
}
