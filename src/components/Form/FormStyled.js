import styled from "styled-components";

export const Frm = styled.form`
    background-color: ${props => props.theme.colors.primary};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    margin: auto 2rem;
    padding: 1.5rem 1rem;
`

export const Lgnd = styled.legend`
    color: ${props => props.theme.colors.secondary};
    font-size: 1.5rem;
`

export const FldSt = styled.fieldset`
    border: none;
`