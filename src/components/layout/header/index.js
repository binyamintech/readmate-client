import { useContext, useState } from "react";
import { pageNameContext, navBarContext } from "../Layout";
import nav from "./img/nav-icon.png";
import { NavBar } from "../../common/Nav";

export default function Header(props) {
  const [pageName, setPageName] = useContext(pageNameContext); //adduming contect is in use
  const [navState, setNavState] = useState(false);
  return (
    <div>
      {!navState ? (
        <div
          onClick={() => {
            setNavState(true);
          }}
        >
          <img src={nav} alt="" />
        </div>
      ) : (
        <NavBar
          setClose={() => {
            setNavState(!navState);
          }}
        />
      )}

      <div>
        {"Page Name"}
        {/* {props.pageName} - alternative  */}
      </div>

      <div></div>
    </div>
  );
}
