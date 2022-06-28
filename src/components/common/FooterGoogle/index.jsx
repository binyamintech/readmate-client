import "./style.css";
import { AiOutlineGoogle } from "react-icons/ai";

// Creator : Team D - Dov
function FooterGoogle() {
  return (
    <>
      <div className="footer-google">
        <button className="google-button">
          {" "}
          <AiOutlineGoogle className="google-icon" />
          <p className="p-sign">Sign Up With Google</p>
        </button>
        <div className="terms">
          By Click signup you agree to our Terms of service and privacy policy
        </div>
      </div>
    </>
  );
}

export default FooterGoogle;
