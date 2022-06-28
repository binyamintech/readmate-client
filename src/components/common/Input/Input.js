import "./style.css";

// Creator : Team d - oriya
export default function Input(props) {
  return (
    <>
      <fieldset>
        <legend>{props.txt}</legend>

        <input
          type={props.type}
          placeholder={props.txt}
          name={props.name}
          required
        />
      </fieldset>
    </>
  );
}