import "./style.css";

export default function SignButton(props) {
  return (
    <div>
      <button className="submit_btn" type={props.type}>
        {props.title}
      </button>
    </div>
  );
}
