import { ItemCard } from "../Componets/KitchenRegistration/ReasonToStart/ReasonToStartStyle";
import { ICardItem } from "../Interfaces/Configs/CardItem.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils,faUser} from "@fortawesome/free-solid-svg-icons";

export const CardItem: Array<ICardItem> = [
  {
    type: "kitchen",
    icon: <FontAwesomeIcon icon={faUtensils} size="4x" />,
  },
  {
    type: "user",
    icon: <FontAwesomeIcon icon={faUser} size="4x"/>,
  },
];
