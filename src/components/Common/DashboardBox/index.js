import "./box.css";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import {useState} from 'react'
function Box1() {
  const [selected,setSelected ]=useState(null)
  const button = [
    { name: "Train Reading", icon: icon1 },
    { name: "Train Focus", icon: icon2 },
    { name: "Weekly Assessment", icon: icon3 },
    { name: "Freestyle", icon: icon4 },
  ];
  // yishai
  return (
    <>
      <div className="grid-container">
        <>
          {button.map((v) => {
            return (
              <div className="placebox">
                <div className=" box  boxbehind"></div>
                <div
                  className={selected===v.name?'box box1':'box box2'}
                  
                  onClick={(e) => setSelected(v.name) /* props.func(v.name) */}
                >
                  <div className="icon1">
                    <img src={v.icon} alt="book" />{" "}
                  </div>

                  <div className="namebox">{v.name}</div>
                </div>
              </div>
            );
          })}
        </>
      </div>
    </>
  );
}

export default Box1;
