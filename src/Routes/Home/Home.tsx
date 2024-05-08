import React, { useState } from "react";
import Header from "../../Componets/Header/Header";
import SideMenu from "../../Componets/SideMenu/SideMenu";
import { About } from "../../Componets";
const Home = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <div className="">
      <Header setSideMenuVisibility={setSideMenuOpen} visibilitymenu={sideMenuOpen}/>
      <SideMenu visibility={sideMenuOpen} setSideMenuVisibility={setSideMenuOpen}/>
    </div>
  );
};

export default Home;
