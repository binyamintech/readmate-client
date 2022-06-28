import "./style.css";

// Creator : Team A - Shahar
function SubTitleLogin(props) {
  return (
    <div className="sub-title-box">
      <div className="sub-title">
        <span>{props.content} </span>
        <a href="www.google.com">Sign {props.sign}</a>
      </div>
    </div>
  );
}

export function SubTitleGeneral(props) {
  return (
    <div className="sub-title-box">
      <div className="sub-title">{props.content}</div>
    </div>
  );
}

export default SubTitleLogin;
