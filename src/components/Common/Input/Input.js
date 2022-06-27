import './style.css'

// Creator : Team d - oriya
export default function Input(props) {
  return (
   <>
       <fieldset>
        <legend >{props.txt}</legend>
      
      <input type="text" placeholder={props.txt} />
      </fieldset>
      </>
  );
}
