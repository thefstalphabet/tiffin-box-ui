import { IRoutes } from "../Interfaces/Configs/Routes.interface";
import {
  Home,
  PageNotFound,
  About,
  ContactUs,
  Profile,
  KitchenRegistration,
  Login,
  UserSignup,
  KitchenSignup,
  UserManagement,
} from "../Routes";
import Testing from "../Routes/Testing/Testing";
export const routes: Array<IRoutes> = [
  {
    path: "/",
    element: <Home />,
    header: true,
    sideMenu: true,
  },
  {
    path: "/about-us",
    element: <About />,
    header: true,
    sideMenu: true,
  },
  {
    path: "/contact-us",
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
    path: "/be-a-kitchen",
    element: <KitchenRegistration />,
    header: true,
    sideMenu: true,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user-signup",
    element: <UserSignup />,
  },
  {
    path: "/kitchen-signup",
    element: <KitchenSignup />,
  },
  {
    path: "/dashboard",
    header: true,
    sideMenu: true,
    element: <>Dashboard</>,
  },
  {
    path: "/user-managements/:type",
    header: true,
    sideMenu: true,
    element: <UserManagement />,
  },
  {
    path: "/testing",
    element: <Testing />,
  },
];
