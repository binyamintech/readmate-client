import './style.css'
import {Link} from "react-router-dom"

import icon1 from "../../../assets/img/dashboard icons/icon1.png";
import icon2 from "../../../assets/img/dashboard icons/icon2.png";
import icon3 from "../../../assets/img/dashboard icons/icon3.png";
import icon4 from "../../../assets/img/dashboard icons/icon4.png";
import {useState} from 'react'
function Box1() {
  const [selected,setSelected ]=useState(null)

  // creator: nehorai, team f , chane the remote in path, use /  inside path
  
  const button = [
    { name: "Train Reading", icon: icon1 , path : "/" },
    { name: "Train Focus", icon: icon2 , path : "/" },
    { name: "Weekly Assessment", icon: icon3 , path : "/"},
    { name: "Freestyle", icon: icon4 , path : "/"},
  ];
  // yishai
  return (
    <>
      <div className="grid-container">
        <>
          {button.map((v) => {
            return (
              <Link to ={v.path}><div className="placebox">
                <div className=" box  boxbehind"></div>
                <div className={selected===v.name?'box box1':'box box2'}
                  
                  onClick={(e) => setSelected(v.name) /* props.func(v.name) */}
                >
                  <div className="icon1">
                    <img src={v.icon} alt="book" />{" "}
                  </div>

                  <div className="namebox">{v.name}</div>
                </div>
              </div></Link>
            );
          })}
        </>
      </div>
    </>
  );
}

export default Box1;