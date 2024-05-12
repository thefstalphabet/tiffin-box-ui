import { Route, Routes } from "react-router-dom";
import { routes } from "./Configs/Routes";
import { IRoutes } from "./Interfaces/Configs/Routes.interface";
import Header from "./Componets/Header/Header";
import SideMenu from "./Componets/SideMenu/SideMenu";
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
