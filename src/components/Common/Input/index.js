import "./style.css";

// Creator : Team d - oriya
export default function Input(props) {
    const border= props.valid?"":"unvalid"
    const label= props.valid?"":"unvalidLabel"
    const text= props.valid?"":"unvalidLabel"
    const placeholder= props.valid?"":"unvalidPlaceholder"

    return (
    <>
      <fieldset className={border}>
        <legend className={label}>{props.legend}</legend>

        <input
          value={props.value}
          className={`allInputs ${placeholder} ${text}`}
          type={props.type}
          placeholder={props.content}
          name={props.name}
          onInput={props.onInput}
          valid={props.valid}
        />
      </fieldset>
    </>
  );
}
