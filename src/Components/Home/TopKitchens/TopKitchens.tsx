import * as Styles from "./TopKitchensStyle";
import { HomeCardItem } from "../../../Configs/KitchensItems";
import { IHomeCardItem } from "../../../Interfaces/Configs/KitchensItems.interface";
import { Card } from "antd";
const { Meta } = Card;

export default function TopKitchen() {
  return (
    <Styles.Conatainer>
      <h1>Top Kitchens in your area</h1>
      <Styles.CardSection>
        {HomeCardItem.map((item: IHomeCardItem) => {
          const { key, img, title, description } = item;
          return (
            <Card
              key={key}
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={img} />}
            >
              <Meta title={title} description={description} />
            </Card>
          );
        })}
      </Styles.CardSection>
    </Styles.Conatainer>
  );
}
