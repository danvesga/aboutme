import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx2">
                            <h2>About</h2>
                            <h3>Education</h3>
                            <p>From Tenafly High School to Northeastern University, 
                                the learning never stops for me inside and out of class</p>
                            <Row>
                                <Col md={6}>
                                    <h3>Courses</h3>
                                    <ul>
                                        <li>Build an AI copilot with Azure OpenAI</li>
                                        <li>Object Oriented Design</li>
                                        <li>UX Design</li>
                                        <li>Cybersecurity</li>
                                        <li>Data Structures</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <h3>Skills</h3>
                                    <ul>
                                        <li>Java</li>
                                        <li>Javascript</li>
                                        <li>React JS</li>
                                        <li>Python</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Racket</li>
                                        <li>Node</li>
                                        <li>Linux</li>
                                        <li>Scripting</li>
                                        <li>MongoDB</li>
                                        <li>Adobe Photoshop</li>
                                        <li>Illustrator</li> 
                                        <li>InDesign</li> 
                                        <li>XD</li> 
                                        <li>Premiere Pro</li>
                                        <li>After Effects</li>
                                        <li>Microsoft Excel</li>
                                        <li>Figma</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}