import { auth } from "../Apis/Auth";
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

const items: Array<IRoutes> = [
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
    protected: true,
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
    protected: true,
  },
  {
    path: "/user-managements/:type",
    header: true,
    sideMenu: true,
    element: <UserManagement />,
    protected: true,
  },
  {
    path: "/testing",
    element: <Testing />,
  },
];

function filterRoutes(routes: IRoutes[]) {
  if (!auth.isUserLoggedIn()) {
    return routes.filter((route: IRoutes) => !route?.protected);
  } else {
    return routes;
  }
}

export const routes = filterRoutes(items);
