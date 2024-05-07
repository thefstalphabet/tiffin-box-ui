import { IRoutes } from "../Interfaces/Configs/Routes.interface";
import { Home, PageNotFound } from "../Routes";

export const routes: Array<IRoutes> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
