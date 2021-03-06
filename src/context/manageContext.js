import { createContext, useState } from "react";
import { dataContext } from "./context";
import fakeData from "./fakeData";
export const DataProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(fakeData.userDetails);
  const [assesmentsTemplates, setAssesmentsTemplates] = useState(fakeData.assesmentsTemplates);
  const [assesmentResults, setAssesmentsResults] = useState(
    fakeData.assesmentResults
  );
  const [popup, setPopup] = useState(false);
  const [navBar, setNavBar] = useState(true);
  const [showNavIcon, setShowNavIcon] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [update, setUpdate] = useState(false);
  const [pageName, setPageName] = useState("Default page name");

  function updateUserDetails(updatedUserDetails) {
    setUserDetails(updatedUserDetails);
    setUpdate(!update);
  }
  function updateUserAssesments(updatedUserAssesments) {
    setAssesmentsResults(updatedUserAssesments);
    setUpdate(!update);
  }
  function changePopupState() {
    setPopup(!popup);
  }
  function changeNavBarState() {
    setNavBar(!navBar);
  }
  function changePageName(pageName) {
    setPageName(pageName);
    setUpdate(!update);
  }
  return (
    <dataContext.Provider
      value={{
        userDetails,
        updateUserDetails,
        updateUserAssesments,
        assesmentResults,
        assesmentsTemplates,
        popup,
        changePopupState,
        update,
        navBar,
        pageName,
        changePageName,
        changeNavBarState,
        showNavIcon,
        setShowNavIcon,
        showHeader,
        setShowHeader,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
