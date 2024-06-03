import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReasonToStartItems } from "../../../Configs/ReasonToStartItems";
import { IReasonStartItem } from "../../../Interfaces/Configs/ReasonToStart.interface";
import * as Styles from "./ReasonToStartStyle";
export default function ReasonToStart() {
  return (
    <Styles.Container className="container">
      <h1>So Many Reasons to Start</h1>
      <Styles.ItemCard className="reasons-grid">
        {ReasonToStartItems.map((item: IReasonStartItem) => {
          const {icon,desc,heading,key} = item
          return (
            <div className="item" key={key}>
              <img src={icon} alt="reason image" className="reason-img" />
              <div className="content">
                <h2>{heading}</h2>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </Styles.ItemCard>
    </Styles.Container>
  );
}
