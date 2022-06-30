// import { NavHead } from "../../components/common/NavHead"
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import ContactDetail from "./Components/ContactDetail";

// Creator : TeamF - asael
function phoneCall() {
  window.location.href = "Tel:0525666820";
}
function sentMail() {
  window.location.href = "mailto:asael@cod.org.il";
}
function goToWebsit() {
  window.location.href = "https://ksp.co.il/web/";
}

function Contact() {
  return (
    <div>
      {/* <NavHead /> */}
      <ContactDetail
        icon={<BsTelephone />}
        name="Phone"
        detail="0525666820"
        func={phoneCall}
      />
      <ContactDetail
        icon={<FiMail />}
        name="Email Us"
        detail="king@gmail.com"
        func={sentMail}
      />
      <ContactDetail
        icon={<IoOpenOutline />}
        name="Website"
        detail="www.kikar.co.il"
        func={goToWebsit}
      />
    </div>
  );
}

export default Contact;
