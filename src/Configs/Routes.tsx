import { IRoutes } from "../Interfaces/Configs/Routes.interface";
import {
  Home,
  PageNotFound,
  About,
  ContactUs,
  Profile,
  KitchenRegistration,
  Login,
  Signup,
  KitchenSignUp
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
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/kitchenSignUp",
    element: <KitchenSignUp />,
  },
  {
    path: "/dashboard",
    element: <>Dashboard</>,
  },
  {
    path: "/testing",
    element: <Testing/>
  },
];
