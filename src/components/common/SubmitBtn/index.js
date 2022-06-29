import "./style.css";
import { Link } from "react-router-dom";
export default function SubmitBtn({ path = "", name, type, click = () => {} }) {
  return (
    // creator : nehorai
    // team f
    // enter the path with /
<<<<<<< HEAD
    // you must have function!! not a code 
      <Link to={path}>
        <button className="submit" type={type}  onClick={(e) => click(e)}>
          <div className="word">{name}</div>
        </button>
      </Link>
=======
    // you must have function!! not a code
    <Link to={path}>
      <button className="submit" type={type} onClick={(e) => click(e)}>
        <div className="word">{name}</div>
      </button>
    </Link>
>>>>>>> 44dcaf1c27f5bb84bd82445488cfdfcc6319527a
  );
}
