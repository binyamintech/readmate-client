import { useState } from "react";
import { useNavigate } from 'react-router-dom'
// import SubmitBtn from "../SubmitBtn";
import TextArea from "../TextArea/Index";
import img from "../../../assets/img/logo/vector.png"
//group c- yehoshua
export default function Questions() {

  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = {
      questionOne: formData.get("questionOne"),
      questionTwo: formData.get("questionTwo"),
      questionThree: formData.get("questionThree"),
      questionFour: formData.get("questionFour")
    };
    // console.log(e.currentTarget)
    console.log(body) 
    console.log(e.currentTarget)
    // isFormValid(body)
    navigate("/result");
  };


  // const isFormValid = (props) => {
  //   if (!props) {
  //       console.log("bonanza");
  //     }
  //     // else{
  //     //   return !isFormValid;
  //     // }
  // };

  // const sendToDb = (e) => {
  //   setFormData()
  //   // if (isFormValid === true) {
  //   // }
  // }

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((currentFormData) => {
      console.log(formData)
      return {
        ...currentFormData,
        [name]: value,
      };
    });
    onSubmit()
  };

  // const joshClick = (e) => {
  //   onChange(e)
  //   onSubmit(e)
  //   // if (isFormValid && sendToDb) {
  //   // }
  // }

  return (
    <div>
      <form noValidate onSubmit={onSubmit}>
        <div><h4>Instructions</h4>
          <img src={img} alt="" />
          <p>
            Consectetur fames feugiat interdum morbi placerat in.
            Leo commodo maecenas donec cursus aenean scelerisque eu.
            Ridiculus amet habitant gravida lobortis suscipit enim,
            consectetur quisque.
          </p>
        </div>
        <div>
        </div>
        <label>
          <TextArea name="questionOne"
            value={formData.questionOne || ''}
            onChange={onChange}>Who is the main character"
          </TextArea>
        </label>
        <label>
          <TextArea name="questionTwo"
            value={formData.questionTwo || ''}
            onChange={onChange} >"What can you say about the theme of the story?"
          </TextArea>
        </label>
        <label>
          <TextArea name="questionThree"
            value={formData.questionThree || ''}
            onChange={onChange}>"Why do you think the author wrote this book?"
          </TextArea>
        </label>
        <label>
          <TextArea name="questionFour"
            value={formData.questionFour || ''}
            onChange={onChange} >"What do you think is going to happen?"
          </TextArea>
        </label>
        <span>
          {/* <SubmitBtn  name={"done"} onClick={(e)=>joshClick(e)}>done</SubmitBtn>{/* yehoshua  did it */}

          <button type="submit" >done</button>
          {/* disabled={!isFormValid()} onSubmit={onSubmit} */}
        </span>
        {/* {JSON.stringify(formData)} */}
      </form>
    </div>
  )
}
