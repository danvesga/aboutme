import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard, ProjectCard2 } from "./ProjectCard";
import projImg1 from "../assets/img/Recording 2024-08-08 at 23.39.42.gif";
import projImg2 from "../assets/img/Recording 2024-08-08 at 23.47.18.gif";
import projImg3 from "../assets/img/Recording 2024-08-08 at 23.05.56.gif";
import film from "../assets/img/Screenagers.gif";
import mbta from "../assets/img/MBTA.gif";
import diary from "../assets/img/Diary.gif";
import radien from "../assets/img/radien.gif";
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
    const films = [
        {
            title: "Screenagers",
            description: "Short Film",
            imgUrl: film,
        }
    ];
    const prototypes = [
        {
            title: "Radien",
            description: "Ticketing system (Team project)",
            imgUrl: radien,
            link: "https://www.figma.com/design/6OkQ8JdI5pncQ84Mfa81vx/Radien-P3?node-id=8-9&t=ozx1o9Gs8hhRwXVl-0"
        },
        {
            title: "MBTA App",
            description: "Figma Redesign",
            imgUrl: mbta,
            link: "https://www.figma.com/design/9tMt85XxEmdVAwrAOTFUuU/MBTA-project2?node-id=0-1&t=qSGogDiTCWCjLcaz-1"
        },
        {
            title: "Dream Diary",
            description: "Sleep Wellness Prototype (Team project)",
            imgUrl: diary,
            link: "https://www.figma.com/design/YG6QS7CL4va2JmqUAag7F3/all-pages?node-id=0-1&t=X2AagWCXZxBa7qlB-1"
        }
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
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
                                <   Row>
                                        {
                                            prototypes.map((prot, index) => {
                                                return (
                                                    <ProjectCard2 
                                                        key={index}
                                                        title={prot.title} 
                                                        description={prot.description} 
                                                        imgUrl={prot.imgUrl}
                                                        link={prot.link}
                                                    />
                                                );
                                            })
                                        }
                                    </Row>
                                    <Row>
                                        <p>Click a prototype to access its figma file</p>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
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
                                <Tab.Pane eventKey="third">
                                    <Row className="justify-content-center">
                                        {
                                            films.map((film, index) => {
                                                return (
                                                    <Col className="d-flex justify-content-center align-items-center">
                                                        <ProjectCard 
                                                            key={index}
                                                            title={film.title} 
                                                            description={film.description} 
                                                            imgUrl={film.imgUrl}
                                                        />
                                                    </Col>
                                                );
                                            })
                                        }
                                    </Row>
                                    <Row>
                                        <p>During the final months of 2023, I worked on a project to characterize my generation 
                                            and the impact of social media on our lives. The result is the Short Film I wrote, 
                                            directed, and edited called "Screenagers" about two clones fighting for recognition in their adolescent lives </p>
                                    </Row>
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