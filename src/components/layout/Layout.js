import React, { createContext, useContext, useState } from "react";
import Main from "./Main";
import Login from "./login";
import { dataContext } from "../../context/context";
import fakeData from "../../context/fakeData";

export const pageNameContext = createContext();

//group c- yoav & yehoshua

export default function Layout() {
<<<<<<< HEAD
    const [pageName, setPageName] = useState("||||| default page name |||||");
    const [userLoginInfo, setUserLoginInfo] = useState([])
    // user information is pushed through props to Main, while its state is pushed to Login.
    // This way, when a user performs login, a state is changed and the relevant area is rendered.
    // Use case in thie app: user avatar in the header, along with potential user menu

    return (
        <div className='Layout'>
            <pageNameContext.Provider value={{ pageName, setPageName }}>
                {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
                <Main userLoginInfo={userLoginInfo} />
                {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
            </pageNameContext.Provider>
        </div>
    )
=======
  const [pageName, setPageName] = useState("||||| default page name |||||");
  const [userLoginInfo, setUserLoginInfo] = useState([]);
  // user information is pushed through props to Main, while its state is pushed to Login.
  // This way, when a user performs login, a state is changed and the relevant area is rendered.
  // Use case in thie app: user avatar in the header, along with potential user menu
  const [data, setData] = useState(fakeData);

  return (
    <div className="Layout">
      <dataContext.Provider
        value={{
          userDetails: fakeData.userDetails,
          assesmentResults: fakeData.assesmentResults,
          assesmentTemplates: fakeData.assesmentsTemplates,
        }}
      >
        <pageNameContext.Provider value={{ pageName, setPageName }}>
          {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
          <Main userLoginInfo={userLoginInfo} />
          {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
        </pageNameContext.Provider>
      </dataContext.Provider>
    </div>
  );
>>>>>>> 47346cbf768b87cef62b30bb7357f60d63ae117b
}
