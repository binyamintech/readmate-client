import "./style.css";
import { BiCamera } from "react-icons/bi";
import userImg from "../../assets/img/user image/userImg.jpg";
import CancelBtn from "../../components/common/cancelBtn";
import SubmitBtn from "../../components/common/SubmitBtn";
import Input from "../../components/common/Input";
import ChangePass from "../../components/common/ChangePassBtn";
import SubmitForm from "../../components/common/forms";
import { dataContext } from "../../context/context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  let localDataContext = useContext(dataContext);
  let { firstName, lastName, email, classId } = localDataContext.userDetails;

  const [updatedUser, setUpdatedUser] = useState({
    firstName,
    lastName,
    email,
    classId,
  });

  const navigate = useNavigate();
  let update = (field, value) => {
    setUpdatedUser({ ...updatedUser, [field]: value });
  };
 const [validText, setValidText] = useState(true) 
 const [validText1, setValidText1] = useState(true) 
 const [validText2, setValidText2] = useState(true) 
 const [validText3, setValidText3] = useState(true) 
  function validate(field, value) {
    if (updatedUser[field].length < 2) {
        setValidText(false)
    }else{
        setValidText(true)
    }
  }
  function validate1(field, value) {
    if (updatedUser[field].length < 2) {
        setValidText1(false)
    }else{
        setValidText1(true)
    }
  }
  function validate2(field, value) {
    if (updatedUser[field].length < 2) {
        setValidText2(false)
    }else{
        setValidText2(true)
    }
  }
  function validate3(field, value) {
    if (updatedUser[field].length < 2) {
        setValidText3(false)
    }else{
        setValidText3(true)
    }
  }
  
  function submitChanges() {
    navigate("/dashboard");
  }

  return (
    <>
      <div className="img_camera">
        <img src={userImg} className="settingUserImage" />
        <BiCamera className="cameraIcon" />
      </div>
      <div className="userPic">
        <SubmitForm onSubmit={submitChanges}>
          <Input
            value={updatedUser.firstName}
            type="text"
            onInput={(e) => {
              update(e.target.name, e.target.value);
              validate(e.target.name, e.target.value);
            }}
            legend="First name"
            content="First name"
            name="firstName"
            valid={validText}
            />
          {!validText && <span>try again</span>}
          <Input
            value={updatedUser.lastName}
            type="text"
            onInput={(e) => {
              update(e.target.name, e.target.value);
              validate1(e.target.name, e.target.value);
            }}
            legend="Last name"
            content="Last name"
            name="lastName"
            valid={validText1}
            />
            {!validText1 && <span>try again</span>}
          <Input
            value={updatedUser.email}
            type="email"
            onInput={(e) => {
              update(e.target.name, e.target.value);
              validate2(e.target.name, e.target.value);
            }}
            legend="Email"
            content="Email"
            name="email"
            valid={validText2}
            />
            {!validText2 && <span>try again</span>}
          <Input
            value={updatedUser.classId}
            type="text"
            onInput={(e) => {
              update(e.target.name, e.target.value);
              validate3(e.target.name, e.target.value);
            }}
            legend="Classsroom ID"
            content="Classsroom ID"
            name="classId"
            valid={validText3}
            />
            {!validText3 && <span>try again</span>}
          <ChangePass />
          <div className="btnContaine">
            <SubmitBtn name="Submit" type="submit" path="/" />
            <CancelBtn />
          </div>
        </SubmitForm>
      </div>
    </>
  );
}
