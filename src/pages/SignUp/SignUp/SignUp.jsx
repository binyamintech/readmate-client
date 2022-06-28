import "./style.css";
import FormTitle from "../../../components/Common/FormTitle";
import FooterGoogle from "../../../components/Common/FooterGoogle";
import PasswordInput from "../../../components/Common/PasswordInput/PasswordInput";
import SignButton from "../../../components/Common/SignButton/SignButton";
import React from "react";
import Input from "../../../components/Common/Input/Input";
import SubTitleLogin from "../../../components/Common/SubTitleLogin";
import SubmitForm from "../../../components/Common/forms/SubmitForm/SubmitForm";
import { useState } from "react";
export const SignUp = () => {
  const [formData, setFormData] = useState({});
  return (
    <div className="sign-up">
          <FormTitle content="Create an Acount"/>
          <SubTitleLogin content="Already have an account?"/>
      <SubmitForm
        onSubmit={() => {
          setFormData();
        }}
      >
        <Input content="First Name" type="text" name="firstName" />
        <Input content="Last Name" type="text" name="lastName" />
        <Input content="Email" type="email" name="email" />
        <Input content="Password"  type="password" name="password" />
        <Input content="Confirm Password" name="confirm-password" type="password" />
        <SignButton content="Sign Up" type="submit" />
      </SubmitForm>
        <FooterGoogle />
    </div>
  );
};

export default SignUp;
