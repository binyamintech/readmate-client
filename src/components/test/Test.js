<<<<<<< HEAD
import Settings from "../../pages/Settings";


=======
// import { NavBar } from "../Common/Nav/index";

import Box1 from "../../pages/Dashboard/options/index";

import Dashboard from "../../pages/Dashboard";
import TeamF from "../teams/TeamF";
import { dataContext } from "../../context/context";
import { useContext, useEffect } from "react";
>>>>>>> ba1d921cc6c5923146b50f962af0ef7d3a051968
function Test() {
  const localDataContext = useContext(dataContext);
  useEffect(() => {
    console.log("das");
    console.log(localDataContext);
  });
  return (
    <>
<<<<<<< HEAD
   <Settings/>
      
=======
      <Box1 />
      {/* <TeamF /> */}
      {/* <Options /> */}
      {/* <Nav /> */}
      {/* <Dashboard /> */}
>>>>>>> ba1d921cc6c5923146b50f962af0ef7d3a051968
    </>
  );
}

export default Test;
