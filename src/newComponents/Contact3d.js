import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/IMG_9940.JPG";
import resume from "../assets/img/Resume August 2025.pdf";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

export const Contact = () => {
    const formInitialDetails = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [buttonText2] = useState('Take a Look At My Resume');
    const [status, setStatus] = useState({});
  
    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }

    const copyEmail = () => {
      const email = "vesga.d@northeastern.edu";
      navigator.clipboard.writeText(email)
        .then(() => {
          setButtonText("Email copied!");
        })
        .catch(() => {
          setButtonText("Failed to copy");
        });
    };
    


  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setButtonText("Sending...");
      
      try {
        // Send email using EmailJS instead of fetch
        let response = await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,    
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,   // Replace with your template ID
          {
            firstName: formDetails.firstName,
            lastName: formDetails.lastName,
            email: formDetails.email,
            phone: formDetails.phone,
            message: formDetails.message,
            reply_to: formDetails.email
          }
        );
        
        setButtonText("Send");
        
        // Create result object matching your server response format
        let result = { code: 200, status: "Message Sent" };
        
        setFormDetails(formInitialDetails);
        
        if (result.code == 200) {
          setStatus({ success: true, message: 'Message sent successfully!'});
        } else {
          setStatus({ success: false, message: 'Something went wrong, please try again later.'});
        }
        
      } catch (error) {
        setButtonText("Send");
        console.log('EmailJS Error:', error);
        
        // Handle error case
        setStatus({ success: false, message: 'Something went wrong, please try again later.'});
      }
    };
  
    return (
      <section className="contact" id="connect">
        <Container>
          <h2>Get In Touch</h2>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                }
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <Row>
                    <Col size={12} className="px-1">
                    <button type="button" onClick={() => window.open(resume, "_blank")}>
                      <span>{buttonText2}</span></button>
                    </Col>
                  </Row>
                  <h5>Leave a Message:</h5>
                  <form onSubmit={handleSubmit}>
                    <Row className="px-3">
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                      </Col> 
                    </Row>
                    <Row className="px-3">
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                      </Col>
                    </Row>
                    <Col size={13} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                  </form>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
                      