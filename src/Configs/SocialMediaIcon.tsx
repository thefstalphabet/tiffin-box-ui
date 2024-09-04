import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../Assets/Icons/Icons";
import { ISocialMedia } from "../Interfaces/Configs/SocialMediaIcon.interface";
export const socialMediaIcon: Array<ISocialMedia> = [
  {
    key: "1",
    label: "Facebook",
    icon: <FontAwesomeIcon icon={Icons?.faFacebook} color="white" size="2x" />,
    path: "/facebook",
  },
  {
    key: "2",
    label: "Instagram",
    icon: <FontAwesomeIcon icon={Icons?.faInstagram} color="white"  size="2x"/>,
    path: "/instagram",
  },
  {
    key: "3",
    label: "Twitter",
    icon: <FontAwesomeIcon icon={Icons?.faTwitter} color="white" size="2x" />,
    path: "/twitter",
  },
];
