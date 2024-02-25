import { FldDv } from "./DivStyled";
import { FormInput, InputLabel } from "../Input/Input";
import { InputSpan } from "../Span/Span";

export const FormField = ({ nameId, lText, errorText, ...rest }) => {
    return (
        <FldDv>
            <InputLabel htmlFor={nameId}>{lText}</InputLabel>
            <FormInput nameId={nameId} {...rest} />
            <InputSpan>{errorText}</InputSpan>
        </FldDv>
    )
}