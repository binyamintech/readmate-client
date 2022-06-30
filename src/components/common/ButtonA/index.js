import "./style.css";
export default function ButtonA(props) {
  return (
    <button className="submit" type={props.type} onClick={props.startFunction}>
      <div className="word">{props.name}</div>
    </button>
  )

    ;
}