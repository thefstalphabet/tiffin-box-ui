import { IRoutes } from "../Interfaces/Configs/Routes.interface";
import { Dashboard, PageNotFound } from "../Routes";

export const routes: Array<IRoutes> = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
