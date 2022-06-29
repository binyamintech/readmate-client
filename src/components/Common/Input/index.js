import "./style.css";

// Creator : Team d - oriya
export default function Input(props) {
  return (
    <>
      <fieldset>
        <legend>{props.legend}</legend>

        <input
          className="allInputs"
          type={props.type}
          placeholder={props.content}
          name={props.name}
          onInput={props.onInput}
        />
      </fieldset>
    </>
  );
}