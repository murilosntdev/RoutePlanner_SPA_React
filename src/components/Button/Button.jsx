import { LoadingCircle } from "../Loading/Loading";
import { SecBtn } from "./ButtonStyled";

export const SecondaryButton = ({ children, loading, ...rest }) => {
    return <SecBtn {...rest}>{loading === true ? <LoadingCircle /> : children}</SecBtn>
}