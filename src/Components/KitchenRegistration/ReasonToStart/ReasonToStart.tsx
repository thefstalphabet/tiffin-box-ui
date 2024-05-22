import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReasonToStartItems } from "../../../Configs/ReasonToStartItems";
import * as Styles from "./ReasonToStartStyle";
export default function ReasonToStart() {
  return (
    <Styles.Container className="container">
      <h1>So many reasons to start</h1>
      <Styles.ItemCard className="reasons-grid">
        {ReasonToStartItems.map((item) => (
          <div className="item" key={item.key}>
            <FontAwesomeIcon icon={item.icon} size="3x" />
            <div className="content">
              <h2>{item.heading}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </Styles.ItemCard>
    </Styles.Container>
  );
}
