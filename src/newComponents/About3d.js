import { Container, Row, Col } from "react-bootstrap";
import school from "../assets/img/thsneu.png"

export const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx2">
                            <h2>About</h2>
                            <p>As a combined Computer Science and Design student, 
                            I operate at the intersection of logical solutions and engaging visual mediums.
                            I am an imaginative and detail-oriented worker, with a passion 
                            for the visual arts and storytelling. Through software development, 
                            I want to influence a world where all our added technology and 
                            shortcuts bolster the active and social parts of our lives.</p>
                            <h3>Education</h3>
                            <img src={school} className="responsive-school-img" alt="THS to NEU"/>
                            <p>From Tenafly High School to Northeastern University, 
                                the learning never stops for me inside and out of class</p>
                            <Row>
                                <Col md={6}>
                                    <h3>Courses</h3>
                                    <ul>
                                        <li>Artificial Intelligence</li>
                                        <li>Algorithms & Data</li>
                                        <li>Azure OpenAI</li>
                                        <li>Data Structures</li>
                                        <li>Data Science</li>
                                        <li>Cybersecurity</li>
                                        <li>Object Oriented Design</li>
                                        <li>UX Design</li>
                                        <li>AP Physics</li>
                                        <li>AP Calculus</li>
                                        
                                        
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <h3>Skills</h3>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>TypeScript</li>
                                        <li>Java</li>
                                        <li>React JS</li>
                                        <li>Python</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Next JS</li>
                                        <li>Three JS</li>
                                        <li>GraphQL</li>
                                        <li>Racket</li>
                                        <li>Node</li>
                                        <li>Linux</li>
                                        <li>Scripting</li>
                                        <li>Figma</li>
                                        <li>Adobe Photoshop</li>
                                        <li>Illustrator</li> 
                                        <li>InDesign</li> 
                                        <li>XD</li> 
                                        <li>Premiere Pro</li>
                                        <li>After Effects</li>
                                        <li>Microsoft Excel</li>
                                        
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