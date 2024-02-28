import styled, { keyframes } from "styled-components";

const fillAnimation = keyframes`
    0% { width: 0%; }
    100% { width: 95%; }
`

export const LdngBr = styled.div`
    animation: ${fillAnimation} 5s linear forwards;
    background-color: ${props => props.theme.colors.primary};
    bottom: 0;
    height: 0.5rem;
    left: 2.5%;
    position: absolute;
    width: 100%;
`