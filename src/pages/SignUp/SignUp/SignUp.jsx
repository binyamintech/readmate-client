import "./style.css";
import FormTitle from "../../../components/common/FormTitle";
import FooterGoogle from "../../../components/common/FooterGoogle";
import PasswordInput from "../../../components/common/PasswordInput/PasswordInput";
import SignButton from "../common.js/SignButton";
import React from "react";
import Input from "../common.js/Input";
import SubTitleLogin from "../../../components/common/SubTitleLogin";
// import InputLogin from "../../../components/common/InputLogin";
export const SignUp = () => {
  return (
    <div className="sign-up">
      <FormTitle />
      <SubTitleLogin />
      <Input txt="last name" />
      <PasswordInput name="password" />
      <PasswordInput name="confirm password" />
      <SignButton />
      <FooterGoogle />
    </div>
  );
};

export default SignUp;
