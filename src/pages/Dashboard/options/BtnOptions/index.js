import { Link } from "react-router-dom";
import { useState } from "react";
export default function BtnOptions(props) {
  const [selected, setSelected] = useState(null);
  const [color, setColor] = useState("white");
  return (
    <>
      <Link
        to={props.path}
        onMouseOver={() => {
          setSelected(true);
          console.log("fre");
        }}
        onMouseLeave={() => setColor("white")}
      >
        <div className={`placebox ${color} `}>
          <div className=" box  boxbehind"></div>
          <div
            className={selected === props.name ? "box box1" : "box box2"}
            onClick={(e) => setSelected(props.name) /* props.func(v.name) */}
          >
            <div className="content">
              <div className="icon1">
                <img src={props.icon} alt="book" />
              </div>

              <div className="namebox">{props.name}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
