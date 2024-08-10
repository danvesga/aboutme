//Daniel Vesga 8/4/24
import { useState, useEffect} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Pfp from '../assets/img/Pfp.jpg'
import LinkedIn from '../assets/img/nav-icon1.svg'
import Instagram from '../assets/img/nav-icon3.svg'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // define onScroll
    const onScroll = () => {
        if (window.scrollY > 40) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        
        // EventListener is fired only on scroll
        window.addEventListener("scroll", onScroll);

        // removes event when the component gets removed
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    // activates navBar links 
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Pfp} width={110} height={110} style={{ borderRadius: '50%' }} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                            <Nav.Link href="#art" className={activeLink === 'art' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActiveLink('art')}>Art</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/daniel-vesga-941294291/"><img src={LinkedIn} alt="yes" /></a>
                            <a href="https://www.instagram.com/danvesga/"><img src={Instagram} alt="yes" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>    
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};