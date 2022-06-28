import "./style.css";
import SignButton from "../../../components/common/SignButton/SignButton";
import Input from "../../../components/common/Input/Input";
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
      <Input type="text" txt="Email" />
      <Input type="password" txt="password" />
    </main>
  );
}

function LoginFooter() {
  return (
    <footer className="signInFooter">
      <SignButton />
    </footer>
  );
}
