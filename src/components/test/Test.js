// import { NavBar } from "../Common/Nav/index";

import Box1 from "../../pages/Dashboard/options/index";

import Dashboard from "../../pages/Dashboard";
import TeamF from "../teams/TeamF";
import { dataContext } from "../../context/context";
import { useContext, useEffect } from "react";
import Contact from "../../pages/Contact";
function Test() {
  const localDataContext = useContext(dataContext);
  useEffect(() => {
    console.log("das");
    console.log(localDataContext);
  });
  return (
    <>
      {/* <Box1 /> */}
      {/* <TeamF /> */}
      {/* <Options /> */}
      {/* <Nav /> */}
      <Contact />
    </>
  );
}

export default Test;
