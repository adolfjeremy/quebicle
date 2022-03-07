import React from "react";
import styled from "styled-components";

function ServiceItem({ image, heading, description }) {
    return (
        <Container>
            <ImgContainer>
                <img src={image} alt="resposive Design" />
            </ImgContainer>
            <TextContainer>
                <h3>{heading}</h3>
                <p>{description}</p>
            </TextContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 14px;
    margin: 0 15px;
    height: 300px;
    border-radius: 8px;
    background-color: #2f2f2f;
`;

const ImgContainer = styled.div`
    img {
        width: 80px;
    }
`;
const TextContainer = styled.div`
    text-align: left;
    p {
        font-size: 14px;
        line-height: 20px;
        font-weight: 300;
        color: #d2d2d2;
    }
`;

export default ServiceItem;
