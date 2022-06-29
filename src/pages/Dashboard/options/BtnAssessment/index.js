import { Children } from "react";
import { Link } from "react-router-dom";

export default function BtnAssessment(props) {
  return (
    <>
      <div className="placebox">
        <div className=" box  boxbehind"></div>
        <div className={props.box} onClick={(e) => {} /* props.func(v.name) */}>
          <div className="center">
            <div className={`icon2 ${props.color}`}>
              <props.icon size="17%" className="i" />
              <props.lock className="lock " />
            </div>

            <div className={`namebox ${props.color}`}>{props.name}</div>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
