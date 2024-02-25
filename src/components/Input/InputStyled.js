import styled from "styled-components";

export const Inpt = styled.input`
    border: ${props => props.hasError ? `0.15rem solid ${props.theme.colors.danger}` : "none"};
    border-radius: 0.6rem;
    font-size: 1.4rem;
    height: 2.5rem;
    outline: none;
    padding: 0.5rem 1rem;

    &:focus {
        outline: 0.15rem solid ${props => props.theme.colors.secondary};
    }

    &[type=number]::-webkit-inner-spin-button,
    &[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export const InptLbl = styled.label`
    color: white;
`