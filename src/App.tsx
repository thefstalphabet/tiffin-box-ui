import { Route, Routes } from "react-router-dom";
import { routes } from "./Configs/Routes";
import { IRoutes } from "./Interfaces/Configs/Routes.interface";
import { Header, SideMenu } from "./Components";
import { useEffect } from "react";
import { token } from "./Apis/Token";
import { useAppDispatch } from "./Redux/Hooks";
import { setData, setType } from "./Redux/Slices/UserSlices";
import { auth } from "./Apis/Auth";
import { setScreenHeight, setScreenWidth } from "./Redux/Slices/ScreenResolution.slices";
export default function App() {
  const dispatch = useAppDispatch();

  function setUser() {
    const user = auth.isUserLoggedIn();
    if (user) {
      dispatch(setData(user));
      const userType = user?._id?.split("-");
      if (userType[0] === "USE") {
        dispatch(setType("user"));
      } else {
        setType("kitchen");
      }
    }
  }

  const updateScreenSize = () => {
    dispatch(setScreenWidth(window.innerWidth));
    dispatch(setScreenHeight(window.innerHeight));
  };

  function setScreenResolution() {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }

  useEffect(() => {
    token.validateRefreshToken();
    token.validateAccessToken();
    setUser();
    setScreenResolution();
  }, []);

  return (
    <div>
      <Routes>
        {routes.map((route: IRoutes) => {
          const { path, element, header, sideMenu } = route;
          return (
            <Route
              key={path}
              element={
                <>
                  {header && <Header />}
                  {sideMenu && <SideMenu />}
                  {element}
                </>
              }
              path={path}
            />
          );
        })}
      </Routes>
    </div>
  );
}
