import "./style.css";
import { BiCamera } from "react-icons/bi";
import userImg from "../../assets/img/user image/userImg.jpg";
import CancelBtn from "../../components/common/cancelBtn";
import SubmitBtn from "../../components/common/SubmitBtn";
import Input from "../../components/common/Input";
import ChangePass from "../../components/common/ChangePass";

export default function Settings() {
  return (
    <div className="userPic">
      <div className="img_camera">
      <img src={userImg} className="settingUserImage" />
      <BiCamera className="cameraIcon"/>
      </div>
      {/* //todo */}
      <Input type="text" legend="First name" content="First name" name="first name"/>
      <Input type="text" legend="Last name" content="Last name" name="last name"/>
      <Input type="email" legend="Email" content="Email" name="email"/>
      <ChangePass/>
      <div className="btnContaine">
        <SubmitBtn name="Submit" type={"button"} path="/"/>
        <CancelBtn />
      </div>
    </div>
  );
}

