import "./style.css";
import FormTitle from "../../../components/common/FormTitle";
import FooterGoogle from "../../../components/common/FooterGoogle";
// import PasswordInput from "../../../components/Common/PasswordInput/PasswordInput";
import SignButton from "../../../components/Common/SignButton/SignButton";
import React from "react";
import Input from "../../../components/Common/Input/Input";
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
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    };
    const newBody = { ...body, password: undefined };
    console.log({ newBody });
    console.log(body);
  };

  return (
    <div className="sign-up">
      <FormTitle content="Create an Acount" />
      <SubTitleLogin content="Already have an account?" sign="In" />
      <SubmitForm onSubmit={onChange}>
        <Input content="First Name" type="text" name="firstName" />
        <Input content="Last Name" type="text" name="lastName" />
        <Input content="Email" type="email" name="email" />
        <Input content="Password" type="password" name="password" />
        <Input
          content="Confirm Password"
          name="confirm-password"
          type="password"
        />
        <SignButton content="Sign Up" type="submit" />
      </SubmitForm>
      <FooterGoogle />
    </div>
  );
};

export default SignUp;
