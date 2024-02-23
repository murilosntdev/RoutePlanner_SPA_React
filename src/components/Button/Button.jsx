import { SecBtn } from "./ButtonStyled";

export const SecondaryButton = ({ children, ...rest }) => {
    return <SecBtn {...rest}>{children}</SecBtn>
}