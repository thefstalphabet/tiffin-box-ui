import { IRoutes } from "../Interfaces/Configs/Routes.interface";
import { Home, PageNotFound } from "../Routes";
import { About, ContactUs, Profile, Kitchen } from "../Componets";
export const routes: Array<IRoutes> = [
  {
    path: "/",
    element: <Home />,
    header: true,
    sideMenu: true,
  },
  {
    path: "/about",
    element: <About />,
    header: true,
    sideMenu: true,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
    header: true,
    sideMenu: true,
  },
  {
    path: "/profile",
    element: <Profile />,
    header: true,
    sideMenu: true,
  },
  {
    path: "/Kitchen",
    element: <Kitchen />,
    header: true,
    sideMenu: true,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
