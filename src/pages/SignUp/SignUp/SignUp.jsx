import "./style.css";
<<<<<<< HEAD
import FormTitle from "../../../components/common/FormTitle";
import FooterGoogle from "../../../components/common/FooterGoogle";
import PasswordInput from "../../../components/common/PasswordInput/PasswordInput";
import SignButton1 from "../common.js/SignButton1";
import React from "react";
import Input from "../../../components/Common/Input/Input";
import SubTitleLogin from "../../../components/common/SubTitleLogin";
import SubmitForm from "../../../components/common/forms/SubmitForm/SubmitForm";
=======
import FormTitle from "../../../components/Common/FormTitle";
import FooterGoogle from "../../../components/Common/FooterGoogle";
import PasswordInput from "../../../components/Common/PasswordInput/PasswordInput";
import SignButton from "../../../components/Common/SignButton/SignButton";
import React from "react";
import Input from "../../../components/Common/Input/Input";
import SubTitleLogin from "../../../components/Common/SubTitleLogin";
import SubmitForm from "../../../components/Common/forms/SubmitForm/SubmitForm";
>>>>>>> 949881f37a7f68edf03be1305f99e17e5fa41f33
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 949881f37a7f68edf03be1305f99e17e5fa41f33
    </div>
  );
};

export default SignUp;
