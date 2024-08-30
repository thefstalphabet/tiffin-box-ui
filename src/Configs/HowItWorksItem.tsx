import { IHowItWorks } from "../Interfaces/Configs/HowItWorks.interface";
import step1Img from "../Assets/Images/1.svg";
import step2Img from "../Assets/Images/2.svg";
import step3Img from "../Assets/Images/3.svg";
export const HowItWorksItem: Array<IHowItWorks> = [
  {
    key: "1",
    img: step1Img,
    title: "Explore Kitchens",
    description: `Check out different kitchens and food providers to see what they offer. You can use filters to find the exact type of food you're in the mood for.`,
  },
  {
    key: "2",
    img: step2Img,
    title: "Choose Your Meal",
    description: `Pick the meal or tiffin that looks good to you. You can see photos and read descriptions, plus check out ratings and reviews from other people.`,
  },
  {
    key: "3",
    img: step3Img,
    title: "Place Your Order",
    description: `When you're ready, just place your order with a few clicks. You can choose a delivery time that works for you, or get it delivered right away if you’re hungry now.`,
  },
];
