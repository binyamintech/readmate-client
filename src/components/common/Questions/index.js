import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitBtn from "../SubmitBtn";
import TextArea from "../TextArea";
import img from "../../../assets/img/logo/vector.png";
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
    const name = e.target.name;
    const value = e.target.value;
    setFormData((currentFormData) => {
      console.log(formData)
      return {
        ...currentFormData,
        [name]: value,
      };
    });
    const sendToDb = (body) => {
    //i need the create function to send it to db
  // body to db 
      
    }
    // console.log(e.currentTarget)
    console.log(body) 
    console.log(e.currentTarget)
    // isFormValid(body)
    navigate("/train_reading_level/result");
  };


  // const isFormValid = (props) => {
  //   if (!props) {
  //       console.log("bonanza");
  //     }
  //     // else{
  //     //   return !isFormValid;
  //     // }
  // };


  const onChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    // setFormData((currentFormData) => {
    //   console.log(formData)
    //   return {
    //     ...currentFormData,
    //     [name]: value,
    //   };
    // });
    console.log("nope");
  };

  // const joshClick = (e) => {
  //   onSubmit(e)
  //   onChange(e)
  //   // if (isFormValid && sendToDb) {
  //   // }
  // }

  return (
    <div>
      <form noValidate onSubmit={onSubmit}>
        <div>
          <h4>Instructions</h4>
          <img src={img} alt="" />
          <p>
            Consectetur fames feugiat interdum morbi placerat in. Leo commodo
            maecenas donec cursus aenean scelerisque eu. Ridiculus amet habitant
            gravida lobortis suscipit enim, consectetur quisque.{" "}
          </p>
        </div>
        {/* <label>
        <span>Who is the main character?</span>
        <input
          name="questionOne"
          value={formData.questionOne || ''}
          onChange={onChange}
        />
      </label> */}
        <div></div>
        <label>
          <TextArea
            name="questionOne"
            value={formData.questionOne || ""}
            onChange={onChange}
          >
            Who is the main character"
          </TextArea>
        </label>
        <label>
          <TextArea
            name="questionTwo"
            value={formData.questionTwo || ""}
            onChange={onChange}
          >
            "What can you say about the theme of the story?"
          </TextArea>
        </label>
        <label>
          <TextArea
            name="questionThree"
            value={formData.questionThree || ""}
            onChange={onChange}
          >
            "Why do you think the author wrote this book?"
          </TextArea>
        </label>
        <label>
          <TextArea
            name="questionFour"
            value={formData.questionFour || ""}
            onChange={onChange}
          >
            "What do you think is going to happen?"
          </TextArea>
        </label>
        <span>
          <SubmitBtn />
          {/* yehoshua  did it*/}
          {/* <button  disabled={!isFormValid()}>Submit</button> */}
        </span>
        {/* {JSON.stringify(formData)} */}
      </form>
    </div>
  );
}
