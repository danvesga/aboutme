import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpCircleFill } from "react-bootstrap-icons";
import Pfp from "../assets/img/Pfp.jpg"

export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={Pfp} width={110} height={110} alt="Logo"/>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <a href="#home"><ArrowUpCircleFill size={40} /></a>
              <p>Created in React JS</p>
              <p>Copyright 2024. All Rights Reserved</p>
            </Col>
            
          </Row>
        </Container>
      </footer>
    )
  }