import { Route, Routes } from "react-router-dom";
import { routes } from "./Configs/Routes";
import { IRoutes } from "./Interfaces/Configs/Routes.interface";
import { Header, SideMenu } from "./Components";
export default function App() {
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
