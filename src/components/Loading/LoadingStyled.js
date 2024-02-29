import styled, { keyframes } from "styled-components";

const fillAnimation = keyframes`
    0% { width: 0%; }
    100% { width: 95%; }
`

const roundAnimation = keyframes`
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
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

export const LdngCrcl = styled.div`
    animation: ${roundAnimation} 1.5s linear infinite;
    border: 0.25rem solid ${props => props.theme.colors.primary};
    border-radius: 50%;
    border-top: 0.25rem solid ${props => props.theme.colors.secondary};
    height: 1.5rem;
    width: 1.5rem;
`