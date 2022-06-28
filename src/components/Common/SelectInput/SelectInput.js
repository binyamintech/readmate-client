import './style.css'
// Creator : Team d - oriya
export default function SelectInput(props) {
  return <>
      <fieldset className='border'>
        <select className='option'>
          <option value="00">{props.title}</option>
          {props.options.map((item,index)=> <option value={index}>{item}</option>)}
        </select>
      </fieldset>
        </>
    
  
}
