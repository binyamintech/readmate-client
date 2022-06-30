import Input from "../../components/common/Input";
import SubmitBtn from "../../components/common/SubmitBtn";
import React, { useState } from "react";
import "./style.css";

export default function ChangePassword() {
  const [erroroldPassword, setErrorOldPassword] = useState(false);
  const [errorNewPassword, setErrorNewPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function validateErrorOldPassword(e) {
    setOldPassword(e.target.value);
    if (oldPassword.length < 5) {
      setErrorOldPassword(true);
    } else setErrorOldPassword(false);
  }
  function validateErrorNewPassword(e) {
    setNewPassword(e.target.value);
    if (
      newPassword === oldPassword
      //  || (newPassword.length < 5)
    ) {
      setErrorNewPassword(true);
    } else setErrorNewPassword(false);
  }
  function validateErrorConfirmPassword(e) {
    setConfirmPassword(e.target.value);

    if (confirmPassword !== newPassword) {
      setErrorConfirmPassword(true);
    } else {
      setErrorConfirmPassword(false);
    }
    return errorConfirmPassword;
  }

  // פונקציה להעברת סיסמא ל DB
  // const changePassword = async () => {
  //     const changePass = {
  //         newPass: "",
  //         oldPass: ""
  //     };
  //     return changePass;
  // }
  return (
    <div className="pageContent">
      <form>
        <Input
          type="text"
          content="Enter old password"
          legend="Old Password"
          name="OldPassword"
          onInput={(e) => validateErrorOldPassword(e)}
        />
        {erroroldPassword && (
          <span> Password should be at least 5 charecters</span>
        )}
        <Input
          type="text"
          content="Enter new password"
          legend="New Password"
          name="NewPassword"
          onInput={(e) => validateErrorNewPassword(e)}
        />
        {errorNewPassword && (
          <span> New password should be different from the old one</span>
        )}
        <Input
          type="text"
          content="Enter confirm password"
          legend="Confirm Password"
          name="Confirm Password"
          onInput={(e) => validateErrorConfirmPassword(e)}
        />
        {errorConfirmPassword && (
          <span> confirmed password is not matched</span>
        )}

        <div className="posSub">
          <SubmitBtn
            name="Submit"
            path="login"
            type="button"
            value="Click to Open Popup"
            onSubmit={(e) => validateErrorConfirmPassword(e)}
          />
          {/* {errorConfirmPassword && <span> One of the fields is not valid</span>} */}
        </div>

        {/* <div className="cpSubmitContainer">
                <div className="cpSubmit">Submit</div>
                
            </div> */}
      </form>
    </div>
  );
}
