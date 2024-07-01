import { ITabItem } from "../reusable-antd-components/Interfaces/ReComponents.interface";
import { BookMarksKitchen,BookMarksDishes } from "../Components";
export const BookmarkstabItems: Array<ITabItem> = [

  {
    title: "Kitchens",
    key: "1",
    children: <BookMarksKitchen/>,
  },
  {
    title: "Dishes",
    key: "2",
    children: <BookMarksDishes/>,
  },
];
