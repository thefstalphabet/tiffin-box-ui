import { ReasonToStartItems } from "../../../Configs/ReasonToStartItems";
import { IReasonStartItem } from "../../../Interfaces/Configs/ReasonToStart.interface";
import * as Styles from "./ReasonToStartStyle";
export default function ReasonToStart() {
  return (
    <Styles.Container>
      <h1 className="reason-text">So many reasons to start</h1>
      <Styles.itemCard className="reasons-grid">
        {ReasonToStartItems.map((item) => (
          <div key={item.key}>
            <div className="icon-wrapper">
              {item.icon}
            </div>
            <h1 className="reason-heading">{item.heading}</h1>
            <p className="reason-desc">{item.desc}</p>
          </div>
        ))}
      </Styles.itemCard>
    </Styles.Container>
  );
}
