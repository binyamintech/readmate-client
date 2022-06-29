import "./style.css";
export default function SubmitBtn(props) {
  return (
    <button className="submit" type={props.type} onClick={props.startFunction}>
      <div className="word">{props.name}</div>
    </button>
  ) 
    
   ;
}