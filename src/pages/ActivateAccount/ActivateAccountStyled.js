import styled from "styled-components";

export const ActivateAccountPage = styled.div`
    background-color: ${props => props.theme.colors.background};
    display: grid;
    grid-template-rows: auto 1fr;
    height: auto;
    min-height: 100vh;
`

export const Main = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-around;
    padding: 7rem 2rem 2rem;
`

export const Text = styled.p`
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
`