import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { ISocialMedia } from "../Interfaces/Configs/SocialMediaIcon.interface";
export const socialMediaIcon: Array<ISocialMedia> = [
  {
    key: "1",
    label: "Facebook",
    icon: <FontAwesomeIcon icon={faFacebook} color="white" size="2x" />,
    path: "/facebook",
  },
  {
    key: "2",
    label: "Instagram",
    icon: <FontAwesomeIcon icon={faInstagram} color="white"  size="2x"/>,
    path: "/instagram",
  },
  {
    key: "3",
    label: "Twitter",
    icon: <FontAwesomeIcon icon={faTwitter} color="white" size="2x" />,
    path: "/twitter",
  },
];
