import "./style.css";
import { BiCamera } from "react-icons/bi";
import userImg from "../../assets/img/user image/userImg.jpg";
import CancelBtn from "../../components/common/cancelBtn";
import SubmitBtn from "../../components/common/SubmitBtn";
import Input from "../../components/common/Input";
import ChangePass from "../../components/common/ChangePass";
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

  const navigate= useNavigate()

  let update = (field, value) => {
    setUpdatedUser({ ...updatedUser, [field]: value });
  };
  function bbb() {
    navigate("/")
  }

  return (
    <>
      <div className="img_camera">
        <img src={userImg} className="settingUserImage" />
        <BiCamera className="cameraIcon" />
      </div>
      <div className="userPic">
        <SubmitForm onSubmit={bbb}>
          <Input
            value={updatedUser.firstName}
            type="text"
            onInput={(e) => {
              update(e.target.name, e.target.value);
            }}
            legend="First name"
            content="First name"
            name="firstName"
            valid={false}
            />
          <Input
            value={updatedUser.lastName}
            type="text"
            onInput={(e) => {
              update(e.target.name, e.target.value);
            }}
            legend="Last name"
            content="Last name"
            name="lastName"
            valid={true}
            />
          <Input
            value={updatedUser.email}
            type="email"
            onInput={(e) => {
              update(e.target.name, e.target.value);
            }}
            legend="Email"
            content="Email"
            name="email"
            />
          <Input
            value={updatedUser.classId}
            type="text"
            onInput={(e) => {
              update(e.target.name, e.target.value);
            }}
            legend="Classsroom ID"
            content="Classsroom ID"
            name="classId"
          />
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
