import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>About</h2>
                            <h3>Education</h3>
                            <p>From Tenafly High School to Northeastern University, 
                                the learning never stops for me inside and out of class</p>
                            <Row>
                                <Col md={6}>
                                    <h3>Courses</h3>
                                    <ul>
                                        <p>Build an AI copilot with vCore-based Azure Cosmos DB for MongoDB and Azure OpenAI, 
                                            Object Oriented Design, UX Design, Cybersecurity, Data Structures</p>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <h3>Skills</h3>
                                    <ul>
                                        <p>Java, Javascript, React JS, Python, HTML, CSS,  Racket, Node, Linux, Scripting, MongoDB
Adobe Photoshop, Illustrator, InDesign, XD, Premiere Pro, After Effects, Microsoft Excel, Figma
                                        </p>

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