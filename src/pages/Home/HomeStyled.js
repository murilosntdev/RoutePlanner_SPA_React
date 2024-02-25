import styled from "styled-components";

export const HomePage = styled.div`
    background-color: ${props => props.theme.colors.background};
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
`

export const Main = styled.main`
    align-items: stretch;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem 2rem;
`

export const Text = styled.p`
    color: ${props => props.theme.colors.primary};
    font-size: 2rem;
    line-height: 2.5rem;
    margin: auto 2rem;
    text-align: justify;
`