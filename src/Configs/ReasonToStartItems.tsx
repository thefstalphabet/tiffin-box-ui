import { landingImg } from "../Assets";
import { IReasonStartItem } from "../Interfaces/ReasonToStart.interface";
export const ReasonToStartItems: Array<IReasonStartItem> = [
  {
    key: "sub1",
    imgSource:landingImg,
    heading: "Teach your way",
    desc: " Publish the course you want, in the way you want, and always have control of your own content.",
  },
  {
    key: "sub2",
    imgSource: landingImg,
    heading: "Inspire learners",
    desc: "Teach what you know and help learners explore their interests, gain new skills, and advance their careers.",
  },
  {
    key: "sub3",
    // icon: require("../../src/Assets/Images/landingpage.jpg"),
    imgSource: landingImg,
    heading: "Get rewarded",
    desc: "Expand your professional network, build your expertise, and earn money on each paid enrollment.",
  },
];
