import { Link } from "react-router-dom";
import { useState } from "react";
export default function BtnOptions(props) {
  return (
    <div className="box box2 right back-purple  btn-info">
      <Link to={props.path}>
        <div className="center-context">
          <div className="icon1">
            <img src={props.icon} alt="book" className="imgSize" />
          </div>
          <div className="namebox">{props.name}</div>
        </div>
      </Link>
    </div>
  );
}
