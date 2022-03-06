import React, { useState } from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
    const [navbarStatus, setNavbarStatus] = useState(false);
    return (
        <Container>
            <AppName href="/">
                Queb<strong>icle</strong>
            </AppName>
            <NavBar show={navbarStatus}>
                <LinkContainer>
                    <Buttons isLink name="Home" pathDestination="/" />
                    <Buttons isLink name="Our Work" pathDestination="/" />
                    <Buttons isLink name="Blog" pathDestination="/" />
                </LinkContainer>
                <Buttons className="login_button" IsButton name="Login" />
            </NavBar>
            <HamburgerButton onClick={() => setNavbarStatus(!navbarStatus)}>
                {navbarStatus ? <CloseIcon /> : <MenuIcon />}
            </HamburgerButton>
        </Container>
    );
}
const Container = styled.header`
    padding: 10px 4%;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    @media (max-width: 1024px) {
        justify-content: space-between;
    }
`;

const AppName = styled.a`
    font-size: 30px;
    font-weight: 500;
    line-height: 52px;
    color: #fde03b;
    strong {
        color: #82ccef;
        font-weight: 500;
    }
`;

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 50px;
    width: 100%;
    @media (max-width: 1024px) {
        display: ${(props) => (props.show ? "flex" : "none")};
        justify-content: start;
        flex-direction: column;
        position: absolute;
        padding: 50px 4%;
        margin: 0;
        top: 0;
        right: 0;
        width: 50vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.9);
        transition: display 250ms ease-in-out;
        .login_button {
            margin: 25px 0 0 0;
            width: 100%;
        }
    }
`;

const LinkContainer = styled.div`
    display: flex;
    @media (max-width: 1024px) {
        flex-direction: column;
        width: 100%;
        a {
            display: block;
            margin: 25px 0 0 0;
        }
    }
`;

const HamburgerButton = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: #fff;
    position: relative;
    @media (min-width: 1025px) {
        display: none;
    }
`;

export default Header;
