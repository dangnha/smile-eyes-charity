import "./Contact.css"
import ContactForm from "../Components/Item/ContactForm"
const Contact = () => {
    return (
      <div className="contact-container">
        <div className="contact-form">
          <div className="contact-fill-form"><ContactForm/></div>
        </div>
        <div className="contact-info"></div>
        <div className="contact-banner"></div>
      </div>
    );
  };
  
  export default Contact;