import "./style.css";
import FormTitle from "../../../components/common/FormTitle";
import FooterGoogle from "../../../components/common/FooterGoogle";
import PasswordInput from "../../../components/common/PasswordInput/PasswordInput";
import SignButton from "../common.js/SignButton";
import React from "react";
import Input from "../common.js/Input";
import SubTitleLogin from "../../../components/common/SubTitleLogin";
import SubmitForm from "../../../components/common/forms/SubmitForm/SubmitForm";
import { useState } from "react";
export const SignUp = () => {
  const [formData, setFormData] = useState({});
  return (
    <div className="sign-up">
      <SubmitForm
        onSubmit={() => {
          setFormData();
        }}
      >
        <FormTitle />
        <SubTitleLogin />
        <Input txt="first name" type="text" name="firstName" />
        <Input txt="last name" type="text" name="lastName" />
        <Input txt="email" type="email" name="email" />
        <Input type="password" name="password" />
        <Input name="confirm-password" type="password" />
        <SignButton title="Sign In" type="submit" />
        <FooterGoogle />
      </SubmitForm>
    </div>
  );
};

export default SignUp;
