import { Inpt, InptLbl } from "./InputStyled";

export const FormInput = (props) => {
    return (
        <Inpt
            type={props.type}
            name={props.nameId}
            id={props.nameId}
            spellCheck={props.spellCheck}
            min={props.min}
            placeholder={props.placeholder}
            align={props.align}
            required={props.required}
            onChange={props.onChange}
            hasError={props.hasError}
        />
    )
}

export const InputLabel = ({ htmlFor, children }) => {
    return <InptLbl htmlFor={htmlFor}>{children}</InptLbl>
}