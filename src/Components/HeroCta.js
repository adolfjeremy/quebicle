import React from "react";
import styled from "styled-components";
import HeroImage from "./../assets/images/hero_image.png";
import Buttons from "./Buttons";

function HeroCta() {
    return (
        <Container>
            <CtaContainer>
                <h1>We Design Amazing Website For You.</h1>
                <p>
                    Hey. We are Quebicle, a professional UI/UX Designer and Web
                    Developer.
                </p>
                <Buttons IsButton name="Work With Us" className="cta" />
            </CtaContainer>
        </Container>
    );
}

const Container = styled.section`
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 0 4%;
    height: 100vh;
    background-image: url(${HeroImage});
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    @media (max-width: 1024px) {
        background-position: bottom left;
        height: 80vh;
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 0,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.8) 100%
        );
    }
`;

const CtaContainer = styled.div`
    position: relative;
    color: #fff;
    width: 370px;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    text-align: left;
    @media (max-width: 767px) {
        width: 100%;
    }

    h1 {
        font-size: 36px;
        line-height: 47px;
        font-weight: bold;
    }
    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #ccd6f6;
        margin-top: 0;
    }
    .cta {
        margin-top: 30px;
    }
`;

export default HeroCta;
