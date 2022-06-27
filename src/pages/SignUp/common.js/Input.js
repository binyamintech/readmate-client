import "./style.css";

export default function Input(props) {
  return (
    <>
      <fieldset>
        <legend>{props.txt}</legend>

        <input type="text" placeholder={""} />
      </fieldset>
    </>
  );
}
