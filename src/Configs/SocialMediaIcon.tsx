import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGoogle,
  faYoutube
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
  {
    key: "4",
    label: "Google",
    icon: <FontAwesomeIcon icon={faGoogle} color="white"  size="2x"/>,
    path: "/google",
  },
  {
    key: "5",
    label: "YouTube",
    icon: <FontAwesomeIcon icon={faYoutube} color="white"  size="2x"/>,
    path: "/youtube",
  },
];
