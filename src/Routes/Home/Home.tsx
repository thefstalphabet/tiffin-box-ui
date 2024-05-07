import React, { useState } from "react";
import Header from "../../Componets/Header/Header";
import SideMenu from "../../Componets/SideMenu/SideMenu";
const Home = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center">
      <Header setSideMenuVisibility={setSideMenuOpen}/>
      <SideMenu visibility={sideMenuOpen}/>
    </div>
  );
};

export default Home;
