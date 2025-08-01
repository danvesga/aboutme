import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpCircleFill } from "react-bootstrap-icons";
import Sunset from "../assets/img/Sunset.png"

export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={Sunset} width={130} height={130} alt="Logo"/>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <a href="#home"><ArrowUpCircleFill size={40} /></a>
              <h6>Thanks for visiting! P.S. 'X' unlocks the chest...</h6>
              <p>Created in React Fiber. Corals from Kanna-Nakajima. </p>
              <p>Copyright 2025. All Rights Reserved</p>
            </Col>
            
          </Row>
        </Container>
      </footer>
    )
  }