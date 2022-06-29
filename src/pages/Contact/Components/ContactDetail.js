import Contact from "../index"
import "./ContactPhone.css"

// Creator : TeamF - asael


function ContactDetail(props){

    return(
        <div className="contact-phone" onClick={()=>{props.func()}}>
            <div className="icon">{props.icon}</div>
            <div className="name">{props.name}</div>
            <div className="detail">{props.detail}</div>

        </div>
    )
}

export default ContactDetail