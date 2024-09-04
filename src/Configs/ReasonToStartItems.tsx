import { IReasonStartItem } from "../Interfaces/Configs/ReasonToStart.interface";
import {Increased,Custumer,revenue } from "../Assets";
export const ReasonToStartItems: Array<IReasonStartItem> = [
  {
    key: "1",
    icon: Increased,
    heading: "Increased Exposure",
    desc: "By listing in our app, You can expand your reach and visibility to a wider audience of potential customers who are actively seeking convenient meal options for monthly bases.",
  },
  {
    key: "2",
    icon: revenue,
    heading: "Additional Revenue",
    desc: "Our platform opens up new opportunities for you to generate additional revenue through subscription-based orders. This steady stream of income can complement their existing sales and contribute to overall business growth.",
  },
  {
    key: "3",
    icon: Custumer,
    heading: "Customer Insights",
    desc: "Our app provides valuable analytics and data insights that help kitchens better understand their customers' preferences, behavior, and ordering patterns.",
  },
];
