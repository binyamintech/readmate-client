import "./style.css";
import SignButton from "../../../components/Common/SignButton/SignButton";
import Input from "../../../components/Common/Input/Input";
<<<<<<< HEAD
import FooterGoogle from "../../../components/common/FooterGoogle";
import PasswordInput from "../../../components/common/PasswordInput/PasswordInput";
import FormTitle from "../../../components/common/FormTitle";
import SubTitleLogin from "../../../components/common/SubTitleLogin";

export function SignIn() {
  return (
    <div className="sign-in">
      <LoginHeader content="Wellcome Back! " />
      <SubTitleLogin content="Don't have an account?" />
      <form>
        <LoginContent />
        <LoginFooter />
      </form>
=======
import FooterGoogle from "../../../components/Common/FooterGoogle";
import FormTitle from "../../../components/Common/FormTitle";
import SubTitleLogin from "../../../components/Common/SubTitleLogin";
import SubmitForm from "../../../components/Common/forms/SubmitForm/SubmitForm";
export function SignIn() {
  return (
    <div className="sign-in">
        <LoginHeader />
        <SubTitleLogin content="Don't have an account?"/>
      <SubmitForm>
        <LoginContent />
        <LoginFooter />
      </SubmitForm>
>>>>>>> 949881f37a7f68edf03be1305f99e17e5fa41f33
      <FooterGoogle />
    </div>
  );
}

function LoginHeader() {
  return (
    <header>
      <FormTitle content="Welcome Back!" />
    </header>
  );
}

function LoginContent() {
  return (
    <main>
<<<<<<< HEAD
      <Input type="text" txt="Email" />
      <Input type="password" txt="password" />
=======
      <Input type="text" content="Email" />
      <Input type="password" content="password" />
>>>>>>> 949881f37a7f68edf03be1305f99e17e5fa41f33
    </main>
  );
}

function LoginFooter() {
  return (
    <footer className="signInFooter">
<<<<<<< HEAD
      <SignButton />
=======
      <SignButton content="Sign In"/>
>>>>>>> 949881f37a7f68edf03be1305f99e17e5fa41f33
    </footer>
  );
}
