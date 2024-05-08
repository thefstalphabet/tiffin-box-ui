import { IRoutes } from "../Interfaces/Configs/Routes.interface";
import { Home, PageNotFound } from "../Routes";
import { About } from "../Componets";
export const routes: Array<IRoutes> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
