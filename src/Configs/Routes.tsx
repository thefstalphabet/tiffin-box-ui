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
  UserManagements,
  Users,
  Kitchens,
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
    path: "/user-managements",
    header: true,
    sideMenu: true,
    element: <UserManagements />,
  },
  {
    path: "/user-managements/users",
    header: true,
    sideMenu: true,
    element: <Users />,
  },
  {
    path: "/user-managements/kitchens",
    header: true,
    sideMenu: true,
    element: <Kitchens />,
  },
  {
    path: "/testing",
    element: <Testing />,
  },
];
