import "./style.css";
import { Link } from "react-router-dom";
// export default function SubmitBtn({ path = "", name, type, click = () => { } }) {
export default function SubmitBtn(props) {
  return (
    // creator : nehorai
    // team f
    // enter the path with /
    // you must have function!! not a code
    // <Link to={path}>
    <button className="submit" type={props.type} onClick={props.startFunction}>
      <div className="word">{props.name}</div>
    </button>
    // </Link>
  );
}
