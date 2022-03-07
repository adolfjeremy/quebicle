import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceItem from "./ServiceItem";
import responsive from "./../assets/images/responsive.png";

function Offers() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Container>
            <Heading>
                <h2>Our Services</h2>
                <p>
                    We want to provide a user-friendly experience with the eyes
                    capture design and develop products quickly with the ability
                    to solve user problems
                </p>
            </Heading>
            <FeatureList {...settings}>
                <ServiceItem
                    image={responsive}
                    heading="Responsive"
                    description="A responsive web design automatically adjusts for different-sized screens and viewports. With a responsive website, someone can browse your website from any device and it will still look and function perfectly."
                />
                <ServiceItem
                    image={responsive}
                    heading="Custom Web Design"
                    description="Each client has a different business and unique character. For that we help create a website with a display that adapts to your character and needs."
                />
                <ServiceItem
                    image={responsive}
                    heading="Web Development"
                    description="Website design is not the only thing that is our main concern. We also ensure that your website is built in a good programming language with the latest technology and updates."
                />
                <ServiceItem
                    image={responsive}
                    heading="Three Months After Service"
                    description="We provide a three-months after service, to ensure there are no errors or bugs."
                />
                <ServiceItem
                    image={responsive}
                    heading="SEO"
                    description="A responsive web design automatically adjusts for different-sized screens and viewports. With a responsive website, someone can browse your website from any device and it will still look and function perfectly."
                />
            </FeatureList>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 4% 100px;
    color: #f7f7f7;
`;

const Heading = styled.div`
    margin-bottom: 40px;
    > p {
        width: 740px;
        color: #d2d2d2;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;
const FeatureList = styled(Slider)`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .slick-prev,
    .slick-next {
        top: 120%;
        width: 60px;
        height: 60px;
    }
    .slick-prev {
        left: 40%;
        @media (max-width: 480px) {
            left: 20%;
        }
        &::before {
            font-size: 60px;
        }
    }
    .slick-next {
        right: 40%;
        @media (max-width: 480px) {
            right: 20%;
        }
        &::before {
            font-size: 60px;
        }
    }
`;

export default Offers;
