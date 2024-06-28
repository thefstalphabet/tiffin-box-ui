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
  TermsAndCondition,
  PrivacyPolicy,
  Orders,
  Payments,
  Bookmarks,
  Settings,
  ViewKitchen,
  Address
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
  {
    path: "/terms-and-condition",
    header: true,
    sideMenu: true,
    element: <TermsAndCondition />,
  },
  {
    path: "/privacy-policy",
    header: true,
    sideMenu: true,
    element: <PrivacyPolicy />,
  },
  {
    path: "/orders",
    header: true,
    sideMenu: true,
    element: <Orders />,
    protected: true,
  },
  {
    path: "/payments",
    header: true,
    sideMenu: true,
    element: <Payments />,
    protected: true,
  },
  {
    path: "/bookmarks",
    header: true,
    sideMenu: true,
    element: <Bookmarks />,
    protected: true,
  },
  {
    path: "/settings",
    header: true,
    sideMenu: true,
    element: <Settings />,
    protected: true,
  },
  {
    path: "/address",
    header: true,
    sideMenu: true,
    element: <Address />,
    protected: true,
  },
  {
    path: "/kitchen/:id",
    header: true,
    sideMenu: true,
    element: <ViewKitchen />,
    protected: true,
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
