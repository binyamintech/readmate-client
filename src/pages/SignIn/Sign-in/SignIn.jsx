import "./style.css";
import SignButton from "../../../components/Common/SignButton/SignButton";
import Input from "../../../components/Common/Input/Input";
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
      <Input type="text" content="Email" />
      <Input type="password" content="password" />
    </main>
  );
}

function LoginFooter() {
  return (
    <footer className="signInFooter">
      <SignButton content="Sign In"/>
    </footer>
  );
}
