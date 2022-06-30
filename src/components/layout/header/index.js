import { useContext, useState } from 'react';
import { pageNameContext, navBarContext } from "../Layout";
import nav from './img/nav-icon.png';
import { NavBar } from "../../common/Nav/index";
import photoPic from './img/userPhoto.png';
import "./header.css"

//group c- yoav & yehoshua 

export default function Header() {
   const pageNameContextLocal = useContext(pageNameContext) //assuming context is in use


   // console.log(pageNameContextLocal.pageName);
   const [navState, setNavState] = useState(false);


return (
   pageNameContextLocal.showHeader?
   <div className='header'>
      <div className='left'>
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
         
      </div>

      <div className='mid'>
         {pageNameContextLocal.pageName}
      </div>

      <div className='right'>
         <img src={photoPic} alt="User Name" />
      </div>
   </div>:console.log("no header")
)
}
