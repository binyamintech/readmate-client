import { NavHead } from "../../components/common/NavHead"
import ContactEmail from "./Compomemts/ContactEmail"
import ContactPhone from "./Compomemts/ContactPhone"
import ContactWeb from "./Compomemts/ContactWeb"

// Creator : TeamF - asael


function Contact(){

    return(
        <div>
            Contact
            {/* <NavHead /> */}
            <ContactPhone />
            <ContactEmail />
            <ContactWeb />
        </div>
    )
}

export default Contact
