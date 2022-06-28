import "./style.css";

// Creator : Team d - oriya
export default function Input(props) {
  return (
    <>
      <fieldset>
        <legend>{props.content}</legend>

<<<<<<< HEAD
        <input
          type={props.type}
          placeholder={props.txt}
          name={props.name}
          required
        />
=======
        <input className='allInputs' type={props.type} placeholder={props.content} name={props.name} />
>>>>>>> 949881f37a7f68edf03be1305f99e17e5fa41f33
      </fieldset>
    </>
  );
}
