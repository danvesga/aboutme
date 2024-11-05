import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/IMG_9940.JPG";
import resume from "../assets/img/Daniel Vesga Resume November 2024 - .pdf";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    // const formInitialDetails = {
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   phone: '',
    //   message: ''
    // }
    // const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText1, setButtonText] = useState('Copy Down my Email');
    const [buttonText2] = useState('LinkedIn');
    const [buttonText3] = useState('Instagram');
    const [buttonText4] = useState('Take a look at my Resume');
    const [status, setStatus] = useState({});
  
    // const onFormUpdate = (category, value) => {
    //     setFormDetails({
    //       ...formDetails,
    //       [category]: value
    //     })
    // }

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
    


  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   setButtonText("Sending...");
    //   let response = await fetch("http://localhost:5000/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json;charset=utf-8",
    //     },
    //     body: JSON.stringify(formDetails),
    //   });
    //   setButtonText("Send");
    //   let result = await response.json();
    //   setFormDetails(formInitialDetails);
    //   if (result.code == 200) {
    //     setStatus({ succes: true, message: 'Message sent successfully'});
    //   } else {
    //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    //   }
    // };
  
    return (
      <section className="contact" id="connect">
        <Container>
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
                  <h2>Connect With Me</h2>
                  <p>vesga.d@northeastern.edu</p>
                  <form onSubmit={copyEmail}>
                    <Row>
                      <Col size={12} className="px-1">
                        
                        <button type="button" onClick={copyEmail}><span>{buttonText1}</span></button>
                      </Col>
                    </Row>
                    <Row>
                      <Col size={12} className="px-1">
                      <button type="button" onClick={() => window.open("https://www.linkedin.com/in/danielvesga/", "_blank")}>
                        <span>{buttonText2}</span></button>
                      </Col>
                    </Row>
                    <Row>
                      <Col size={12} className="px-1">
                      <button type="button" onClick={() => window.open("https://www.instagram.com/danvesga/", "_blank")}>
                        <span>{buttonText3}</span></button>
                      </Col>
                    </Row>
                    <Row>
                      <Col size={12} className="px-1">
                      <button type="button" onClick={() => window.open(resume, "_blank")}>
                        <span>{buttonText4}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
  // <Col size={12} sm={6} className="px-1">
  //                       <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
  //                     </Col>
  //                     <Col size={12} sm={6} className="px-1">
  //                       <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
  //                     </Col>
  //                     <Col size={12} sm={6} className="px-1">
  //                       <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
  //                     </Col>
  //                     <Col size={12} sm={6} className="px-1">
  //                       <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
  //                     </Col>