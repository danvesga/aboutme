import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import { useState } from "react";
import projImg1 from "../assets/img/Recording 2024-08-08 at 23.39.42.gif";
import projImg2 from "../assets/img/Recording 2024-08-08 at 23.47.18.gif";
import projImg3 from "../assets/img/Recording 2024-08-08 at 23.05.56.gif";
import projImg4 from "../assets/img/Recording 2024-11-05 at 00.34.14.gif";
import projImg5 from "../assets/img/Recording 2024-11-05 at 00.52.36.gif";
import projImg6 from "../assets/img/heatmap_10000.png";
import film from "../assets/img/Screenagers.gif";
import mbta from "../assets/img/MBTA.gif";
import diary from "../assets/img/Diary.gif";
import radien from "../assets/img/radien.gif";
import platnm from "../assets/img/Recording 2024-11-05 at 22.43.02.gif";
import platemate from "../assets/img/Recording 2025-07-31 at 22.14.23.gif"

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeTab, setActiveTab] = useState("first");

    const projects = [
        {
            title: "Shape Identifier AI",
            description: "Computer Vision Web App",
            imgUrl: projImg5,
            fullDescription: "Shape Identifier is a Javascript application using a React front end and Node js backend. The project is meant to identify any input shapes, connecting to a Microsoft Azure AI model trained on a dataset of 90,000 images."
        },
        {
            title: "Minesweeper",
            description: "Java Game",
            imgUrl: projImg2,
            fullDescription: "The classic Minesweeper game, but recreated in Java using the Javalib.Impworld library to render its functions. It is complete with a variable board size, for different level of difficulty."
        },
        {
            title: "LightEmUp",
            description: "Java Game",
            imgUrl: projImg1,
            fullDescription: "This puzzle game is all about manipulating wire tiles to allow your signal strength to cover the entire board. The project was completed using the Javalib.Impworld library and can procedurally generate new level designs at any board size."
        },
        {
            title: "Z Type",
            description: "Java Game",
            imgUrl: projImg3,
            fullDescription: "The retro title Z-Type was made using Java and the Javalib.Impworld library. It's a fast-paced typing game all about improving your sight-typing ability as groups of letters encroach on your screen with progressive intensity. The game is complete with score tracking to hone your skills."
        },
        {
            title: "Pacman DFS + BFS",
            description: "Python Algorithm",
            imgUrl: projImg4,
            fullDescription: "This implementation of Depth-First Search and Breadth-First Search algorithms was created to test different search heuristics such as the manhattan-distance formula, with the familiar exterior of a Pacman maze. Its main logic is written in python."
        },
        {
            title: "Q-Learning Algorithm",
            description: "MatPlot graph of Python implementation",
            imgUrl: projImg6,
            fullDescription: "Based of a 4x4 grid with different point values assigned to each box, and a start and end box, I wrote a python algorithm that ran Q-Learning within the problem space. The Graph shown is a matplotlib representation of the optimality of each square as determined by the algorithm over 10,000 successive attempts."
        }
    ];

    const films = [
        {
            title: "Screenagers",
            description: "Short Film",
            imgUrl: film,
            fullDescription: ""
        }
    ];

    const prototypes = [
        {
            title: "Radien",
            description: "Ticketing system",
            imgUrl: radien,
            link: "https://www.figma.com/design/6OkQ8JdI5pncQ84Mfa81vx/Radien-P3?node-id=8-9&t=ozx1o9Gs8hhRwXVl-0",
            fullDescription: "This project was done for Radien, a startup focused on supporting the work of software developers. We designed a ticketing system in Figma with separate interfaces for engineers and managers. Tickets are easily assigned and their progress is tracked at a variable number of stages, with calendar compatibility as well. "
        },
        {
            title: "MBTA App",
            description: "Figma Redesign",
            imgUrl: mbta,
            link: "https://www.figma.com/design/9tMt85XxEmdVAwrAOTFUuU/MBTA-project2?node-id=0-1&t=qSGogDiTCWCjLcaz-1",
            fullDescription: "The goal of this design was to centralize all interactions a Boston resident may have with the MBTA. This includes real-time updates, route planning, and ticket purchasing. This mockup was made in Figma, prioritizing ease of use, and not having to join multiple platforms to understand the public transportation system."
        },
        {
            title: "Dream Diary",
            description: "Sleep Wellness Prototype",
            imgUrl: diary,
            link: "https://www.figma.com/design/YG6QS7CL4va2JmqUAag7F3/all-pages?node-id=0-1&t=X2AagWCXZxBa7qlB-1",
            fullDescription: "Dream Diary is a sleep wellness application with the purpose of creating a zen resting environment. The figma design includes a dream journal, sleep analysis that connects with an apple watch or other health trackers, and a gameification portion all about collecting and dressing up your adorable sheep pets."
        },
        {
            title: "Platnm",
            description: "Social Music Reviewing Platform",
            imgUrl: platnm,
            link: "https://www.figma.com/design/mqxOE5LcS2grXfN5ME1LW3/My-platnm?node-id=0-1&t=pnxqEmF4j1OZQaWY-1",
            fullDescription: "Platnm is a social platform designed to foster music discovery and discussions among people, outside the influence of big publications. My contributions to the design included work on the customizable user profile page, the site map, the review flow, designing components, and creating the Platnm logo.",
        },
        {
            title: "Platemate",
            description: "Food Reviewing Platform",
            imgUrl: platemate,
            link: "",
            fullDescription: "Platemate is a restaurant-driven review platform with the capability for users to give their feedback on the portion, price, taste, and overall quality of food. My contributions to the project included an engaging feed page with information about your friends' ratings, and a visually interesting restaurant/dish pages",
            fullDescription: "A social platform for music enthusiasts to discover, review, and share their favorite tracks and albums. Currently in development, this project aims to create a community-driven space for music discovery with sophisticated rating systems and social features."
        }
    ];

    const handleProjectClick = (project, index, tab) => {
        if (selectedProject && selectedProject.index === index && selectedProject.tab === tab) {
            // Clicking the same project closes it
            setSelectedProject(null);
        } else {
            // Select new project
            setSelectedProject({ ...project, index, tab });
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSelectedProject(null); // Clear selection when switching tabs
    };

    const renderProjectCards = (projectList, tabKey) => {
        
        return (
            <div className="projects-container">
                {/* Selected project at top */}
                {selectedProject && selectedProject.tab === tabKey && (
                    <>
                        <Row className="justify-content-center mb-4">
                            <div 
                                className="selected-project-card"
                                onClick={() => handleProjectClick(selectedProject, selectedProject.index, tabKey)}
                            >
                                <ProjectCard 
                                    title={selectedProject.title} 
                                    description={selectedProject.description} 
                                    imgUrl={selectedProject.imgUrl}
                                />
                            </div>
                        </Row>
                        
                        {/* Description container */}
                        <Row className="justify-content-center mb-4">
                            <Col xs={12} md={8} lg={6}>
                                <div className="project-description-container">
                                    <p>{selectedProject.fullDescription}</p>
                                    {/* {selectedProject.link && (
                                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                            View Project
                                        </a>
                                    )} */}
                                </div>
                            </Col>
                        </Row>
                    </>
                )}

                {/* Regular project grid - exactly like your original */}
                {(!selectedProject || selectedProject.tab !== tabKey) && (
                    <Row>
                        {projectList.map((project, index) => (
                            <div 
                                key={index}
                                className="project-card-wrapper"
                                onClick={() => handleProjectClick(project, index, tabKey)}
                            >
                                <ProjectCard 
                                    title={project.title} 
                                    description={project.description} 
                                    imgUrl={project.imgUrl}
                                />
                            </div>
                        ))}
                    </Row>
                )}
            </div>
        );
    };

    return (
        <section className="project" id="projects">
            <div className="skill-bx3">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p> Click on one to learn more!</p>
                            <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
                                <Nav variant="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Web Apps</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">UI Designs</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Film</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        {renderProjectCards(projects, "first")}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        {renderProjectCards(prototypes, "second")}
                                    </Tab.Pane>
                                    
                                    <Tab.Pane eventKey="third">
                                        <Row className="justify-content-center">
                                            {films.map((film, index) => (
                                                <Col key={index} className="d-flex justify-content-center align-items-center">
                                                    <ProjectCard 
                                                        title={film.title} 
                                                        description={film.description} 
                                                        imgUrl={film.imgUrl}
                                                    />
                                                </Col>
                                            ))}
                                        </Row>
                                        <Row>
                                            <div className="project-description-container">
                                                <p>During the final months of 2023, I worked on a project to characterize my generation 
                                                    and the impact of social media on our lives. The result is the Short Film I wrote, 
                                                    directed, and edited called "Screenagers" about two clones fighting for recognition in their adolescent lives </p>
                                            </div>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};