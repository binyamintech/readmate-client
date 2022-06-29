
import "./style.css";
import { Link } from "react-router-dom";
export default function SubmitBtn({ path, name,type, onclick }) {
  return (
    // creator : nehorai
    // team f
    // enter the path with /
    // you must have function!! not a code 
      <Link to={path}>
        <button className="submit" type={type} path="" onClick={(event) => onclick(event)}>
          <div className="word">{name}</div>
        </button>
      </Link>
  );
}