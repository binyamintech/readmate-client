import React, { createContext, useContext, useState } from "react";
import Main from "./Main";
import Login from "./login";
import { DataProvider } from "../../context/manageContext";
import fakeData from "../../context/fakeData";
//--contex for popup 19:51 team-b
import { popupContext } from "../../context/context";
export const pageNameContext = createContext();

//group c- yoav & yehoshua

export default function Layout() {
  return (
    <div className="Layout">
      <DataProvider>
        {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
        <Main userLoginInfo={userLoginInfo} />
        {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
      </DataProvider>
    </div>
  );
}
