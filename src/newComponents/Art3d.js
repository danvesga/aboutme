import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import art1 from "../assets/img/IMG_0678.jpg";
import art2 from "../assets/img/IMG_0677.jpg";
import art3 from "../assets/img/Untitled_Artwork.jpg";
import art4 from "../assets/img/circular.jpg";
import art5 from "../assets/img/Untitled_Artwork 4.jpg";
import art6 from "../assets/img/IMG_37D2BF08EF57-1.jpeg";
import art7 from "../assets/img/Silk-Road.jpg";
import art8 from "../assets/img/IMG_0679.jpg";
import art9 from "../assets/img/IMG_0680.jpg";
import art10 from "../assets/img/IMG_0681.jpg";
import art11 from "../assets/img/playground.jpg";
import { EyeFill } from "react-bootstrap-icons";


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
                                {[art1, art2, art3, art4, art5, art6, art7, art8, art9, art10, art11].map((art, index) => (
                                    <div className="item" key={index}>
                                        <img src={art} alt={`Artwork ${index + 1}`} />
                                    </div>
                                ))}
                            </Carousel>
                            <a className="link" href="https://www.instagram.com/deltavsn/"> See DeltaVision <EyeFill size={25} /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}