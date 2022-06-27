import "./style.css";

export default function Input(props) {
  return (
    <>
      <fieldset>
        <legend>{props.txt}</legend>

        <input type={props.type} placeholder={""} name={props.name} />
      </fieldset>
    </>
  );
}
