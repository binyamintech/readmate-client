import { Children } from "react";
import { Link } from "react-router-dom";

export default function BtnAssessment(props) {
  return (
    <div className={`${props.box} box right back-purple`}>
      <div className={`icon1 ${props.color}`}>
        <props.icon size="17%" className="i" />
        <props.lock className="lock " />
      </div>

      <div className={`namebox ${props.color}`}>{props.name}</div>
      {props.children}
    </div>
  );
}
