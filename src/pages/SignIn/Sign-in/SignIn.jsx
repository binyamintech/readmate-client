import "./style.css";
import SignButton from "../../../components/common/SignButton/SignButton";
import Input from "../../../components/common/Input/Input";
import FooterGoogle from "../../../components/common/FooterGoogle";
import FormTitle from "../../../components/common/FormTitle";
import SubTitleLogin from "../../../components/common/SubTitleLogin";
import SubmitForm from "../../../components/common/forms/SubmitForm/SubmitForm";
export function SignIn() {
  return (
    <div className="sign-in">
      <LoginHeader />
      <SubTitleLogin content="Don't have an account?" sign="up" />
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
      <a className="forget-pass" href="www.google.com">
        forget password?
      </a>
    </main>
  );
}

function LoginFooter() {
  return (
    <footer className="signInFooter">
      <SignButton content="Sign In" />
    </footer>
  );
}
