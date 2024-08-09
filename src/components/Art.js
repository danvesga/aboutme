import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import art1 from "../assets/img/IMG_0678.jpg";
import art2 from "../assets/img/IMG_0677.jpg";
import art3 from "../assets/img/Untitled_Artwork.jpg";
import art4 from "../assets/img/Untitled_Artwork 4.jpg";
import art5 from "../assets/img/IMG_37D2BF08EF57-1.jpeg";
import art6 from "../assets/img/Silk-Road.jpg";
import art7 from "../assets/img/IMG_0679.jpg";
import art8 from "../assets/img/IMG_0680.jpg";
import art9 from "../assets/img/IMG_0681.jpg";
import art10 from "../assets/img/playground.jpg";


export const Art = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="art" id="art">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Art</h2>
                            <p>6 years ago, I turned my lifelong passion for art into a business, selling designs, phone cases, and stickers. Here is some of my work</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={art1} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={art2} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={art3} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={art4} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={art5} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={art6} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={art7} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={art8} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={art10} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={art9} alt="Image" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={"your-background-image-url"} alt="background image" />
        </section>
    );
}