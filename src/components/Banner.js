import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/balloon.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [" UI/UX Designer", " Web Developer", "n Artist", " Student @ NEU"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150 - Math.random() * 50);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta]); // Add delta to the dependency array

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1.5);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hello! I'm Daniel Vesga. A"}<span className="wrap">{text}</span>
                            
                        </h1>
                        <p>As a combined Computer Science and Design student, 
                        I am motivated to create intuitive and memorable interfaces. 
                        I am an imaginative and detail-oriented worker, with a passion 
                        for the visual arts and storytelling. Through design and development, 
                        I want to influence a world where all our added technology and 
                        shortcuts bolster the active and social parts of our lives.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} width={300} height={300} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}