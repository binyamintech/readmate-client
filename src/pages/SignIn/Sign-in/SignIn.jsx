import "./style.css";
import SignButton from "../../../components/Common/SignButton/SignButton";
import Input from "../../../components/Common/Input/Input";
import FooterGoogle from "../../../components/Common/FooterGoogle";
import PasswordInput from "../../../components/Common/PasswordInput/PasswordInput";
import FormTitle from "../../../components/Common/FormTitle";
export function SignIn() {
  return (
    <div className="sign-in">
      <form>
       <LoginHeader/>
        <LoginContent />
        <LoginFooter/>
        
      </form>
    </div>
  );
}

function LoginHeader() {
  return (
    <header>
       
        <FormTitle content='Welcome Back!'/>
        
    </header>
  );
}

function LoginContent() {
  return (
    <main>
      <Input txt="Email" />
      <PasswordInput />
    </main>
  );
}

function LoginFooter(){
 return <footer className="signIn-footer">
    <SignButton />
    <FooterGoogle />
  </footer>
}
