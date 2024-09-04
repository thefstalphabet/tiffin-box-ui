import { ICardItem } from "../Interfaces/Configs/CardItem.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../Assets/Icons/Icons";
export const CardItem: Array<ICardItem> = [
  {
    type: "kitchen",
    icon: <FontAwesomeIcon icon={Icons?.faUtensils} size="4x" />,
  },
  {
    type: "user",
    icon: <FontAwesomeIcon icon={Icons?.faUser} size="4x"/>,
  },
];
