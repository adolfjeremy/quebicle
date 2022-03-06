import React from "react";
import styled from "styled-components";

function Buttons({ isLink, IsButton, name, pathDestination, className }) {
    return (
        <>
            {IsButton && <Button className={className}>{name}</Button>}
            {isLink && (
                <Link className={className} href={pathDestination}>
                    {name}
                </Link>
            )}
        </>
    );
}

const Button = styled.a`
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    color: #000000;
    padding: 6px 20px;
    border-radius: 8px;
    border: none;
    background-color: #fde03b;
    cursor: pointer;
    &:hover {
        background-color: rgba(253, 224, 59, 0.9);
    }
`;
const Link = styled.a`
    font-size: 1rem;
    line-height: 24px;
    font-weight: 400;
    color: #fff;
    margin: 0 25px 0 0;
`;

export default Buttons;
