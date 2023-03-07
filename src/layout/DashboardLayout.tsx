import SideBar from "pages/SideBar";
import React from "react";
//react router dom
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Main = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <div style={{ display: "flex" }}>
          <SideBar />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Main;
