import { Route, Routes } from "react-router-dom";
import { routes } from "./Configs/Routes";
import { IRoutes } from "./Interfaces/Configs/Routes.interface";
import { Header, SideMenu } from "./Components";
import { useEffect } from "react";
import { token } from "./Apis/Token";
import { useAppDispatch } from "./Redux/Hooks";
import { addData } from "./Redux/Slices/UserSlices";
export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    token.validateRefreshToken();
    token.validateAccessToken();

    const user = sessionStorage.getItem("user");
    if (user) {
      dispatch(addData(JSON.parse(user)));
    }
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
