import { NavBar } from "../../common/Nav/index";

import { useContext, useState } from "react";
import { pageNameContext, navBarContext } from "../Layout";
import nav from "./img/nav-icon.png";
import photoPic from "./img/userPhoto.png";
import "./header.css";
import data from "../../../pages/Assessments/Page1/data";
import { dataContext } from "../../../context/context";

//group c- yoav & yehoshua


export default function Header() {
    // const pageNameContextLocal = useContext(pageNameContext); //assuming context is in use
    const pageNameContextLocal = useContext(dataContext); //assuming context is in use
    const [navState, setNavState] = useState(false);
    console.log(pageNameContextLocal.pageName);

    return (<div className="header">
        <div className="left">
            <img src={nav} alt="navbar"></img>
        </div>
        <div className="mid">{pageNameContextLocal.pageName}</div>

        <div className="right">
            <img src={photoPic} alt="User Name " />
        </div>

        <div>

            {!navState ? (
                <div onClick={() => { setNavState(false); }}>
                    <img src={nav} alt="" />
                </div>
            )
                :
                (<NavBar setClose={() => { setNavState(!navState); }} />)
            }
        </div>

    </div>

    )

}