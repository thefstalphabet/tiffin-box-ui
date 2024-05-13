import { landingImg,kitchenImg } from "../Assets";
import { IReasonStartItem } from "../Interfaces/ReasonToStart.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
export const ReasonToStartItems: Array<IReasonStartItem> = [
  {
    key: "sub1",
    icon:<FontAwesomeIcon icon={faUser} className="h-40 w-40"  />,
    heading: "Teach your way",
    desc: " Publish the course you want, in the way you want, and always have control of your own content.",
  },
  {
    key: "sub2",
    icon:<FontAwesomeIcon icon={faUser} className="h-40 w-40"  />,
    heading: "Inspire learners",
    desc: "Teach what you know and help learners explore their interests, gain new skills, and advance their careers.",
  },
  {
    key: "sub3",
    icon:<FontAwesomeIcon icon={faUser} className="h-40 w-40"  />,
    heading: "Get rewarded",
    desc: "Expand your professional network, build your expertise, and earn money on each paid enrollment.",
  },
];
