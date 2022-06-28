import React, { createContext, useState } from 'react';
import Main from './Main';
import Login from './login';

export const pageNameContext = createContext()

//group c- yoav & yehoshua 

export default function Layout() {
    const [pageName, setPageName] = useState("||||| default page name |||||");
    const [userLoginInfo,setUserLoginInfo] = useState([])
    // user information is pushed through props to Main, while its state is pushed to Login.
    // This way, when a user performs login, a state is changed and the relevant area is rendered.
    // Use case in thie app: user avatar in the header, along with potential user menu

    return (
        <div className='Layout'>
            <pageNameContext.Provider value={{pageName, setPageName}}>
                {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
                <Main userLoginInfo={userLoginInfo}/>
                {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
            </pageNameContext.Provider>
        </div>
    )
}
