import "./style.css";
import { Link } from "react-router-dom";
// import img from "../../../assets/img/Frame.png"
// Shira from Team G - Shmuel

// ___________________________________________________________
// יש לשלוח לקומפוננטה הזו:
//props.route  ----> להכניס את הראוט אליו הלינק צריך ללכת
// props.startFunction   --->הפונקציה שתפעל בעת לחיצה על הכפתור, היא צריכה להעביר לדף הבא
//props.title
//props.subtitle ----> אם יש כותרת משנית- בתוך ההסבר- לשלוח. אם אין אז לא לשלוח
//props.explanation
//props.img  ------> צריך להוריד את התמונה ולהכניס לתקיית התמונות, ואז לייבא אותה בדף אליו מרנדרים את הקומפוננטה הזו
// ___________________________________________________________


function FooterStart(props) {
  return (
    <div className="myAreaBtnStart">
      <div className="outBtn">
        <Link to={props.route} className="route-area-link">
          {" "}
          <button className="startOrengeBtn" onClick={props.startFunction}>
            <div className="playTriangle"></div>
          </button>
        </Link>
      </div>
      <div className="footer-start-box">
        <div className="startTitle">{props.title}</div>
        <div className="explanation">
          {props.subtitle? <p><b>{props.subtitle}</b></p> : null}
          <p>{props.explanation}</p>
        </div>
        <div className="myEmojiDiv">
          <img src={props.img} className="leftEmoji" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FooterStart;
