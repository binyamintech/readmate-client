import "./ContactPhone.css"
import { BsTelephone } from "react-icons/bs"

// Creator : TeamF - asael


function ContactPhone() {

    return (
        <div className="contact-phone">
            <div className="ellipse20" >
                <div className="vector">
                    <BsTelephone />
                </div>
            </div>
                <div className="Phone"> Phone</div>
                <div className="Num">05245666820</div>
        </div>
    )
}

export default ContactPhone