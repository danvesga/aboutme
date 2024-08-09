import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Recording 2024-08-08 at 23.39.42.gif";
import projImg2 from "../assets/img/Recording 2024-08-08 at 23.47.18.gif";
import projImg3 from "../assets/img/Recording 2024-08-08 at 23.05.56.gif";
//import 'animate.css';


export const Projects = () => {

    const projects = [
        {
            title: "LightEmUp",
            description: "Java Game",
            imgUrl: projImg1,
        },
        {
            title: "Minesweeper",
            description: "Java Game",
            imgUrl: projImg2,
        },
        {
            title: "Z Type",
            description: "Java Game",
            imgUrl: projImg3,
        }
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p> Projects go here</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">UI Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">App Games</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Film</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        title={project.title} 
                                                        description={project.description} 
                                                        imgUrl={project.imgUrl} 
                                                    />
                                                );
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {/* You can add ProjectCards or other content here for the second tab */}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    {/* You can add content for the third tab here */}
                                    Lorem Ipsum
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={""} alt="Background image" />
        </section>
    );
};