import { Children } from "react";
import { Link } from "react-router-dom";

export default function BtnAssessment(props) {
  return (
    <div className={`${props.box} box right back-purple`}>
      <div className="container-icon-lock">
        <div className={`icon-assessment ${props.color}`}>
          <props.icon className="i" size="110%" />
          <props.lock className="lock  " size="60%" />
        </div>
      </div>

      <div className={`namebox ${props.color}`}>{props.name}</div>
      {props.children}
    </div>
  );
}
