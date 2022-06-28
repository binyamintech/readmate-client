import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import SubmitBtn from "../SubmitBtn";
import TextArea from "../TextArea/Index";
import  img  from "../../../assets/img/logo/vector.png"
//group c- yehoshua
export default function Questions(){
    
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
     navigate("intructions");
    console.log(formData);
  };


  const isFormValid = () => {
    const { questionOne, questionTwo, questionThree, questionFour} = formData;
    // return questionOne && questionTwo && questionThree && questionFour;
    if (questionOne==="" ||!questionTwo ||!questionThree||!questionFour){
      console.log(formData);
    }
    
  };
  const sendToDb=()=>{
    if (isFormValid===true){

    }
  }

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [name]: value,
      };
    });
  };

    return(
    <div>
    <form noValidate onSubmit={onSubmit}>
<div><h4>Instructions</h4>
<img src={img} alt=""/>
      <p> 
Consectetur fames feugiat interdum morbi placerat in.
 Leo commodo maecenas donec cursus aenean scelerisque eu.
  Ridiculus amet habitant gravida lobortis suscipit enim, 
  consectetur quisque. </p>
</div>
      <div>
      </div>
      <label>
        <TextArea name="questionOne"
          value={formData.questionOne || ''}
          onChange={onChange}>Who is the main character"</TextArea>
      </label>
      <label>
        <TextArea    name="questionTwo"
          value={formData.questionTwo || ''} onChange={onChange} >"What can you say about the theme of the story?"</TextArea>
      </label>
      <label>
        <TextArea   name="questionThree"
          value={formData.questionThree || ''}
          onChange={onChange}>"Why do you think the author wrote this book?"</TextArea>
      </label>
      <label>
        <TextArea   name="questionFour"
          value={formData.questionFour || ''}
          onChange={onChange} >"What do you think is going to happen?"</TextArea>
     </label>
      <span>
      <SubmitBtn disabled={isFormValid()} sendOffInfo={()=>sendToDb()}>done</SubmitBtn>{/* yehoshua  did it
      {/* {console.log(formData)}  */}
        {/* <button  disabled={!isFormValid()}>Submit</button> */}
      </span>
      {/* {JSON.stringify(formData)} */}
    </form>
    </div>
        )
    }
