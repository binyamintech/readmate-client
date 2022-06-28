import "./style.css";
import { BiCamera } from "react-icons/bi";
import userImg from "../../assets/img/user image/userImg.jpg";
import CancelBtn from "../../components/common/cancelBtn";
import SubmitBtn from "../../components/common/SubmitBtn";
import Input from "../../components/common/Input";

export default function Settings() {
  return (
    <div style={{ height: window.innerHeight - 70.4 }} className="userPic">
      <img src={userImg.jpg} />
      <BiCamera />
      <Input type="text"  content="first name" name="first name"/>
      <Input type="text"  content="last name" name="last name"/>
      <Input type="email"  content="email" name="email"/>
      <div className="btnContaine">
        <SubmitBtn name="Submit" type={"button"} click={(e) =>(e)} />
        <CancelBtn />
      </div>
    </div>
  );
}

