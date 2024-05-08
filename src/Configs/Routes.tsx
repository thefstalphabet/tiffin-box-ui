import { IRoutes } from "../Interfaces/Configs/Routes.interface";
import { Home, PageNotFound } from "../Routes";
import { About,ContactUs,Profile,Kitchen } from "../Componets";
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
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/Kitchen",
    element: <Kitchen />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
