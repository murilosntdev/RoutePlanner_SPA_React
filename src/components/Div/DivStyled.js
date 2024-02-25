import styled from "styled-components";
import { Inpt } from "../Input/InputStyled";

export const FldDv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;

    ${Inpt} {
        margin: 0.1rem 0;
    }
`