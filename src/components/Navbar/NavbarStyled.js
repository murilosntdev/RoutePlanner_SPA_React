import styled from "styled-components";
import { SecBtn } from "../Button/ButtonStyled";

export const Nav = styled.nav`
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 10px 10px -8px ${props => props.theme.colors.background};
    display: flex;
    justify-content: space-between;
    padding: 1rem 4rem;
    position: fixed;
    top: 0;
    width: 100vw;

    ${SecBtn} {
        width: 8rem;
    }
`

export const ImgLogo = styled.img`
    cursor: pointer;
    object-fit: cover;
    width: 12rem;
`