import "./style.css";
import FormTitle from "../../../components/common/FormTitle";
import FooterGoogle from "../../../components/common/FooterGoogle";
import PasswordInput from "../../../components/common/PasswordInput/PasswordInput";
import SignButton1 from "../common.js/SignButton1";
import React from "react";
import Input from "../../../components/common/Input/Input";
import SubTitleLogin from "../../../components/common/SubTitleLogin";
import SubmitForm from "../../../components/common/forms/SubmitForm/SubmitForm";
import { useState } from "react";
export const SignUp = () => {
  const [formData, setFormData] = useState({});
  const onChange = (e) => {
    // setFormData(e.target.value);
    // const name = e.target.name;
    // const value = e.target.value;
    // setFormData((currentFormData) => {
    //   return {
    //     ...currentFormData,
    //     [name]: value,
    //   };
    // });
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = {
      username: data.get("email"),
      password: data.get("pass"),
    };
    const newBody = { ...body, password: undefined };
    console.log({ newBody });
    console.log(body);
  };

  return (
    <div className="sign-up">
      <FormTitle content="Create an Account" />
      <SubTitleLogin content="Already have an account?" />
      <SubmitForm onSubmit={onChange}>
        <Input txt="first name" type="text" name="firstName" />
        <Input txt="last name" type="text" name="lastName" />
        <Input txt="email" type="email" name="email" />
        <Input type="password" txt="password" name="pass" />
        <Input name="confirm-pass" txt="confirm password" type="password" />
        <SignButton1 title="Sign In" type="submit" />
      </SubmitForm>
      <FooterGoogle />
    </div>
  );
};

export default SignUp;
