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
    const body= {
      questionOne:formData.get("questionOne"),
      questionTwo:formData.get("questionTwo"),
      questionThree:formData.get("questionThree"),
      questionFour:formData.get("questionFour")
    }
    console.log(e.currentTarget)
    console.log(body)

    navigate("/result");
    // console.log(formData);
  };


  // const isFormValid = () => {
  //   const { questionOne, questionTwo, questionThree, questionFour } = formData;
  //   return questionOne && questionTwo && questionThree && questionFour;
  //   // if (questionOne === "" || !questionTwo || !questionThree || !questionFour) {
  //   //   console.log(formData);
  //   // }
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
  };

  const joshClick = (e) => {
    // onChange(e)
    onSubmit(e)
    // if (isFormValid && sendToDb) {
    // }
  }

  return (
    <div>
      <form noValidate onSubmit={onSubmit}>
        <div><h4>Instructions</h4>
          <img src={img} alt="" />
          <p>
            Consectetur fames feugiat interdum morbi placerat in.
            Leo commodo maecenas donec cursus aenean scelerisque eu.
            Ridiculus amet habitant gravida lobortis suscipit enim,
            consectetur quisque. </p>
        </div>
        <div>
        </div>

        <TextArea name="questionOne"
          value={formData.questionOne || ''}
          onChange={onChange}>Who is the main character"
          </TextArea>


        <TextArea name="questionTwo"
          value={formData.questionTwo || ''} onChange={onChange} >"What can you say about the theme of the story?"
          </TextArea>


        <TextArea name="questionThree"
          value={formData.questionThree || ''}
          onChange={onChange}>"Why do you think the author wrote this book?"
          </TextArea>


        <TextArea name="questionFour"
          value={formData.questionFour || ''}
          onChange={onChange} >"What do you think is going to happen?"
          </TextArea>

        <span>
          {/* <SubmitBtn  name={"done"} onClick={(e)=>joshClick(e)}>done</SubmitBtn>{/* yehoshua  did it */}
          {/* {console.log(formData)}  */}
          <button type="submit">Submit</button>
          {/* disabled={!isFormValid()} */}
        </span>
        {JSON.stringify(formData)}
      </form>
    </div>
  )
}
