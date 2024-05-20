import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faAddressCard,
  faFireBurner,
} from "@fortawesome/free-solid-svg-icons";
import { ISocialMedia } from "../Interfaces/Configs/SocailMediaIcon.interface";
export const socialMediaIcon: Array<ISocialMedia> = [
  {
    key: "1",
    label: "Facebook",
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    path: "/facebook",
  },
  {
    key: "2",
    label: "Instagram",
    icon: <FontAwesomeIcon icon={faUser} />,
    path: "/instgram",
  },
  {
    key: "3",
    label: "Twitter",
    icon: <FontAwesomeIcon icon={faFireBurner} />,
    path: "/twitter",
  },
  {
    key: "4",
    label: "Google",
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    path: "/google",
  },
  {
    key: "5",
    label: "Youtube",
    icon: <FontAwesomeIcon icon={faPhone} />,
    path: "/youtube",
  },
];
